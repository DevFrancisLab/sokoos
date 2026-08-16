import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { Checkbox } from "@/components/auth/checkbox";
import { PasswordInput } from "@/components/auth/password-input";
import { PrimaryButton } from "@/components/auth/primary-button";
import { TextInput } from "@/components/auth/text-input";
import { AuthCard } from "@/components/auth-card";
import { AuthHeader } from "@/components/auth-header";
import { AuthLayout } from "@/components/auth-layout";
import { ApiError, apiRequest } from "@/lib/api";
import { isAuthenticated, saveAuthSession, type AuthUser } from "@/lib/auth";

export const Route = createFileRoute("/sign-in")({
  component: SignIn,
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type LoginResponse = {
  success: boolean;
  message: string;
  token: string;
  user: AuthUser;
};

function getErrorMessage(data: unknown) {
  if (!data || typeof data !== "object" || !("errors" in data)) return null;
  const errors = (data as { errors: unknown }).errors;
  if (!errors || typeof errors !== "object") return null;
  return Object.values(errors as Record<string, unknown>)
    .flatMap((messages) => (Array.isArray(messages) ? messages : []))
    .find((message): message is string => typeof message === "string");
}

export function SignIn() {
  const router = useRouter();
  const authenticated = isAuthenticated();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [formMessage, setFormMessage] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const errors = {
    email: !email.trim()
      ? "Email address is required."
      : !emailPattern.test(email.trim())
        ? "Enter a valid email address."
        : "",
    password: !password ? "Password is required." : "",
  };
  const isValid = Object.values(errors).every((error) => !error);

  useEffect(() => {
    if (authenticated) {
      void router.navigate({ to: "/dashboard", replace: true });
    }
  }, [authenticated, router]);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ email: true, password: true });
    setFormMessage("");

    if (!isValid || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await apiRequest<LoginResponse>("/api/auth/login/", {
        method: "POST",
        body: JSON.stringify({ email: email.trim(), password }),
      });

      if (response.data?.success && response.data.token) {
        saveAuthSession(response.data.token, response.data.user, rememberMe);
        void router.navigate({ to: "/dashboard", replace: true });
        return;
      }

      setFormMessage("Unable to sign in. Please try again.");
    } catch (error) {
      const backendMessage = error instanceof ApiError ? getErrorMessage(error.data) : null;
      setFormMessage(
        backendMessage ??
          (error instanceof ApiError && error.isNetworkError
            ? error.message
            : "Unable to sign in. Please check your details and try again."),
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
            New to Sokoos?{" "}
            <Link
              to="/sign-up"
              className="font-semibold text-[#111827] transition-colors hover:text-[#16A34A]"
            >
              Create an account
            </Link>
          </>
        }
      >
        <div className="space-y-6">
          <AuthHeader
            title="Welcome back"
            description="Sign in to your Sokoos account."
          />

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
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
                aria-invalid={touched.email && Boolean(errors.email)}
                aria-describedby={
                  touched.email && errors.email ? "email-error" : undefined
                }
              />
              {touched.email && errors.email ? (
                <p id="email-error" className="text-sm text-[#DC2626]">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="space-y-1">
              <PasswordInput
                id="password"
                label="Password"
                autoComplete="current-password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => {
                  setPassword(event.target.value);
                  setFormMessage("");
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
                aria-invalid={touched.password && Boolean(errors.password)}
                aria-describedby={
                  touched.password && errors.password
                    ? "password-error"
                    : undefined
                }
              />
              {touched.password && errors.password ? (
                <p id="password-error" className="text-sm text-[#DC2626]">
                  {errors.password}
                </p>
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-3 text-sm">
              <Checkbox
                id="remember-me"
                label="Remember me"
                checked={rememberMe}
                onChange={(event) => setRememberMe(event.target.checked)}
              />

              <Link
                to="/forgot-password"
                className="font-medium text-[#111827] transition-colors hover:text-[#16A34A]"
              >
                Forgot password?
              </Link>
            </div>

            {formMessage ? (
              <p className="rounded-2xl border border-[#FECACA] bg-[#FEF2F2] px-4 py-3 text-sm font-medium text-[#B91C1C]" role="alert">
                {formMessage}
              </p>
            ) : null}

            <PrimaryButton type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Signing in…" : "Sign in"}
            </PrimaryButton>
          </form>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
