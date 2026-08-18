from django.db import IntegrityError, transaction
from django.db.models import Prefetch, Q
from django.http import Http404
from rest_framework import status
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework.views import APIView

from businesses.models import Business

from .models import CatalogItem, CatalogMedia, Category
from .serializers import (
    CatalogItemSerializer,
    CatalogItemWriteSerializer,
    CatalogMediaCreateSerializer,
    CatalogMediaSerializer,
    CatalogMediaUpdateSerializer,
    CategorySerializer,
    catalog_item_readiness,
)


FORBIDDEN_OWNERSHIP_FIELDS = {"business", "business_id", "owner", "owner_id", "user_id"}
FORBIDDEN_ITEM_FIELDS = FORBIDDEN_OWNERSHIP_FIELDS | {"stock_status", "created_at", "updated_at"}


class CatalogBusinessMixin:
    def get_business(self, request):
        try:
            return request.user.business
        except Business.DoesNotExist:
            raise Http404("Business not found.")

    def validation_error(self, field, message, response_status=status.HTTP_400_BAD_REQUEST):
        return Response({"success": False, "errors": {field: [message]}}, status=response_status)

    def validate_protected_fields(self, request, protected_fields):
        supplied = protected_fields.intersection(request.data.keys())
        if supplied:
            return Response(
                {"success": False, "errors": {field: ["This field is not allowed."] for field in sorted(supplied)}},
                status=status.HTTP_400_BAD_REQUEST,
            )
        return None

    def get_item(self, request, item_id):
        business = self.get_business(request)
        try:
            item = self.item_queryset(business).get(pk=item_id)
        except CatalogItem.DoesNotExist:
            raise Http404
        return business, item

    def get_category(self, request, category_id):
        business = self.get_business(request)
        try:
            category = Category.objects.get(pk=category_id, business=business)
        except Category.DoesNotExist:
            raise Http404
        return business, category

    def item_queryset(self, business):
        return CatalogItem.objects.filter(business=business).select_related("category").prefetch_related(
            Prefetch("media", queryset=CatalogMedia.objects.order_by("-is_thumbnail", "created_at"), to_attr="prefetched_media")
        )

    def sku_integrity_error_response(self, business, data):
        sku = data.get("sku")
        if sku and CatalogItem.objects.filter(business=business, sku=sku).exists():
            return self.validation_error("sku", "A catalog item with this SKU already exists.")
        return self.validation_error("non_field_errors", "The catalog item could not be saved.")


