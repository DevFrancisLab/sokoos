from django.db import IntegrityError, transaction
from django.http import Http404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from businesses.models import Business

from .models import AIEmployeeConfiguration, KnowledgeSource
from .serializers import (
    AIEmployeeConfigurationSerializer,
    DefaultAIEmployeeConfigurationSerializer,
    KnowledgeSourceSerializer,
    KnowledgeSourceWriteSerializer,
)


PROTECTED_FIELDS = {
    "business", "business_id", "owner", "owner_id", "user_id",
    "provider", "provider_id", "api_key", "api_token", "access_token",
    "refresh_token", "credential", "credentials", "webhook", "webhook_secret",
    "external_account_id", "original_name", "mime_type", "file_size",
}


class AIEmployeeBusinessMixin:
    def get_business(self, request):
        try:
            return request.user.business
        except Business.DoesNotExist:
            raise Http404("Business not found.")

    def protected_fields_response(self, request):
        supplied = PROTECTED_FIELDS.intersection(request.data.keys())
        if supplied:
            return Response(
                {"success": False, "errors": {field: ["This field is not allowed."] for field in sorted(supplied)}},
                status=status.HTTP_400_BAD_REQUEST,
            )
        return None

    def serializer_error(self, serializer):
        return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)

    def get_source(self, request, source_id):
        business = self.get_business(request)
        try:
            source = KnowledgeSource.objects.get(pk=source_id, business=business)
        except KnowledgeSource.DoesNotExist:
            raise Http404
        return business, source


class AIEmployeeConfigurationView(AIEmployeeBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        business = self.get_business(request)
        try:
            configuration = business.ai_employee_configuration
        except AIEmployeeConfiguration.DoesNotExist:
            return Response(DefaultAIEmployeeConfigurationSerializer(instance=object()).data)
        return Response(AIEmployeeConfigurationSerializer(configuration).data)

    def patch(self, request):
        business = self.get_business(request)
        protected = self.protected_fields_response(request)
        if protected:
            return protected
        try:
            configuration = business.ai_employee_configuration
        except AIEmployeeConfiguration.DoesNotExist:
            configuration = None
        serializer = AIEmployeeConfigurationSerializer(configuration, data=request.data, partial=True)
        if not serializer.is_valid():
            return self.serializer_error(serializer)
        try:
            configuration = serializer.save(business=business) if configuration is None else serializer.save()
        except IntegrityError:
            return Response({"success": False, "errors": {"non_field_errors": ["The AI employee configuration could not be saved."]}}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"success": True, "ai_employee": AIEmployeeConfigurationSerializer(configuration).data})


class KnowledgeSourceListCreateView(AIEmployeeBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        business = self.get_business(request)
        queryset = KnowledgeSource.objects.filter(business=business).order_by("-created_at")
        kind = request.query_params.get("kind")
        if kind is not None:
            choices = {choice for choice, _ in KnowledgeSource.Kind.choices}
            if kind not in choices:
                return Response({"success": False, "errors": {"kind": ["Invalid filter value."]}}, status=status.HTTP_400_BAD_REQUEST)
            queryset = queryset.filter(kind=kind)
        return Response(KnowledgeSourceSerializer(queryset, many=True, context={"request": request}).data)

    def post(self, request):
        business = self.get_business(request)
        protected = self.protected_fields_response(request)
        if protected:
            return protected
        serializer = KnowledgeSourceWriteSerializer(data=request.data, context={"business": business})
        if not serializer.is_valid():
            return self.serializer_error(serializer)
        try:
            source = serializer.save()
        except IntegrityError:
            return Response({"success": False, "errors": {"url": ["This website is already configured for this business."]}}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"success": True, "knowledge_source": KnowledgeSourceSerializer(source, context={"request": request}).data}, status=status.HTTP_201_CREATED)


class KnowledgeSourceDetailView(AIEmployeeBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, source_id):
        _, source = self.get_source(request, source_id)
        return Response(KnowledgeSourceSerializer(source, context={"request": request}).data)

    def patch(self, request, source_id):
        business, source = self.get_source(request, source_id)
        protected = self.protected_fields_response(request)
        if protected:
            return protected
        serializer = KnowledgeSourceWriteSerializer(source, data=request.data, partial=True, context={"business": business})
        if not serializer.is_valid():
            return self.serializer_error(serializer)
        try:
            source = serializer.save()
        except IntegrityError:
            return Response({"success": False, "errors": {"url": ["This website is already configured for this business."]}}, status=status.HTTP_400_BAD_REQUEST)
        return Response({"success": True, "knowledge_source": KnowledgeSourceSerializer(source, context={"request": request}).data})

    def delete(self, request, source_id):
        _, source = self.get_source(request, source_id)
        with transaction.atomic():
            if source.file:
                source.file.delete(save=False)
            source.delete()
        return Response({"success": True, "message": "Knowledge source deleted successfully."})
