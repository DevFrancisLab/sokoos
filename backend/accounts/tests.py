from io import BytesIO
from tempfile import TemporaryDirectory

from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import SimpleTestCase
from PIL import Image

from .models import User


class AvatarProcessingTests(SimpleTestCase):
    def test_new_avatar_is_center_cropped_to_a_512_pixel_square(self):
        source = BytesIO()
        Image.new("RGB", (1200, 400), "red").save(source, format="JPEG")
        avatar = SimpleUploadedFile("wide-photo.jpg", source.getvalue(), content_type="image/jpeg")

        with TemporaryDirectory() as media_root, self.settings(MEDIA_ROOT=media_root):
            user = User(email="person@example.com", avatar=avatar)
            user._resize_avatar()

            with Image.open(user.avatar.path) as processed:
                self.assertEqual(processed.size, (512, 512))
                self.assertEqual(processed.format, "JPEG")
            self.assertTrue(user.avatar.name.startswith("avatar/"))
