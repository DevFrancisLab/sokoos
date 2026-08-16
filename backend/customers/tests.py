from unittest.mock import patch

from django.db import IntegrityError, transaction
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from accounts.models import User
from businesses.models import Business

from .models import Customer


class CustomerAPITests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user("owner@example.com", "SecurePassword123!")
        self.other_user = User.objects.create_user("other@example.com", "SecurePassword123!")
        self.no_business_user = User.objects.create_user("none@example.com", "SecurePassword123!")
        self.business = Business.objects.create(owner=self.user, name="Owner Business")
        self.other_business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.list_url = reverse("customer-list-create")
        self.payload = {
            "name": "Aisha Mwangi",
            "phone": "+254 712 345 678",
            "email": "aisha@example.com",
            "company": "Aisha Stores",
            "location": "Nairobi",
            "notes": "Requested a quote.",
            "relationship": "lead",
            "lead_status": "warm",
            "source": "manual",
        }

    def authenticate(self, user=None):
        self.client.force_authenticate(user or self.user)

    def create_customer(self, business=None, **overrides):
        data = {**self.payload, **overrides}
        return Customer.objects.create(business=business or self.business, **data)

    def detail_url(self, customer):
        return reverse("customer-detail", args=[customer.pk])

    def assert_validation_error(self, response, field):
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn(field, response.data["errors"])

    def test_unauthenticated_requests_are_rejected(self):
        customer = self.create_customer()
        self.assertEqual(self.client.get(self.list_url).status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.post(self.list_url, self.payload, format="json").status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.get(self.detail_url(customer)).status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.patch(self.detail_url(customer), {"name": "Changed"}, format="json").status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.delete(self.detail_url(customer)).status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_assigns_authenticated_users_business_and_returns_customer(self):
        self.authenticate()
        response = self.client.post(self.list_url, self.payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        customer = Customer.objects.get()
        self.assertEqual(customer.business, self.business)
        self.assertTrue(response.data["success"])
        self.assertEqual(response.data["customer"]["id"], customer.pk)
        self.assertNotIn("business", response.data["customer"])

    def test_list_retrieve_update_and_delete_are_business_scoped(self):
        own = self.create_customer()
        other = self.create_customer(
            business=self.other_business,
            name="Other Person",
            phone="+254 700 000 000",
            email="other.person@example.com",
        )
        self.authenticate()

        list_response = self.client.get(self.list_url)
        self.assertEqual(list_response.status_code, status.HTTP_200_OK)
        self.assertEqual([item["id"] for item in list_response.data], [own.pk])
        self.assertEqual(self.client.get(self.detail_url(own)).status_code, status.HTTP_200_OK)

        update_response = self.client.patch(self.detail_url(own), {"name": "Updated"}, format="json")
        self.assertEqual(update_response.status_code, status.HTTP_200_OK)
        own.refresh_from_db()
        self.assertEqual(own.name, "Updated")

        for method, payload in (("get", None), ("patch", {"name": "Nope"}), ("delete", None)):
            response = getattr(self.client, method)(self.detail_url(other), payload, format="json") if payload else getattr(self.client, method)(self.detail_url(other))
            self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        other.refresh_from_db()
        self.assertEqual(other.name, "Other Person")

        delete_response = self.client.delete(self.detail_url(own))
        self.assertEqual(delete_response.status_code, status.HTTP_200_OK)
        self.assertFalse(Customer.objects.filter(pk=own.pk).exists())

    def test_protected_ownership_fields_are_rejected_on_create_and_patch(self):
        self.authenticate()
        for field in ("business", "business_id", "owner", "owner_id", "user_id"):
            with self.subTest(field=field):
                response = self.client.post(self.list_url, {**self.payload, field: self.other_business.pk}, format="json")
                self.assert_validation_error(response, field)
        self.assertFalse(Customer.objects.exists())

        customer = self.create_customer()
        response = self.client.patch(self.detail_url(customer), {"business_id": self.other_business.pk}, format="json")
        self.assert_validation_error(response, "business_id")
        customer.refresh_from_db()
        self.assertEqual(customer.business, self.business)

    def test_required_choice_and_lead_state_validation(self):
        self.authenticate()
        cases = [
            ({key: value for key, value in self.payload.items() if key != "name"}, "name"),
            ({**self.payload, "name": "   "}, "name"),
            ({**self.payload, "email": "not-an-email"}, "email"),
            ({**self.payload, "relationship": "prospect"}, "relationship"),
            ({**self.payload, "lead_status": "qualified"}, "lead_status"),
            ({**self.payload, "source": "facebook"}, "source"),
            ({**self.payload, "relationship": "contact", "lead_status": "hot"}, "lead_status"),
            ({**self.payload, "relationship": "customer", "lead_status": "hot"}, "lead_status"),
        ]
        for payload, field in cases:
            with self.subTest(field=field, payload=payload):
                self.assert_validation_error(self.client.post(self.list_url, payload, format="json"), field)

    def test_lead_without_status_defaults_to_new_and_transition_clears_status(self):
        self.authenticate()
        payload = {key: value for key, value in self.payload.items() if key != "lead_status"}
        response = self.client.post(self.list_url, payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        customer = Customer.objects.get()
        self.assertEqual(customer.lead_status, Customer.LeadStatus.NEW)

        response = self.client.patch(self.detail_url(customer), {"relationship": "customer"}, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        customer.refresh_from_db()
        self.assertEqual(customer.lead_status, "")

    def test_text_fields_are_normalized(self):
        self.authenticate()
        response = self.client.post(
            self.list_url,
            {
                **self.payload,
                "name": "  Aisha Mwangi  ",
                "phone": "  +254 712 345 678  ",
                "email": "  AISHA@EXAMPLE.COM  ",
                "company": "  Aisha Stores  ",
                "location": "  Nairobi  ",
                "notes": "  Requested a quote.  ",
            },
            format="json",
        )
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        customer = Customer.objects.get()
        self.assertEqual(customer.name, "Aisha Mwangi")
        self.assertEqual(customer.phone, "+254 712 345 678")
        self.assertEqual(customer.email, "aisha@example.com")
        self.assertEqual(customer.company, "Aisha Stores")
        self.assertEqual(customer.location, "Nairobi")
        self.assertEqual(customer.notes, "Requested a quote.")

    def test_duplicates_are_rejected_per_business_without_modifying_existing_data(self):
        existing = self.create_customer()
        self.authenticate()
        phone_response = self.client.post(
            self.list_url,
            {**self.payload, "name": "Phone Duplicate", "email": "different@example.com"},
            format="json",
        )
        self.assert_validation_error(phone_response, "phone")
        email_response = self.client.post(
            self.list_url,
            {**self.payload, "name": "Email Duplicate", "phone": "+254 799 000 000"},
            format="json",
        )
        self.assert_validation_error(email_response, "email")
        existing.refresh_from_db()
        self.assertEqual(existing.name, "Aisha Mwangi")
        self.assertEqual(Customer.objects.filter(business=self.business).count(), 1)

    def test_duplicates_are_allowed_in_a_different_business(self):
        self.create_customer()
        self.authenticate(self.other_user)
        response = self.client.post(self.list_url, self.payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(Customer.objects.get(business=self.other_business).email, "aisha@example.com")

    def test_search_is_case_insensitive_and_never_leaks_another_business(self):
        own = self.create_customer()
        self.create_customer(
            business=self.other_business,
            name="Private Match",
            phone="+254 700 123 999",
            email="private@example.com",
            company="Private Co",
            location="Hidden Place",
            notes="Secret record",
        )
        self.authenticate()
        for term in ("aisha", own.phone, own.email.upper(), "stores", "nairobi", "quote", "LEAD", "WARM", "MANUAL"):
            with self.subTest(term=term):
                response = self.client.get(self.list_url, {"search": term})
                self.assertEqual(response.status_code, status.HTTP_200_OK)
                self.assertEqual([item["id"] for item in response.data], [own.pk])
        response = self.client.get(self.list_url, {"search": "private"})
        self.assertEqual(response.data, [])

    def test_filters_and_ordering_are_validated_and_applied(self):
        first = self.create_customer(name="Zulu", phone="1", email="z@example.com", relationship="contact", lead_status="", source="website")
        second = self.create_customer(name="Alpha", phone="2", email="a@example.com", relationship="lead", lead_status="hot", source="whatsapp")
        self.authenticate()

        self.assertEqual([item["id"] for item in self.client.get(self.list_url, {"relationship": "lead"}).data], [second.pk])
        self.assertEqual([item["id"] for item in self.client.get(self.list_url, {"lead_status": "hot"}).data], [second.pk])
        self.assertEqual([item["id"] for item in self.client.get(self.list_url, {"source": "website"}).data], [first.pk])
        for field, value in (("relationship", "invalid"), ("lead_status", "invalid"), ("source", "invalid"), ("ordering", "phone")):
            with self.subTest(field=field):
                self.assert_validation_error(self.client.get(self.list_url, {field: value}), field)

        self.assertEqual([item["name"] for item in self.client.get(self.list_url, {"ordering": "name"}).data], ["Alpha", "Zulu"])
        self.assertEqual([item["name"] for item in self.client.get(self.list_url, {"ordering": "-name"}).data], ["Zulu", "Alpha"])
        self.assertEqual([item["name"] for item in self.client.get(self.list_url, {"ordering": "relationship"}).data], ["Zulu", "Alpha"])
        self.assertEqual([item["name"] for item in self.client.get(self.list_url, {"ordering": "-relationship"}).data], ["Alpha", "Zulu"])
        self.assertEqual(len(self.client.get(self.list_url, {"ordering": "created_at"}).data), 2)
        self.assertEqual(len(self.client.get(self.list_url, {"ordering": "-created_at"}).data), 2)
        self.assertEqual(len(self.client.get(self.list_url, {"ordering": "updated_at"}).data), 2)
        self.assertEqual(len(self.client.get(self.list_url, {"ordering": "-updated_at"}).data), 2)

    def test_user_without_business_receives_not_found(self):
        self.authenticate(self.no_business_user)
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data["detail"], "Business not found.")

    def test_database_constraints_prevent_duplicates(self):
        existing = self.create_customer()
        with self.assertRaises(IntegrityError):
            with transaction.atomic():
                Customer.objects.create(
                    business=self.business,
                    name="Database Duplicate",
                    phone=existing.phone,
                    email="another@example.com",
                )

    def test_integrity_error_during_save_returns_controlled_validation_response(self):
        self.authenticate()
        with patch("customers.views.CustomerSerializer.save", side_effect=IntegrityError):
            response = self.client.post(self.list_url, self.payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertFalse(response.data["success"])
        self.assertIn("non_field_errors", response.data["errors"])
