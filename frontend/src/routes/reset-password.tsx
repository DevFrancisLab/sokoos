import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { PasswordInput } from "@/components/auth/password-input";
import { PrimaryButton } from "@/components/auth/primary-button";
import { AuthCard } from "@/components/auth-card";
import { AuthHeader } from "@/components/auth-header";
import { AuthLayout } from "@/components/auth-layout";
import { ApiError, confirmPasswordReset } from "@/lib/api";

export const Route = createFileRoute("/reset-password")({
  validateSearch: (search: Record<string, unknown>) => ({
    uid: typeof search.uid === "string" ? search.uid : "",
    token: typeof search.token === "string" ? search.token : "",
  }),
  component: ResetPassword,
});

type BackendErrors = Record<string, string[]>;

function getBackendErrors(data: unknown): BackendErrors | null {
  if (!data || typeof data !== "object" || !("errors" in data)) return null;
  const errors = (data as { errors: unknown }).errors;
  if (!errors || typeof errors !== "object" || Array.isArray(errors)) return null;

  return Object.fromEntries(
    Object.entries(errors).filter(
      ([, messages]) =>
        Array.isArray(messages) &&
        messages.every((message) => typeof message === "string"),
    ),
  ) as BackendErrors;
}

function ResetPassword() {
  const { uid, token } = Route.useSearch();
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [touched, setTouched] = useState({ newPassword: false, confirmNewPassword: false });
  const [backendErrors, setBackendErrors] = useState<BackendErrors>({});
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const clientErrors = {
    newPassword: !newPassword
      ? "New password is required."
      : newPassword.length < 8
        ? "Password must be at least 8 characters."
        : "",
    confirmNewPassword: !confirmNewPassword
      ? "Please confirm your new password."
      : newPassword !== confirmNewPassword
        ? "Passwords must match."
        : "",
  };
  const isValid = Boolean(uid && token) && Object.values(clientErrors).every((error) => !error);

  const clearServerFeedback = () => {
    setBackendErrors({});
    setFormMessage("");
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ newPassword: true, confirmNewPassword: true });
    clearServerFeedback();

    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await confirmPasswordReset(uid, token, newPassword, confirmNewPassword);
      setIsComplete(true);
    } catch (error) {
      if (error instanceof ApiError && error.status === 400) {
        const errors = getBackendErrors(error.data);
        if (errors?.token) {
          setFormMessage("This password reset link is invalid or has expired. Please request a new one.");
          return;
        }
        if (errors) {
          setBackendErrors(errors);
          return;
        }
      }

      setFormMessage(
        error instanceof ApiError && error.isNetworkError
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const invalidLink = !uid || !token;

  return (
    <AuthLayout>
      <AuthCard>
        <div className="space-y-6">
          <AuthHeader
            title="Reset your password"
            description="Choose a new password for your Sokoos account."
          />

          {isComplete ? (
            <div className="space-y-5">
              <div className="rounded-2xl border border-[#DCFCE7] bg-[#F0FDF4] px-4 py-4 text-sm text-[#166534]" role="status">
                <p className="font-semibold">Password reset successfully</p>
                <p className="mt-1 leading-6">Your password has been changed. Please log in with your new password.</p>
              </div>
              <Link
                to="/signin"
                className="inline-flex w-full items-center justify-center rounded-2xl bg-[#16A34A] px-4 py-3 text-sm font-semibold text-white shadow-sm transition-transform hover:-translate-y-0.5 hover:bg-[#15803D]"
              >
                Go to login
              </Link>
            </div>
          ) : invalidLink ? (
            <div className="space-y-5">
              <p className="rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm font-medium text-[#B91C1C]" role="alert">
                This password reset link is invalid or has expired. Please request a new one.
              </p>
              <Link to="/forgot-password" className="font-semibold text-[#111827] transition-colors hover:text-[#16A34A]">
                Request a new reset link
              </Link>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="space-y-1">
                <PasswordInput
                  id="new-password"
                  label="New password"
                  autoComplete="new-password"
                  placeholder="Create a new password"
                  value={newPassword}
                  onChange={(event) => {
                    setNewPassword(event.target.value);
                    clearServerFeedback();
                  }}
                  onBlur={() => setTouched((current) => ({ ...current, newPassword: true }))}
                  aria-invalid={touched.newPassword && Boolean(clientErrors.newPassword || backendErrors.new_password?.[0])}
                  aria-describedby="new-password-requirements"
                />
                <p id="new-password-requirements" className="text-sm text-[#64748B]">Use at least 8 characters.</p>
                {touched.newPassword && (clientErrors.newPassword || backendErrors.new_password?.[0]) ? (
                  <p className="text-sm text-[#DC2626]">{clientErrors.newPassword || backendErrors.new_password?.[0]}</p>
                ) : null}
              </div>

              <div className="space-y-1">
                <PasswordInput
                  id="confirm-new-password"
                  label="Confirm new password"
                  autoComplete="new-password"
                  placeholder="Repeat your new password"
                  value={confirmNewPassword}
                  onChange={(event) => {
                    setConfirmNewPassword(event.target.value);
                    clearServerFeedback();
                  }}
                  onBlur={() => setTouched((current) => ({ ...current, confirmNewPassword: true }))}
                  aria-invalid={touched.confirmNewPassword && Boolean(clientErrors.confirmNewPassword || backendErrors.confirm_new_password?.[0])}
                />
                {touched.confirmNewPassword && (clientErrors.confirmNewPassword || backendErrors.confirm_new_password?.[0]) ? (
                  <p className="text-sm text-[#DC2626]">{clientErrors.confirmNewPassword || backendErrors.confirm_new_password?.[0]}</p>
                ) : null}
              </div>

              {formMessage ? (
                <div className="space-y-3">
                  <p className="rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm font-medium text-[#B91C1C]" role="alert">{formMessage}</p>
                  {formMessage.startsWith("This password reset link") ? (
                    <Link to="/forgot-password" className="font-semibold text-[#111827] transition-colors hover:text-[#16A34A]">
                      Request a new reset link
                    </Link>
                  ) : null}
                </div>
              ) : null}

              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Resetting..." : "Reset password"}
              </PrimaryButton>
            </form>
          )}
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
