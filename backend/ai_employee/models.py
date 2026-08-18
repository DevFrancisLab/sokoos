import os

from django.db import models
from django.db.models import Q


def knowledge_document_upload_to(instance, filename):
    return f"ai_knowledge/{instance.business_id}/{instance.pk}/{os.path.basename(filename)}"


class AIEmployeeConfiguration(models.Model):
    class Personality(models.TextChoices):
        FRIENDLY = "Friendly", "Friendly"
        PROFESSIONAL = "Professional", "Professional"
        WARM = "Warm", "Warm"
        PLAYFUL = "Playful", "Playful"
        LUXURY = "Luxury", "Luxury"
        TECHNICAL = "Technical", "Technical"
        CASUAL = "Casual", "Casual"
        FORMAL = "Formal", "Formal"

    class CommunicationStyle(models.TextChoices):
        SHORT_DIRECT = "Short & Direct", "Short & Direct"
        BALANCED = "Balanced", "Balanced"
        DETAILED = "Detailed", "Detailed"

    class EmojiUsage(models.TextChoices):
        NEVER = "Never", "Never"
        SOMETIMES = "Sometimes", "Sometimes"
        OFTEN = "Often", "Often"

    class PreferredTone(models.TextChoices):
        HELPFUL = "Helpful", "Helpful"
        CONFIDENT = "Confident", "Confident"
        EDUCATIONAL = "Educational", "Educational"
        SALES_FOCUSED = "Sales-focused", "Sales-focused"
        CONVERSATIONAL = "Conversational", "Conversational"

    class OutsideHoursMode(models.TextChoices):
        CONTINUE = "continue", "Continue"
        COLLECT = "collect", "Collect"
        CLOSED = "closed", "Closed"

    business = models.OneToOneField(
        "businesses.Business",
        on_delete=models.CASCADE,
        related_name="ai_employee_configuration",
    )
    is_enabled = models.BooleanField(default=True)
    human_takeover_enabled = models.BooleanField(default=True)
    primary_language = models.CharField(max_length=30, default="English")
    supported_languages = models.JSONField(default=list)
    personality = models.CharField(max_length=30, choices=Personality.choices, default=Personality.FRIENDLY)
    communication_style = models.CharField(max_length=30, choices=CommunicationStyle.choices, default=CommunicationStyle.BALANCED)
    emoji_usage = models.CharField(max_length=20, choices=EmojiUsage.choices, default=EmojiUsage.SOMETIMES)
    preferred_tone = models.CharField(max_length=30, choices=PreferredTone.choices, default=PreferredTone.HELPFUL)
    writing_examples = models.TextField(blank=True)
    writing_style_options = models.JSONField(default=dict)
    welcome_message = models.TextField(blank=True)
    away_message = models.TextField(blank=True)
    closing_message = models.TextField(blank=True)
    outside_hours_mode = models.CharField(max_length=10, choices=OutsideHoursMode.choices, default=OutsideHoursMode.COLLECT)
    max_ai_messages = models.PositiveIntegerField(default=10)
    upsell_products = models.BooleanField(default=True)
    recommend_alternatives = models.BooleanField(default=True)
    close_sales_automatically = models.BooleanField(default=False)
    business_context = models.JSONField(default=dict)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)


class KnowledgeSource(models.Model):
    class Kind(models.TextChoices):
        FAQ = "faq", "FAQ"
        DOCUMENT = "document", "Document"
        WEBSITE = "website", "Website"

    class FAQCategory(models.TextChoices):
        GENERAL = "General", "General"
        PRICING = "Pricing", "Pricing"
        DELIVERY = "Delivery", "Delivery"
        SUPPORT = "Support", "Support"
        OTHER = "Other", "Other"

    business = models.ForeignKey(
        "businesses.Business",
        on_delete=models.CASCADE,
        related_name="ai_knowledge_sources",
    )
    kind = models.CharField(max_length=20, choices=Kind.choices)
    title = models.CharField(max_length=255, blank=True)
    faq_question = models.TextField(blank=True)
    faq_answer = models.TextField(blank=True)
    faq_category = models.CharField(max_length=20, choices=FAQCategory.choices, blank=True)
    file = models.FileField(upload_to=knowledge_document_upload_to, blank=True, null=True)
    original_name = models.CharField(max_length=255, blank=True)
    mime_type = models.CharField(max_length=100, blank=True)
    file_size = models.PositiveIntegerField(blank=True, null=True)
    url = models.URLField(blank=True)
    instructions = models.TextField(blank=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        constraints = [
            models.UniqueConstraint(
                fields=["business", "url"],
                condition=Q(kind="website") & ~Q(url=""),
                name="unique_ai_knowledge_website_per_business",
            )
        ]
        indexes = [models.Index(fields=["business", "kind"], name="ai_employee_busines_c8cb52_idx")]
