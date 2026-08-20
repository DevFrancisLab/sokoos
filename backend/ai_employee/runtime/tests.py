from datetime import timedelta
from unittest.mock import patch

from django.test import TestCase
from django.utils import timezone

from accounts.models import User
from businesses.models import Business
from catalog.models import CatalogItem, CatalogMedia, Category
from conversations.models import Conversation, Message
from customers.models import Customer

from ..models import AIEmployeeConfiguration, KnowledgeSource
from .execution import RuntimeExecutor
from .providers import ProviderResult
from .services import RuntimeContextError, build_runtime_context, get_runtime_eligibility


class RecordingProvider:
    """A test-only provider boundary recorder; it generates no text."""

    def __init__(self):
        self.contexts = []

    def generate(self, context):
        self.contexts.append(context)
        return ProviderResult()


class RuntimeContextTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user("runtime-owner@example.com", "SecurePassword123!")
        self.other_user = User.objects.create_user("runtime-other@example.com", "SecurePassword123!")
        self.business = Business.objects.create(
            owner=self.user,
            name="Runtime Business",
            description="Helpful customer service.",
            phone="+254 700 000000",
            email="hello@runtime.example",
            location="Nairobi",
        )
        self.other_business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.customer = Customer.objects.create(
            business=self.business,
            name="Aisha Customer",
            phone="+254 711 000000",
            email="aisha@example.com",
            company="Aisha Ltd",
            notes="Prefers morning delivery.",
            relationship=Customer.Relationship.CUSTOMER,
            source=Customer.Source.WEBSITE,
        )
        self.conversation = Conversation.objects.create(
            business=self.business,
            customer=self.customer,
            channel=Conversation.Channel.WEBSITE,
            participant_address="aisha@example.com",
            handling_mode=Conversation.HandlingMode.AI,
            status=Conversation.Status.NEEDS_REPLY,
            unread_count=2,
        )
        self.configuration = AIEmployeeConfiguration.objects.create(
            business=self.business,
            primary_language="English",
            supported_languages=["English", "Kiswahili"],
            personality=AIEmployeeConfiguration.Personality.WARM,
            writing_style_options={"use_emojis": True},
            business_context={"vision": "Build trust"},
        )
        self.category = Category.objects.create(business=self.business, name="Services")
        self.item = CatalogItem.objects.create(
            business=self.business,
            category=self.category,
            name="Consultation",
            item_type=CatalogItem.ItemType.SERVICE,
            description="One hour consultation.",
            price="100.00",
            currency=CatalogItem.Currency.KES,
            availability=CatalogItem.Availability.BY_APPOINTMENT,
            tags=["advice"],
            appointment_required=True,
            service_duration_minutes=60,
            faq_items=[{"question": "How long?", "answer": "One hour"}],
        )
        CatalogMedia.objects.create(
            catalog_item=self.item,
            file="catalog/runtime/consultation.jpg",
            original_name="consultation.jpg",
            mime_type="image/jpeg",
            alt_text="Consultation",
            is_thumbnail=True,
        )
        self.faq = KnowledgeSource.objects.create(
            business=self.business,
            kind=KnowledgeSource.Kind.FAQ,
            title="Pricing FAQ",
            faq_question="What does it cost?",
            faq_answer="KES 100.",
            faq_category=KnowledgeSource.FAQCategory.PRICING,
        )
        self.document = KnowledgeSource.objects.create(
            business=self.business,
            kind=KnowledgeSource.Kind.DOCUMENT,
            title="Terms",
            file="ai_knowledge/runtime/terms.txt",
            original_name="terms.txt",
            mime_type="text/plain",
            file_size=42,
        )
        self.website = KnowledgeSource.objects.create(
            business=self.business,
            kind=KnowledgeSource.Kind.WEBSITE,
            title="Website",
            url="https://example.com/pricing",
            instructions="Use this for pricing context.",
        )
        first = Message.objects.create(
            conversation=self.conversation,
            sender_type=Message.SenderType.CUSTOMER,
            body="Hello",
        )
        second = Message.objects.create(
            conversation=self.conversation,
            sender_type=Message.SenderType.HUMAN,
            body="How can I help?",
        )
        created_at = timezone.now()
        Message.objects.filter(pk=first.pk).update(created_at=created_at)
        Message.objects.filter(pk=second.pk).update(created_at=created_at + timedelta(seconds=1))

    def build_context(self):
        return build_runtime_context(conversation=self.conversation)

    def test_builds_safe_context_from_canonical_business_data(self):
        context = self.build_context()

        self.assertEqual(context.business.id, self.business.pk)
        self.assertEqual(context.business.name, "Runtime Business")
        self.assertEqual(context.ai_configuration.personality, "Warm")
        self.assertEqual(context.customer.id, self.customer.pk)
        self.assertEqual(context.conversation.id, self.conversation.pk)
        self.assertEqual([message.body for message in context.messages], ["Hello", "How can I help?"])
        self.assertEqual(len(context.catalog_items), 1)
        self.assertEqual(context.catalog_items[0].category_name, "Services")
        self.assertEqual(context.catalog_items[0].media[0].original_name, "consultation.jpg")
        self.assertEqual([source.id for source in context.knowledge_sources], [self.faq.pk, self.document.pk, self.website.pk])

    def test_context_is_business_scoped_and_rejects_invalid_relationships(self):
        other_category = Category.objects.create(business=self.other_business, name="Other")
        other_item = CatalogItem.objects.create(
            business=self.other_business,
            category=other_category,
            name="Other service",
            item_type=CatalogItem.ItemType.SERVICE,
            description="Other description",
            price="1.00",
        )
        other_source = KnowledgeSource.objects.create(
            business=self.other_business,
            kind=KnowledgeSource.Kind.FAQ,
            title="Other FAQ",
            faq_question="Other?",
            faq_answer="Other.",
        )
        other_customer = Customer.objects.create(business=self.other_business, name="Other customer")
        other_conversation = Conversation.objects.create(
            business=self.other_business,
            customer=other_customer,
            channel=Conversation.Channel.EMAIL,
            participant_address="other@example.com",
        )
        Message.objects.create(
            conversation=other_conversation,
            sender_type=Message.SenderType.CUSTOMER,
            body="Other business message",
        )
        context = self.build_context()
        self.assertNotIn(other_item.pk, [item.id for item in context.catalog_items])
        self.assertNotIn(other_source.pk, [source.id for source in context.knowledge_sources])
        self.assertNotEqual(context.customer.id, other_customer.pk)
        self.assertNotIn("Other business message", [message.body for message in context.messages])

        self.conversation.customer = other_customer
        with self.assertRaises(RuntimeContextError):
            self.build_context()

    def test_context_does_not_mutate_domain_objects_or_include_runtime_secrets(self):
        before = {
            "conversation": (self.conversation.status, self.conversation.handling_mode, self.conversation.unread_count),
            "configuration": (self.configuration.is_enabled, self.configuration.business_context.copy()),
            "messages": list(Message.objects.filter(conversation=self.conversation).values_list("id", "body", "sender_type")),
        }
        context = self.build_context()
        context.ai_configuration.business_context["vision"] = "Changed only in context"

        self.conversation.refresh_from_db()
        self.configuration.refresh_from_db()
        self.assertEqual(
            (self.conversation.status, self.conversation.handling_mode, self.conversation.unread_count),
            before["conversation"],
        )
        self.assertEqual((self.configuration.is_enabled, self.configuration.business_context), before["configuration"])
        self.assertEqual(
            list(Message.objects.filter(conversation=self.conversation).values_list("id", "body", "sender_type")),
            before["messages"],
        )
        forbidden = {"password", "token", "api_key", "credential", "secret", "webhook"}
        for value in (context.business, context.ai_configuration, context.customer, context.conversation):
            self.assertTrue(forbidden.isdisjoint(value.__dataclass_fields__))

    def test_documents_and_websites_expose_only_existing_stored_metadata(self):
        sources = {source.kind: source for source in self.build_context().knowledge_sources}

        self.assertEqual(sources["document"].document_original_name, "terms.txt")
        self.assertEqual(sources["website"].website_url, "https://example.com/pricing")
        for source in sources.values():
            self.assertFalse(hasattr(source, "extracted_content"))
            self.assertFalse(hasattr(source, "crawled"))
            self.assertFalse(hasattr(source, "indexed"))
            self.assertFalse(hasattr(source, "synchronized"))

    def test_eligibility_is_deterministic_and_read_only(self):
        context = self.build_context()
        self.assertEqual(get_runtime_eligibility(context).allowed, True)

        self.configuration.is_enabled = False
        self.configuration.save(update_fields=["is_enabled"])
        disabled = get_runtime_eligibility(self.build_context())
        self.assertEqual((disabled.allowed, disabled.reason), (False, "AI Employee is disabled."))

        self.configuration.is_enabled = True
        self.configuration.save(update_fields=["is_enabled"])
        self.conversation.handling_mode = Conversation.HandlingMode.HUMAN
        self.conversation.save(update_fields=["handling_mode"])
        human = get_runtime_eligibility(self.build_context())
        self.assertEqual((human.allowed, human.reason), (False, "Conversation is not in AI handling mode."))

        self.conversation.handling_mode = Conversation.HandlingMode.AI
        self.conversation.status = Conversation.Status.RESOLVED
        self.conversation.save(update_fields=["handling_mode", "status"])
        resolved = get_runtime_eligibility(self.build_context())
        self.assertEqual((resolved.allowed, resolved.reason), (False, "Conversation is resolved."))

    def test_executor_reaches_provider_boundary_without_creating_a_message(self):
        provider = RecordingProvider()
        before_messages = list(
            Message.objects.filter(conversation=self.conversation).values_list(
                "id", "sender_type", "body"
            )
        )
        before_conversation = (
            self.conversation.status,
            self.conversation.handling_mode,
            self.conversation.last_message_at,
        )

        decision = RuntimeExecutor(provider).execute(conversation=self.conversation)

        self.assertEqual((decision.action, decision.response_text), ("await_provider", None))
        self.assertEqual(len(provider.contexts), 1)
        context = provider.contexts[0]
        self.assertEqual(context.business.id, self.business.pk)
        self.assertEqual([item.id for item in context.catalog_items], [self.item.pk])
        self.assertEqual(
            [source.id for source in context.knowledge_sources],
            [self.faq.pk, self.document.pk, self.website.pk],
        )
        self.assertEqual(
            list(Message.objects.filter(conversation=self.conversation).values_list("id", "sender_type", "body")),
            before_messages,
        )
        self.conversation.refresh_from_db()
        self.assertEqual(
            (self.conversation.status, self.conversation.handling_mode, self.conversation.last_message_at),
            before_conversation,
        )

    def test_executor_hands_off_human_conversations_without_calling_provider(self):
        self.conversation.handling_mode = Conversation.HandlingMode.HUMAN
        self.conversation.save(update_fields=["handling_mode"])
        provider = RecordingProvider()

        decision = RuntimeExecutor(provider).execute(conversation=self.conversation)

        self.assertEqual(
            (decision.action, decision.reason, decision.response_text),
            ("handoff", "Conversation is not in AI handling mode.", None),
        )
        self.assertEqual(provider.contexts, [])

    def test_executor_ignores_resolved_conversations_without_calling_provider(self):
        self.conversation.status = Conversation.Status.RESOLVED
        self.conversation.save(update_fields=["status"])
        provider = RecordingProvider()

        decision = RuntimeExecutor(provider).execute(conversation=self.conversation)

        self.assertEqual(
            (decision.action, decision.reason, decision.response_text),
            ("ignore", "Conversation is resolved.", None),
        )
        self.assertEqual(provider.contexts, [])

    def test_executor_hands_off_when_configuration_is_missing_or_disabled(self):
        self.configuration.delete()
        missing = RuntimeExecutor().execute(conversation=self.conversation)
        self.assertEqual(
            (missing.action, missing.reason),
            ("handoff", "AI Employee configuration is not available."),
        )

        self.configuration = AIEmployeeConfiguration.objects.create(business=self.business)
        self.configuration.is_enabled = False
        self.configuration.save(update_fields=["is_enabled"])
        disabled = RuntimeExecutor().execute(conversation=self.conversation)
        self.assertEqual(
            (disabled.action, disabled.reason),
            ("handoff", "AI Employee is disabled."),
        )

    def test_executor_preserves_business_isolation_and_rejects_cross_business_customers(self):
        other_category = Category.objects.create(business=self.other_business, name="Other executor category")
        other_item = CatalogItem.objects.create(
            business=self.other_business,
            category=other_category,
            name="Other executor service",
            item_type=CatalogItem.ItemType.SERVICE,
            description="Other description",
            price="1.00",
        )
        other_source = KnowledgeSource.objects.create(
            business=self.other_business,
            kind=KnowledgeSource.Kind.FAQ,
            title="Other executor FAQ",
            faq_question="Other?",
            faq_answer="Other.",
        )
        provider = RecordingProvider()

        RuntimeExecutor(provider).execute(conversation=self.conversation)

        context = provider.contexts[0]
        self.assertNotIn(other_item.pk, [item.id for item in context.catalog_items])
        self.assertNotIn(other_source.pk, [source.id for source in context.knowledge_sources])
        other_customer = Customer.objects.create(business=self.other_business, name="Other executor customer")
        self.conversation.customer = other_customer
        with self.assertRaises(RuntimeContextError):
            RuntimeExecutor().execute(conversation=self.conversation)

    def test_executor_without_provider_makes_no_network_call(self):
        with patch("socket.create_connection", side_effect=AssertionError("Network call attempted")):
            decision = RuntimeExecutor().execute(conversation=self.conversation)

        self.assertEqual((decision.action, decision.response_text), ("await_provider", None))
