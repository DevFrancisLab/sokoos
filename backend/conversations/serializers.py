from rest_framework import serializers

from customers.models import Customer
from customers.phone import InvalidWhatsAppPhoneNumber, normalize_whatsapp_phone_number

from .models import Conversation, Message


class ConversationCustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = [
            "id",
            "name",
            "phone",
            "email",
            "company",
            "location",
            "relationship",
            "lead_status",
        ]


class MessageSerializer(serializers.ModelSerializer):
    class Meta:
        model = Message
        fields = [
            "id",
            "sender_type",
            "body",
            "external_message_id",
            "direction",
            "provider_timestamp",
            "message_type",
            "processing_status",
            "delivery_status",
            "provider_metadata",
            "error_message",
            "created_at",
        ]
        read_only_fields = fields


class ConversationSerializer(serializers.ModelSerializer):
    customer = ConversationCustomerSerializer(read_only=True)
    latest_message = serializers.SerializerMethodField()

    class Meta:
        model = Conversation
        fields = [
            "id",
            "customer",
            "channel",
            "participant_address",
            "status",
            "handling_mode",
            "unread_count",
            "last_message_at",
            "latest_message",
            "created_at",
            "updated_at",
        ]
        read_only_fields = fields

    def get_latest_message(self, conversation):
        messages = getattr(conversation, "prefetched_messages", None)
        if messages is None:
            message = conversation.messages.order_by("-created_at", "-pk").first()
        else:
            message = messages[0] if messages else None
        return MessageSerializer(message).data if message else None


class ConversationCreateSerializer(serializers.ModelSerializer):
    customer_id = serializers.PrimaryKeyRelatedField(
        source="customer",
        queryset=Customer.objects.all(),
        required=False,
        allow_null=True,
    )

    class Meta:
        model = Conversation
        fields = ["customer_id", "channel", "participant_address"]

    def validate_participant_address(self, value):
        return value.strip()

    def validate_customer_id(self, customer):
        business = self.context["business"]
        if customer.business_id != business.id:
            raise serializers.ValidationError("Customer must belong to this business.")
        return customer

    def validate(self, attrs):
        if attrs.get("channel") == Conversation.Channel.WHATSAPP:
            participant_address = attrs.get("participant_address", "")
            if not participant_address and attrs.get("customer") is not None:
                customer = attrs["customer"]
                participant_address = customer.phone_e164 or customer.phone
            if participant_address:
                try:
                    attrs["participant_address"] = normalize_whatsapp_phone_number(participant_address)
                except InvalidWhatsAppPhoneNumber as error:
                    raise serializers.ValidationError({"participant_address": str(error)}) from error

        if attrs.get("customer") is None and not attrs.get("participant_address"):
            raise serializers.ValidationError(
                {"participant_address": "Provide a customer_id or participant_address."}
            )
        return attrs


class ConversationUpdateSerializer(serializers.ModelSerializer):
    customer_id = serializers.PrimaryKeyRelatedField(
        source="customer",
        queryset=Customer.objects.all(),
        required=False,
        allow_null=True,
    )

    class Meta:
        model = Conversation
        fields = ["status", "handling_mode", "customer_id"]

    def validate_customer_id(self, customer):
        if customer is None:
            return customer
        business = self.context["business"]
        if customer.business_id != business.id:
            raise serializers.ValidationError("Customer must belong to this business.")
        return customer


class HumanMessageCreateSerializer(serializers.Serializer):
    body = serializers.CharField()

    def validate_body(self, value):
        body = value.strip()
        if not body:
            raise serializers.ValidationError("Message body cannot be blank.")
        return body
