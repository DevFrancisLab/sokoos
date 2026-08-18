from django.urls import path

from .views import AIEmployeeConfigurationView, KnowledgeSourceDetailView, KnowledgeSourceListCreateView


urlpatterns = [
    path("me/", AIEmployeeConfigurationView.as_view(), name="ai-employee-configuration"),
    path("knowledge/", KnowledgeSourceListCreateView.as_view(), name="knowledge-source-list-create"),
    path("knowledge/<int:source_id>/", KnowledgeSourceDetailView.as_view(), name="knowledge-source-detail"),
]
