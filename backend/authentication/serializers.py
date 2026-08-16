from django.contrib.auth import get_user_model, authenticate
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.tokens import default_token_generator
from django.core.exceptions import ValidationError as DjangoValidationError
from django.utils.encoding import force_str
from django.utils.http import urlsafe_base64_decode
from rest_framework import serializers


User = get_user_model()
MAX_AVATAR_SIZE_BYTES = 5 * 1024 * 1024


class SignupSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True,
        min_length=8,
        style={"input_type": "password"},
    )

    class Meta:
        model = User
        fields = [
            "email",
            "password",
            "first_name",
            "last_name",
        ]

    def validate_email(self, value):
        email = value.strip().lower()

        if User.objects.filter(email__iexact=email).exists():
            raise serializers.ValidationError(
                "An account with this email already exists."
            )

        return email

    def create(self, validated_data):
        password = validated_data.pop("password")

        user = User.objects.create_user(
            password=password,
            **validated_data,
        )

        return user


class UserProfileSerializer(serializers.ModelSerializer):
    avatar_url = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = [
            "id",
            "email",
            "first_name",
            "last_name",
            "is_verified",
            "avatar",
            "avatar_url",
        ]
        read_only_fields = ["id", "is_verified", "avatar_url"]
        extra_kwargs = {
            "avatar": {"write_only": True, "required": False},
        }

    def validate_email(self, value):
        email = value.strip().lower()
        user = self.instance

        if User.objects.filter(email__iexact=email).exclude(pk=user.pk).exists():
            raise serializers.ValidationError(
                "An account with this email already exists."
            )

        return email

    def validate_avatar(self, value):
        if value.size > MAX_AVATAR_SIZE_BYTES:
            raise serializers.ValidationError("Choose an image smaller than 5MB.")
        return value

    def update(self, instance, validated_data):
        """Persist only the fields exposed by the Edit Profile form."""
        for field in ("email", "first_name", "last_name", "avatar"):
            if field in validated_data:
                setattr(instance, field, validated_data[field])

        instance.save()
        return instance

    def get_avatar_url(self, user):
        if not user.avatar:
            return None

        request = self.context.get("request")
        return request.build_absolute_uri(user.avatar.url) if request else user.avatar.url

class LoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField(
        write_only=True,
        style={"input_type": "password"},
    )

    def validate(self, attrs):
        email = attrs["email"].strip().lower()
        password = attrs["password"]

        user = authenticate(
            request=self.context.get("request"),
            username=email,
            password=password,
        )

        if user is None:
            raise serializers.ValidationError(
                "Invalid email or password."
            )

        if not user.is_active:
            raise serializers.ValidationError(
                "This account is inactive."
            )

        attrs["user"] = user

        return attrs


class PasswordResetRequestSerializer(serializers.Serializer):
    email = serializers.EmailField()

    def validate_email(self, value):
        return value.strip().lower()


class PasswordResetConfirmSerializer(serializers.Serializer):
    uid = serializers.CharField(write_only=True)
    token = serializers.CharField(write_only=True)
    new_password = serializers.CharField(write_only=True, style={"input_type": "password"})
    confirm_new_password = serializers.CharField(write_only=True, style={"input_type": "password"})

    invalid_link_message = "This password reset link is invalid or has expired."

    def validate(self, attrs):
        try:
            user_id = force_str(urlsafe_base64_decode(attrs["uid"]))
            user = User.objects.get(pk=user_id)
        except (TypeError, ValueError, OverflowError, UnicodeDecodeError, User.DoesNotExist):
            raise serializers.ValidationError({"token": self.invalid_link_message})

        if not user.is_active or not default_token_generator.check_token(user, attrs["token"]):
            raise serializers.ValidationError({"token": self.invalid_link_message})

        if attrs["new_password"] != attrs["confirm_new_password"]:
            raise serializers.ValidationError(
                {"confirm_new_password": "Passwords do not match."}
            )

        if user.check_password(attrs["new_password"]):
            raise serializers.ValidationError(
                {"new_password": "Your new password must be different from your current password."}
            )

        try:
            validate_password(attrs["new_password"], user)
        except DjangoValidationError as error:
            raise serializers.ValidationError({"new_password": error.messages})

        attrs["user"] = user
        return attrs


class ChangePasswordSerializer(serializers.Serializer):
    current_password = serializers.CharField(write_only=True, style={"input_type": "password"})
    new_password = serializers.CharField(write_only=True, style={"input_type": "password"})
    confirm_new_password = serializers.CharField(write_only=True, style={"input_type": "password"})

    def validate(self, attrs):
        user = self.context["request"].user

        if not user.check_password(attrs["current_password"]):
            raise serializers.ValidationError(
                {"current_password": "Current password is incorrect."}
            )

        if attrs["new_password"] != attrs["confirm_new_password"]:
            raise serializers.ValidationError(
                {"confirm_new_password": "Passwords do not match."}
            )

        if user.check_password(attrs["new_password"]):
            raise serializers.ValidationError(
                {"new_password": "Your new password must be different from your current password."}
            )

        try:
            validate_password(attrs["new_password"], user)
        except DjangoValidationError as error:
            raise serializers.ValidationError({"new_password": error.messages})

        return attrs
