from rest_framework import serializers

from .models import Customer
from .phone import InvalidWhatsAppPhoneNumber, normalize_whatsapp_phone_number


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = [
            "id",
            "name",
            "phone",
            "phone_e164",
            "email",
            "company",
            "location",
            "notes",
            "relationship",
            "lead_status",
            "source",
            "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "phone_e164", "created_at", "updated_at"]

    def _trim(self, value):
        return value.strip()

    def validate_name(self, value):
        name = self._trim(value)
        if not name:
            raise serializers.ValidationError("Customer name cannot be blank.")
        return name

    def validate_phone(self, value):
        return self._trim(value)

    def validate_email(self, value):
        return self._trim(value).lower()

    def validate_company(self, value):
        return self._trim(value)

    def validate_location(self, value):
        return self._trim(value)

    def validate_notes(self, value):
        return self._trim(value)

    def validate(self, attrs):
        relationship = attrs.get(
            "relationship",
            self.instance.relationship if self.instance else Customer.Relationship.CONTACT,
        )
        lead_status_supplied = "lead_status" in attrs
        lead_status = attrs.get(
            "lead_status",
            self.instance.lead_status if self.instance else "",
        )

        if relationship == Customer.Relationship.LEAD:
            attrs["lead_status"] = lead_status or Customer.LeadStatus.NEW
        elif lead_status_supplied and lead_status:
            raise serializers.ValidationError(
                {"lead_status": "Lead status is only valid when relationship is lead."}
            )
        elif "relationship" in attrs and self.instance:
            # Changing from lead to contact/customer clears the now-inapplicable value.
            attrs["lead_status"] = ""

        business = self.context.get("business")
        if business is None:
            return attrs

        source = attrs.get("source", self.instance.source if self.instance else Customer.Source.MANUAL)
        phone = attrs.get("phone", self.instance.phone if self.instance else "")
        if source == Customer.Source.WHATSAPP and phone:
            try:
                attrs["phone_e164"] = normalize_whatsapp_phone_number(phone)
            except InvalidWhatsAppPhoneNumber as error:
                raise serializers.ValidationError({"phone": str(error)}) from error

        for field in ("phone", "email"):
            value = attrs.get(field)
            if value is None:
                continue
            if not value:
                continue

            queryset = Customer.objects.filter(business=business, **{field: value})
            if self.instance is not None:
                queryset = queryset.exclude(pk=self.instance.pk)
            if queryset.exists():
                raise serializers.ValidationError(
                    {field: "A customer with this value already exists for this business."}
                )

        return attrs

    def create(self, validated_data):
        source = validated_data.get("source", Customer.Source.MANUAL)
        phone = validated_data.get("phone", "")
        if source == Customer.Source.WHATSAPP and phone:
            validated_data["phone_e164"] = normalize_whatsapp_phone_number(phone)
        return super().create(validated_data)

    def update(self, instance, validated_data):
        source = validated_data.get("source", instance.source)
        phone = validated_data.get("phone", instance.phone)
        if source == Customer.Source.WHATSAPP and phone:
            validated_data["phone_e164"] = normalize_whatsapp_phone_number(phone)
        elif source != Customer.Source.WHATSAPP:
            validated_data["phone_e164"] = ""
        return super().update(instance, validated_data)
