from datetime import datetime, timezone as datetime_timezone

from django.db import IntegrityError
from django.db import transaction
from django.db.models import F
from django.utils import timezone

from conversations.models import Conversation, Message
from customers.models import Customer
from customers.phone import InvalidWhatsAppPhoneNumber, normalize_whatsapp_phone_number

from .models import WhatsAppIntegration


def iter_text_messages(payload):
    """Yield only supported Meta WhatsApp text-message event values."""
    if payload.get("object") != "whatsapp_business_account":
        return

    for entry in payload.get("entry", []):
        if not isinstance(entry, dict):
            continue
        for change in entry.get("changes", []):
            if not isinstance(change, dict):
                continue
            value = change.get("value")
            if not isinstance(value, dict):
                continue
            metadata = value.get("metadata")
            if not isinstance(metadata, dict):
                continue
            phone_number_id = metadata.get("phone_number_id")
            if not isinstance(phone_number_id, str) or not phone_number_id.strip():
                continue

            contacts = value.get("contacts")
            profile_name = ""
            if isinstance(contacts, list) and contacts and isinstance(contacts[0], dict):
                profile = contacts[0].get("profile")
                if isinstance(profile, dict) and isinstance(profile.get("name"), str):
                    profile_name = profile["name"].strip()

            for message in value.get("messages", []):
                if not isinstance(message, dict) or message.get("type") != "text":
                    continue
                text = message.get("text")
                sender = message.get("from")
                message_id = message.get("id")
                body = text.get("body") if isinstance(text, dict) else None
                if not all(isinstance(item, str) and item.strip() for item in (sender, message_id, body)):
                    continue

                provider_timestamp = None
                timestamp = message.get("timestamp")
                if isinstance(timestamp, str) and timestamp.isdigit():
                    provider_timestamp = datetime.fromtimestamp(
                        int(timestamp),
                        tz=datetime_timezone.utc,
                    )

                yield {
                    "phone_number_id": phone_number_id.strip(),
                    "sender": sender.strip(),
                    "message_id": message_id.strip(),
                    "body": body,
                    "message_type": "text",
                    "provider_timestamp": provider_timestamp,
                    "profile_name": profile_name,
                }


def persist_inbound_text_message(event):
    """Persist one supported inbound event without invoking future processing."""
    try:
        sender_phone = normalize_whatsapp_phone_number(event["sender"])
    except InvalidWhatsAppPhoneNumber:
        return False

    integration = (
        WhatsAppIntegration.objects.select_related("business")
        .filter(phone_number_id=event["phone_number_id"], is_enabled=True)
        .first()
    )
    if integration is None:
        return False

    for _ in range(2):
        try:
            with transaction.atomic():
                if Message.objects.filter(external_message_id=event["message_id"]).exists():
                    return False

                customer = (
                    Customer.objects.filter(business=integration.business)
                    .filter(phone_e164=sender_phone)
                    .first()
                )
                if customer is None:
                    customer = Customer.objects.create(
                        business=integration.business,
                        name=event["profile_name"] or sender_phone,
                        phone=sender_phone,
                        phone_e164=sender_phone,
                        source=Customer.Source.WHATSAPP,
                    )

                conversation, _ = Conversation.objects.get_or_create(
                    business=integration.business,
                    channel=Conversation.Channel.WHATSAPP,
                    participant_address=sender_phone,
                    defaults={"customer": customer},
                )
                if conversation.customer_id not in (None, customer.pk):
                    return False

                provider_timestamp = event["provider_timestamp"]
                message = Message.objects.create(
                    conversation=conversation,
                    sender_type=Message.SenderType.CUSTOMER,
                    body=event["body"].strip(),
                    external_message_id=event["message_id"],
                    direction=Message.Direction.INBOUND,
                    provider_timestamp=provider_timestamp,
                    message_type=event["message_type"],
                    processing_status=Message.ProcessingStatus.PENDING,
                    delivery_status=Message.DeliveryStatus.NOT_APPLICABLE,
                    provider_metadata={
                        "provider": "meta_whatsapp_cloud_api",
                        "sender_wa_id": event["sender"],
                    },
                )
                conversation_time = provider_timestamp or message.created_at
                Conversation.objects.filter(pk=conversation.pk).update(
                    last_message_at=conversation_time,
                    unread_count=F("unread_count") + 1,
                    updated_at=timezone.now(),
                )
                return True
        except IntegrityError:
            if Message.objects.filter(external_message_id=event["message_id"]).exists():
                return False

    return False


def persist_inbound_payload(payload):
    """Persist supported messages from a verified Meta webhook payload."""
    for event in iter_text_messages(payload):
        persist_inbound_text_message(event)
