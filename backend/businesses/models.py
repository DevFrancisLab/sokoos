from django.conf import settings
from django.db import models


class Business(models.Model):
    owner = models.OneToOneField(
        settings.AUTH_USER_MODEL,
        on_delete=models.CASCADE,
        related_name="business",
    )
    name = models.CharField(max_length=255)
    description = models.TextField(blank=True)
    phone = models.CharField(max_length=50, blank=True)
    email = models.EmailField(blank=True)
    location = models.CharField(max_length=255, blank=True)
    logo = models.ImageField(upload_to="business_logos/", blank=True, null=True)
    is_active = models.BooleanField(default=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.name


class WhatsAppIntegration(models.Model):
    business = models.OneToOneField(
        Business,
        on_delete=models.CASCADE,
        related_name="whatsapp_integration",
    )
    meta_business_account_id = models.CharField(max_length=255)
    phone_number_id = models.CharField(max_length=255, unique=True)
    access_token_env_var = models.CharField(max_length=255)
    webhook_verify_token_env_var = models.CharField(max_length=255)
    is_enabled = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return f"WhatsApp integration for {self.business.name}"
