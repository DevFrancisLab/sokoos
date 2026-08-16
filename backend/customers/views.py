from django.db import IntegrityError
from django.http import Http404
from django.db.models import Q
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from businesses.models import Business

from .models import Customer
from .serializers import CustomerSerializer


FORBIDDEN_OWNERSHIP_FIELDS = {"business", "business_id", "owner", "owner_id", "user_id"}
FILTER_CHOICES = {
    "relationship": {choice for choice, _ in Customer.Relationship.choices},
    "lead_status": {choice for choice, _ in Customer.LeadStatus.choices},
    "source": {choice for choice, _ in Customer.Source.choices},
}
ORDERING_FIELDS = {"name", "relationship", "created_at", "updated_at"}


class CustomerBusinessMixin:
    def get_business(self, request):
        try:
            return request.user.business
        except Business.DoesNotExist:
            raise Http404("Business not found.")

    def validate_protected_fields(self, request):
        protected_fields = FORBIDDEN_OWNERSHIP_FIELDS.intersection(request.data.keys())
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

    def validation_error(self, field, message):
        return Response(
            {"success": False, "errors": {field: [message]}},
            status=status.HTTP_400_BAD_REQUEST,
        )

    def integrity_error_response(self, business, data):
        for field in ("phone", "email"):
            value = data.get(field)
            if value and Customer.objects.filter(business=business, **{field: value}).exists():
                return self.validation_error(
                    field,
                    "A customer with this value already exists for this business.",
                )
        return self.validation_error(
            "non_field_errors",
            "A customer with the submitted contact details already exists for this business.",
        )


class CustomerListCreateView(CustomerBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        business = self.get_business(request)
        queryset = Customer.objects.filter(business=business)

        search = request.query_params.get("search", "").strip()
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search)
                | Q(phone__icontains=search)
                | Q(email__icontains=search)
                | Q(company__icontains=search)
                | Q(location__icontains=search)
                | Q(notes__icontains=search)
                | Q(relationship__icontains=search)
                | Q(lead_status__icontains=search)
                | Q(source__icontains=search)
            )

        for field, allowed_values in FILTER_CHOICES.items():
            value = request.query_params.get(field)
            if value is None:
                continue
            if value not in allowed_values:
                return self.validation_error(field, "Invalid filter value.")
            queryset = queryset.filter(**{field: value})

        ordering = request.query_params.get("ordering")
        if ordering:
            ordering_field = ordering.lstrip("-")
            if ordering_field not in ORDERING_FIELDS:
                return self.validation_error("ordering", "Unsupported ordering field.")
            queryset = queryset.order_by(ordering)
        else:
            queryset = queryset.order_by("-created_at")

        return Response(CustomerSerializer(queryset, many=True).data)

    def post(self, request):
        business = self.get_business(request)
        protected_fields_response = self.validate_protected_fields(request)
        if protected_fields_response:
            return protected_fields_response

        serializer = CustomerSerializer(data=request.data, context={"business": business})
        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            customer = serializer.save(business=business)
        except IntegrityError:
            return self.integrity_error_response(business, serializer.validated_data)

        return Response(
            {"success": True, "customer": CustomerSerializer(customer).data},
            status=status.HTTP_201_CREATED,
        )


class CustomerDetailView(CustomerBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get_customer(self, request, pk):
        business = self.get_business(request)
        try:
            customer = Customer.objects.get(pk=pk, business=business)
        except Customer.DoesNotExist:
            raise Http404
        return business, customer

    def get(self, request, pk):
        _, customer = self.get_customer(request, pk)
        return Response(CustomerSerializer(customer).data)

    def patch(self, request, pk):
        business, customer = self.get_customer(request, pk)
        protected_fields_response = self.validate_protected_fields(request)
        if protected_fields_response:
            return protected_fields_response

        serializer = CustomerSerializer(
            customer,
            data=request.data,
            partial=True,
            context={"business": business},
        )
        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        try:
            customer = serializer.save()
        except IntegrityError:
            return self.integrity_error_response(business, serializer.validated_data)

        return Response(
            {"success": True, "customer": CustomerSerializer(customer).data},
            status=status.HTTP_200_OK,
        )

    def delete(self, request, pk):
        _, customer = self.get_customer(request, pk)
        customer.delete()
        return Response(
            {"success": True, "message": "Customer deleted successfully."},
            status=status.HTTP_200_OK,
        )
