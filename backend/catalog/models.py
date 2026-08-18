import os

from django.db import models
from django.db.models import Q
from django.db.models.functions import Lower


def catalog_media_upload_to(instance, filename):
    # Never let a client supplied filename affect the ownership portion of the
    # storage path. Django's storage layer also sanitizes names, but keeping
    # only the basename here makes that boundary explicit.
    return f"catalog/{instance.catalog_item.business_id}/{instance.catalog_item_id}/{os.path.basename(filename)}"


class Category(models.Model):
    business = models.ForeignKey(
        "businesses.Business",
        on_delete=models.CASCADE,
        related_name="catalog_categories",
    )
    name = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                Lower("name"),
                "business",
                name="unique_catalog_category_name_per_business",
            )
        ]

    def __str__(self):
        return self.name


class CatalogItem(models.Model):
    class ItemType(models.TextChoices):
        PRODUCT = "product", "Product"
        SERVICE = "service", "Service"
        SUBSCRIPTION = "subscription", "Subscription"
        DIGITAL_PRODUCT = "digital_product", "Digital product"
        MEMBERSHIP = "membership", "Membership"
        RENTAL = "rental", "Rental"

    class Currency(models.TextChoices):
        USD = "USD", "USD"
        KES = "KES", "KES"
        EUR = "EUR", "EUR"
        GBP = "GBP", "GBP"

    class Availability(models.TextChoices):
        AVAILABLE = "available", "Available"
        UNAVAILABLE = "unavailable", "Unavailable"
        BY_APPOINTMENT = "by_appointment", "By appointment"

    business = models.ForeignKey(
        "businesses.Business",
        on_delete=models.CASCADE,
        related_name="catalog_items",
    )
    category = models.ForeignKey(
        Category,
        on_delete=models.PROTECT,
        related_name="catalog_items",
    )
    name = models.CharField(max_length=255)
    item_type = models.CharField(max_length=30, choices=ItemType.choices)
    description = models.TextField()
    price = models.DecimalField(max_digits=12, decimal_places=2)
    currency = models.CharField(max_length=3, choices=Currency.choices, default=Currency.USD)
    price_note = models.CharField(max_length=255, blank=True)
    availability = models.CharField(
        max_length=30,
        choices=Availability.choices,
        default=Availability.AVAILABLE,
    )
    sku = models.CharField(max_length=100, blank=True)
    tags = models.JSONField(default=list, blank=True)
    current_stock = models.PositiveIntegerField(blank=True, null=True)
    low_stock_threshold = models.PositiveIntegerField(blank=True, null=True)
    warehouse_location = models.CharField(max_length=255, blank=True)
    appointment_required = models.BooleanField(default=False)
    service_duration_minutes = models.PositiveIntegerField(blank=True, null=True)
    customer_information = models.TextField(blank=True)
    faq_items = models.JSONField(default=list, blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["business", "sku"],
                condition=~Q(sku=""),
                name="unique_catalog_sku_per_business",
            )
        ]
        indexes = [
            models.Index(fields=["business", "item_type"], name="catalog_c_busi_5dc8a7_idx"),
            models.Index(fields=["business", "category"], name="catalog_c_busi_7cda60_idx"),
            models.Index(fields=["business", "availability"], name="catalog_c_busi_5b63df_idx"),
            models.Index(fields=["business", "created_at"], name="catalog_c_busi_66fe6e_idx"),
        ]

    def __str__(self):
        return self.name


class CatalogMedia(models.Model):
    catalog_item = models.ForeignKey(
        CatalogItem,
        on_delete=models.CASCADE,
        related_name="media",
    )
    file = models.ImageField(upload_to=catalog_media_upload_to)
    original_name = models.CharField(max_length=255)
    mime_type = models.CharField(max_length=100)
    alt_text = models.CharField(max_length=255, blank=True)
    is_thumbnail = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["catalog_item"],
                condition=Q(is_thumbnail=True),
                name="unique_catalog_thumbnail_per_item",
            )
        ]

    def __str__(self):
        return self.original_name
