import hashlib
import hmac
import json

from django.conf import settings
from django.http import HttpResponse
from rest_framework.permissions import AllowAny
from rest_framework.views import APIView

from .whatsapp_ingestion import persist_inbound_payload


class WhatsAppWebhookView(APIView):
    authentication_classes = []
    permission_classes = [AllowAny]

    def get(self, request):
        if (
            request.query_params.get("hub.mode") != "subscribe"
            or not settings.META_WHATSAPP_WEBHOOK_VERIFY_TOKEN
            or not hmac.compare_digest(
                request.query_params.get("hub.verify_token", ""),
                settings.META_WHATSAPP_WEBHOOK_VERIFY_TOKEN,
            )
        ):
            return HttpResponse(status=403)

        challenge = request.query_params.get("hub.challenge")
        if challenge is None:
            return HttpResponse(status=403)

        return HttpResponse(challenge, content_type="text/plain")

    def post(self, request):
        signature = request.headers.get("X-Hub-Signature-256", "")
        raw_body = request.body
        app_secret = settings.META_WHATSAPP_APP_SECRET

        if not app_secret or not self._signature_is_valid(raw_body, signature, app_secret):
            return HttpResponse(status=403)

        try:
            payload = json.loads(raw_body)
        except (TypeError, ValueError):
            return HttpResponse(status=400)

        if not isinstance(payload, dict):
            return HttpResponse(status=400)

        persist_inbound_payload(payload)
        return HttpResponse(status=200)

    @staticmethod
    def _signature_is_valid(raw_body, signature, app_secret):
        prefix, separator, supplied_digest = signature.partition("=")
        if prefix != "sha256" or not separator or len(supplied_digest) != hashlib.sha256().digest_size * 2:
            return False

        expected_digest = hmac.new(
            app_secret.encode("utf-8"),
            raw_body,
            hashlib.sha256,
        ).hexdigest()
        return hmac.compare_digest(supplied_digest, expected_digest)