class CatalogItemListCreateView(CatalogBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        business = self.get_business(request)
        queryset = self.item_queryset(business)
        search = request.query_params.get("search", "").strip()
        if search:
            queryset = queryset.filter(
                Q(name__icontains=search)
                | Q(category__name__icontains=search)
                | Q(sku__icontains=search)
                | Q(description__icontains=search)
                | Q(tags__icontains=search)
            )

        item_type = request.query_params.get("item_type")
        if item_type is not None:
            choices = {choice for choice, _ in CatalogItem.ItemType.choices}
            if item_type not in choices:
                return self.validation_error("item_type", "Invalid filter value.")
            queryset = queryset.filter(item_type=item_type)

        low_stock = request.query_params.get("low_stock")
        if low_stock is not None and low_stock not in {"true", "false"}:
            return self.validation_error("low_stock", "Use true or false.")

        readiness = request.query_params.get("readiness")
        if readiness is not None and readiness != "needs_information":
            return self.validation_error("readiness", "Invalid filter value.")

        items = list(queryset.order_by("-created_at"))
        if low_stock == "true":
            items = [
                item for item in items
                if item.current_stock is not None
                and (item.current_stock == 0 or item.current_stock <= (item.low_stock_threshold or 0))
            ]
        elif low_stock == "false":
            items = [
                item for item in items
                if item.current_stock is None
                or (item.current_stock > 0 and item.current_stock > (item.low_stock_threshold or 0))
            ]
        if readiness == "needs_information":
            items = [item for item in items if catalog_item_readiness(item)["needs_information"]]

        return Response(CatalogItemSerializer(items, many=True, context={"request": request}).data)

    def post(self, request):
        business = self.get_business(request)
        protected = self.validate_protected_fields(request, FORBIDDEN_ITEM_FIELDS)
        if protected:
            return protected
        serializer = CatalogItemWriteSerializer(data=request.data, context={"business": business})
        if not serializer.is_valid():
            return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        try:
            item = serializer.save(business=business)
        except IntegrityError:
            return self.sku_integrity_error_response(business, serializer.validated_data)
        return Response({"success": True, "catalog_item": CatalogItemSerializer(item, context={"request": request}).data}, status=status.HTTP_201_CREATED)


class CatalogItemDetailView(CatalogBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, item_id):
        _, item = self.get_item(request, item_id)
        return Response(CatalogItemSerializer(item, context={"request": request}).data)

    def patch(self, request, item_id):
        business, item = self.get_item(request, item_id)
        protected = self.validate_protected_fields(request, FORBIDDEN_ITEM_FIELDS)
        if protected:
            return protected
        serializer = CatalogItemWriteSerializer(item, data=request.data, partial=True, context={"business": business})
        if not serializer.is_valid():
            return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        try:
            item = serializer.save()
        except IntegrityError:
            return self.sku_integrity_error_response(business, serializer.validated_data)
        return Response({"success": True, "catalog_item": CatalogItemSerializer(item, context={"request": request}).data})

    def delete(self, request, item_id):
        _, item = self.get_item(request, item_id)
        with transaction.atomic():
            for media in item.media.all():
                media.file.delete(save=False)
            item.delete()
        return Response({"success": True, "message": "Catalog item deleted successfully."})


class CategoryListCreateView(CatalogBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        business = self.get_business(request)
        categories = Category.objects.filter(business=business).order_by("name")
        return Response(CategorySerializer(categories, many=True).data)

    def post(self, request):
        business = self.get_business(request)
        protected = self.validate_protected_fields(request, FORBIDDEN_OWNERSHIP_FIELDS)
        if protected:
            return protected
        serializer = CategorySerializer(data=request.data, context={"business": business})
        if not serializer.is_valid():
            return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        try:
            category = serializer.save(business=business)
        except IntegrityError:
            return self.validation_error("name", "A category with this name already exists.")
        return Response({"success": True, "category": CategorySerializer(category).data}, status=status.HTTP_201_CREATED)


class CategoryDetailView(CatalogBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def patch(self, request, category_id):
        business, category = self.get_category(request, category_id)
        protected = self.validate_protected_fields(request, FORBIDDEN_OWNERSHIP_FIELDS)
        if protected:
            return protected
        serializer = CategorySerializer(category, data=request.data, partial=True, context={"business": business})
        if not serializer.is_valid():
            return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        try:
            category = serializer.save()
        except IntegrityError:
            return self.validation_error("name", "A category with this name already exists.")
        return Response({"success": True, "category": CategorySerializer(category).data})

    def delete(self, request, category_id):
        _, category = self.get_category(request, category_id)
        if category.catalog_items.exists():
            return self.validation_error("category", "Delete or move its catalog items before deleting this category.", status.HTTP_409_CONFLICT)
        category.delete()
        return Response({"success": True, "message": "Category deleted successfully."})


class CatalogMediaListCreateView(CatalogBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request, item_id):
        _, item = self.get_item(request, item_id)
        return Response(CatalogMediaSerializer(item.media.order_by("-is_thumbnail", "created_at"), many=True, context={"request": request}).data)

    def post(self, request, item_id):
        _, item = self.get_item(request, item_id)
        protected = self.validate_protected_fields(request, FORBIDDEN_OWNERSHIP_FIELDS | {"catalog_item", "catalog_item_id"})
        if protected:
            return protected
        serializer = CatalogMediaCreateSerializer(data=request.data)
        if not serializer.is_valid():
            return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        try:
            with transaction.atomic():
                if serializer.validated_data.get("is_thumbnail"):
                    CatalogMedia.objects.filter(catalog_item=item).update(is_thumbnail=False)
                media = serializer.save(catalog_item=item)
        except IntegrityError:
            return self.validation_error("is_thumbnail", "Only one thumbnail is allowed per catalog item.")
        return Response({"success": True, "media": CatalogMediaSerializer(media, context={"request": request}).data}, status=status.HTTP_201_CREATED)


class CatalogMediaDetailView(CatalogBusinessMixin, APIView):
    permission_classes = [IsAuthenticated]

    def get_media(self, request, item_id, media_id):
        _, item = self.get_item(request, item_id)
        try:
            return CatalogMedia.objects.get(pk=media_id, catalog_item=item)
        except CatalogMedia.DoesNotExist:
            raise Http404

    def patch(self, request, item_id, media_id):
        media = self.get_media(request, item_id, media_id)
        protected = self.validate_protected_fields(request, FORBIDDEN_OWNERSHIP_FIELDS | {"catalog_item", "catalog_item_id", "file", "original_name", "mime_type"})
        if protected:
            return protected
        serializer = CatalogMediaUpdateSerializer(media, data=request.data, partial=True)
        if not serializer.is_valid():
            return Response({"success": False, "errors": serializer.errors}, status=status.HTTP_400_BAD_REQUEST)
        try:
            media = serializer.save()
        except IntegrityError:
            return self.validation_error("is_thumbnail", "Only one thumbnail is allowed per catalog item.")
        return Response({"success": True, "media": CatalogMediaSerializer(media, context={"request": request}).data})

    def delete(self, request, item_id, media_id):
        media = self.get_media(request, item_id, media_id)
        media.file.delete(save=False)
        media.delete()
        return Response({"success": True, "message": "Catalog media deleted successfully."})
