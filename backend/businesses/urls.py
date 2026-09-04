from django.urls import path

from .views import CurrentBusinessView, CurrentWhatsAppIntegrationView


urlpatterns = [
    path("me/", CurrentBusinessView.as_view(), name="current-business"),
    path("whatsapp/", CurrentWhatsAppIntegrationView.as_view(), name="current-whatsapp-integration"),
]
