from io import BytesIO
from unittest.mock import patch

from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import SimpleTestCase
from PIL import Image

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

# Create your tests here.
