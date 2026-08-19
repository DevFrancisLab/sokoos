import os
import zipfile
from urllib.parse import urlsplit, urlunsplit

from rest_framework import serializers

from .models import AIEmployeeConfiguration, KnowledgeSource


LANGUAGES = {
    "English", "Kiswahili", "French", "Arabic", "German", "Spanish",
    "Portuguese", "Somali", "Amharic", "Hindi", "Chinese", "Italian",
}
WRITING_STYLE_KEYS = {
    "use_emojis",
    "keep_replies_short",
    "explain_simply",
    "ask_follow_up_questions",
    "personalize_responses",
}
BUSINESS_CONTEXT_KEYS = {
    "vision", "mission", "short_term_goals", "long_term_goals",
    "target_customers", "customer_problems", "primary_market",
    "customer_segments", "differentiators", "competitive_advantages",
    "key_selling_points", "competitors", "preferred_brand_tones",
    "words_to_use", "words_to_avoid", "brand_guidance",
    "important_things_to_know", "additional_notes",
}
BUSINESS_CONTEXT_LIST_KEYS = {"preferred_brand_tones"}
MAX_LIST_ITEMS = 50
MAX_DOCUMENT_SIZE = 10 * 1024 * 1024
DOCUMENT_MIME_TYPES = {
    "pdf": "application/pdf",
    "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
    "txt": "text/plain",
    "csv": "text/csv",
    "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
}


def trim(value):
    return value.strip()


def normalize_string_list(value, field_name):
    if not isinstance(value, list):
        raise serializers.ValidationError("Expected a list.")
    if len(value) > MAX_LIST_ITEMS:
        raise serializers.ValidationError(f"Limit {field_name} to {MAX_LIST_ITEMS} entries.")
    normalized, seen = [], set()
    for entry in value:
        if not isinstance(entry, str):
            raise serializers.ValidationError("Every entry must be a string.")
        cleaned = entry.strip()
        if not cleaned:
            raise serializers.ValidationError("Entries cannot be blank.")
        key = cleaned.casefold()
        if key in seen:
            raise serializers.ValidationError("Entries must not contain duplicates.")
        seen.add(key)
        normalized.append(cleaned)
    return normalized


def default_configuration():
    return {
        "is_enabled": True,
        "human_takeover_enabled": True,
        "primary_language": "English",
        "supported_languages": ["English"],
        "personality": AIEmployeeConfiguration.Personality.FRIENDLY,
        "communication_style": AIEmployeeConfiguration.CommunicationStyle.BALANCED,
        "emoji_usage": AIEmployeeConfiguration.EmojiUsage.SOMETIMES,
        "preferred_tone": AIEmployeeConfiguration.PreferredTone.HELPFUL,
        "writing_examples": "",
        "writing_style_options": {},
        "welcome_message": "",
        "away_message": "",
        "closing_message": "",
        "outside_hours_mode": AIEmployeeConfiguration.OutsideHoursMode.COLLECT,
        "max_ai_messages": 10,
        "upsell_products": True,
        "recommend_alternatives": True,
        "close_sales_automatically": False,
        "business_context": {},
    }


def configuration_readiness(configuration):
    context = configuration.business_context
    configured = {
        "language": bool(configuration.primary_language and configuration.supported_languages),
        "voice": bool(configuration.personality and configuration.preferred_tone),
        "messages": bool(configuration.welcome_message.strip()),
        "business_context": bool(context.get("vision", "").strip() and context.get("mission", "").strip()),
    }
    return {
        "configured_sections": [name for name, complete in configured.items() if complete],
        "missing_sections": [name for name, complete in configured.items() if not complete],
        "is_configured": all(configured.values()),
    }


