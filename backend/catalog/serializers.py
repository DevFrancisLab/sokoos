from decimal import Decimal

from PIL import Image, UnidentifiedImageError

from django.db import transaction
from rest_framework import serializers

from .models import CatalogItem, CatalogMedia, Category


MAX_LIST_ITEMS = 50
INVENTORY_TYPES = {CatalogItem.ItemType.PRODUCT, CatalogItem.ItemType.RENTAL}
SERVICE_TYPES = {
    CatalogItem.ItemType.SERVICE,
    CatalogItem.ItemType.SUBSCRIPTION,
    CatalogItem.ItemType.MEMBERSHIP,
}
MAX_MEDIA_SIZE_BYTES = 5 * 1024 * 1024
ALLOWED_IMAGE_MIME_TYPES = {"image/jpeg", "image/png", "image/webp", "image/gif"}
IMAGE_FORMAT_MIME_TYPES = {
    "JPEG": "image/jpeg",
    "PNG": "image/png",
    "WEBP": "image/webp",
    "GIF": "image/gif",
}


def normalize_string_list(value, field_name):
    if not isinstance(value, list):
        raise serializers.ValidationError("Expected a list.")
    if len(value) > MAX_LIST_ITEMS:
        raise serializers.ValidationError(f"Limit {field_name} to {MAX_LIST_ITEMS} entries.")

    normalized = []
    seen = set()
    for entry in value:
        if not isinstance(entry, str):
            raise serializers.ValidationError("Every entry must be a string.")
        cleaned = entry.strip()
        if not cleaned:
            raise serializers.ValidationError("Entries cannot be blank.")
        key = cleaned.casefold()
        if key not in seen:
            normalized.append(cleaned)
            seen.add(key)
    return normalized


def catalog_item_readiness(item):
    media = getattr(item, "prefetched_media", None)
    has_images = bool(media) if media is not None else item.media.exists()
    has_faqs = bool(item.faq_items)
    has_description = bool(item.description and item.description.strip())
    has_price = item.price is not None
    has_inventory = item.item_type not in INVENTORY_TYPES or item.current_stock is not None

    if not has_images:
        label = "Needs Images"
    elif not has_faqs:
        label = "Needs FAQ"
    elif not has_description:
        label = "Needs Description"
    elif not has_price:
        label = "Needs Pricing"
    elif not has_inventory:
        label = "Needs Inventory"
    else:
        label = "100% Ready"
    # This mirrors the existing catalogue UI. Its summary's "Needs
    # information" count is deliberately narrower than the display label: it
    # concerns description, price and inventory only, while image and FAQ are
    # reported separately.
    return {
        "label": label,
        "is_ready": label == "100% Ready",
        "needs_information": not has_description or not has_price or not has_inventory,
        "missing_image": not has_images,
        "missing_faq": not has_faqs,
    }


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name", "created_at", "updated_at"]
        read_only_fields = ["id", "created_at", "updated_at"]

    def validate_name(self, value):
        name = value.strip()
        if not name:
            raise serializers.ValidationError("Category name cannot be blank.")
        business = self.context.get("business")
        if business:
            queryset = Category.objects.filter(business=business, name__iexact=name)
            if self.instance:
                queryset = queryset.exclude(pk=self.instance.pk)
            if queryset.exists():
                raise serializers.ValidationError("A category with this name already exists.")
        return name


class CatalogMediaSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatalogMedia
        fields = ["id", "file", "original_name", "mime_type", "alt_text", "is_thumbnail", "created_at"]
        read_only_fields = ["id", "original_name", "mime_type", "created_at"]

    def validate_alt_text(self, value):
        return value.strip()


class CatalogMediaCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatalogMedia
        fields = ["file", "alt_text", "is_thumbnail"]

    def validate_file(self, value):
        if value.size > MAX_MEDIA_SIZE_BYTES:
            raise serializers.ValidationError("Choose an image smaller than 5MB.")
        try:
            image = Image.open(value)
            image.verify()
            image_format = image.format
        except (UnidentifiedImageError, OSError, ValueError):
            raise serializers.ValidationError("Choose a valid image file.")
        finally:
            value.seek(0)

        mime_type = IMAGE_FORMAT_MIME_TYPES.get(image_format)
        if mime_type not in ALLOWED_IMAGE_MIME_TYPES:
            raise serializers.ValidationError("Choose a JPEG, PNG, WebP, or GIF image.")
        self._mime_type = mime_type
        return value

    def validate_alt_text(self, value):
        return value.strip()

    def create(self, validated_data):
        file = validated_data["file"]
        return CatalogMedia.objects.create(
            original_name=file.name,
            mime_type=self._mime_type,
            **validated_data,
        )


