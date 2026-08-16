from io import BytesIO
from unittest.mock import patch

from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import SimpleTestCase, TestCase
from django.urls import reverse
from PIL import Image
from rest_framework.test import APIClient

from accounts.models import User

from .serializers import UserProfileSerializer


class UserProfileSerializerTests(SimpleTestCase):
    def test_profile_fields_are_applied_to_the_authenticated_user(self):
        user = User(email="person@example.com", first_name="Before", last_name="Name")
        serializer = UserProfileSerializer(
            user,
            data={"first_name": "After", "last_name": "Update"},
            partial=True,
        )

        self.assertTrue(serializer.is_valid(), serializer.errors)
        with patch.object(User, "save") as save:
            serializer.save()

        self.assertEqual(user.first_name, "After")
        self.assertEqual(user.last_name, "Update")
        save.assert_called_once()

    def test_avatar_larger_than_five_megabytes_is_rejected(self):
        source = BytesIO()
        Image.new("RGB", (20, 20), "red").save(source, format="JPEG")
        oversized_avatar = SimpleUploadedFile(
            "avatar.jpg",
            source.getvalue() + (b"0" * (5 * 1024 * 1024)),
            content_type="image/jpeg",
        )
        serializer = UserProfileSerializer(User(email="person@example.com"), data={"avatar": oversized_avatar}, partial=True)

        self.assertFalse(serializer.is_valid())
        self.assertIn("avatar", serializer.errors)


class SignupEmailTests(TestCase):
    def test_successful_signup_sends_a_welcome_email(self):
        client = APIClient()

        with patch("authentication.views.send_mail") as send_mail:
            with self.captureOnCommitCallbacks(execute=True):
                response = client.post(
                    reverse("signup"),
                    {
                        "email": "new.user@example.com",
                        "password": "SecurePassword123!",
                        "first_name": "New",
                        "last_name": "User",
                    },
                    format="json",
                )

        self.assertEqual(response.status_code, 201)
        send_mail.assert_called_once_with(
            subject="Welcome to Sokoos",
            message=(
                "Hi New,\n\n"
                "Welcome to Sokoos. Your account has been created successfully."
            ),
            from_email=None,
            recipient_list=["new.user@example.com"],
            fail_silently=False,
        )

# Create your tests here.
