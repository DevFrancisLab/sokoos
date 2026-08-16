from django.urls import path

from .views import (
    ChangePasswordView,
    CurrentUserView,
    DeleteAccountView,
    LoginView,
    LogoutView,
    PasswordResetConfirmView,
    PasswordResetRequestView,
    SignupView,
)


urlpatterns = [
    path("signup/", SignupView.as_view(), name="signup"),
    path("login/", LoginView.as_view(), name="login"),
    path("logout/", LogoutView.as_view(), name="logout"),
    path("me/", CurrentUserView.as_view(), name="current-user"),
    path("delete-account/", DeleteAccountView.as_view(), name="delete-account"),
    path("password-reset/", PasswordResetRequestView.as_view(), name="password-reset"),
    path(
        "password-reset/confirm/",
        PasswordResetConfirmView.as_view(),
        name="password-reset-confirm",
    ),
    path("change-password/", ChangePasswordView.as_view(), name="change-password"),
]
