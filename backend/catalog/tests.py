from io import BytesIO
from unittest.mock import patch

from django.core.files.uploadedfile import SimpleUploadedFile
from django.db import IntegrityError
from django.urls import reverse
from PIL import Image
from rest_framework import status
from rest_framework.test import APITestCase

from accounts.models import User
from businesses.models import Business

from .models import CatalogItem, CatalogMedia, Category
from .serializers import CatalogItemWriteSerializer


class CatalogAPITests(APITestCase):
    """API-level coverage for ownership, catalogue validation and image media."""

    def setUp(self):
        self.user = User.objects.create_user("owner@example.com", "SecurePassword123!")
        self.other_user = User.objects.create_user("other@example.com", "SecurePassword123!")
        self.no_business_user = User.objects.create_user("none@example.com", "SecurePassword123!")
        self.business = Business.objects.create(owner=self.user, name="Owner Business")
        self.other_business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.category = Category.objects.create(business=self.business, name="Products")
        self.other_category = Category.objects.create(business=self.other_business, name="Private")
        self.list_url = reverse("catalog-item-list-create")
        self.categories_url = reverse("catalog-category-list-create")

    def authenticate(self, user=None):
        self.client.force_authenticate(user or self.user)

    def item_url(self, item):
        return reverse("catalog-item-detail", args=[item.pk])

    def category_url(self, category):
        return reverse("catalog-category-detail", args=[category.pk])

    def media_url(self, item):
        return reverse("catalog-media-list-create", args=[item.pk])

    def media_detail_url(self, item, media):
        return reverse("catalog-media-detail", args=[item.pk, media.pk])

    def payload(self, **overrides):
        value = {
            "category_id": self.category.pk,
            "name": "  Kenyan Coffee  ",
            "item_type": "product",
            "description": "  Freshly roasted beans.  ",
            "price": "500.00",
            "currency": "KES",
            "sku": " coffee-1 ",
            "tags": [" Coffee ", "coffee", "Local"],
            "faq_items": [" Is it fresh? "],
        }
        value.update(overrides)
        return value

    def create_item(self, business=None, category=None, **overrides):
        data = {
            "business": business or self.business,
            "category": category or self.category,
            "name": "Coffee",
            "item_type": CatalogItem.ItemType.PRODUCT,
            "description": "Fresh coffee",
            "price": "500.00",
            "currency": CatalogItem.Currency.KES,
        }
        data.update(overrides)
        return CatalogItem.objects.create(**data)

    def image_upload(self, name="photo.png"):
        output = BytesIO()
        Image.new("RGB", (2, 2), "blue").save(output, format="PNG")
        return SimpleUploadedFile(name, output.getvalue(), content_type="image/png")

    def assert_validation_error(self, response, field):
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn(field, response.data["errors"])

    def test_unauthenticated_catalog_category_and_media_operations_are_rejected(self):
        item = self.create_item()
        media = CatalogMedia.objects.create(catalog_item=item, file=self.image_upload(), original_name="photo.png", mime_type="image/png")
        requests = [
            ("get", self.list_url, None), ("post", self.list_url, self.payload()),
            ("get", self.item_url(item), None), ("patch", self.item_url(item), {"name": "Changed"}), ("delete", self.item_url(item), None),
            ("get", self.categories_url, None), ("post", self.categories_url, {"name": "New"}),
            ("patch", self.category_url(self.category), {"name": "Changed"}), ("delete", self.category_url(self.category), None),
            ("get", self.media_url(item), None), ("post", self.media_url(item), {"file": self.image_upload()}),
            ("patch", self.media_detail_url(item, media), {"alt_text": "Changed"}), ("delete", self.media_detail_url(item, media), None),
        ]
        for method, url, data in requests:
            with self.subTest(method=method, url=url):
                response = getattr(self.client, method)(url, data, format="multipart" if "file" in (data or {}) else "json") if data is not None else getattr(self.client, method)(url)
                self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_item_ownership_isolation_and_protected_ownership_fields(self):
        own = self.create_item()
        other = self.create_item(business=self.other_business, category=self.other_category, name="Private", sku="PRIVATE")
        self.authenticate()
        self.assertEqual([row["id"] for row in self.client.get(self.list_url).data], [own.pk])
        for method, data in (("get", None), ("patch", {"name": "No"}), ("delete", None)):
            response = getattr(self.client, method)(self.item_url(other), data, format="json") if data else getattr(self.client, method)(self.item_url(other))
            self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        for field in ("business", "business_id", "owner", "owner_id", "user_id"):
            response = self.client.post(self.list_url, {**self.payload(name="One"), field: self.other_business.pk}, format="json")
            self.assert_validation_error(response, field)
        response = self.client.post(self.list_url, self.payload(), format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        item = CatalogItem.objects.get(pk=response.data["catalog_item"]["id"])
        self.assertEqual(item.business, self.business)
        self.assertNotIn("business", response.data["catalog_item"])
        self.assertEqual(self.client.get(self.list_url, {"search": "Private"}).data, [])

    def test_category_crud_case_insensitive_uniqueness_and_isolation(self):
        self.authenticate()
        created = self.client.post(self.categories_url, {"name": "  Salon  "}, format="json")
        self.assertEqual(created.status_code, status.HTTP_201_CREATED)
        category = Category.objects.get(pk=created.data["category"]["id"])
        self.assertEqual(category.name, "Salon")
        self.assert_validation_error(self.client.post(self.categories_url, {"name": " salon "}, format="json"), "name")
        self.assert_validation_error(self.client.post(self.categories_url, {"name": "   "}, format="json"), "name")
        self.assertEqual(self.client.patch(self.category_url(category), {"name": "Beauty"}, format="json").status_code, status.HTTP_200_OK)
        self.assertEqual(self.client.delete(self.category_url(category)).status_code, status.HTTP_200_OK)
        # The same case-insensitive name is already present in each business.
        Category.objects.create(business=self.other_business, name="Products")
        used = self.create_item()
        response = self.client.delete(self.category_url(self.category))
        self.assertEqual(response.status_code, status.HTTP_409_CONFLICT)
        self.assertTrue(CatalogItem.objects.filter(pk=used.pk).exists())
        self.assertEqual(self.client.patch(self.category_url(self.other_category), {"name": "No"}, format="json").status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(self.client.delete(self.category_url(self.other_category)).status_code, status.HTTP_404_NOT_FOUND)

    def test_item_required_choices_category_and_sku_validation(self):
        self.authenticate()
        for payload, field in (
            ({key: value for key, value in self.payload().items() if key != "name"}, "name"),
            (self.payload(name="  "), "name"),
            (self.payload(description=" "), "description"),
            ({key: value for key, value in self.payload().items() if key != "price"}, "price"),
            (self.payload(item_type="bundle"), "item_type"), (self.payload(currency="TZS"), "currency"),
            (self.payload(price="-1"), "price"), (self.payload(category_id=self.other_category.pk), "category_id"),
        ):
            with self.subTest(field=field):
                self.assert_validation_error(self.client.post(self.list_url, payload, format="json"), field)
        response = self.client.post(self.list_url, self.payload(), format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        item = CatalogItem.objects.get(pk=response.data["catalog_item"]["id"])
        self.assertEqual((item.name, item.description, item.sku, item.tags, item.faq_items), ("Kenyan Coffee", "Freshly roasted beans.", "COFFEE-1", ["Coffee", "Local"], ["Is it fresh?"]))
        self.assert_validation_error(self.client.post(self.list_url, self.payload(name="Other"), format="json"), "sku")
        self.client.force_authenticate(self.other_user)
        response = self.client.post(self.list_url, {**self.payload(category_id=self.other_category.pk), "name": "Other"}, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)

    def test_item_update_inventory_service_fields_lists_and_stock_status(self):
        self.authenticate()
        item = self.create_item(current_stock=2, low_stock_threshold=2, sku="ONE")
        detail = self.client.get(self.item_url(item)).data
        self.assertEqual(detail["stock_status"], "low_stock")
        item.current_stock = 0
        item.save()
        self.assertEqual(self.client.get(self.item_url(item)).data["stock_status"], "out_of_stock")
        item.current_stock = 3
        item.save()
        self.assertEqual(self.client.get(self.item_url(item)).data["stock_status"], "in_stock")
        self.assertEqual(self.client.patch(self.item_url(item), {"current_stock": 4, "warehouse_location": " A1 "}, format="json").status_code, status.HTTP_200_OK)
        for item_type in ("service", "subscription", "digital_product", "membership"):
            response = self.client.post(self.list_url, self.payload(name=item_type, sku=item_type, item_type=item_type, current_stock=1), format="json")
            self.assert_validation_error(response, "current_stock")
        for item_type in ("product", "digital_product"):
            response = self.client.post(self.list_url, self.payload(name=f"appointment {item_type}", sku=f"A{item_type}", item_type=item_type, appointment_required=True), format="json")
            self.assert_validation_error(response, "appointment_required")
        for item_type in ("service", "subscription", "membership"):
            response = self.client.post(self.list_url, self.payload(name=f"service {item_type}", sku=f"S{item_type}", item_type=item_type, appointment_required=True, service_duration_minutes=30), format="json")
            self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assert_validation_error(self.client.post(self.list_url, self.payload(name="zero duration", sku="ZERO", item_type="service", service_duration_minutes=0), format="json"), "service_duration_minutes")
        self.assert_validation_error(self.client.patch(self.item_url(item), {"current_stock": -1}, format="json"), "current_stock")
        self.assert_validation_error(self.client.patch(self.item_url(item), {"low_stock_threshold": -1}, format="json"), "low_stock_threshold")
        self.assert_validation_error(self.client.patch(self.item_url(item), {"tags": {"wrong": "shape"}}, format="json"), "tags")
        self.assert_validation_error(self.client.patch(self.item_url(item), {"faq_items": [" "]}, format="json"), "faq_items")
        response = self.client.patch(self.item_url(item), {"item_type": "service", "appointment_required": True, "service_duration_minutes": 45}, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        item.refresh_from_db()
        self.assertIsNone(item.current_stock)
        self.assertEqual(item.warehouse_location, "")

    def test_search_filters_readiness_and_business_scope(self):
        named = self.create_item(name="Hair Care", sku="HAIR", description="Nairobi styling", tags=["salon"], current_stock=1, low_stock_threshold=2)
        incomplete = self.create_item(name="Incomplete", sku="INCOMPLETE", description="Complete")
        ready = self.create_item(name="Ready", sku="READY", description="Complete", current_stock=5, low_stock_threshold=1, faq_items=["FAQ"])
        self.create_item(business=self.other_business, category=self.other_category, name="Private Search", sku="SECRET", description="Secret", tags=["hidden"])
        self.authenticate()
        for term, expected in (("Hair", [named.pk]), ("Products", [ready.pk, incomplete.pk, named.pk]), ("HAIR", [named.pk]), ("Nairobi", [named.pk]), ("salon", [named.pk])):
            with self.subTest(term=term):
                self.assertEqual([row["id"] for row in self.client.get(self.list_url, {"search": term}).data], expected)
        self.assertEqual([row["id"] for row in self.client.get(self.list_url, {"item_type": "product", "low_stock": "true"}).data], [named.pk])
        readiness = self.client.get(self.list_url, {"readiness": "needs_information"})
        self.assertIn(incomplete.pk, [row["id"] for row in readiness.data])
        self.assertEqual(self.client.get(self.list_url, {"search": "Secret"}).data, [])
        for params, field in (({"item_type": "bad"}, "item_type"), ({"low_stock": "yes"}, "low_stock"), ({"readiness": "ready"}, "readiness")):
            self.assert_validation_error(self.client.get(self.list_url, params), field)

    def test_media_validation_metadata_thumbnail_isolation_and_deletion(self):
        item = self.create_item()
        other_item = self.create_item(business=self.other_business, category=self.other_category, name="Other", sku="OTHER")
        self.authenticate()
        response = self.client.post(self.media_url(item), {"file": self.image_upload(), "alt_text": " Coffee ", "is_thumbnail": True}, format="multipart")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        first = CatalogMedia.objects.get(pk=response.data["media"]["id"])
        self.assertEqual((first.alt_text, first.mime_type), ("Coffee", "image/png"))
        response = self.client.post(self.media_url(item), {"file": self.image_upload("second.png"), "is_thumbnail": True}, format="multipart")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        second = CatalogMedia.objects.get(pk=response.data["media"]["id"])
        first.refresh_from_db()
        self.assertFalse(first.is_thumbnail)
        self.assertTrue(second.is_thumbnail)
        self.assert_validation_error(self.client.post(self.media_url(item), {"file": SimpleUploadedFile("fake.jpg", b"not an image", content_type="image/jpeg")}, format="multipart"), "file")
        self.assert_validation_error(self.client.post(self.media_url(item), {"file": SimpleUploadedFile("large.png", b"x" * (5 * 1024 * 1024 + 1), content_type="image/png")}, format="multipart"), "file")
        response = self.client.patch(self.media_detail_url(item, second), {"alt_text": " Updated ", "is_thumbnail": True}, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["media"]["alt_text"], "Updated")
        self.assertEqual(self.client.get(self.media_url(other_item)).status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(self.client.patch(self.media_detail_url(other_item, second), {"alt_text": "No"}, format="json").status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(self.client.delete(self.media_detail_url(other_item, second)).status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(self.client.delete(self.media_detail_url(item, second)).status_code, status.HTTP_200_OK)
        self.assertFalse(CatalogMedia.objects.filter(pk=second.pk).exists())

    def test_integrity_error_and_no_business_user_are_safe(self):
        existing = self.create_item(sku="RACE")
        self.authenticate()
        with patch.object(CatalogItemWriteSerializer, "save", side_effect=IntegrityError):
            response = self.client.post(self.list_url, self.payload(name="Race", sku="RACE"), format="json")
        self.assert_validation_error(response, "sku")
        self.assertTrue(CatalogItem.objects.filter(pk=existing.pk).exists())
        self.authenticate(self.no_business_user)
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data["detail"], "Business not found.")
