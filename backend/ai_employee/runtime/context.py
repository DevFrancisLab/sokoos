"""Safe, immutable values consumed by a future AI runtime.

These are internal boundary objects, not database models or API serializers.
"""

from dataclasses import dataclass
from datetime import datetime
from decimal import Decimal
from typing import Any, Literal


@dataclass(frozen=True)
class RuntimeBusiness:
    id: int
    name: str
    description: str
    phone: str
    email: str
    location: str


@dataclass(frozen=True)
class RuntimeAIConfiguration:
    is_enabled: bool
    human_takeover_enabled: bool
    primary_language: str
    supported_languages: tuple[str, ...]
    personality: str
    communication_style: str
    emoji_usage: str
    preferred_tone: str
    writing_examples: str
    writing_style_options: dict[str, bool]
    welcome_message: str
    away_message: str
    closing_message: str
    outside_hours_mode: str
    max_ai_messages: int
    upsell_products: bool
    recommend_alternatives: bool
    close_sales_automatically: bool
    business_context: dict[str, Any]


@dataclass(frozen=True)
class RuntimeCatalogMedia:
    id: int
    file_url: str
    original_name: str
    mime_type: str
    alt_text: str
    is_thumbnail: bool


@dataclass(frozen=True)
class RuntimeCatalogItem:
    id: int
    category_id: int
    category_name: str
    name: str
    item_type: str
    description: str
    price: Decimal
    currency: str
    price_note: str
    availability: str
    sku: str
    tags: tuple[str, ...]
    current_stock: int | None
    low_stock_threshold: int | None
    warehouse_location: str
    appointment_required: bool
    service_duration_minutes: int | None
    customer_information: str
    faq_items: tuple[Any, ...]
    media: tuple[RuntimeCatalogMedia, ...]


@dataclass(frozen=True)
class RuntimeKnowledgeSource:
    id: int
    kind: str
    title: str
    faq_question: str
    faq_answer: str
    faq_category: str
    document_file_url: str | None
    document_original_name: str
    document_mime_type: str
    document_file_size: int | None
    website_url: str
    website_instructions: str


@dataclass(frozen=True)
class RuntimeCustomer:
    id: int
    name: str
    phone: str
    email: str
    company: str
    location: str
    notes: str
    relationship: str
    lead_status: str
    source: str


@dataclass(frozen=True)
class RuntimeConversation:
    id: int
    channel: str
    participant_address: str
    status: str
    handling_mode: str
    last_message_at: datetime | None


@dataclass(frozen=True)
class RuntimeMessage:
    id: int
    sender_type: str
    body: str
    created_at: datetime


@dataclass(frozen=True)
class RuntimeContext:
    business: RuntimeBusiness
    ai_configuration: RuntimeAIConfiguration | None
    catalog_items: tuple[RuntimeCatalogItem, ...]
    knowledge_sources: tuple[RuntimeKnowledgeSource, ...]
    customer: RuntimeCustomer | None
    conversation: RuntimeConversation
    messages: tuple[RuntimeMessage, ...]


@dataclass(frozen=True)
class RuntimeEligibility:
    allowed: bool
    reason: str


RuntimeDecisionAction = Literal["await_provider", "respond", "handoff", "ignore"]


@dataclass(frozen=True)
class RuntimeDecision:
    """A read-only decision made by the provider-agnostic runtime.

    ``response_text`` is absent until an injected future provider supplies a
    response.  This runtime never persists it as a conversation message.
    """

    action: RuntimeDecisionAction
    reason: str
    response_text: str | None = None
