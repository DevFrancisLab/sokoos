from django.urls import path

from .views import CurrentBusinessView


urlpatterns = [
    path("me/", CurrentBusinessView.as_view(), name="current-business"),
]
