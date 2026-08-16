from django.urls import path

from .views import (
    ConversationDetailView,
    ConversationListCreateView,
    ConversationMessagesView,
    ConversationReadView,
)


urlpatterns = [
    path("", ConversationListCreateView.as_view(), name="conversation-list-create"),
    path("<int:conversation_id>/", ConversationDetailView.as_view(), name="conversation-detail"),
    path("<int:conversation_id>/messages/", ConversationMessagesView.as_view(), name="conversation-messages"),
    path("<int:conversation_id>/read/", ConversationReadView.as_view(), name="conversation-read"),
]
