from io import BytesIO

from django.core.files.uploadedfile import SimpleUploadedFile
from django.urls import reverse
from PIL import Image
from rest_framework import status
from rest_framework.test import APITestCase

from accounts.models import User

from .models import Business


class CurrentBusinessViewTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="owner@example.com",
            password="SecurePassword123!",
        )
        self.other_user = User.objects.create_user(
            email="other@example.com",
            password="SecurePassword123!",
        )
        self.url = reverse("current-business")
        self.payload = {
            "name": "Sokoos Internet",
            "description": "Reliable connectivity for local businesses.",
            "phone": "+254 20 3949 0101",
            "email": "support@sokoos.example",
            "location": "Nairobi, Kenya",
        }

    def authenticate(self, user=None):
        self.client.force_authenticate(user=user or self.user)

    def create_business(self, **overrides):
        return Business.objects.create(owner=self.user, **{**self.payload, **overrides})

    def test_authenticated_user_can_create_a_business_owned_by_request_user(self):
        self.authenticate()

        response = self.client.post(self.url, self.payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        business = Business.objects.get()
        self.assertEqual(business.owner, self.user)
        self.assertEqual(business.name, self.payload["name"])
        self.assertTrue(business.is_active)

    def test_client_cannot_assign_another_user_as_owner(self):
        self.authenticate()

        for field in ("owner", "owner_id", "user_id"):
            with self.subTest(field=field):
                response = self.client.post(
                    self.url,
                    {**self.payload, field: self.other_user.id},
                    format="json",
                )

                self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
                self.assertIn(field, response.data["errors"])
                self.assertFalse(Business.objects.exists())

    def test_authenticated_user_can_retrieve_their_business(self):
        business = self.create_business()
        self.authenticate()

        response = self.client.get(self.url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["id"], business.id)
        self.assertNotIn("owner", response.data)

    def test_user_without_business_receives_not_found(self):
        self.authenticate()

        response = self.client.get(self.url)

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_authenticated_user_can_update_their_business(self):
        business = self.create_business()
        self.authenticate()

        response = self.client.patch(
            self.url,
            {"name": "Sokoos Fibre", "location": "Westlands, Nairobi"},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        business.refresh_from_db()
        self.assertEqual(business.name, "Sokoos Fibre")
        self.assertEqual(business.location, "Westlands, Nairobi")

    def test_owner_and_active_state_cannot_be_changed(self):
        business = self.create_business()
        self.authenticate()

        response = self.client.patch(
            self.url,
            {"owner": self.other_user.id, "is_active": False},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        business.refresh_from_db()
        self.assertEqual(business.owner, self.user)
        self.assertTrue(business.is_active)

    def test_unauthenticated_requests_are_rejected(self):
        self.assertEqual(self.client.get(self.url).status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.post(self.url, self.payload, format="json").status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.patch(self.url, {"name": "Changed"}, format="json").status_code, status.HTTP_401_UNAUTHORIZED)

    def test_user_cannot_retrieve_or_modify_another_users_business(self):
        other_business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.authenticate(self.user)

        get_response = self.client.get(self.url)
        patch_response = self.client.patch(self.url, {"name": "Attempted change"}, format="json")

        self.assertEqual(get_response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(patch_response.status_code, status.HTTP_404_NOT_FOUND)
        other_business.refresh_from_db()
        self.assertEqual(other_business.name, "Other Business")

    def test_no_arbitrary_business_lookup_endpoint_exists(self):
        business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.authenticate(self.user)

        response = self.client.get(f"/api/business/{business.id}/")

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_duplicate_business_creation_returns_conflict_and_does_not_create_another_row(self):
        self.create_business()
        self.authenticate()

        response = self.client.post(self.url, self.payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_409_CONFLICT)
        self.assertEqual(Business.objects.filter(owner=self.user).count(), 1)

    def test_blank_name_and_invalid_email_are_rejected(self):
        self.authenticate()

        blank_name_response = self.client.post(self.url, {**self.payload, "name": "   "}, format="json")
        invalid_email_response = self.client.post(self.url, {**self.payload, "email": "not-an-email"}, format="json")

        self.assertEqual(blank_name_response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("name", blank_name_response.data["errors"])
        self.assertEqual(invalid_email_response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("email", invalid_email_response.data["errors"])

    def test_oversized_and_invalid_logo_inputs_are_rejected(self):
        self.authenticate()
        source = BytesIO()
        Image.new("RGB", (20, 20), "green").save(source, format="JPEG")
        oversized_logo = SimpleUploadedFile(
            "logo.jpg",
            source.getvalue() + (b"0" * (5 * 1024 * 1024)),
            content_type="image/jpeg",
        )

        oversized_response = self.client.post(
            self.url,
            {**self.payload, "logo": oversized_logo},
            format="multipart",
        )
        invalid_logo = SimpleUploadedFile("logo.txt", b"not an image", content_type="text/plain")
        invalid_response = self.client.post(
            self.url,
            {**self.payload, "logo": invalid_logo},
            format="multipart",
        )

        self.assertEqual(oversized_response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("logo", oversized_response.data["errors"])
        self.assertEqual(invalid_response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("logo", invalid_response.data["errors"])
