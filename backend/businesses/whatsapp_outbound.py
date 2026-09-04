import json
import os
from urllib.error import HTTPError, URLError
from urllib.request import Request, urlopen

from django.conf import settings

from .models import WhatsAppIntegration


class WhatsAppOutboundError(Exception):
    """Raised when a WhatsApp outbound message cannot be accepted by Meta."""


def send_whatsapp_text(*, integration: WhatsAppIntegration, recipient: str, body: str) -> str:
    """Send one plain-text WhatsApp message and return Meta's message ID."""
    access_token = os.getenv(integration.access_token_env_var, "")
    if not access_token:
        raise WhatsAppOutboundError("WhatsApp access token is not configured.")
    if not integration.is_enabled:
        raise WhatsAppOutboundError("WhatsApp integration is disabled.")

    base_url = settings.META_WHATSAPP_GRAPH_API_BASE_URL.rstrip("/")
    version = settings.META_WHATSAPP_GRAPH_API_VERSION.strip("/")
    url = f"{base_url}/{version}/{integration.phone_number_id}/messages"
    payload = json.dumps(
        {
            "messaging_product": "whatsapp",
            "to": recipient,
            "type": "text",
            "text": {"body": body},
        }
    ).encode("utf-8")
    request = Request(
        url,
        data=payload,
        headers={
            "Authorization": f"Bearer {access_token}",
            "Content-Type": "application/json",
        },
        method="POST",
    )

    try:
        with urlopen(request, timeout=settings.META_WHATSAPP_HTTP_TIMEOUT_SECONDS) as response:
            response_body = response.read()
    except (HTTPError, URLError, TimeoutError, OSError) as error:
        raise WhatsAppOutboundError("WhatsApp provider request failed.") from error

    try:
        data = json.loads(response_body)
    except (TypeError, ValueError) as error:
        raise WhatsAppOutboundError("WhatsApp provider returned an invalid response.") from error

    messages = data.get("messages") if isinstance(data, dict) else None
    message_id = messages[0].get("id") if isinstance(messages, list) and messages else None
    if not isinstance(message_id, str) or not message_id:
        raise WhatsAppOutboundError("WhatsApp provider did not return a message ID.")

    return message_id