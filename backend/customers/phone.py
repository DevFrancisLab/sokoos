import re


class InvalidWhatsAppPhoneNumber(ValueError):
    """Raised when a value cannot be normalized as a Kenyan WhatsApp number."""


def normalize_whatsapp_phone_number(value: str) -> str:
    """Return a Kenyan WhatsApp number in E.164 form.

    Existing customer phone values are not rewritten automatically. This helper
    is intended for new WhatsApp identity data and accepts local Kenyan mobile
    numbers, the country-code form, and an already canonical +254 form.
    """
    if not isinstance(value, str):
        raise InvalidWhatsAppPhoneNumber("WhatsApp phone number must be text.")

    compact = re.sub(r"[\s().-]", "", value.strip())
    if compact.startswith("00"):
        compact = f"+{compact[2:]}"
    elif compact.startswith("254"):
        compact = f"+{compact}"
    elif compact.startswith("0"):
        compact = f"+254{compact[1:]}"

    if not re.fullmatch(r"\+254[17]\d{8}", compact):
        raise InvalidWhatsAppPhoneNumber("Enter a valid Kenyan WhatsApp mobile number.")

    return compact