class AIEmployeeConfigurationSerializer(serializers.ModelSerializer):
    readiness = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = AIEmployeeConfiguration
        fields = [
            "id", "is_enabled", "human_takeover_enabled", "primary_language",
            "supported_languages", "personality", "communication_style", "emoji_usage",
            "preferred_tone", "writing_examples", "writing_style_options",
            "welcome_message", "away_message", "closing_message", "outside_hours_mode",
            "max_ai_messages", "upsell_products", "recommend_alternatives",
            "close_sales_automatically", "business_context", "readiness", "created_at",
            "updated_at",
        ]
        read_only_fields = ["id", "readiness", "created_at", "updated_at"]

    def get_readiness(self, configuration):
        return configuration_readiness(configuration)

    def validate_primary_language(self, value):
        value = trim(value)
        if value not in LANGUAGES:
            raise serializers.ValidationError("Unsupported primary language.")
        return value

    def validate_supported_languages(self, value):
        value = normalize_string_list(value, "supported languages")
        unsupported = [language for language in value if language not in LANGUAGES]
        if unsupported:
            raise serializers.ValidationError("Unsupported language value.")
        return value

    def validate_writing_style_options(self, value):
        if not isinstance(value, dict):
            raise serializers.ValidationError("Expected an object.")
        unknown = set(value) - WRITING_STYLE_KEYS
        if unknown:
            raise serializers.ValidationError(f"Unsupported writing style option: {sorted(unknown)[0]}.")
        if any(type(enabled) is not bool for enabled in value.values()):
            raise serializers.ValidationError("Writing style option values must be boolean.")
        return value

    def validate_business_context(self, value):
        if not isinstance(value, dict):
            raise serializers.ValidationError("Expected an object.")
        unknown = set(value) - BUSINESS_CONTEXT_KEYS
        if unknown:
            raise serializers.ValidationError(f"Unsupported business context field: {sorted(unknown)[0]}.")
        normalized = {}
        for key, entry in value.items():
            if key in BUSINESS_CONTEXT_LIST_KEYS:
                normalized[key] = normalize_string_list(entry, key)
            elif not isinstance(entry, str):
                raise serializers.ValidationError({key: "Expected a string."})
            else:
                normalized[key] = entry.strip()
        return normalized

    def validate_writing_examples(self, value):
        return trim(value)

    def validate_welcome_message(self, value):
        return trim(value)

    def validate_away_message(self, value):
        return trim(value)

    def validate_closing_message(self, value):
        return trim(value)

    def validate(self, attrs):
        primary_language = attrs.get(
            "primary_language",
            self.instance.primary_language if self.instance else "English",
        )
        supported_languages = attrs.get(
            "supported_languages",
            self.instance.supported_languages if self.instance else ["English"],
        )
        if primary_language not in supported_languages:
            raise serializers.ValidationError({"supported_languages": "Supported languages must include the primary language."})
        return attrs

    def create(self, validated_data):
        values = default_configuration()
        values.update(validated_data)
        return AIEmployeeConfiguration.objects.create(**values)


class DefaultAIEmployeeConfigurationSerializer(serializers.Serializer):
    """Serializes GET /me/ defaults without creating a configuration record."""

    def to_representation(self, instance):
        data = default_configuration()
        data.update({"id": None, "created_at": None, "updated_at": None})
        data["readiness"] = configuration_readiness(type("Default", (), data)())
        return data


def normalized_website_url(value):
    value = value.strip()
    parts = urlsplit(value)
    if parts.scheme.lower() not in {"http", "https"} or not parts.netloc:
        raise serializers.ValidationError("Enter a valid HTTP or HTTPS URL.")
    return urlunsplit((parts.scheme.lower(), parts.netloc.lower(), parts.path or "/", parts.query, ""))


def validate_document_content(upload):
    extension = os.path.splitext(upload.name)[1].lower().lstrip(".")
    if extension not in DOCUMENT_MIME_TYPES:
        raise serializers.ValidationError("Use a PDF, DOCX, TXT, CSV, or XLSX file.")
    if upload.size > MAX_DOCUMENT_SIZE:
        raise serializers.ValidationError("Choose a document smaller than 10MB.")
    sample = upload.read(4096)
    upload.seek(0)
    if extension == "pdf" and not sample.startswith(b"%PDF-"):
        raise serializers.ValidationError("The uploaded file is not a valid PDF.")
    if extension in {"docx", "xlsx"} and not zipfile.is_zipfile(upload):
        upload.seek(0)
        raise serializers.ValidationError("The uploaded file is not a valid Office document.")
    upload.seek(0)
    if extension in {"txt", "csv"}:
        try:
            sample.decode("utf-8")
        except UnicodeDecodeError:
            raise serializers.ValidationError("Text documents must use UTF-8 content.")
    return extension


class KnowledgeSourceSerializer(serializers.ModelSerializer):
    class Meta:
        model = KnowledgeSource
        fields = [
            "id", "kind", "title", "faq_question", "faq_answer", "faq_category",
            "file", "original_name", "mime_type", "file_size", "url", "instructions",
            "created_at", "updated_at",
        ]
        read_only_fields = ["id", "original_name", "mime_type", "file_size", "created_at", "updated_at"]


