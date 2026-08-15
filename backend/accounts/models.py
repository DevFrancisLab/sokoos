from io import BytesIO

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.core.files.base import ContentFile
from django.db import models
from PIL import Image, ImageOps


AVATAR_SIZE = (512, 512)


class UserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError("Users must have an email address.")

        email = self.normalize_email(email)

        user = self.model(
            email=email,
            **extra_fields,
        )

        user.set_password(password)
        user.save(using=self._db)

        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault("is_staff", True)
        extra_fields.setdefault("is_superuser", True)
        extra_fields.setdefault("is_active", True)
        extra_fields.setdefault("is_verified", True)

        if extra_fields.get("is_staff") is not True:
            raise ValueError("Superuser must have is_staff=True.")

        if extra_fields.get("is_superuser") is not True:
            raise ValueError("Superuser must have is_superuser=True.")

        return self.create_user(
            email=email,
            password=password,
            **extra_fields,
        )


class User(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        unique=True,
        db_index=True,
    )

    first_name = models.CharField(
        max_length=150,
        blank=True,
    )

    last_name = models.CharField(
        max_length=150,
        blank=True,
    )

    avatar = models.ImageField(
        upload_to="avatar/",
        blank=True,
        null=True,
    )

    is_active = models.BooleanField(
        default=True,
    )

    is_staff = models.BooleanField(
        default=False,
    )

    is_verified = models.BooleanField(
        default=False,
    )

    date_joined = models.DateTimeField(
        auto_now_add=True,
    )

    updated_at = models.DateTimeField(
        auto_now=True,
    )

    objects = UserManager()

    USERNAME_FIELD = "email"

    REQUIRED_FIELDS = []

    def save(self, *args, **kwargs):
        """Store newly uploaded avatars as consistently sized, web-ready images."""
        if self.avatar and not self.avatar._committed:
            self._resize_avatar()
        super().save(*args, **kwargs)

    def _resize_avatar(self):
        with Image.open(self.avatar) as source:
            image = ImageOps.exif_transpose(source)
            has_transparency = image.mode in {"RGBA", "LA"} or "transparency" in image.info

            if has_transparency:
                image = image.convert("RGBA")
                image_format, extension, save_kwargs = "PNG", ".png", {"optimize": True}
            else:
                image = image.convert("RGB")
                image_format, extension, save_kwargs = "JPEG", ".jpg", {
                    "quality": 90,
                    "optimize": True,
                }

            image = ImageOps.fit(
                image,
                AVATAR_SIZE,
                method=Image.Resampling.LANCZOS,
                centering=(0.5, 0.5),
            )
            output = BytesIO()
            image.save(output, format=image_format, **save_kwargs)

        self.avatar.save(
            f"avatar{extension}",
            ContentFile(output.getvalue()),
            save=False,
        )

    def __str__(self):
        return self.email
