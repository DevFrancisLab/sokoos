from datetime import timedelta

from django.urls import reverse
from django.utils import timezone
from rest_framework import status
from rest_framework.test import APITestCase

from accounts.models import User
from businesses.models import Business
from customers.models import Customer

from .models import Conversation, Message


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

    def create_conversation(self, business=None, customer=None, **overrides):
        return Conversation.objects.create(
            business=business or self.business,
            customer=customer if customer is not None else self.customer,
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
