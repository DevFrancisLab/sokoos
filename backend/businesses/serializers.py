from rest_framework import serializers
import re

from .models import Business, WhatsAppIntegration


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


ENV_VAR_NAME_PATTERN = re.compile(r"^[A-Z][A-Z0-9_]*$")


class WhatsAppIntegrationSerializer(serializers.ModelSerializer):
    access_token_env_var = serializers.CharField(write_only=True)
    webhook_verify_token_env_var = serializers.CharField(write_only=True)

    class Meta:
        model = WhatsAppIntegration
        fields = [
            "id",
            "meta_business_account_id",
            "phone_number_id",
            "access_token_env_var",
            "webhook_verify_token_env_var",
            "is_enabled",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "created_at", "updated_at"]

    def validate_meta_business_account_id(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Meta Business Account ID cannot be blank.")
        return value

    def validate_phone_number_id(self, value):
        value = value.strip()
        if not value:
            raise serializers.ValidationError("Meta Phone Number ID cannot be blank.")
        return value

    def _validate_env_var_name(self, value, label):
        value = value.strip()
        if not ENV_VAR_NAME_PATTERN.fullmatch(value):
            raise serializers.ValidationError(f"{label} must be a valid environment variable name.")
        return value

    def validate_access_token_env_var(self, value):
        return self._validate_env_var_name(value, "Access token environment variable")

    def validate_webhook_verify_token_env_var(self, value):
        return self._validate_env_var_name(value, "Webhook verification token environment variable")
