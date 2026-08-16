from io import BytesIO
from datetime import datetime
from urllib.parse import parse_qs, urlparse
from unittest.mock import patch

from django.contrib.auth import authenticate
from django.contrib.auth.tokens import default_token_generator
from django.core.files.uploadedfile import SimpleUploadedFile
from django.db import DatabaseError, connection
from django.test import SimpleTestCase, TestCase, override_settings
from django.test.utils import CaptureQueriesContext
from django.urls import reverse
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from PIL import Image
from rest_framework.authtoken.models import Token
from rest_framework.test import APIClient

from accounts.models import User

from .serializers import UserProfileSerializer


class UserProfileSerializerTests(SimpleTestCase):
    def test_profile_fields_are_applied_to_the_authenticated_user(self):
        user = User(email="person@example.com", first_name="Before", last_name="Name")
        serializer = UserProfileSerializer(
            user,
            data={"first_name": "After", "last_name": "Update"},
            partial=True,
        )

        self.assertTrue(serializer.is_valid(), serializer.errors)
        with patch.object(User, "save") as save:
            serializer.save()

        self.assertEqual(user.first_name, "After")
        self.assertEqual(user.last_name, "Update")
        save.assert_called_once()

    def test_avatar_larger_than_five_megabytes_is_rejected(self):
        source = BytesIO()
        Image.new("RGB", (20, 20), "red").save(source, format="JPEG")
        oversized_avatar = SimpleUploadedFile(
            "avatar.jpg",
            source.getvalue() + (b"0" * (5 * 1024 * 1024)),
            content_type="image/jpeg",
        )
        serializer = UserProfileSerializer(User(email="person@example.com"), data={"avatar": oversized_avatar}, partial=True)

        self.assertFalse(serializer.is_valid())
        self.assertIn("avatar", serializer.errors)


class SignupEmailTests(TestCase):
    def test_successful_signup_sends_a_welcome_email(self):
        client = APIClient()

        with patch("authentication.views.send_mail") as send_mail:
            with self.captureOnCommitCallbacks(execute=True):
                response = client.post(
                    reverse("signup"),
                    {
                        "email": "new.user@example.com",
                        "password": "SecurePassword123!",
                        "first_name": "New",
                        "last_name": "User",
                    },
                    format="json",
                )

        self.assertEqual(response.status_code, 201)
        send_mail.assert_called_once_with(
            subject="Welcome to Sokoos",
            message=(
                "Hi New,\n\n"
                "Welcome to Sokoos. Your account has been created successfully."
            ),
            from_email=None,
            recipient_list=["new.user@example.com"],
            fail_silently=False,
        )


class DeleteAccountEmailTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="delete.me@example.com",
            password="SecurePassword123!",
            first_name="Delete",
        )
        self.user_id = self.user.pk
        token = Token.objects.create(user=self.user)
        self.client = APIClient()
        self.client.credentials(HTTP_AUTHORIZATION=f"Token {token.key}")

    def delete_account(self):
        return self.client.delete(reverse("delete-account"))

    def test_deletion_removes_user_preserves_response_and_sends_email(self):
        with patch("authentication.views.send_mail") as send_mail:
            with self.captureOnCommitCallbacks(execute=False) as callbacks:
                response = self.delete_account()

            self.assertFalse(User.objects.filter(pk=self.user_id).exists())
            self.assertEqual(response.status_code, 200)
            self.assertEqual(
                response.data,
                {
                    "success": True,
                    "message": "Account deleted successfully.",
                },
            )
            self.assertEqual(len(callbacks), 1)

            with CaptureQueriesContext(connection) as queries:
                callbacks[0]()

        self.assertEqual(len(queries), 0)
        send_mail.assert_called_once_with(
            subject="Your Sokoos account has been deleted",
            message=(
                "Hi Delete,\n\n"
                "Your Sokoos account has been deleted successfully. "
                "If you did not request this, please contact support."
            ),
            from_email=None,
            recipient_list=["delete.me@example.com"],
            fail_silently=False,
        )

    def test_rollback_does_not_send_deletion_email(self):
        original_delete = User.delete

        def delete_then_fail(user, *args, **kwargs):
            original_delete(user, *args, **kwargs)
            raise DatabaseError("Simulated deletion failure")

        with patch.object(User, "delete", new=delete_then_fail):
            with patch("authentication.views.send_mail") as send_mail:
                with self.assertRaises(DatabaseError):
                    self.delete_account()

        self.assertTrue(User.objects.filter(pk=self.user_id).exists())
        send_mail.assert_not_called()

    def test_email_failure_after_commit_keeps_deletion_response(self):
        with patch(
            "authentication.views.send_mail",
            side_effect=ConnectionError("Zoho SMTP unavailable"),
        ):
            with patch("authentication.views.logger.exception") as log_exception:
                with self.captureOnCommitCallbacks(execute=True):
                    response = self.delete_account()

        self.assertFalse(User.objects.filter(pk=self.user_id).exists())
        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.data,
            {
                "success": True,
                "message": "Account deleted successfully.",
            },
        )
        log_exception.assert_called_once_with(
            "Failed to send account deletion confirmation email to %s",
            "delete.me@example.com",
        )


