from rest_framework import serializers

from .models import Business


MAX_LOGO_SIZE_BYTES = 5 * 1024 * 1024


class BusinessSerializer(serializers.ModelSerializer):
    class Meta:
        model = Business
        fields = [
            "id",
            "name",
            "description",
            "phone",
            "email",
            "location",
            "logo",
            "is_active",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "is_active", "created_at", "updated_at"]

    def validate_name(self, value):
        name = value.strip()
        if not name:
            raise serializers.ValidationError("Business name cannot be blank.")
        return name

    def validate_logo(self, value):
        if value.size > MAX_LOGO_SIZE_BYTES:
            raise serializers.ValidationError("Choose an image smaller than 5MB.")
        return value