class KnowledgeSourceWriteSerializer(serializers.ModelSerializer):
    faq_category = serializers.CharField(required=False, allow_blank=True)

    class Meta:
        model = KnowledgeSource
        fields = ["kind", "title", "faq_question", "faq_answer", "faq_category", "file", "url", "instructions"]
        extra_kwargs = {
            "kind": {"required": True}, "title": {"required": False},
            "faq_question": {"required": False}, "faq_answer": {"required": False},
            "faq_category": {"required": False}, "file": {"required": False},
            "url": {"required": False}, "instructions": {"required": False},
        }

    def _is_supplied(self, attrs, field):
        return field in attrs

    def validate_title(self, value):
        return trim(value)

    def validate_faq_question(self, value):
        return trim(value)

    def validate_faq_answer(self, value):
        return trim(value)

    def validate_faq_category(self, value):
        value = trim(value)
        allowed_categories = {choice for choice, _ in KnowledgeSource.FAQCategory.choices}
        if value and value not in allowed_categories:
            raise serializers.ValidationError("Unsupported FAQ category.")
        return value

    def validate_instructions(self, value):
        return trim(value)

    def validate_url(self, value):
        return normalized_website_url(value)

    def validate_file(self, value):
        self._document_extension = validate_document_content(value)
        return value

    def validate(self, attrs):
        kind = attrs.get("kind", self.instance.kind if self.instance else None)
        if self.instance and "kind" in attrs and attrs["kind"] != self.instance.kind:
            raise serializers.ValidationError({"kind": "Knowledge source kind cannot be changed."})

        faq_fields = {"faq_question", "faq_answer", "faq_category"}
        document_fields = {"file"}
        website_fields = {"url", "instructions"}
        supplied = set(attrs)
        if kind == KnowledgeSource.Kind.FAQ:
            wrong = supplied & (document_fields | website_fields)
            if wrong:
                raise serializers.ValidationError({field: "This field is not allowed for FAQ sources." for field in wrong})
            question = attrs.get("faq_question", self.instance.faq_question if self.instance else "")
            answer = attrs.get("faq_answer", self.instance.faq_answer if self.instance else "")
            if not question:
                raise serializers.ValidationError({"faq_question": "Question is required for FAQ sources."})
            if not answer:
                raise serializers.ValidationError({"faq_answer": "Answer is required for FAQ sources."})
        elif kind == KnowledgeSource.Kind.DOCUMENT:
            wrong = supplied & (faq_fields | website_fields)
            if wrong:
                raise serializers.ValidationError({field: "This field is not allowed for document sources." for field in wrong})
            if self.instance is None and "file" not in attrs:
                raise serializers.ValidationError({"file": "A document file is required."})
        elif kind == KnowledgeSource.Kind.WEBSITE:
            wrong = supplied & (faq_fields | document_fields)
            if wrong:
                raise serializers.ValidationError({field: "This field is not allowed for website sources." for field in wrong})
            url = attrs.get("url", self.instance.url if self.instance else "")
            if not url:
                raise serializers.ValidationError({"url": "A website URL is required."})
            self._validate_website_uniqueness(self.context["business"], url)
        return attrs

    def _validate_website_uniqueness(self, business, url):
        queryset = KnowledgeSource.objects.filter(business=business, kind=KnowledgeSource.Kind.WEBSITE, url=url)
        if self.instance:
            queryset = queryset.exclude(pk=self.instance.pk)
        if queryset.exists():
            raise serializers.ValidationError({"url": "This website is already configured for this business."})

    def create(self, validated_data):
        business = self.context["business"]
        kind = validated_data["kind"]
        upload = validated_data.pop("file", None)
        if kind == KnowledgeSource.Kind.FAQ and not validated_data.get("title"):
            validated_data["title"] = validated_data["faq_question"]
        if kind == KnowledgeSource.Kind.WEBSITE and not validated_data.get("title"):
            validated_data["title"] = validated_data["url"]
        source = KnowledgeSource.objects.create(business=business, **validated_data)
        if upload:
            extension = getattr(self, "_document_extension", validate_document_content(upload))
            source.file = upload
            source.original_name = os.path.basename(upload.name)
            source.mime_type = DOCUMENT_MIME_TYPES[extension]
            source.file_size = upload.size
            if not source.title:
                source.title = source.original_name
            source.save()
        return source

    def update(self, instance, validated_data):
        if "file" in validated_data:
            raise serializers.ValidationError({"file": "Replace a document by deleting it and uploading a new source."})
        return super().update(instance, validated_data)
