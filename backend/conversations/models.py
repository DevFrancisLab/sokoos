from django.db import models


class Conversation(models.Model):
    class Channel(models.TextChoices):
        WHATSAPP = "whatsapp", "WhatsApp"
        WEBSITE = "website", "Website"
        EMAIL = "email", "Email"
        SMS = "sms", "SMS"
        FACEBOOK = "facebook", "Facebook"
        INSTAGRAM = "instagram", "Instagram"
        TELEGRAM = "telegram", "Telegram"

    class Status(models.TextChoices):
        ACTIVE = "active", "Active"
        NEEDS_REPLY = "needs_reply", "Needs reply"
        RESOLVED = "resolved", "Resolved"

    class HandlingMode(models.TextChoices):
        AI = "ai", "AI"
        HUMAN = "human", "Human"

    business = models.ForeignKey(
        "businesses.Business",
        on_delete=models.CASCADE,
        related_name="conversations",
    )
    customer = models.ForeignKey(
        "customers.Customer",
        on_delete=models.SET_NULL,
        related_name="conversations",
        blank=True,
        null=True,
    )
    channel = models.CharField(max_length=20, choices=Channel.choices)
    participant_address = models.CharField(max_length=255, blank=True)
    status = models.CharField(
        max_length=20,
        choices=Status.choices,
        default=Status.ACTIVE,
    )
    handling_mode = models.CharField(
        max_length=20,
        choices=HandlingMode.choices,
        default=HandlingMode.HUMAN,
    )
    unread_count = models.PositiveIntegerField(default=0)
    last_message_at = models.DateTimeField(blank=True, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        indexes = [
            models.Index(fields=["business", "last_message_at"]),
            models.Index(fields=["business", "status"]),
            models.Index(fields=["business", "handling_mode"]),
            models.Index(fields=["business", "channel"]),
        ]

    def __str__(self):
        return f"{self.get_channel_display()} conversation #{self.pk}"


class Message(models.Model):
    class SenderType(models.TextChoices):
        CUSTOMER = "customer", "Customer"
        HUMAN = "human", "Human"
        AI = "ai", "AI"

    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        related_name="messages",
    )
    sender_type = models.CharField(max_length=20, choices=SenderType.choices)
    body = models.TextField()
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [models.Index(fields=["conversation", "created_at"])]

    def __str__(self):
        return f"{self.get_sender_type_display()} message #{self.pk}"