@override_settings(FRONTEND_BASE_URL="https://app.example.com")
class PasswordResetTests(TestCase):
    generic_response = {
        "success": True,
        "message": "If an active account matches this email, a password reset link will be sent.",
    }

    def setUp(self):
        self.user = User.objects.create_user(
            email="reset.user@example.com",
            password="OldSecurePassword123!",
            first_name="Reset",
        )
        self.token = Token.objects.create(user=self.user)
        self.client = APIClient()

    def request_reset(self, email):
        return self.client.post(reverse("password-reset"), {"email": email}, format="json")

    def reset_payload(self, token=None, uid=None, password="NewSecurePassword456!"):
        return {
            "uid": uid or urlsafe_base64_encode(force_bytes(self.user.pk)),
            "token": token or default_token_generator.make_token(self.user),
            "new_password": password,
            "confirm_new_password": password,
        }

    def test_active_user_receives_reset_email_with_configured_frontend_url(self):
        with patch("authentication.views.send_mail") as send_mail:
            response = self.request_reset(" RESET.USER@EXAMPLE.COM ")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, self.generic_response)
        send_mail.assert_called_once()
        message = send_mail.call_args.kwargs["message"]
        reset_url = next(line for line in message.splitlines() if line.startswith("https://"))
        parsed_url = urlparse(reset_url)
        params = parse_qs(parsed_url.query)
        self.assertEqual(parsed_url.scheme, "https")
        self.assertEqual(parsed_url.netloc, "app.example.com")
        self.assertEqual(parsed_url.path, "/reset-password")
        self.assertNotIn("testserver", reset_url)
        self.assertIn("uid", params)
        self.assertIn("token", params)
        self.assertTrue(default_token_generator.check_token(self.user, params["token"][0]))
        self.assertEqual(send_mail.call_args.kwargs["recipient_list"], [self.user.email])

    def test_unknown_and_inactive_users_receive_the_same_response_without_email(self):
        inactive_user = User.objects.create_user(
            email="inactive@example.com",
            password="OldSecurePassword123!",
            is_active=False,
        )

        with patch("authentication.views.send_mail") as send_mail:
            unknown_response = self.request_reset("unknown@example.com")
            inactive_response = self.request_reset(inactive_user.email)

        self.assertEqual(unknown_response.status_code, 200)
        self.assertEqual(inactive_response.status_code, 200)
        self.assertEqual(unknown_response.data, self.generic_response)
        self.assertEqual(inactive_response.data, self.generic_response)
        send_mail.assert_not_called()

    def test_smtp_failure_preserves_generic_response(self):
        with patch(
            "authentication.views.send_mail",
            side_effect=ConnectionError("Zoho SMTP unavailable"),
        ):
            with patch("authentication.views.logger.exception") as log_exception:
                response = self.request_reset(self.user.email)

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.data, self.generic_response)
        log_exception.assert_called_once_with(
            "Failed to send password reset email to %s", self.user.email
        )

    def test_valid_reset_changes_password_invalidates_token_and_prevents_reuse(self):
        payload = self.reset_payload()

        response = self.client.post(reverse("password-reset-confirm"), payload, format="json")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.data,
            {
                "success": True,
                "message": "Password reset successfully. Please log in again.",
            },
        )
        self.user.refresh_from_db()
        self.assertTrue(self.user.check_password(payload["new_password"]))
        self.assertIsNone(authenticate(username=self.user.email, password="OldSecurePassword123!"))
        self.assertEqual(
            authenticate(username=self.user.email, password=payload["new_password"]),
            self.user,
        )
        self.assertFalse(Token.objects.filter(pk=self.token.pk).exists())

        reuse_response = self.client.post(
            reverse("password-reset-confirm"), payload, format="json"
        )
        self.assertEqual(reuse_response.status_code, 400)

    def test_invalid_expired_and_malformed_links_do_not_change_password_or_token(self):
        original_password = self.user.password
        valid_token = default_token_generator.make_token(self.user)

        invalid_response = self.client.post(
            reverse("password-reset-confirm"),
            self.reset_payload(token="invalid-token"),
            format="json",
        )
        malformed_response = self.client.post(
            reverse("password-reset-confirm"),
            self.reset_payload(token=valid_token, uid="not-a-valid-uid"),
            format="json",
        )
        with patch.object(
            default_token_generator,
            "_now",
            return_value=datetime(2026, 1, 1, 0, 0, 0),
        ):
            expired_token = default_token_generator.make_token(self.user)
        with patch.object(
            default_token_generator,
            "_now",
            return_value=datetime(2026, 1, 1, 1, 0, 1),
        ):
            expired_response = self.client.post(
                reverse("password-reset-confirm"),
                self.reset_payload(token=expired_token),
                format="json",
            )

        self.assertEqual(invalid_response.status_code, 400)
        self.assertEqual(malformed_response.status_code, 400)
        self.assertEqual(expired_response.status_code, 400)
        self.user.refresh_from_db()
        self.assertEqual(self.user.password, original_password)
        self.assertTrue(Token.objects.filter(pk=self.token.pk).exists())

    def test_invalid_new_password_data_does_not_change_password_or_token(self):
        original_password = self.user.password
        token = default_token_generator.make_token(self.user)
        mismatch_response = self.client.post(
            reverse("password-reset-confirm"),
            {
                **self.reset_payload(token=token),
                "confirm_new_password": "DifferentSecurePassword789!",
            },
            format="json",
        )
        weak_response = self.client.post(
            reverse("password-reset-confirm"),
            self.reset_payload(token=token, password="password"),
            format="json",
        )
        reused_password_response = self.client.post(
            reverse("password-reset-confirm"),
            self.reset_payload(token=token, password="OldSecurePassword123!"),
            format="json",
        )

        self.assertEqual(mismatch_response.status_code, 400)
        self.assertEqual(weak_response.status_code, 400)
        self.assertEqual(reused_password_response.status_code, 400)
        self.assertEqual(
            reused_password_response.data["errors"]["new_password"][0],
            "Your new password must be different from your current password.",
        )
        self.user.refresh_from_db()
        self.assertEqual(self.user.password, original_password)
        self.assertTrue(Token.objects.filter(pk=self.token.pk).exists())


