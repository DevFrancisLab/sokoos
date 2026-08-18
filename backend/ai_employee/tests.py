from io import BytesIO
import os
import tempfile
import zipfile

from django.core.files.uploadedfile import SimpleUploadedFile
from django.test import override_settings
from django.urls import reverse
from rest_framework import status
from rest_framework.test import APITestCase

from accounts.models import User
from businesses.models import Business

from .models import AIEmployeeConfiguration, KnowledgeSource


class AIEmployeeAPITests(APITestCase):
    def setUp(self):
        self.media_dir = tempfile.mkdtemp()
        self.settings_override = override_settings(MEDIA_ROOT=self.media_dir)
        self.settings_override.enable()
        self.user = User.objects.create_user("owner@example.com", "SecurePassword123!")
        self.other_user = User.objects.create_user("other@example.com", "SecurePassword123!")
        self.no_business_user = User.objects.create_user("none@example.com", "SecurePassword123!")
        self.business = Business.objects.create(owner=self.user, name="Owner Business")
        self.other_business = Business.objects.create(owner=self.other_user, name="Other Business")
        self.config_url = reverse("ai-employee-configuration")
        self.list_url = reverse("knowledge-source-list-create")

    def tearDown(self):
        self.settings_override.disable()
        for root, dirs, files in os.walk(self.media_dir, topdown=False):
            for file in files:
                os.remove(os.path.join(root, file))
            for directory in dirs:
                os.rmdir(os.path.join(root, directory))
        os.rmdir(self.media_dir)

    def authenticate(self, user=None):
        self.client.force_authenticate(user or self.user)

    def source_url(self, source):
        return reverse("knowledge-source-detail", args=[source.pk])

    def assert_validation_error(self, response, field):
        self.assertEqual(response.status_code, status.HTTP_400_BAD_REQUEST)
        self.assertIn(field, response.data["errors"])

    def document(self, extension="txt", name=None):
        name = name or f"guide.{extension}"
        if extension == "pdf":
            content = b"%PDF-1.4\nminimal pdf"
        elif extension in {"docx", "xlsx"}:
            output = BytesIO()
            with zipfile.ZipFile(output, "w") as archive:
                archive.writestr("[Content_Types].xml", "<Types />")
            content = output.getvalue()
        else:
            content = b"Business knowledge document"
        return SimpleUploadedFile(name, content, content_type="application/octet-stream")

    def test_authentication_is_required(self):
        source = KnowledgeSource.objects.create(business=self.business, kind="faq", title="FAQ", faq_question="Q", faq_answer="A")
        requests = [
            ("get", self.config_url, None), ("patch", self.config_url, {"personality": "Warm"}),
            ("get", self.list_url, None), ("post", self.list_url, {"kind": "faq", "faq_question": "Q", "faq_answer": "A"}),
            ("get", self.source_url(source), None), ("patch", self.source_url(source), {"faq_answer": "B"}), ("delete", self.source_url(source), None),
        ]
        for method, url, payload in requests:
            with self.subTest(method=method, url=url):
                response = getattr(self.client, method)(url, payload, format="json") if payload is not None else getattr(self.client, method)(url)
                self.assertEqual(response.status_code, status.HTTP_401_UNAUTHORIZED)

    def test_configuration_defaults_create_update_validation_and_protection(self):
        self.authenticate()
        response = self.client.get(self.config_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["primary_language"], "English")
        self.assertEqual(response.data["supported_languages"], ["English"])
        self.assertFalse(AIEmployeeConfiguration.objects.exists())
        payload = {
            "primary_language": " Kiswahili ",
            "supported_languages": [" Kiswahili ", "English"],
            "personality": "Warm", "communication_style": "Detailed", "emoji_usage": "Often",
            "preferred_tone": "Educational", "writing_examples": "  Example  ",
            "writing_style_options": {"use_emojis": True, "keep_replies_short": False},
            "welcome_message": " Hello ", "max_ai_messages": 0,
            "business_context": {"vision": " Build trust ", "preferred_brand_tones": [" Helpful ", "Warm"]},
        }
        response = self.client.patch(self.config_url, payload, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        config = AIEmployeeConfiguration.objects.get(business=self.business)
        self.assertEqual(config.primary_language, "Kiswahili")
        self.assertEqual(config.supported_languages, ["Kiswahili", "English"])
        self.assertEqual(config.writing_examples, "Example")
        self.assertEqual(config.business_context["vision"], "Build trust")
        self.assertEqual(config.business_context["preferred_brand_tones"], ["Helpful", "Warm"])
        response = self.client.patch(self.config_url, {"is_enabled": False}, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertFalse(AIEmployeeConfiguration.objects.get(business=self.business).is_enabled)
        cases = [
            ({"personality": "Robot"}, "personality"),
            ({"primary_language": "Zulu"}, "primary_language"),
            ({"supported_languages": ["English", "English"]}, "supported_languages"),
            ({"primary_language": "English", "supported_languages": ["Kiswahili"]}, "supported_languages"),
            ({"writing_style_options": {"bad": True}}, "writing_style_options"),
            ({"writing_style_options": {"use_emojis": "yes"}}, "writing_style_options"),
            ({"business_context": {"unknown": "no"}}, "business_context"),
            ({"business_context": {"vision": ["not text"]}}, "business_context"),
            ({"max_ai_messages": -1}, "max_ai_messages"),
        ]
        for payload, field in cases:
            with self.subTest(field=field):
                self.assert_validation_error(self.client.patch(self.config_url, payload, format="json"), field)
        for field in ("business", "business_id", "owner", "owner_id", "user_id", "provider", "api_key", "access_token", "credential", "webhook_secret"):
            with self.subTest(field=field):
                self.assert_validation_error(self.client.patch(self.config_url, {field: "x"}, format="json"), field)

    def test_configuration_is_business_owned_and_no_business_is_404(self):
        own = AIEmployeeConfiguration.objects.create(business=self.business)
        other = AIEmployeeConfiguration.objects.create(business=self.other_business, personality="Formal")
        self.authenticate()
        self.assertEqual(self.client.get(self.config_url).data["id"], own.pk)
        self.client.patch(self.config_url, {"personality": "Professional"}, format="json")
        other.refresh_from_db()
        self.assertEqual(other.personality, "Formal")
        self.authenticate(self.no_business_user)
        response = self.client.get(self.config_url)
        self.assertEqual(response.status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(response.data["detail"], "Business not found.")

    def test_faq_crud_normalization_kind_validation_and_isolation(self):
        self.authenticate()
        response = self.client.post(self.list_url, {"kind": "faq", "faq_question": " What is the price? ", "faq_answer": " It starts at KES 100. ", "faq_category": " Pricing "}, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        source = KnowledgeSource.objects.get(pk=response.data["knowledge_source"]["id"])
        self.assertEqual((source.title, source.faq_question, source.faq_answer, source.faq_category), ("What is the price?", "What is the price?", "It starts at KES 100.", "Pricing"))
        self.assertEqual(self.client.get(self.source_url(source)).status_code, status.HTTP_200_OK)
        response = self.client.patch(self.source_url(source), {"faq_answer": " Updated answer "}, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["knowledge_source"]["faq_answer"], "Updated answer")
        for payload, field in (({"kind": "faq", "faq_question": " ", "faq_answer": "A"}, "faq_question"), ({"kind": "faq", "faq_question": "Q", "faq_answer": " "}, "faq_answer"), ({"kind": "faq", "faq_question": "Q", "faq_answer": "A", "faq_category": "Legal"}, "faq_category"), ({"kind": "faq", "faq_question": "Q", "faq_answer": "A", "url": "https://example.com"}, "url")):
            self.assert_validation_error(self.client.post(self.list_url, payload, format="json"), field)
        other = KnowledgeSource.objects.create(business=self.other_business, kind="faq", title="Other", faq_question="Q", faq_answer="A")
        self.assertEqual(self.client.get(self.source_url(other)).status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(self.client.patch(self.source_url(other), {"faq_answer": "No"}, format="json").status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(self.client.delete(self.source_url(other)).status_code, status.HTTP_404_NOT_FOUND)
        self.assertEqual(self.client.delete(self.source_url(source)).status_code, status.HTTP_200_OK)

    def test_document_uploads_metadata_validation_and_deletion(self):
        self.authenticate()
        for extension in ("pdf", "docx", "txt", "csv", "xlsx"):
            with self.subTest(extension=extension):
                response = self.client.post(self.list_url, {"kind": "document", "file": self.document(extension)}, format="multipart")
                self.assertEqual(response.status_code, status.HTTP_201_CREATED)
                source = KnowledgeSource.objects.get(pk=response.data["knowledge_source"]["id"])
                self.assertEqual(source.mime_type, {"pdf": "application/pdf", "docx": "application/vnd.openxmlformats-officedocument.wordprocessingml.document", "txt": "text/plain", "csv": "text/csv", "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"}[extension])
                self.assertEqual(source.file_size, source.file.size)
        document = KnowledgeSource.objects.filter(business=self.business, kind="document").first()
        path = document.file.path
        self.assertTrue(os.path.exists(path))
        self.assertEqual(self.client.delete(self.source_url(document)).status_code, status.HTTP_200_OK)
        self.assertFalse(os.path.exists(path))
        invalid = SimpleUploadedFile("bad.exe", b"x", content_type="application/octet-stream")
        self.assert_validation_error(self.client.post(self.list_url, {"kind": "document", "file": invalid}, format="multipart"), "file")
        invalid_pdf = SimpleUploadedFile("bad.pdf", b"not a pdf", content_type="application/pdf")
        self.assert_validation_error(self.client.post(self.list_url, {"kind": "document", "file": invalid_pdf}, format="multipart"), "file")
        large = SimpleUploadedFile("large.txt", b"x" * (10 * 1024 * 1024 + 1), content_type="text/plain")
        self.assert_validation_error(self.client.post(self.list_url, {"kind": "document", "file": large}, format="multipart"), "file")
        self.assert_validation_error(self.client.post(self.list_url, {"kind": "document", "faq_question": "No", "file": self.document()}, format="multipart"), "faq_question")

    def test_website_validation_uniqueness_and_security(self):
        self.authenticate()
        http = self.client.post(self.list_url, {"kind": "website", "url": " HTTP://Example.COM/pricing#section ", "instructions": " Read prices "}, format="json")
        self.assertEqual(http.status_code, status.HTTP_201_CREATED)
        source = KnowledgeSource.objects.get(pk=http.data["knowledge_source"]["id"])
        self.assertEqual((source.url, source.instructions, source.title), ("http://example.com/pricing", "Read prices", "http://example.com/pricing"))
        https = self.client.post(self.list_url, {"kind": "website", "url": "https://example.org"}, format="json")
        self.assertEqual(https.status_code, status.HTTP_201_CREATED)
        self.assert_validation_error(self.client.post(self.list_url, {"kind": "website", "url": "ftp://example.com"}, format="json"), "url")
        self.assert_validation_error(self.client.post(self.list_url, {"kind": "website", "url": "http://example.com/pricing"}, format="json"), "url")
        response = self.client.patch(self.source_url(source), {"instructions": " Updated "}, format="json")
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(response.data["knowledge_source"]["instructions"], "Updated")
        self.client.force_authenticate(self.other_user)
        response = self.client.post(self.list_url, {"kind": "website", "url": "http://example.com/pricing"}, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.client.force_authenticate(self.user)
        self.assert_validation_error(self.client.post(self.list_url, {"kind": "website", "url": "https://safe.example", "provider": "x"}, format="json"), "provider")
