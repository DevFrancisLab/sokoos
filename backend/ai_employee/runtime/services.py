"""Build the provider-independent runtime context from canonical domain data."""

from __future__ import annotations

from copy import deepcopy

from catalog.models import CatalogItem
from conversations.models import Conversation, Message

from ..models import AIEmployeeConfiguration, KnowledgeSource
from .context import (
    RuntimeAIConfiguration,
    RuntimeBusiness,
    RuntimeCatalogItem,
    RuntimeCatalogMedia,
    RuntimeContext,
    RuntimeConversation,
    RuntimeCustomer,
    RuntimeEligibility,
    RuntimeKnowledgeSource,
    RuntimeMessage,
)


class RuntimeContextError(ValueError):
    """Raised when a canonical domain relationship is not safe for runtime use."""


def _configuration_value(configuration: AIEmployeeConfiguration) -> RuntimeAIConfiguration:
    return RuntimeAIConfiguration(
        is_enabled=configuration.is_enabled,
        human_takeover_enabled=configuration.human_takeover_enabled,
        primary_language=configuration.primary_language,
        supported_languages=tuple(configuration.supported_languages),
        personality=configuration.personality,
        communication_style=configuration.communication_style,
        emoji_usage=configuration.emoji_usage,
        preferred_tone=configuration.preferred_tone,
        writing_examples=configuration.writing_examples,
        writing_style_options=deepcopy(configuration.writing_style_options),
        welcome_message=configuration.welcome_message,
        away_message=configuration.away_message,
        closing_message=configuration.closing_message,
        outside_hours_mode=configuration.outside_hours_mode,
        max_ai_messages=configuration.max_ai_messages,
        upsell_products=configuration.upsell_products,
        recommend_alternatives=configuration.recommend_alternatives,
        close_sales_automatically=configuration.close_sales_automatically,
        business_context=deepcopy(configuration.business_context),
    )


def _catalog_item_value(item: CatalogItem) -> RuntimeCatalogItem:
    return RuntimeCatalogItem(
        id=item.pk,
        category_id=item.category_id,
        category_name=item.category.name,
        name=item.name,
        item_type=item.item_type,
        description=item.description,
        price=item.price,
        currency=item.currency,
        price_note=item.price_note,
        availability=item.availability,
        sku=item.sku,
        tags=tuple(item.tags),
        current_stock=item.current_stock,
        low_stock_threshold=item.low_stock_threshold,
        warehouse_location=item.warehouse_location,
        appointment_required=item.appointment_required,
        service_duration_minutes=item.service_duration_minutes,
        customer_information=item.customer_information,
        faq_items=tuple(deepcopy(item.faq_items)),
        media=tuple(
            RuntimeCatalogMedia(
                id=media.pk,
                file_url=media.file.url,
                original_name=media.original_name,
                mime_type=media.mime_type,
                alt_text=media.alt_text,
                is_thumbnail=media.is_thumbnail,
            )
            for media in item.media.all()
        ),
    )


def _knowledge_source_value(source: KnowledgeSource) -> RuntimeKnowledgeSource:
    return RuntimeKnowledgeSource(
        id=source.pk,
        kind=source.kind,
        title=source.title,
        faq_question=source.faq_question,
        faq_answer=source.faq_answer,
        faq_category=source.faq_category,
        document_file_url=source.file.url if source.file else None,
        document_original_name=source.original_name,
        document_mime_type=source.mime_type,
        document_file_size=source.file_size,
        website_url=source.url,
        website_instructions=source.instructions,
    )


def build_runtime_context(*, conversation: Conversation) -> RuntimeContext:
    """Return safe, business-scoped canonical data for a future runtime.

    ``conversation`` must already have been resolved through the authenticated
    user's business.  The business is deliberately derived from that canonical
    conversation rather than accepted as a separate selector.
    """
    business = conversation.business

    customer = conversation.customer
    if customer is not None and customer.business_id != business.pk:
        raise RuntimeContextError("Conversation customer does not belong to the conversation business.")

    # Query directly rather than use the business reverse relation. A caller
    # can hold a Business instance whose one-to-one relation cache is stale
    # after configuration deletion or replacement.
    configuration = AIEmployeeConfiguration.objects.filter(business=business).first()

    catalog_items = (
        CatalogItem.objects.filter(business=business, category__business=business)
        .select_related("category")
        .prefetch_related("media")
        .order_by("pk")
    )
    knowledge_sources = KnowledgeSource.objects.filter(business=business).order_by("pk")
    messages = Message.objects.filter(conversation=conversation).order_by("created_at", "pk")

    return RuntimeContext(
        business=RuntimeBusiness(
            id=business.pk,
            name=business.name,
            description=business.description,
            phone=business.phone,
            email=business.email,
            location=business.location,
        ),
        ai_configuration=_configuration_value(configuration) if configuration else None,
        catalog_items=tuple(_catalog_item_value(item) for item in catalog_items),
        knowledge_sources=tuple(_knowledge_source_value(source) for source in knowledge_sources),
        customer=(
            RuntimeCustomer(
                id=customer.pk,
                name=customer.name,
                phone=customer.phone,
                email=customer.email,
                company=customer.company,
                location=customer.location,
                notes=customer.notes,
                relationship=customer.relationship,
                lead_status=customer.lead_status,
                source=customer.source,
            )
            if customer
            else None
        ),
        conversation=RuntimeConversation(
            id=conversation.pk,
            channel=conversation.channel,
            participant_address=conversation.participant_address,
            status=conversation.status,
            handling_mode=conversation.handling_mode,
            last_message_at=conversation.last_message_at,
        ),
        messages=tuple(
            RuntimeMessage(
                id=message.pk,
                sender_type=message.sender_type,
                body=message.body,
                created_at=message.created_at,
            )
            for message in messages
        ),
    )


def get_runtime_eligibility(context: RuntimeContext) -> RuntimeEligibility:
    """Determine whether existing state permits future AI handling.

    This is deliberately read-only: it performs no handoff, generation, or
    message creation.
    """
    if context.ai_configuration is None:
        return RuntimeEligibility(False, "AI Employee configuration is not available.")
    if not context.ai_configuration.is_enabled:
        return RuntimeEligibility(False, "AI Employee is disabled.")
    if context.conversation.handling_mode != Conversation.HandlingMode.AI:
        return RuntimeEligibility(False, "Conversation is not in AI handling mode.")
    if context.conversation.status == Conversation.Status.RESOLVED:
        return RuntimeEligibility(False, "Conversation is resolved.")
    return RuntimeEligibility(True, "Conversation is eligible for AI handling.")
