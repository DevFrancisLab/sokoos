import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";

import { Checkbox } from "@/components/auth/checkbox";
import { PasswordInput } from "@/components/auth/password-input";
import { PrimaryButton } from "@/components/auth/primary-button";
import { TextInput } from "@/components/auth/text-input";
import { AuthCard } from "@/components/auth-card";
import { AuthHeader } from "@/components/auth-header";
import { AuthLayout } from "@/components/auth-layout";
import { ApiError, apiRequest } from "@/lib/api";
import { saveAuthSession } from "@/lib/auth";

export const Route = createFileRoute("/sign-up")({
  component: SignUp,
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type SignupResponse = {
  success: boolean;
  message: string;
  token: string;
  user: {
    id: number;
    email: string;
    first_name: string;
    last_name: string;
  };
};

type BackendErrors = Record<string, string[]>;

function splitFullName(fullName: string) {
  const [firstName = "", ...lastNameParts] = fullName.trim().split(/\s+/);
  return { firstName, lastName: lastNameParts.join(" ") };
}

function getBackendErrors(data: unknown): BackendErrors | null {
  if (!data || typeof data !== "object" || !("errors" in data)) return null;

  const { errors } = data as { errors: unknown };
  if (!errors || typeof errors !== "object" || Array.isArray(errors))
    return null;

  return Object.fromEntries(
    Object.entries(errors).filter(
      ([, messages]) =>
        Array.isArray(messages) &&
        messages.every((message) => typeof message === "string"),
    ),
  ) as BackendErrors;
}

function SignUp() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [touched, setTouched] = useState({
    fullName: false,
    email: false,
    password: false,
    confirmPassword: false,
    terms: false,
  });
  const [backendErrors, setBackendErrors] = useState<BackendErrors>({});
  const [formMessage, setFormMessage] = useState("");
  const [messageType, setMessageType] = useState<"error" | "success" | null>(
    null,
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSignupComplete, setIsSignupComplete] = useState(false);

  const clientErrors = {
    fullName: !formValues.fullName.trim() ? "Full name is required." : "",
    email: !formValues.email.trim()
      ? "Email address is required."
      : !emailPattern.test(formValues.email.trim())
        ? "Enter a valid email address."
        : "",
    password: !formValues.password
      ? "Password is required."
      : formValues.password.length < 8
        ? "Password must be at least 8 characters."
        : "",
    confirmPassword: !formValues.confirmPassword
      ? "Please confirm your password."
      : formValues.password !== formValues.confirmPassword
        ? "Passwords must match."
        : "",
    terms: !formValues.terms
      ? "You must agree to the Terms and Conditions."
      : "",
  };
  const isValid = Object.values(clientErrors).every((error) => !error);
  const fullNameBackendError = [
    ...(backendErrors.first_name ?? []),
    ...(backendErrors.last_name ?? []),
  ][0];

  const clearServerFeedback = () => {
    setBackendErrors({});
    setFormMessage("");
    setMessageType(null);
  };

  const markAllTouched = () => {
    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
      terms: true,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    markAllTouched();
    clearServerFeedback();

    if (!isValid || isSubmitting) return;

    const { firstName, lastName } = splitFullName(formValues.fullName);
    setIsSubmitting(true);

    try {
      const response = await apiRequest<SignupResponse>("/api/auth/signup/", {
        method: "POST",
        body: JSON.stringify({
          email: formValues.email.trim(),
          password: formValues.password,
          first_name: firstName,
          last_name: lastName,
        }),
      });

      if (response.data?.success && response.data.token) {
        saveAuthSession(response.data.token, response.data.user);
        setIsSignupComplete(true);
        setFormMessage("Account created successfully. Redirecting to your dashboard…");
        setMessageType("success");
        window.setTimeout(() => {
          void router.navigate({ to: "/dashboard", replace: true });
        }, 400);
        return;
      }

      setFormMessage("Something went wrong. Please try again.");
      setMessageType("error");
    } catch (error) {
      if (error instanceof ApiError && error.status === 400) {
        const errors = getBackendErrors(error.data);

        if (errors) {
          setBackendErrors(errors);
          const unknownMessages = Object.entries(errors)
            .filter(
              ([field]) =>
                !["email", "password", "first_name", "last_name"].includes(
                  field,
                ),
            )
            .flatMap(([, messages]) => messages);

          if (unknownMessages.length) {
            setFormMessage(unknownMessages[0]);
            setMessageType("error");
          }
          return;
        }
      }

      setFormMessage(
        error instanceof ApiError && error.isNetworkError
          ? error.message
          : "Something went wrong. Please try again.",
      );
      setMessageType("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AuthLayout>
      <AuthCard
        footer={
          <>
            Already have an account?{" "}
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
            title="Create your Sokoos account"
            description="Create your account to get started with Sokoos."
          />

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="space-y-1">
              <TextInput
                id="full-name"
                label="Full name"
                placeholder="Jane Doe"
                value={formValues.fullName}
                onChange={(event) => {
                  setFormValues((prev) => ({
                    ...prev,
                    fullName: event.target.value,
                  }));
                  clearServerFeedback();
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, fullName: true }))
                }
                aria-invalid={
                  touched.fullName &&
                  Boolean(clientErrors.fullName || fullNameBackendError)
                }
                aria-describedby={
                  touched.fullName &&
                  (clientErrors.fullName || fullNameBackendError)
                    ? "full-name-error"
                    : undefined
                }
              />
              {touched.fullName &&
              (clientErrors.fullName || fullNameBackendError) ? (
                <p id="full-name-error" className="text-sm text-[#DC2626]">
                  {clientErrors.fullName || fullNameBackendError}
                </p>
              ) : null}
            </div>

            <div className="space-y-1">
              <TextInput
                id="email"
                label="Email address"
                type="email"
                autoComplete="email"
                placeholder="you@example.com"
                value={formValues.email}
                onChange={(event) => {
                  setFormValues((prev) => ({
                    ...prev,
                    email: event.target.value,
                  }));
                  clearServerFeedback();
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                aria-invalid={
                  touched.email &&
                  Boolean(clientErrors.email || backendErrors.email?.[0])
                }
                aria-describedby={
                  touched.email &&
                  (clientErrors.email || backendErrors.email?.[0])
                    ? "email-error"
                    : undefined
                }
              />
              {touched.email &&
              (clientErrors.email || backendErrors.email?.[0]) ? (
                <p id="email-error" className="text-sm text-[#DC2626]">
                  {clientErrors.email || backendErrors.email?.[0]}
                </p>
              ) : null}
            </div>

            <div className="space-y-1">
              <PasswordInput
                id="password"
                label="Password"
                autoComplete="new-password"
                placeholder="Create a password"
                value={formValues.password}
                onChange={(event) => {
                  setFormValues((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }));
                  clearServerFeedback();
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
                aria-invalid={
                  touched.password &&
                  Boolean(clientErrors.password || backendErrors.password?.[0])
                }
                aria-describedby="password-requirements"
              />
              <p id="password-requirements" className="text-sm text-[#64748B]">
                Use at least 8 characters.
              </p>
              {touched.password &&
              (clientErrors.password || backendErrors.password?.[0]) ? (
                <p className="text-sm text-[#DC2626]">
                  {clientErrors.password || backendErrors.password?.[0]}
                </p>
              ) : null}
            </div>

            <div className="space-y-1">
              <PasswordInput
                id="confirm-password"
                label="Confirm password"
                autoComplete="new-password"
                placeholder="Repeat your password"
                value={formValues.confirmPassword}
                onChange={(event) => {
                  setFormValues((prev) => ({
                    ...prev,
                    confirmPassword: event.target.value,
                  }));
                  clearServerFeedback();
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, confirmPassword: true }))
                }
                aria-invalid={
                  touched.confirmPassword &&
                  Boolean(clientErrors.confirmPassword)
                }
                aria-describedby={
                  touched.confirmPassword && clientErrors.confirmPassword
                    ? "confirm-password-error"
                    : undefined
                }
              />
              {touched.confirmPassword && clientErrors.confirmPassword ? (
                <p
                  id="confirm-password-error"
                  className="text-sm text-[#DC2626]"
                >
                  {clientErrors.confirmPassword}
                </p>
              ) : null}
            </div>

            <div className="space-y-1">
              <Checkbox
                id="terms"
                label="I agree to the Terms and Conditions"
                checked={formValues.terms}
                onChange={(event) => {
                  setFormValues((prev) => ({
                    ...prev,
                    terms: event.target.checked,
                  }));
                  clearServerFeedback();
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, terms: true }))}
                aria-invalid={touched.terms && Boolean(clientErrors.terms)}
                aria-describedby={
                  touched.terms && clientErrors.terms
                    ? "terms-error"
                    : undefined
                }
              />
              {touched.terms && clientErrors.terms ? (
                <p id="terms-error" className="text-sm text-[#DC2626]">
                  {clientErrors.terms}
                </p>
              ) : null}
            </div>

            {formMessage ? (
              <p
                className={
                  messageType === "success"
                    ? "rounded-2xl border border-[#DCFCE7] bg-[#F0FDF4] px-4 py-3 text-sm font-medium text-[#166534]"
                    : "rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm font-medium text-[#B91C1C]"
                }
                role="status"
              >
                {formMessage}
              </p>
            ) : null}

            <PrimaryButton
              type="submit"
              disabled={isSubmitting || isSignupComplete}
            >
              {isSubmitting ? "Creating account…" : "Create account"}
            </PrimaryButton>
          </form>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
