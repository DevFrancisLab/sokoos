from django.conf import settings
from django.db import IntegrityError, transaction
from django.http import Http404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from .models import Business, WhatsAppIntegration
from .serializers import BusinessSerializer, WhatsAppIntegrationSerializer


FORBIDDEN_OWNER_FIELDS = {"owner", "owner_id", "user_id", "is_active"}


class CurrentBusinessView(APIView):
    permission_classes = [IsAuthenticated]

    def get_business(self, user):
        return Business.objects.filter(owner=user).first()

    def validate_protected_fields(self, request):
        protected_fields = FORBIDDEN_OWNER_FIELDS.intersection(request.data.keys())
        if protected_fields:
            return Response(
                {
                    "success": False,
                    "errors": {
                        field: ["This field is not allowed."]
                        for field in sorted(protected_fields)
                    },
                },
                status=status.HTTP_400_BAD_REQUEST,
            )
        return None

    def get(self, request):
        business = self.get_business(request.user)
        if business is None:
            return Response(
                {"detail": "Business not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        return Response(BusinessSerializer(business, context={"request": request}).data)

    def post(self, request):
        protected_fields_response = self.validate_protected_fields(request)
        if protected_fields_response:
            return protected_fields_response

        if self.get_business(request.user) is not None:
            return Response(
                {
                    "success": False,
                    "message": "A business already exists for this account.",
                },
                status=status.HTTP_409_CONFLICT,
            )

        serializer = BusinessSerializer(data=request.data, context={"request": request})
        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            with transaction.atomic():
                business = serializer.save(owner=request.user)
        except IntegrityError:
            return Response(
                {
                    "success": False,
                    "message": "A business already exists for this account.",
                },
                status=status.HTTP_409_CONFLICT,
            )

        return Response(
            {"success": True, "business": BusinessSerializer(business, context={"request": request}).data},
            status=status.HTTP_201_CREATED,
        )

    def patch(self, request):
        protected_fields_response = self.validate_protected_fields(request)
        if protected_fields_response:
            return protected_fields_response

        business = self.get_business(request.user)
        if business is None:
            return Response(
                {"detail": "Business not found."},
                status=status.HTTP_404_NOT_FOUND,
            )

        serializer = BusinessSerializer(
            business,
            data=request.data,
            partial=True,
            context={"request": request},
        )
        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer.save()
        return Response(
            {"success": True, "business": serializer.data},
            status=status.HTTP_200_OK,
        )


class CurrentWhatsAppIntegrationView(APIView):
    permission_classes = [IsAuthenticated]

    def get_business(self, user):
        try:
            return user.business
        except Business.DoesNotExist:
            raise Http404("Business not found.")

    def get_integration(self, business):
        try:
            return business.whatsapp_integration
        except WhatsAppIntegration.DoesNotExist:
            raise Http404("WhatsApp integration not found.")

    def get(self, request):
        business = self.get_business(request.user)
        integration = self.get_integration(business)
        return Response(WhatsAppIntegrationSerializer(integration).data)

    def post(self, request):
        business = self.get_business(request.user)
        integration = WhatsAppIntegration.objects.filter(business=business).first()
        was_existing = integration is not None
        payload = request.data.copy()
        if not was_existing:
            payload.setdefault("access_token_env_var", settings.META_WHATSAPP_ACCESS_TOKEN_ENV_VAR)
            payload.setdefault("webhook_verify_token_env_var", settings.META_WHATSAPP_VERIFY_TOKEN_ENV_VAR)
        serializer = WhatsAppIntegrationSerializer(integration, data=payload, partial=integration is not None)
        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            integration = serializer.save(business=business) if integration is None else serializer.save()
        except IntegrityError:
            return Response(
                {"success": False, "errors": {"phone_number_id": ["This Meta Phone Number ID is already assigned."]}},
                status=status.HTTP_409_CONFLICT,
            )

        return Response(
            {"success": True, "whatsapp_integration": WhatsAppIntegrationSerializer(integration).data},
            status=status.HTTP_200_OK if was_existing else status.HTTP_201_CREATED,
        )

    def patch(self, request):
        business = self.get_business(request.user)
        integration = self.get_integration(business)
        serializer = WhatsAppIntegrationSerializer(integration, data=request.data, partial=True)
        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            integration = serializer.save()
        except IntegrityError:
            return Response(
                {"success": False, "errors": {"phone_number_id": ["This Meta Phone Number ID is already assigned."]}},
                status=status.HTTP_400_BAD_REQUEST,
            )

        return Response(
            {"success": True, "whatsapp_integration": WhatsAppIntegrationSerializer(integration).data},
            status=status.HTTP_200_OK,
        )
