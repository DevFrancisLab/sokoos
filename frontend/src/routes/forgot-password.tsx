import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { PrimaryButton } from "@/components/auth/primary-button";
import { TextInput } from "@/components/auth/text-input";
import { AuthCard } from "@/components/auth-card";
import { AuthHeader } from "@/components/auth-header";
import { AuthLayout } from "@/components/auth-layout";
import { ApiError, requestPasswordReset } from "@/lib/api";

export const Route = createFileRoute("/forgot-password")({
  component: ForgotPassword,
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [touched, setTouched] = useState(false);
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const emailError = !email.trim()
    ? "Email address is required."
    : !emailPattern.test(email.trim())
      ? "Enter a valid email address."
      : "";

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched(true);
    setFormMessage("");

    if (emailError || isSubmitting) return;

    setIsSubmitting(true);
    try {
      await requestPasswordReset(email.trim());
      setIsComplete(true);
    } catch (error) {
      setFormMessage(
        error instanceof ApiError && error.isNetworkError
          ? error.message
          : "Something went wrong. Please try again.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard
        footer={
          <>
            Remembered your password?{" "}
            <Link
              to="/signin"
              className="font-semibold text-[#111827] transition-colors hover:text-[#16A34A]"
            >
              Sign in
            </Link>
          </>
        }
      >
        <div className="space-y-6">
          <AuthHeader
            title="Forgot your password?"
            description="Enter your email address and we'll send you a link to reset your password."
          />

          {isComplete ? (
            <div
              className="rounded-2xl border border-[#DCFCE7] bg-[#F0FDF4] px-4 py-4 text-sm text-[#166534]"
              role="status"
            >
              <p className="font-semibold">Check your email</p>
              <p className="mt-1 leading-6">
                If an account exists for that email address, we've sent a password reset link.
              </p>
            </div>
          ) : (
            <form className="space-y-5" onSubmit={handleSubmit} noValidate>
              <div className="space-y-1">
                <TextInput
                  id="email"
                  label="Email address"
                  type="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  value={email}
                  onChange={(event) => {
                    setEmail(event.target.value);
                    setFormMessage("");
                  }}
                  onBlur={() => setTouched(true)}
                  aria-invalid={touched && Boolean(emailError)}
                  aria-describedby={touched && emailError ? "email-error" : undefined}
                />
                {touched && emailError ? (
                  <p id="email-error" className="text-sm text-[#DC2626]">
                    {emailError}
                  </p>
                ) : null}
              </div>

              {formMessage ? (
                <p
                  className="rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm font-medium text-[#B91C1C]"
                  role="alert"
                >
                  {formMessage}
                </p>
              ) : null}

              <PrimaryButton type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Sending..." : "Send reset link"}
              </PrimaryButton>
            </form>
          )}
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