class ChangePasswordTests(TestCase):
    def setUp(self):
        self.user = User.objects.create_user(
            email="change.user@example.com",
            password="OldSecurePassword123!",
        )
        self.token = Token.objects.create(user=self.user)
        self.client = APIClient()

    def payload(self, **overrides):
        data = {
            "current_password": "OldSecurePassword123!",
            "new_password": "NewSecurePassword456!",
            "confirm_new_password": "NewSecurePassword456!",
        }
        data.update(overrides)
        return data

    def authenticate_client(self):
        self.client.credentials(HTTP_AUTHORIZATION=f"Token {self.token.key}")

    def test_unauthenticated_change_password_is_rejected(self):
        response = self.client.post(reverse("change-password"), self.payload(), format="json")

        self.assertEqual(response.status_code, 401)

    def test_invalid_change_password_data_preserves_password_and_token(self):
        self.authenticate_client()
        original_password = self.user.password
        incorrect_response = self.client.post(
            reverse("change-password"),
            self.payload(current_password="WrongPassword123!"),
            format="json",
        )
        mismatch_response = self.client.post(
            reverse("change-password"),
            self.payload(confirm_new_password="DifferentSecurePassword789!"),
            format="json",
        )
        weak_response = self.client.post(
            reverse("change-password"),
            self.payload(new_password="password", confirm_new_password="password"),
            format="json",
        )
        reused_password_response = self.client.post(
            reverse("change-password"),
            self.payload(
                new_password="OldSecurePassword123!",
                confirm_new_password="OldSecurePassword123!",
            ),
            format="json",
        )

        self.assertEqual(incorrect_response.status_code, 400)
        self.assertEqual(mismatch_response.status_code, 400)
        self.assertEqual(weak_response.status_code, 400)
        self.assertEqual(reused_password_response.status_code, 400)
        self.assertEqual(
            reused_password_response.data["errors"]["new_password"][0],
            "Your new password must be different from your current password.",
        )
        self.user.refresh_from_db()
        self.assertEqual(self.user.password, original_password)
        self.assertTrue(Token.objects.filter(pk=self.token.pk).exists())

    def test_successful_change_updates_password_and_invalidates_token(self):
        self.authenticate_client()
        payload = self.payload()

        response = self.client.post(reverse("change-password"), payload, format="json")

        self.assertEqual(response.status_code, 200)
        self.assertEqual(
            response.data,
            {
                "success": True,
                "message": "Password changed successfully. Please log in again.",
            },
        )
        self.user.refresh_from_db()
        self.assertFalse(self.user.check_password("OldSecurePassword123!"))
        self.assertTrue(self.user.check_password(payload["new_password"]))
        self.assertIsNone(authenticate(username=self.user.email, password="OldSecurePassword123!"))
        self.assertEqual(
            authenticate(username=self.user.email, password=payload["new_password"]),
            self.user,
        )
        self.assertFalse(Token.objects.filter(pk=self.token.pk).exists())

# Create your tests here.
