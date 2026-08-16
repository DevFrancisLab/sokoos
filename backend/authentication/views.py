import logging
from urllib.parse import urlencode

from django.conf import settings
from django.contrib.auth import get_user_model
from django.contrib.auth.tokens import default_token_generator
from django.core.mail import send_mail
from django.db import transaction
from django.utils.encoding import force_bytes
from django.utils.http import urlsafe_base64_encode
from rest_framework import status
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.authtoken.models import Token
from rest_framework.permissions import IsAuthenticated
from rest_framework.parsers import FormParser, JSONParser, MultiPartParser

from .serializers import (
    ChangePasswordSerializer,
    LoginSerializer,
    PasswordResetConfirmSerializer,
    PasswordResetRequestSerializer,
    SignupSerializer,
    UserProfileSerializer,
)


logger = logging.getLogger(__name__)
User = get_user_model()


def send_deletion_confirmation(email, first_name):
    try:
        send_mail(
            subject="Your Sokoos account has been deleted",
            message=(
                f"Hi {first_name or email},\n\n"
                "Your Sokoos account has been deleted successfully. "
                "If you did not request this, please contact support."
            ),
            from_email=None,
            recipient_list=[email],
            fail_silently=False,
        )
    except Exception:
        logger.exception(
            "Failed to send account deletion confirmation email to %s", email
        )


def send_password_reset_email(user):
    if not settings.FRONTEND_BASE_URL:
        logger.error("Password reset email was not sent because FRONTEND_BASE_URL is unset.")
        return

    uid = urlsafe_base64_encode(force_bytes(user.pk))
    token = default_token_generator.make_token(user)
    reset_url = (
        f"{settings.FRONTEND_BASE_URL}/reset-password?"
        f"{urlencode({'uid': uid, 'token': token})}"
    )

    try:
        send_mail(
            subject="Reset your Sokoos password",
            message=(
                f"Hi {user.first_name or user.email},\n\n"
                "We received a request to reset your Sokoos password. "
                "Use the link below to choose a new password:\n\n"
                f"{reset_url}\n\n"
                "This link expires in 1 hour. If you did not request a password "
                "reset, you can safely ignore this email."
            ),
            from_email=None,
            recipient_list=[user.email],
            fail_silently=False,
        )
    except Exception:
        logger.exception("Failed to send password reset email to %s", user.email)


class SignupView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        serializer = SignupSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {
                    "success": False,
                    "errors": serializer.errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        with transaction.atomic():
            user = serializer.save()
            token, _ = Token.objects.get_or_create(user=user)
            transaction.on_commit(
                lambda: send_mail(
                    subject="Welcome to Sokoos",
                    message=(
                        f"Hi {user.first_name or user.email},\n\n"
                        "Welcome to Sokoos. Your account has been created successfully."
                    ),
                    from_email=None,
                    recipient_list=[user.email],
                    fail_silently=False,
                )
            )

        return Response(
            {
                "success": True,
                "message": "Account created successfully.",
                "token": token.key,
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                },
            },
            status=status.HTTP_201_CREATED,
        )


class CurrentUserView(APIView):
    permission_classes = [IsAuthenticated]
    parser_classes = [JSONParser, FormParser, MultiPartParser]

    def get(self, request):
        return Response(UserProfileSerializer(request.user, context={"request": request}).data)

    def patch(self, request):
        serializer = UserProfileSerializer(
            request.user,
            data=request.data,
            partial=True,
            context={"request": request},
        )

        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        serializer.save()
        return Response(
            {"success": True, "user": serializer.data},
            status=status.HTTP_200_OK,
        )


class DeleteAccountView(APIView):
    permission_classes = [IsAuthenticated]

    def delete(self, request):
        email = request.user.email
        first_name = request.user.first_name

        with transaction.atomic():
            request.user.delete()
            transaction.on_commit(
                lambda: send_deletion_confirmation(email, first_name)
            )

        return Response(
            {
                "success": True,
                "message": "Account deleted successfully.",
            },
            status=status.HTTP_200_OK,
        )


class PasswordResetRequestView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        serializer = PasswordResetRequestSerializer(data=request.data)

        if serializer.is_valid():
            email = serializer.validated_data["email"]
            user = User.objects.filter(email__iexact=email, is_active=True).first()
            if user is not None:
                send_password_reset_email(user)

        return Response(
            {
                "success": True,
                "message": "If an active account matches this email, a password reset link will be sent.",
            },
            status=status.HTTP_200_OK,
        )


class PasswordResetConfirmView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        serializer = PasswordResetConfirmSerializer(data=request.data)

        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        user = serializer.validated_data["user"]
        with transaction.atomic():
            user.set_password(serializer.validated_data["new_password"])
            user.save()
            Token.objects.filter(user=user).delete()

        return Response(
            {
                "success": True,
                "message": "Password reset successfully. Please log in again.",
            },
            status=status.HTTP_200_OK,
        )


class ChangePasswordView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        serializer = ChangePasswordSerializer(data=request.data, context={"request": request})

        if not serializer.is_valid():
            return Response(
                {"success": False, "errors": serializer.errors},
                status=status.HTTP_400_BAD_REQUEST,
            )

        with transaction.atomic():
            request.user.set_password(serializer.validated_data["new_password"])
            request.user.save()
            Token.objects.filter(user=request.user).delete()

        return Response(
            {
                "success": True,
                "message": "Password changed successfully. Please log in again.",
            },
            status=status.HTTP_200_OK,
        )

class LoginView(APIView):
    authentication_classes = []
    permission_classes = []

    def post(self, request):
        serializer = LoginSerializer(
            data=request.data,
            context={"request": request},
        )

        if not serializer.is_valid():
            return Response(
                {
                    "success": False,
                    "errors": serializer.errors,
                },
                status=status.HTTP_400_BAD_REQUEST,
            )

        user = serializer.validated_data["user"]

        token, _ = Token.objects.get_or_create(user=user)

        return Response(
            {
                "success": True,
                "message": "Login successful.",
                "token": token.key,
                "user": {
                    "id": user.id,
                    "email": user.email,
                    "first_name": user.first_name,
                    "last_name": user.last_name,
                    "is_verified": user.is_verified,
                },
            },
            status=status.HTTP_200_OK,
        )

class LogoutView(APIView):
    permission_classes = [IsAuthenticated]

    def post(self, request):
        if request.auth is not None:
            request.auth.delete()

        return Response(
            {
                "success": True,
                "message": "Logout successful.",
            },
            status=status.HTTP_200_OK,
        )
