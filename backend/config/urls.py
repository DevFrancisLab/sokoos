from django.contrib import admin
from django.conf import settings
from django.conf.urls.static import static
from django.urls import path, include

from businesses.whatsapp_webhook import WhatsAppWebhookView

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/auth/", include("authentication.urls")),
    path("api/business/", include("businesses.urls")),
    path("api/customers/", include("customers.urls")),
    path("api/conversations/", include("conversations.urls")),
    path("api/catalog/", include("catalog.urls")),
    path("api/ai-employee/", include("ai_employee.urls")),
    path("api/whatsapp/webhook/", WhatsAppWebhookView.as_view(), name="whatsapp-webhook"),
]

if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
