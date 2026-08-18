from django.urls import path

from .views import (
    CatalogItemDetailView,
    CatalogItemListCreateView,
    CatalogMediaDetailView,
    CatalogMediaListCreateView,
    CategoryDetailView,
    CategoryListCreateView,
)


urlpatterns = [
    path("", CatalogItemListCreateView.as_view(), name="catalog-item-list-create"),
    path("categories/", CategoryListCreateView.as_view(), name="catalog-category-list-create"),
    path("categories/<int:category_id>/", CategoryDetailView.as_view(), name="catalog-category-detail"),
    path("<int:item_id>/", CatalogItemDetailView.as_view(), name="catalog-item-detail"),
    path("<int:item_id>/media/", CatalogMediaListCreateView.as_view(), name="catalog-media-list-create"),
    path("<int:item_id>/media/<int:media_id>/", CatalogMediaDetailView.as_view(), name="catalog-media-detail"),
]
