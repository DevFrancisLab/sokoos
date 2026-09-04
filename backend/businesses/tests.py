from io import BytesIO
import hashlib
import hmac
import json

from django.core.files.uploadedfile import SimpleUploadedFile
from django.db import IntegrityError
from django.test import override_settings
from django.urls import reverse
from PIL import Image
from rest_framework import status
from rest_framework.test import APITestCase

from accounts.models import User
from conversations.models import Conversation, Message
from customers.models import Customer

from .models import Business, WhatsAppIntegration


class CurrentBusinessViewTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="owner@example.com",
            password="SecurePassword123!",
        )
        self.other_user = User.objects.create_user(
            email="other@example.com",
            password="SecurePassword123!",
        )
        self.url = reverse("current-business")
        self.payload = {
            "name": "Sokoos Internet",
            "description": "Reliable connectivity for local businesses.",
            "phone": "+254 20 3949 0101",
            "email": "support@sokoos.example",
            "location": "Nairobi, Kenya",
        }

    def authenticate(self, user=None):
        self.client.force_authenticate(user=user or self.user)

    def create_business(self, **overrides):
        return Business.objects.create(owner=self.user, **{**self.payload, **overrides})

    def test_authenticated_user_can_create_a_business_owned_by_request_user(self):
        self.authenticate()

        response = self.client.post(self.url, self.payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        business = Business.objects.get()
        self.assertEqual(business.owner, self.user)
        self.assertEqual(business.name, self.payload["name"])
        self.assertTrue(business.is_active)

    def test_client_cannot_assign_another_user_as_owner(self):
        self.authenticate()

        for field in ("owner", "owner_id", "user_id"):
            with self.subTest(field=field):
                response = self.client.post(
                    self.url,
                    {**self.payload, field: self.other_user.id},
                    format="json",
                )

                self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
                self.assertIn(field, response.data["errors"])
                self.assertFalse(Business.objects.exists())

    def test_authenticated_user_can_retrieve_their_business(self):
        business = self.create_business()
        self.authenticate()

        response = self.client.get(self.url)

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["id"], business.id)
        self.assertNotIn("owner", response.data)

    def test_user_without_business_receives_not_found(self):
        self.authenticate()

        response = self.client.get(self.url)

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_authenticated_user_can_update_their_business(self):
        business = self.create_business()
        self.authenticate()

        response = self.client.patch(
            self.url,
            {"name": "Sokoos Fibre", "location": "Westlands, Nairobi"},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        business.refresh_from_db()
        self.assertEqual(business.name, "Sokoos Fibre")
        self.assertEqual(business.location, "Westlands, Nairobi")

    def test_owner_and_active_state_cannot_be_changed(self):
        business = self.create_business()
        self.authenticate()

        response = self.client.patch(
            self.url,
            {"owner": self.other_user.id, "is_active": False},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        business.refresh_from_db()
        self.assertEqual(business.owner, self.user)
        self.assertTrue(business.is_active)

    def test_unauthenticated_requests_are_rejected(self):
        self.assertEqual(self.client.get(self.url).status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.post(self.url, self.payload, format="json").status_code, status.HTTP_401_UNAUTHORIZED)
        self.assertEqual(self.client.patch(self.url, {"name": "Changed"}, format="json").status_code, status.HTTP_401_UNAUTHORIZED)

    def test_user_cannot_retrieve_or_modify_another_users_business(self):
        other_business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.authenticate(self.user)

        get_response = self.client.get(self.url)
        patch_response = self.client.patch(self.url, {"name": "Attempted change"}, format="json")

        self.assertEqual(get_response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(patch_response.status_code, status.HTTP_404_NOT_FOUND)
        other_business.refresh_from_db()
        self.assertEqual(other_business.name, "Other Business")

    def test_no_arbitrary_business_lookup_endpoint_exists(self):
        business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.authenticate(self.user)

        response = self.client.get(f"/api/business/{business.id}/")

        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)

    def test_duplicate_business_creation_returns_conflict_and_does_not_create_another_row(self):
        self.create_business()
        self.authenticate()

        response = self.client.post(self.url, self.payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_409_CONFLICT)
        self.assertEqual(Business.objects.filter(owner=self.user).count(), 1)

    def test_blank_name_and_invalid_email_are_rejected(self):
        self.authenticate()

        blank_name_response = self.client.post(self.url, {**self.payload, "name": "   "}, format="json")
        invalid_email_response = self.client.post(self.url, {**self.payload, "email": "not-an-email"}, format="json")

        self.assertEqual(blank_name_response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("name", blank_name_response.data["errors"])
        self.assertEqual(invalid_email_response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("email", invalid_email_response.data["errors"])

    def test_oversized_and_invalid_logo_inputs_are_rejected(self):
        self.authenticate()
        source = BytesIO()
        Image.new("RGB", (20, 20), "green").save(source, format="JPEG")
        oversized_logo = SimpleUploadedFile(
            "logo.jpg",
            source.getvalue() + (b"0" * (5 * 1024 * 1024)),
            content_type="image/jpeg",
        )

        oversized_response = self.client.post(
            self.url,
            {**self.payload, "logo": oversized_logo},
            format="multipart",
        )
        invalid_logo = SimpleUploadedFile("logo.txt", b"not an image", content_type="text/plain")
        invalid_response = self.client.post(
            self.url,
            {**self.payload, "logo": invalid_logo},
            format="multipart",
        )

        self.assertEqual(oversized_response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("logo", oversized_response.data["errors"])
        self.assertEqual(invalid_response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("logo", invalid_response.data["errors"])


class CurrentWhatsAppIntegrationViewTests(APITestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="whatsapp-owner@example.com",
            password="SecurePassword123!",
        )
        self.other_user = User.objects.create_user(
            email="whatsapp-other@example.com",
            password="SecurePassword123!",
        )
        self.business = Business.objects.create(owner=self.user, name="Sokoos Internet")
        self.other_business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.url = reverse("current-whatsapp-integration")
        self.payload = {
            "meta_business_account_id": "meta-business-123",
            "phone_number_id": "meta-phone-123",
            "access_token_env_var": "SOKOOS_META_ACCESS_TOKEN",
            "webhook_verify_token_env_var": "SOKOOS_META_VERIFY_TOKEN",
            "is_enabled": True,
        }

    def authenticate(self, user=None):
        self.client.force_authenticate(user=user or self.user)

    def test_authenticated_business_owner_can_create_integration_without_serializing_secret_references(self):
        self.authenticate()

        response = self.client.post(self.url, self.payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        integration = WhatsAppIntegration.objects.get()
        self.assertEqual(integration.business, self.business)
        self.assertEqual(integration.phone_number_id, self.payload["phone_number_id"])
        serialized = response.data["whatsapp_integration"]
        self.assertNotIn("access_token_env_var", serialized)
        self.assertNotIn("webhook_verify_token_env_var", serialized)
        self.assertNotIn("SOKOOS_META_ACCESS_TOKEN", str(response.data))
        self.assertNotIn("SOKOOS_META_VERIFY_TOKEN", str(response.data))

    def test_unauthenticated_requests_are_rejected(self):
        self.assertEqual(self.client.post(self.url, self.payload, format="json").status_code, status.HTTP_401_UNAUTHORIZED)

    def test_integration_is_scoped_to_authenticated_business(self):
        integration = WhatsAppIntegration.objects.create(
            business=self.business,
            meta_business_account_id="meta-business-123",
            phone_number_id="meta-phone-123",
            access_token_env_var="SOKOOS_META_ACCESS_TOKEN",
            webhook_verify_token_env_var="SOKOOS_META_VERIFY_TOKEN",
        )
        self.authenticate(self.other_user)

        get_response = self.client.get(self.url)
        patch_response = self.client.patch(self.url, {"is_enabled": True}, format="json")

        self.assertEqual(get_response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(patch_response.status_code, status.HTTP_404_NOT_FOUND)
        integration.refresh_from_db()
        self.assertFalse(integration.is_enabled)

    def test_meta_phone_number_id_is_globally_unique(self):
        WhatsAppIntegration.objects.create(
            business=self.other_business,
            meta_business_account_id="other-meta-business",
            phone_number_id=self.payload["phone_number_id"],
            access_token_env_var="OTHER_META_ACCESS_TOKEN",
            webhook_verify_token_env_var="OTHER_META_VERIFY_TOKEN",
        )
        self.authenticate()

        response = self.client.post(self.url, self.payload, format="json")

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("phone_number_id", response.data["errors"])

    def test_secret_reference_names_are_validated(self):
        self.authenticate()

        response = self.client.post(
            self.url,
            {**self.payload, "access_token_env_var": "not-a-secret-reference"},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn("access_token_env_var", response.data["errors"])

    def test_post_updates_existing_integration_using_server_defaults(self):
        integration = WhatsAppIntegration.objects.create(
            business=self.business,
            meta_business_account_id="old-meta-business",
            phone_number_id="old-meta-phone",
            access_token_env_var="OLD_ACCESS_TOKEN",
            webhook_verify_token_env_var="OLD_VERIFY_TOKEN",
            is_enabled=False,
        )
        self.authenticate()

        response = self.client.post(
            self.url,
            {"meta_business_account_id": "new-meta-business", "phone_number_id": "new-meta-phone"},
            format="json",
        )

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        integration.refresh_from_db()
        self.assertEqual(integration.meta_business_account_id, "new-meta-business")
        self.assertEqual(integration.phone_number_id, "new-meta-phone")
        self.assertEqual(integration.access_token_env_var, "OLD_ACCESS_TOKEN")

    def test_disabling_integration_preserves_configuration(self):
        integration = WhatsAppIntegration.objects.create(
            business=self.business,
            meta_business_account_id="meta-business-123",
            phone_number_id="meta-phone-123",
            access_token_env_var="SOKOOS_META_ACCESS_TOKEN",
            webhook_verify_token_env_var="SOKOOS_META_VERIFY_TOKEN",
            is_enabled=True,
        )
        self.authenticate()

        response = self.client.patch(self.url, {"is_enabled": False}, format="json")

        self.assertEqual(response.status_code, status.HTTP_200_OK)
        integration.refresh_from_db()
        self.assertFalse(integration.is_enabled)
        self.assertTrue(WhatsAppIntegration.objects.filter(pk=integration.pk).exists())


@override_settings(
    META_WHATSAPP_APP_SECRET="test-meta-app-secret",
    META_WHATSAPP_WEBHOOK_VERIFY_TOKEN="test-webhook-token",
)
class WhatsAppWebhookViewTests(APITestCase):
    def signature_for(self, body, secret="test-meta-app-secret"):
        digest = hmac.new(secret.encode(), body, hashlib.sha256).hexdigest()
        return f"sha256={digest}"

    def test_valid_get_verification_returns_exact_challenge(self):
        response = self.client.get(
            self.url,
            {
                "hub.mode": "subscribe",
                "hub.verify_token": "test-webhook-token",
                "hub.challenge": "challenge-123",
            },
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b"challenge-123")
        self.assertEqual(response["Content-Type"], "text/plain")

    def test_invalid_get_verification_requests_are_forbidden(self):
        cases = [
            {"hub.mode": "subscribe", "hub.verify_token": "wrong", "hub.challenge": "challenge"},
            {"hub.mode": "not_subscribe", "hub.verify_token": "test-webhook-token", "hub.challenge": "challenge"},
            {"hub.mode": "subscribe", "hub.verify_token": "test-webhook-token"},
        ]
        for query in cases:
            with self.subTest(query=query):
                self.assertEqual(self.client.get(self.url, query).status_code, 403)

    def test_correct_signature_for_exact_raw_body_returns_ok(self):
        response = self.client.post(
            self.url,
            data=self.payload,
            content_type="application/json",
            HTTP_X_HUB_SIGNATURE_256=self.signature_for(self.payload),
        )

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.content, b"")

    def test_invalid_missing_and_wrong_secret_signatures_are_forbidden(self):
        cases = [
            {},
            {"HTTP_X_HUB_SIGNATURE_256": "sha256=invalid"},
            {"HTTP_X_HUB_SIGNATURE_256": self.signature_for(self.payload, "wrong-secret")},
        ]
        for headers in cases:
            with self.subTest(headers=headers):
                response = self.client.post(
                    self.url,
                    data=self.payload,
                    content_type="application/json",
                    **headers,
                )
                self.assertEqual(response.status_code, 403)

    def test_valid_signature_with_malformed_json_returns_bad_request(self):
        body = b'{"object":'
        response = self.client.post(
            self.url,
            data=body,
            content_type="application/json",
            HTTP_X_HUB_SIGNATURE_256=self.signature_for(body),
        )

        self.assertEqual(response.status_code, 400)

    def test_webhook_never_returns_configured_secrets(self):
        response = self.client.post(
            self.url,
            data=json.dumps({"object": "whatsapp_business_account"}).encode(),
            content_type="application/json",
            HTTP_X_HUB_SIGNATURE_256=self.signature_for(b'{"object": "whatsapp_business_account"}'),
        )

        self.assertNotIn("test-meta-app-secret", response.content.decode())
        self.assertNotIn("test-webhook-token", response.content.decode())

    def setUp(self):
        super().setUp()
        self.url = reverse("whatsapp-webhook")
        self.payload = b'{"object":"whatsapp_business_account","entry":[]}'
        self.user = User.objects.create_user("w3-owner@example.com", "SecurePassword123!")
        self.other_user = User.objects.create_user("w3-other@example.com", "SecurePassword123!")
        self.business = Business.objects.create(owner=self.user, name="W3 Business")
        self.other_business = Business.objects.create(owner=self.other_user, name="Other Business")
        WhatsAppIntegration.objects.create(
            business=self.business,
            meta_business_account_id="meta-business-w3",
            phone_number_id="meta-phone-w3",
            access_token_env_var="META_ACCESS_TOKEN_W3",
            webhook_verify_token_env_var="META_VERIFY_TOKEN_W3",
            is_enabled=True,
        )

    def send_payload(self, payload):
        body = json.dumps(payload, separators=(",", ":")).encode()
        return self.client.post(
            self.url,
            data=body,
            content_type="application/json",
            HTTP_X_HUB_SIGNATURE_256=self.signature_for(body),
        )

    def inbound_payload(self, message_id="wamid.w3-1", sender="+254700000000", body="Need pricing"):
        return {
            "object": "whatsapp_business_account",
            "entry": [{
                "changes": [{
                    "value": {
                        "metadata": {"phone_number_id": "meta-phone-w3"},
                        "contacts": [{"profile": {"name": "Aisha Mwangi"}}],
                        "messages": [{
                            "from": sender,
                            "id": message_id,
                            "timestamp": "1725000000",
                            "type": "text",
                            "text": {"body": body},
                        }],
                    },
                }],
            }],
        }

    def test_known_phone_number_routes_to_the_correct_business_and_persists_message(self):
        response = self.send_payload(self.inbound_payload())

        self.assertEqual(response.status_code, 200)
        customer = Customer.objects.get()
        conversation = Conversation.objects.get()
        message = Message.objects.get()
        self.assertEqual(customer.business, self.business)
        self.assertEqual(customer.phone_e164, "+254700000000")
        self.assertEqual(customer.source, Customer.Source.WHATSAPP)
        self.assertEqual(conversation.business, self.business)
        self.assertEqual(conversation.customer, customer)
        self.assertEqual(conversation.channel, Conversation.Channel.WHATSAPP)
        self.assertEqual(conversation.participant_address, "+254700000000")
        self.assertEqual(message.conversation, conversation)
        self.assertEqual(message.sender_type, Message.SenderType.CUSTOMER)
        self.assertEqual(message.direction, Message.Direction.INBOUND)
        self.assertEqual(message.external_message_id, "wamid.w3-1")
        self.assertEqual(message.message_type, "text")
        self.assertEqual(message.body, "Need pricing")
        self.assertEqual(message.provider_timestamp.year, 2024)
        self.assertEqual(message.provider_metadata["sender_wa_id"], "+254700000000")

    def test_unknown_phone_number_id_does_not_create_data(self):
        payload = self.inbound_payload()
        payload["entry"][0]["changes"][0]["value"]["metadata"]["phone_number_id"] = "unknown"

        response = self.send_payload(payload)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Customer.objects.count(), 0)
        self.assertEqual(Conversation.objects.count(), 0)
        self.assertEqual(Message.objects.count(), 0)

    def test_existing_normalized_customer_and_conversation_are_reused(self):
        customer = Customer.objects.create(
            business=self.business,
            name="Existing Aisha",
            phone="254700000000",
            phone_e164="+254700000000",
            source=Customer.Source.WHATSAPP,
        )
        conversation = Conversation.objects.create(
            business=self.business,
            customer=customer,
            channel=Conversation.Channel.WHATSAPP,
            participant_address="+254700000000",
        )

        first = self.send_payload(self.inbound_payload(message_id="wamid.w3-2", sender="254700000000"))
        second = self.send_payload(self.inbound_payload(message_id="wamid.w3-3", sender="0700000000"))

        self.assertEqual((first.status_code, second.status_code), (200, 200))
        self.assertEqual(Customer.objects.count(), 1)
        self.assertEqual(Conversation.objects.count(), 1)
        self.assertEqual(Message.objects.count(), 2)

    def test_duplicate_wamid_does_not_create_customer_conversation_or_message(self):
        first = self.send_payload(self.inbound_payload(message_id="wamid.duplicate"))
        second = self.send_payload(self.inbound_payload(message_id="wamid.duplicate"))

        self.assertEqual((first.status_code, second.status_code), (200, 200))
        self.assertEqual(Customer.objects.count(), 1)
        self.assertEqual(Conversation.objects.count(), 1)
        self.assertEqual(Message.objects.count(), 1)

    def test_invalid_sender_does_not_create_data(self):
        response = self.send_payload(self.inbound_payload(sender="not-a-phone"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Customer.objects.count(), 0)
        self.assertEqual(Conversation.objects.count(), 0)
        self.assertEqual(Message.objects.count(), 0)

    def test_unsupported_and_status_only_events_are_acknowledged_without_persistence(self):
        unsupported = self.inbound_payload()
        message = unsupported["entry"][0]["changes"][0]["value"]["messages"][0]
        message["type"] = "image"
        message.pop("text")
        status_only = {"object": "whatsapp_business_account", "entry": [{"changes": [{"value": {"statuses": []}}]}]}

        self.assertEqual(self.send_payload(unsupported).status_code, 200)
        self.assertEqual(self.send_payload(status_only).status_code, 200)
        self.assertEqual(Message.objects.count(), 0)

    def test_sender_cannot_route_data_to_another_business(self):
        other_customer = Customer.objects.create(
            business=self.other_business,
            name="Other Aisha",
            phone_e164="+254700000000",
            phone="+254700000000",
            source=Customer.Source.WHATSAPP,
        )
        response = self.send_payload(self.inbound_payload(message_id="wamid.isolated"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Customer.objects.filter(business=self.business).count(), 1)
        self.assertEqual(Customer.objects.filter(business=self.other_business).count(), 1)
        self.assertEqual(Customer.objects.get(business=self.other_business).pk, other_customer.pk)
        self.assertEqual(Message.objects.get().conversation.business, self.business)

    def test_duplicate_database_message_identity_is_safely_handled(self):
        customer = Customer.objects.create(
            business=self.business,
            name="Existing",
            phone_e164="+254700000000",
            phone="+254700000000",
            source=Customer.Source.WHATSAPP,
        )
        conversation = Conversation.objects.create(
            business=self.business,
            customer=customer,
            channel=Conversation.Channel.WHATSAPP,
            participant_address="+254700000000",
        )
        Message.objects.create(
            conversation=conversation,
            sender_type=Message.SenderType.CUSTOMER,
            body="Already stored",
            external_message_id="wamid.preexisting",
        )

        response = self.send_payload(self.inbound_payload(message_id="wamid.preexisting"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(Message.objects.count(), 1)
