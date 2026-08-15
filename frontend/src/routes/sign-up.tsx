import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";

import { Checkbox } from "@/components/auth/checkbox";
import { PasswordInput } from "@/components/auth/password-input";
import { PrimaryButton } from "@/components/auth/primary-button";
import { TextInput } from "@/components/auth/text-input";
import { AuthCard } from "@/components/auth-card";
import { AuthHeader } from "@/components/auth-header";
import { AuthLayout } from "@/components/auth-layout";

export const Route = createFileRoute("/sign-up")({
  component: SignUp,
});

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function SignUp() {
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
  const [formMessage, setFormMessage] = useState("");

  const errors = {
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

  const isValid = Object.values(errors).every((error) => !error);

  const markAllTouched = () => {
    setTouched({
      fullName: true,
      email: true,
      password: true,
      confirmPassword: true,
      terms: true,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    markAllTouched();
    setFormMessage("");

    if (!isValid) return;

    setFormMessage(
      "Account creation will be available when authentication is connected.",
    );
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
                  setFormMessage("");
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, fullName: true }))
                }
                aria-invalid={touched.fullName && Boolean(errors.fullName)}
                aria-describedby={
                  touched.fullName && errors.fullName
                    ? "full-name-error"
                    : undefined
                }
              />
              {touched.fullName && errors.fullName ? (
                <p id="full-name-error" className="text-sm text-[#DC2626]">
                  {errors.fullName}
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
                autoComplete="new-password"
                placeholder="Create a password"
                value={formValues.password}
                onChange={(event) => {
                  setFormValues((prev) => ({
                    ...prev,
                    password: event.target.value,
                  }));
                  setFormMessage("");
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, password: true }))
                }
                aria-invalid={touched.password && Boolean(errors.password)}
                aria-describedby="password-requirements"
              />
              <p id="password-requirements" className="text-sm text-[#64748B]">
                Use at least 8 characters.
              </p>
              {touched.password && errors.password ? (
                <p className="text-sm text-[#DC2626]">{errors.password}</p>
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
                  setFormMessage("");
                }}
                onBlur={() =>
                  setTouched((prev) => ({ ...prev, confirmPassword: true }))
                }
                aria-invalid={
                  touched.confirmPassword && Boolean(errors.confirmPassword)
                }
                aria-describedby={
                  touched.confirmPassword && errors.confirmPassword
                    ? "confirm-password-error"
                    : undefined
                }
              />
              {touched.confirmPassword && errors.confirmPassword ? (
                <p
                  id="confirm-password-error"
                  className="text-sm text-[#DC2626]"
                >
                  {errors.confirmPassword}
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
                  setFormMessage("");
                }}
                onBlur={() => setTouched((prev) => ({ ...prev, terms: true }))}
                aria-invalid={touched.terms && Boolean(errors.terms)}
                aria-describedby={
                  touched.terms && errors.terms ? "terms-error" : undefined
                }
              />
              {touched.terms && errors.terms ? (
                <p id="terms-error" className="text-sm text-[#DC2626]">
                  {errors.terms}
                </p>
              ) : null}
            </div>

            {formMessage ? (
              <p
                className="rounded-2xl border border-[#DCFCE7] bg-[#F0FDF4] px-4 py-3 text-sm font-medium text-[#166534]"
                role="status"
              >
                {formMessage}
              </p>
            ) : null}

            <PrimaryButton type="submit">Create account</PrimaryButton>
          </form>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
