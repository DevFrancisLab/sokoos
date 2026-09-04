from django.db import transaction
from django.db.models import F, Prefetch, Q
from django.http import Http404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from businesses.models import Business, WhatsAppIntegration
from businesses.whatsapp_outbound import WhatsAppOutboundError, send_whatsapp_text
from customers.phone import InvalidWhatsAppPhoneNumber, normalize_whatsapp_phone_number

from .models import Conversation, Message
from .serializers import (
    ConversationCreateSerializer,
    ConversationSerializer,
    ConversationUpdateSerializer,
    HumanMessageCreateSerializer,
    MessageSerializer,
)


FORBIDDEN_OWNERSHIP_FIELDS = {"business", "business_id", "owner", "owner_id", "user_id"}
FORBIDDEN_CONVERSATION_FIELDS = FORBIDDEN_OWNERSHIP_FIELDS | {
    "unread_count",
    "last_message_at",
    "created_at",
    "updated_at",
}
FILTER_CHOICES = {
    "status": {choice for choice, _ in Conversation.Status.choices},
    "handling_mode": {choice for choice, _ in Conversation.HandlingMode.choices},
    "channel": {choice for choice, _ in Conversation.Channel.choices},
}
ORDERING_FIELDS = {"last_message_at", "created_at"}


class ConversationBusinessMixin:
    def get_business(self, request):
        try:
            return request.user.business
        except Business.DoesNotExist:
            raise Http404("Business not found.")

    def get_conversation(self, request, conversation_id):
        business = self.get_business(request)
        try:
            conversation = Conversation.objects.select_related("customer").get(
                pk=conversation_id,
                business=business,
            )
        except Conversation.DoesNotExist:
            raise Http404
        return business, conversation

    def validation_error(self, field, message):
        return Response(
            {"success": False, "errors": {field: [message]}},
            status=status.HTTP_400_BAD_REQUEST,
        )

    def validate_protected_fields(self, request, protected_fields):
        supplied = protected_fields.intersection(request.data.keys())
        if supplied:
            return Response(
                {
                    "success": False,
                    "errors": {
                        field: ["This field is not allowed."] for field in sorted(supplied)
                    },
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
        return None

    def conversation_queryset(self, business):
        return Conversation.objects.filter(business=business).select_related("customer").prefetch_related(
            Prefetch(
                "messages",
                queryset=Message.objects.order_by("-created_at", "-pk"),
                to_attr="prefetched_messages",
            )
        )


class ConversationListCreateView(ConversationBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        business = self.get_business(request)
        queryset = self.conversation_queryset(business)

        search = request.query_params.get("search", "").strip()
        if search:
            queryset = queryset.filter(
                Q(customer__name__icontains=search)
                | Q(customer__phone__icontains=search)
                | Q(customer__email__icontains=search)
                | Q(customer__company__icontains=search)
                | Q(participant_address__icontains=search)
                | Q(messages__body__icontains=search)
            ).distinct()

        for field, allowed_values in FILTER_CHOICES.items():
            value = request.query_params.get(field)
            if value is None:
                continue
            if value not in allowed_values:
                return self.validation_error(field, "Invalid filter value.")
            queryset = queryset.filter(**{field: value})

        unread = request.query_params.get("unread")
        if unread is not None:
            if unread not in {"true", "false"}:
                return self.validation_error("unread", "Use true or false.")
            if unread == "true":
                queryset = queryset.filter(unread_count__gt=0)
            else:
                queryset = queryset.filter(unread_count=0)

        ordering = request.query_params.get("ordering", "-last_message_at")
        ordering_field = ordering.lstrip("-")
        if ordering_field not in ORDERING_FIELDS:
            return self.validation_error("ordering", "Unsupported ordering field.")
        if ordering.startswith("-"):
            queryset = queryset.order_by(F(ordering_field).desc(nulls_last=True), "-created_at")
        else:
            queryset = queryset.order_by(F(ordering_field).asc(nulls_last=True), "created_at")

        return Response(ConversationSerializer(queryset, many=True).data)

    def post(self, request):
        business = self.get_business(request)
        protected_fields_response = self.validate_protected_fields(
            request, FORBIDDEN_CONVERSATION_FIELDS
        )
        if protected_fields_response:
            return protected_fields_response

        serializer = ConversationCreateSerializer(data=request.data, context={"business": business})
        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            conversation = serializer.save(business=business)
        except IntegrityError:
            return self.validation_error(
                "participant_address",
                "A WhatsApp conversation already exists for this participant and business.",
            )
        return Response(
            {"success": True, "conversation": ConversationSerializer(conversation).data},
            status=status.HTTP_201_CREATED,
        )


class ConversationDetailView(ConversationBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, conversation_id):
        _, conversation = self.get_conversation(request, conversation_id)
        return Response(ConversationSerializer(conversation).data)

    def patch(self, request, conversation_id):
        business, conversation = self.get_conversation(request, conversation_id)
        protected_fields_response = self.validate_protected_fields(
            request, FORBIDDEN_CONVERSATION_FIELDS | {"channel", "participant_address"}
        )
        if protected_fields_response:
            return protected_fields_response

        serializer = ConversationUpdateSerializer(
            conversation,
            data=request.data,
            partial=True,
            context={"business": business},
        )
        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        conversation = serializer.save()
        return Response(
            {"success": True, "conversation": ConversationSerializer(conversation).data},
            status=status.HTTP_200_OK,
        )


class ConversationMessagesView(ConversationBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, conversation_id):
        _, conversation = self.get_conversation(request, conversation_id)
        messages = conversation.messages.order_by("created_at", "pk")
        return Response(MessageSerializer(messages, many=True).data)

    def post(self, request, conversation_id):
        _, conversation = self.get_conversation(request, conversation_id)
        protected_fields_response = self.validate_protected_fields(
            request,
            FORBIDDEN_OWNERSHIP_FIELDS | {"sender_type", "conversation", "conversation_id"},
        )
        if protected_fields_response:
            return protected_fields_response

        serializer = HumanMessageCreateSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        with transaction.atomic():
            message = Message.objects.create(
                conversation=conversation,
                sender_type=Message.SenderType.HUMAN,
                body=serializer.validated_data["body"],
                direction=Message.Direction.OUTBOUND,
                processing_status=Message.ProcessingStatus.PROCESSED,
                delivery_status=Message.DeliveryStatus.NOT_APPLICABLE,
            )
            conversation.last_message_at = message.created_at
            conversation.save(update_fields=["last_message_at", "updated_at"])

        return Response(
            {"success": True, "message": MessageSerializer(message).data},
            status=status.HTTP_201_CREATED,
        )


class WhatsAppReplyView(ConversationBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, conversation_id):
        business, conversation = self.get_conversation(request, conversation_id)
        if conversation.channel != Conversation.Channel.WHATSAPP:
            return self.validation_error("conversation", "Only WhatsApp conversations support this endpoint.")

        serializer = HumanMessageCreateSerializer(data=request.data)
        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        customer = conversation.customer
        recipient = (customer.phone_e164 if customer else "") or conversation.participant_address
        try:
            recipient = normalize_whatsapp_phone_number(recipient)
        except InvalidWhatsAppPhoneNumber:
            return self.validation_error("conversation", "WhatsApp recipient is not valid.")

        try:
            integration = business.whatsapp_integration
        except WhatsAppIntegration.DoesNotExist:
            return Response(
                {"success": False, "message": "WhatsApp integration is not configured."},
                status=status.HTTP_503_SERVICE_UNAVAILABLE,
            )

        try:
            external_message_id = send_whatsapp_text(
                integration=integration,
                recipient=recipient,
                body=serializer.validated_data["body"],
            )
        except WhatsAppOutboundError:
            return Response(
                {"success": False, "message": "WhatsApp message could not be sent."},
                status=status.HTTP_502_BAD_GATEWAY,
            )

        with transaction.atomic():
            message = Message.objects.create(
                conversation=conversation,
                sender_type=Message.SenderType.HUMAN,
                body=serializer.validated_data["body"],
                external_message_id=external_message_id,
                direction=Message.Direction.OUTBOUND,
                message_type="text",
                processing_status=Message.ProcessingStatus.PROCESSED,
                delivery_status=Message.DeliveryStatus.SENT,
                provider_metadata={"provider": "meta_whatsapp_cloud_api"},
            )
            conversation.last_message_at = message.created_at
            conversation.save(update_fields=["last_message_at", "updated_at"])

        return Response(
            {"success": True, "message": MessageSerializer(message).data},
            status=status.HTTP_201_CREATED,
        )


class ConversationReadView(ConversationBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request, conversation_id):
        _, conversation = self.get_conversation(request, conversation_id)
        conversation.unread_count = 0
        conversation.save(update_fields=["unread_count", "updated_at"])
        return Response(
            {"success": True, "conversation": ConversationSerializer(conversation).data},
            status=status.HTTP_200_OK,
        )
