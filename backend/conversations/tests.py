from datetime import timedelta
import json
from unittest.mock import patch

from django.db import IntegrityError, transaction
from django.urls import reverse
from django.test import override_settings
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase

from accounts.models import User
from businesses.models import Business
from businesses.models import WhatsAppIntegration
from customers.models import Customer

from .models import Conversation, Message


DEFAULT_CUSTOMER = object()


class ConversationAPITests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user("owner@example.com", "SecurePassword123!")
        self.other_user = User.objects.create_user("other@example.com", "SecurePassword123!")
        self.no_business_user = User.objects.create_user("none@example.com", "SecurePassword123!")
        self.business = Business.objects.create(owner=self.user, name="Owner Business")
        self.other_business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.customer = self.create_customer()
        self.other_customer = self.create_customer(
            business=self.other_business,
            name="Other Customer",
            phone="+254 799 000 000",
            email="other@example.com",
        )
        self.list_url = reverse("conversation-list-create")

    def authenticate(self, user=None):
        self.client.force_authenticate(user or self.user)

    def create_customer(self, business=None, **overrides):
        return Customer.objects.create(
            business=business or self.business,
            name=overrides.pop("name", "Aisha Mwangi"),
            phone=overrides.pop("phone", "+254 712 345 678"),
            email=overrides.pop("email", "aisha@example.com"),
            **overrides,
        )

    def create_conversation(self, business=None, customer=DEFAULT_CUSTOMER, **overrides):
        return Conversation.objects.create(
            business=business or self.business,
            customer=self.customer if customer is DEFAULT_CUSTOMER else customer,
            channel=overrides.pop("channel", Conversation.Channel.WHATSAPP),
            participant_address=overrides.pop("participant_address", "+254 712 345 678"),
            **overrides,
        )

    def detail_url(self, conversation):
        return reverse("conversation-detail", args=[conversation.pk])

    def messages_url(self, conversation):
        return reverse("conversation-messages", args=[conversation.pk])

    def read_url(self, conversation):
        return reverse("conversation-read", args=[conversation.pk])

    def assert_validation_error(self, response, field):
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn(field, response.data["errors"])

    def test_unauthenticated_endpoints_are_rejected(self):
        conversation = self.create_conversation()
        self.assertEqual(self.client.get(self.list_url).status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.post(self.list_url, {"customer_id": self.customer.pk, "channel": "whatsapp"}, format="json").status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.get(self.detail_url(conversation)).status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.get(self.messages_url(conversation)).status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.post(self.read_url(conversation), {}, format="json").status_code, status.HTTP_401_UNAUTHORIZED)

    def test_create_uses_current_business_and_supports_known_or_unknown_participants(self):
        self.authenticate()
        known = self.client.post(self.list_url, {"customer_id": self.customer.pk, "channel": "whatsapp"}, format="json")
        self.assertEqual(known.status_code, status.HTTP_201_CREATED)
        conversation = Conversation.objects.get(pk=known.data["conversation"]["id"])
        self.assertEqual(conversation.business, self.business)
        self.assertEqual(conversation.customer, self.customer)
        self.assertEqual(conversation.status, Conversation.Status.ACTIVE)
        self.assertEqual(conversation.handling_mode, Conversation.HandlingMode.HUMAN)

        unknown = self.client.post(self.list_url, {"channel": "email", "participant_address": "visitor@example.com"}, format="json")
        self.assertEqual(unknown.status_code, status.HTTP_201_CREATED)
        self.assertIsNone(Conversation.objects.get(pk=unknown.data["conversation"]["id"]).customer)
        self.assert_validation_error(self.client.post(self.list_url, {"channel": "email"}, format="json"), "participant_address")

    def test_business_isolation_and_cross_business_customer_protection(self):
        own = self.create_conversation()
        other = self.create_conversation(business=self.other_business, customer=self.other_customer, participant_address="other")
        self.authenticate()
        self.assertEqual([item["id"] for item in self.client.get(self.list_url).data], [own.pk])
        for url, method, payload in (
            (self.detail_url(other), "get", None),
            (self.detail_url(other), "patch", {"status": "resolved"}),
            (self.messages_url(other), "get", None),
            (self.messages_url(other), "post", {"body": "Hello"}),
            (self.read_url(other), "post", {}),
        ):
            with self.subTest(url=url, method=method):
                response = getattr(self.client, method)(url, payload, format="json") if payload is not None else getattr(self.client, method)(url)
                self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assert_validation_error(
            self.client.post(self.list_url, {"customer_id": self.other_customer.pk, "channel": "whatsapp"}, format="json"),
            "customer_id",
        )

    def test_protected_and_immutable_fields_are_rejected(self):
        conversation = self.create_conversation()
        self.authenticate()
        for field in ("business", "business_id", "owner", "owner_id", "user_id", "unread_count", "last_message_at"):
            with self.subTest(field=field):
                self.assert_validation_error(self.client.post(self.list_url, {"customer_id": self.customer.pk, "channel": "whatsapp", field: 1}, format="json"), field)
        for field in ("business_id", "unread_count", "channel", "participant_address"):
            with self.subTest(field=field):
                self.assert_validation_error(self.client.patch(self.detail_url(conversation), {field: "x"}, format="json"), field)

    def test_choices_customer_change_and_user_without_business(self):
        conversation = self.create_conversation()
        replacement = self.create_customer(name="Replacement", phone="+254 700 000 001", email="replacement@example.com")
        self.authenticate()
        response = self.client.patch(self.detail_url(conversation), {"status": "needs_reply", "handling_mode": "ai", "customer_id": replacement.pk}, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        conversation.refresh_from_db()
        self.assertEqual(conversation.status, "needs_reply")
        self.assertEqual(conversation.handling_mode, "ai")
        self.assertEqual(conversation.customer, replacement)
        for field, value in (("channel", "invalid"), ("status", "invalid"), ("handling_mode", "invalid")):
            with self.subTest(field=field):
                payload = {"channel": value, "participant_address": "x"} if field == "channel" else {field: value}
                response = self.client.post(self.list_url, payload, format="json") if field == "channel" else self.client.patch(self.detail_url(conversation), payload, format="json")
                self.assert_validation_error(response, field)

        self.authenticate(self.no_business_user)
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data["detail"], "Business not found.")

    def test_search_filters_unread_and_ordering_are_business_scoped(self):
        older = self.create_conversation(status="active", handling_mode="human", channel="whatsapp", unread_count=2)
        Message.objects.create(conversation=older, sender_type="customer", body="Need pricing for Nairobi office")
        older.last_message_at = timezone.now() - timedelta(days=1)
        older.save(update_fields=["last_message_at"])
        newer = self.create_conversation(customer=None, participant_address="visitor@example.com", status="needs_reply", handling_mode="ai", channel="email")
        Message.objects.create(conversation=newer, sender_type="ai", body="Welcome visitor")
        newer.last_message_at = timezone.now()
        newer.save(update_fields=["last_message_at"])
        self.create_conversation(business=self.other_business, customer=self.other_customer, participant_address="private@example.com")
        self.authenticate()

        for term, expected in (("aisha", older.pk), ("254 712", older.pk), ("aisha@example", older.pk), ("visitor@example", newer.pk), ("pricing", older.pk)):
            with self.subTest(term=term):
                response = self.client.get(self.list_url, {"search": term})
                self.assertEqual([item["id"] for item in response.data], [expected])
        self.assertEqual(self.client.get(self.list_url, {"search": "private"}).data, [])
        self.assertEqual([item["id"] for item in self.client.get(self.list_url, {"status": "needs_reply"}).data], [newer.pk])
        self.assertEqual([item["id"] for item in self.client.get(self.list_url, {"handling_mode": "ai"}).data], [newer.pk])
        self.assertEqual([item["id"] for item in self.client.get(self.list_url, {"channel": "email"}).data], [newer.pk])
        self.assertEqual([item["id"] for item in self.client.get(self.list_url, {"unread": "true"}).data], [older.pk])
        self.assertEqual([item["id"] for item in self.client.get(self.list_url, {"unread": "false"}).data], [newer.pk])
        self.assertEqual(self.client.get(self.list_url, {"ordering": "last_message_at"}).data[0]["id"], older.pk)
        self.assertEqual(self.client.get(self.list_url, {"ordering": "-last_message_at"}).data[0]["id"], newer.pk)
        for field, value in (("status", "invalid"), ("handling_mode", "invalid"), ("channel", "invalid"), ("unread", "yes"), ("ordering", "customer")):
            with self.subTest(field=field):
                self.assert_validation_error(self.client.get(self.list_url, {field: value}), field)

    def test_messages_are_chronological_human_only_and_update_metadata(self):
        conversation = self.create_conversation(unread_count=4)
        first = Message.objects.create(conversation=conversation, sender_type="customer", body="First")
        second = Message.objects.create(conversation=conversation, sender_type="ai", body="Second")
        self.authenticate()
        listed = self.client.get(self.messages_url(conversation))
        self.assertEqual(listed.status_code, status.HTTP_200_OK)
        self.assertEqual([item["id"] for item in listed.data], [first.pk, second.pk])

        response = self.client.post(self.messages_url(conversation), {"body": "  Human reply  "}, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        message = Message.objects.get(pk=response.data["message"]["id"])
        self.assertEqual(message.sender_type, Message.SenderType.HUMAN)
        self.assertEqual(message.body, "Human reply")
        conversation.refresh_from_db()
        self.assertEqual(conversation.last_message_at, message.created_at)
        self.assertEqual(conversation.unread_count, 4)
        self.assert_validation_error(self.client.post(self.messages_url(conversation), {"body": "   "}, format="json"), "body")
        for sender_type in ("customer", "ai"):
            with self.subTest(sender_type=sender_type):
                self.assert_validation_error(self.client.post(self.messages_url(conversation), {"body": "No", "sender_type": sender_type}, format="json"), "sender_type")

    def test_read_clears_unread_and_sender_history_is_unchanged_by_takeover(self):
        conversation = self.create_conversation(unread_count=5, handling_mode="ai")
        message = Message.objects.create(conversation=conversation, sender_type="ai", body="AI reply")
        self.authenticate()
        response = self.client.post(self.read_url(conversation), {}, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        conversation.refresh_from_db()
        self.assertEqual(conversation.unread_count, 0)
        self.client.patch(self.detail_url(conversation), {"handling_mode": "human"}, format="json")
        message.refresh_from_db()
        self.assertEqual(message.sender_type, Message.SenderType.AI)

    def test_latest_message_is_derived_and_not_a_conversation_model_field(self):
        conversation = self.create_conversation()
        first = Message.objects.create(conversation=conversation, sender_type="customer", body="Old")
        latest = Message.objects.create(conversation=conversation, sender_type="human", body="Newest")
        self.authenticate()
        response = self.client.get(self.list_url)
        self.assertEqual(response.data[0]["latest_message"]["id"], latest.pk)
        self.assertEqual(response.data[0]["latest_message"]["body"], "Newest")
        self.assertNotIn("latest_message", [field.name for field in Conversation._meta.fields])
        self.assertNotEqual(first.pk, latest.pk)

    def test_whatsapp_participant_is_unique_per_business_but_other_channels_can_repeat(self):
        self.create_conversation()
        with self.assertRaises(IntegrityError):
            with transaction.atomic():
                self.create_conversation()

        Conversation.objects.create(
            business=self.business,
            customer=self.customer,
            channel=Conversation.Channel.EMAIL,
            participant_address="+254 712 345 678",
        )
        Conversation.objects.create(
            business=self.business,
            customer=self.customer,
            channel=Conversation.Channel.EMAIL,
            participant_address="+254 712 345 678",
        )

    def test_external_message_id_is_unique_and_existing_messages_remain_supported(self):
        conversation = self.create_conversation()
        message = Message.objects.create(
            conversation=conversation,
            sender_type=Message.SenderType.CUSTOMER,
            body="Inbound enquiry",
            external_message_id="wamid.test-1",
            direction=Message.Direction.INBOUND,
            message_type="text",
            processing_status=Message.ProcessingStatus.PROCESSED,
        )
        self.assertEqual(message.external_message_id, "wamid.test-1")

        with self.assertRaises(IntegrityError):
            with transaction.atomic():
                Message.objects.create(
                    conversation=conversation,
                    sender_type=Message.SenderType.CUSTOMER,
                    body="Duplicate inbound enquiry",
                    external_message_id="wamid.test-1",
                )

        email_conversation = self.create_conversation(
            channel=Conversation.Channel.EMAIL,
            participant_address="visitor@example.com",
        )
        legacy_message = Message.objects.create(
            conversation=email_conversation,
            sender_type=Message.SenderType.HUMAN,
            body="Existing email message",
        )
        self.assertIsNone(legacy_message.external_message_id)


@override_settings(
    META_WHATSAPP_GRAPH_API_BASE_URL="https://graph.facebook.test",
    META_WHATSAPP_GRAPH_API_VERSION="v23.0",
    META_WHATSAPP_HTTP_TIMEOUT_SECONDS=7,
)
class WhatsAppReplyTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user("reply-owner@example.com", "SecurePassword123!")
        self.other_user = User.objects.create_user("reply-other@example.com", "SecurePassword123!")
        self.business = Business.objects.create(owner=self.user, name="Reply Business")
        self.other_business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.customer = Customer.objects.create(
            business=self.business,
            name="Aisha",
            phone="+254700000000",
            phone_e164="+254700000000",
            source=Customer.Source.WHATSAPP,
        )
        self.conversation = Conversation.objects.create(
            business=self.business,
            customer=self.customer,
            channel=Conversation.Channel.WHATSAPP,
            participant_address="+254700000000",
        )
        self.other_conversation = Conversation.objects.create(
            business=self.other_business,
            channel=Conversation.Channel.EMAIL,
            participant_address="other@example.com",
        )
        self.integration = WhatsAppIntegration.objects.create(
            business=self.business,
            meta_business_account_id="meta-business-reply",
            phone_number_id="phone-number-reply",
            access_token_env_var="TEST_META_ACCESS_TOKEN",
            webhook_verify_token_env_var="TEST_META_VERIFY_TOKEN",
            is_enabled=True,
        )
        self.url = reverse("whatsapp-reply", args=[self.conversation.pk])

    def authenticate(self, user=None):
        self.client.force_authenticate(user=user or self.user)

    def meta_response(self, message_id="wamid.outbound-1"):
        return type(
            "MetaResponse",
            (),
            {"read": lambda self: json.dumps({"messages": [{"id": message_id}]}).encode(),
             "__enter__": lambda self: self,
             "__exit__": lambda self, *args: None},
        )()

    @patch.dict("os.environ", {"TEST_META_ACCESS_TOKEN": "server-token"}, clear=False)
    @patch("businesses.whatsapp_outbound.urlopen")
    def test_authenticated_business_user_sends_and_persists_outbound_reply(self, mock_urlopen):
        mock_urlopen.return_value = self.meta_response()
        self.authenticate()

        response = self.client.post(self.url, {"body": "  Hello from Sokoos  "}, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        mock_urlopen.assert_called_once()
        request = mock_urlopen.call_args.args[0]
        timeout = mock_urlopen.call_args.kwargs["timeout"]
        self.assertEqual(request.full_url, "https://graph.facebook.test/v23.0/phone-number-reply/messages")
        self.assertEqual(timeout, 7)
        self.assertEqual(request.get_header("Authorization"), "Bearer server-token")
        payload = json.loads(request.data)
        self.assertEqual(payload["to"], "+254700000000")
        self.assertEqual(payload["messaging_product"], "whatsapp")
        self.assertEqual(payload["text"]["body"], "Hello from Sokoos")

        message = Message.objects.get()
        self.assertEqual(message.external_message_id, "wamid.outbound-1")
        self.assertEqual(message.sender_type, Message.SenderType.HUMAN)
        self.assertEqual(message.direction, Message.Direction.OUTBOUND)
        self.assertEqual(message.delivery_status, Message.DeliveryStatus.SENT)
        self.assertNotIn("server-token", str(response.data))

    @patch.dict("os.environ", {"TEST_META_ACCESS_TOKEN": "secret-token"}, clear=False)
    @patch("businesses.whatsapp_outbound.urlopen", side_effect=OSError("provider unavailable"))
    def test_meta_failure_does_not_persist_outbound_message_or_expose_credentials(self, mock_urlopen):
        self.authenticate()

        response = self.client.post(self.url, {"body": "Hello"}, format="json")

        self.assertEqual(response.status_code, status.HTTP_502_BAD_GATEWAY)
        self.assertEqual(Message.objects.count(), 0)
        self.assertNotIn("secret-token", str(response.data))
        mock_urlopen.assert_called_once()

    def test_other_business_conversation_is_not_accessible(self):
        self.authenticate()

        response = self.client.post(
            reverse("whatsapp-reply", args=[self.other_conversation.pk]),
            {"body": "No access"},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(Message.objects.count(), 0)

    def test_non_whatsapp_conversation_is_rejected(self):
        email_conversation = Conversation.objects.create(
            business=self.business,
            customer=None,
            channel=Conversation.Channel.EMAIL,
            participant_address="email@example.com",
        )
        self.authenticate()

        response = self.client.post(
            reverse("whatsapp-reply", args=[email_conversation.pk]),
            {"body": "Not WhatsApp"},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Message.objects.count(), 0)

    def test_empty_message_is_rejected_without_calling_meta(self):
        self.authenticate()
        with patch("businesses.whatsapp_outbound.urlopen") as mock_urlopen:
            response = self.client.post(self.url, {"body": "   "}, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertEqual(Message.objects.count(), 0)
        mock_urlopen.assert_not_called()