class CatalogMediaUpdateSerializer(serializers.ModelSerializer):
    class Meta:
        model = CatalogMedia
        fields = ["alt_text", "is_thumbnail"]

    def validate_alt_text(self, value):
        return value.strip()

    def update(self, instance, validated_data):
        with transaction.atomic():
            if validated_data.get("is_thumbnail"):
                CatalogMedia.objects.filter(catalog_item=instance.catalog_item).exclude(pk=instance.pk).update(is_thumbnail=False)
            return super().update(instance, validated_data)


class CatalogCategorySummarySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = ["id", "name"]


class CatalogItemSerializer(serializers.ModelSerializer):
    category = CatalogCategorySummarySerializer(read_only=True)
    media = serializers.SerializerMethodField()
    stock_status = serializers.SerializerMethodField()
    readiness = serializers.SerializerMethodField()

    class Meta:
        model = CatalogItem
        fields = [
            "id", "category", "name", "item_type", "description", "price", "currency",
            "price_note", "availability", "sku", "tags", "current_stock",
            "low_stock_threshold", "stock_status", "warehouse_location",
            "appointment_required", "service_duration_minutes", "customer_information",
            "faq_items", "media", "readiness", "created_at", "updated_at",
        ]
        read_only_fields = fields

    def get_media(self, item):
        media = getattr(item, "prefetched_media", None)
        if media is None:
            media = item.media.all()
        return CatalogMediaSerializer(media, many=True, context=self.context).data

    def get_stock_status(self, item):
        if item.current_stock is None:
            return None
        if item.current_stock == 0:
            return "out_of_stock"
        if item.current_stock <= (item.low_stock_threshold or 0):
            return "low_stock"
        return "in_stock"

    def get_readiness(self, item):
        return catalog_item_readiness(item)


class CatalogItemWriteSerializer(serializers.ModelSerializer):
    category_id = serializers.PrimaryKeyRelatedField(source="category", queryset=Category.objects.all())

    class Meta:
        model = CatalogItem
        fields = [
            "category_id", "name", "item_type", "description", "price", "currency",
            "price_note", "availability", "sku", "tags", "current_stock",
            "low_stock_threshold", "warehouse_location", "appointment_required",
            "service_duration_minutes", "customer_information", "faq_items",
        ]

    def validate_name(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Catalog item name cannot be blank.")
        return value

    def validate_description(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Description cannot be blank.")
        return value

    def validate_price(self, value):
        if value < Decimal("0"):
            raise serializers.ValidationError("Price cannot be negative.")
        return value

    def validate_price_note(self, value):
        return value.strip()

    def validate_sku(self, value):
        sku = value.strip().upper()
        business = self.context.get("business")
        if sku and business:
            queryset = CatalogItem.objects.filter(business=business, sku=sku)
            if self.instance:
                queryset = queryset.exclude(pk=self.instance.pk)
            if queryset.exists():
                raise serializers.ValidationError("A catalog item with this SKU already exists.")
        return sku

    def validate_tags(self, value):
        return normalize_string_list(value, "tags")

    def validate_faq_items(self, value):
        return normalize_string_list(value, "FAQ entries")

    def validate_warehouse_location(self, value):
        return value.strip()

    def validate_customer_information(self, value):
        return value.strip()

    def validate_category_id(self, category):
        business = self.context["business"]
        if category.business_id != business.id:
            raise serializers.ValidationError("Category must belong to this business.")
        return category

    def validate(self, attrs):
        item_type = attrs.get("item_type", self.instance.item_type if self.instance else None)
        inventory_fields = {"current_stock", "low_stock_threshold", "warehouse_location"}
        service_fields = {"appointment_required", "service_duration_minutes"}

        if item_type not in INVENTORY_TYPES:
            supplied = [field for field in inventory_fields if field in attrs]
            if supplied:
                raise serializers.ValidationError({field: "Inventory fields are only allowed for products and rentals." for field in supplied})
            if self.instance and "item_type" in attrs:
                attrs.update({"current_stock": None, "low_stock_threshold": None, "warehouse_location": ""})

        if item_type not in SERVICE_TYPES:
            supplied = [field for field in service_fields if field in attrs]
            if supplied:
                raise serializers.ValidationError({field: "Service fields are only allowed for services, subscriptions, and memberships." for field in supplied})
            if self.instance and "item_type" in attrs:
                attrs.update({"appointment_required": False, "service_duration_minutes": None})

        duration = attrs.get(
            "service_duration_minutes",
            self.instance.service_duration_minutes if self.instance else None,
        )
        if item_type in SERVICE_TYPES and duration == 0:
            raise serializers.ValidationError({"service_duration_minutes": "Duration must be greater than zero."})
        return attrs
