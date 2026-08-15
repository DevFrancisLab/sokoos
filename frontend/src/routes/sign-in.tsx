import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Checkbox } from "@/components/auth/checkbox";
import { PasswordInput } from "@/components/auth/password-input";
import { PrimaryButton } from "@/components/auth/primary-button";
import { TextInput } from "@/components/auth/text-input";
import { AuthCard } from "@/components/auth-card";
import { AuthHeader } from "@/components/auth-header";
import { AuthLayout } from "@/components/auth-layout";

export const Route = createFileRoute("/sign-in")({
  component: SignIn,
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [touched, setTouched] = useState({ email: false, password: false });
  const [formMessage, setFormMessage] = useState("");

  const errors = {
    email: !email.trim()
      ? "Email address is required."
      : !emailPattern.test(email.trim())
        ? "Enter a valid email address."
        : "",
    password: !password ? "Password is required." : "",
  };
  const isValid = Object.values(errors).every((error) => !error);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ email: true, password: true });
    setFormMessage("");

    if (!isValid) return;

    setFormMessage(
      "Sign in will be available when authentication is connected.",
    );
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

              <a
                href="#"
                className="font-medium text-[#111827] transition-colors hover:text-[#16A34A]"
              >
                Forgot password?
              </a>
            </div>

            {formMessage ? (
              <p
                className="rounded-2xl border border-[#DCFCE7] bg-[#F0FDF4] px-4 py-3 text-sm font-medium text-[#166534]"
                role="status"
              >
                {formMessage}
              </p>
            ) : null}

            <PrimaryButton type="submit">Sign in</PrimaryButton>
          </form>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
