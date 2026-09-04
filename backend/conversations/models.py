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
        constraints = [
            models.UniqueConstraint(
                fields=["business", "participant_address"],
                condition=models.Q(channel="whatsapp") & ~models.Q(participant_address=""),
                name="unique_whatsapp_participant_per_business",
            ),
        ]

    def __str__(self):
        return f"{self.get_channel_display()} conversation #{self.pk}"


class Message(models.Model):
    class SenderType(models.TextChoices):
        CUSTOMER = "customer", "Customer"
        HUMAN = "human", "Human"
        AI = "ai", "AI"

    class Direction(models.TextChoices):
        INBOUND = "inbound", "Inbound"
        OUTBOUND = "outbound", "Outbound"

    class ProcessingStatus(models.TextChoices):
        PENDING = "pending", "Pending"
        PROCESSED = "processed", "Processed"
        FAILED = "failed", "Failed"

    class DeliveryStatus(models.TextChoices):
        NOT_APPLICABLE = "not_applicable", "Not applicable"
        PENDING = "pending", "Pending"
        SENT = "sent", "Sent"
        DELIVERED = "delivered", "Delivered"
        FAILED = "failed", "Failed"

    conversation = models.ForeignKey(
        Conversation,
        on_delete=models.CASCADE,
        related_name="messages",
    )
    sender_type = models.CharField(max_length=20, choices=SenderType.choices)
    body = models.TextField()
    external_message_id = models.CharField(max_length=255, blank=True, null=True, unique=True)
    direction = models.CharField(max_length=20, choices=Direction.choices, blank=True)
    provider_timestamp = models.DateTimeField(blank=True, null=True)
    message_type = models.CharField(max_length=30, default="text")
    processing_status = models.CharField(
        max_length=20,
        choices=ProcessingStatus.choices,
        default=ProcessingStatus.PROCESSED,
    )
    delivery_status = models.CharField(
        max_length=20,
        choices=DeliveryStatus.choices,
        default=DeliveryStatus.NOT_APPLICABLE,
    )
    provider_metadata = models.JSONField(default=dict, blank=True)
    error_message = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)

    class Meta:
        indexes = [models.Index(fields=["conversation", "created_at"])]

    def __str__(self):
        return f"{self.get_sender_type_display()} message #{self.pk}"
