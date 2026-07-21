import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useState } from "react";

import { AuthCard } from "@/components/auth-card";
import { AuthHeader } from "@/components/auth-header";
import { AuthLayout } from "@/components/auth-layout";
import { Checkbox } from "@/components/auth/checkbox";
import { PasswordInput } from "@/components/auth/password-input";
import { PrimaryButton } from "@/components/auth/primary-button";
import { SelectInput } from "@/components/auth/select-input";
import { TextInput } from "@/components/auth/text-input";
import { signInMock } from "@/lib/auth";

export const Route = createFileRoute("/sign-up")({
  component: SignUp,
});

export default function SignUp() {
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    fullName: "",
    businessEmail: "",
    password: "",
    confirmPassword: "",
    businessName: "",
    businessType: "",
    phoneNumber: "",
    country: "Kenya",
    terms: false,
  });
  const [touched, setTouched] = useState({
    fullName: false,
    businessEmail: false,
    password: false,
    confirmPassword: false,
    businessName: false,
    businessType: false,
    phoneNumber: false,
    country: false,
    terms: false,
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const fullNameError = !formValues.fullName.trim() ? "Full name is required." : "";
  const businessEmailError = !formValues.businessEmail.trim()
    ? "Business email is required."
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.businessEmail)
      ? "Enter a valid email address."
      : "";
  const passwordError = formValues.password.length < 8 ? "Password must be at least 8 characters." : "";
  const confirmPasswordError =
    !formValues.confirmPassword.trim()
      ? "Please confirm your password."
      : formValues.password !== formValues.confirmPassword
        ? "Passwords must match."
        : "";
  const businessNameError = !formValues.businessName.trim() ? "Business name is required." : "";
  const businessTypeError = !formValues.businessType ? "Please select a business type." : "";
  const phoneNumberError = !formValues.phoneNumber.trim() ? "Phone number is required." : "";
  const countryError = !formValues.country.trim() ? "Country is required." : "";
  const termsError = !formValues.terms ? "You must agree to the terms." : "";

  const errors = {
    fullName: fullNameError,
    businessEmail: businessEmailError,
    password: passwordError,
    confirmPassword: confirmPasswordError,
    businessName: businessNameError,
    businessType: businessTypeError,
    phoneNumber: phoneNumberError,
    country: countryError,
    terms: termsError,
  };

  const isValid = Object.values(errors).every((error) => !error);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({
      fullName: true,
      businessEmail: true,
      password: true,
      confirmPassword: true,
      businessName: true,
      businessType: true,
      phoneNumber: true,
      country: true,
      terms: true,
    });

    if (!isValid) return;

    setIsSubmitting(true);
    setSuccessMessage("");

    window.setTimeout(() => {
      setIsSubmitting(false);
      setSuccessMessage("Workspace created successfully.");
      signInMock({ id: "demo", name: "Demo User" });
      window.setTimeout(() => {
        void router.navigate({ to: "/dashboard" });
      }, 800);
    }, 2000);
  };

  return (
    <AuthLayout>
      <AuthCard
        footer={
          <>
            Already have an account? {" "}
            <Link to="/signin" className="font-semibold text-[#111827] transition-colors hover:text-[#16A34A]">
              Sign in
            </Link>
          </>
        }
      >
        <div className="space-y-6">
          <AuthHeader
            eyebrow="Preview access"
            title="Create your AI Employee"
            description="Create your Sokoos workspace in under a minute."
          />

          <form className="space-y-4" onSubmit={handleSubmit} noValidate>
            <div className="space-y-1">
              <TextInput
                id="full-name"
                label="Full Name"
                placeholder="Jane Doe"
                value={formValues.fullName}
                onChange={(event) =>
                  setFormValues((prev) => ({ ...prev, fullName: event.target.value }))
                }
                onBlur={() => setTouched((prev) => ({ ...prev, fullName: true }))}
              />
              {touched.fullName && errors.fullName ? (
                <p className="text-sm text-[#DC2626]">{errors.fullName}</p>
              ) : null}
            </div>

            <div className="space-y-1">
              <TextInput
                id="business-email"
                label="Business Email"
                type="email"
                placeholder="you@company.com"
                value={formValues.businessEmail}
                onChange={(event) =>
                  setFormValues((prev) => ({ ...prev, businessEmail: event.target.value }))
                }
                onBlur={() => setTouched((prev) => ({ ...prev, businessEmail: true }))}
              />
              {touched.businessEmail && errors.businessEmail ? (
                <p className="text-sm text-[#DC2626]">{errors.businessEmail}</p>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <PasswordInput
                  id="password"
                  label="Password"
                  placeholder="Create a password"
                  value={formValues.password}
                  onChange={(event) =>
                    setFormValues((prev) => ({ ...prev, password: event.target.value }))
                  }
                  onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
                />
                {touched.password && errors.password ? (
                  <p className="text-sm text-[#DC2626]">{errors.password}</p>
                ) : null}
              </div>

              <div className="space-y-1">
                <PasswordInput
                  id="confirm-password"
                  label="Confirm Password"
                  placeholder="Repeat password"
                  value={formValues.confirmPassword}
                  onChange={(event) =>
                    setFormValues((prev) => ({ ...prev, confirmPassword: event.target.value }))
                  }
                  onBlur={() => setTouched((prev) => ({ ...prev, confirmPassword: true }))}
                />
                {touched.confirmPassword && errors.confirmPassword ? (
                  <p className="text-sm text-[#DC2626]">{errors.confirmPassword}</p>
                ) : null}
              </div>
            </div>

            <div className="space-y-1">
              <TextInput
                id="business-name"
                label="Business Name"
                placeholder="Sokoos Labs"
                value={formValues.businessName}
                onChange={(event) =>
                  setFormValues((prev) => ({ ...prev, businessName: event.target.value }))
                }
                onBlur={() => setTouched((prev) => ({ ...prev, businessName: true }))}
              />
              {touched.businessName && errors.businessName ? (
                <p className="text-sm text-[#DC2626]">{errors.businessName}</p>
              ) : null}
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-1">
                <SelectInput
                  id="business-type"
                  label="Business Type"
                  value={formValues.businessType}
                  onChange={(event) =>
                    setFormValues((prev) => ({ ...prev, businessType: event.target.value }))
                  }
                  onBlur={() => setTouched((prev) => ({ ...prev, businessType: true }))}
                  options={[
                    { label: "Select type", value: "" },
                    { label: "Retail", value: "retail" },
                    { label: "Restaurant", value: "restaurant" },
                    { label: "Service Business", value: "service" },
                    { label: "Education", value: "education" },
                    { label: "Healthcare", value: "healthcare" },
                    { label: "Other", value: "other" },
                  ]}
                />
                {touched.businessType && errors.businessType ? (
                  <p className="text-sm text-[#DC2626]">{errors.businessType}</p>
                ) : null}
              </div>

              <div className="space-y-1">
                <TextInput
                  id="phone-number"
                  label="Phone Number"
                  placeholder="0712 345 678"
                  value={formValues.phoneNumber}
                  onChange={(event) =>
                    setFormValues((prev) => ({ ...prev, phoneNumber: event.target.value }))
                  }
                  onBlur={() => setTouched((prev) => ({ ...prev, phoneNumber: true }))}
                />
                {touched.phoneNumber && errors.phoneNumber ? (
                  <p className="text-sm text-[#DC2626]">{errors.phoneNumber}</p>
                ) : null}
              </div>
            </div>

            <div className="space-y-1">
              <TextInput
                id="country"
                label="Country"
                defaultValue="Kenya"
                value={formValues.country}
                onChange={(event) =>
                  setFormValues((prev) => ({ ...prev, country: event.target.value }))
                }
                onBlur={() => setTouched((prev) => ({ ...prev, country: true }))}
              />
              {touched.country && errors.country ? (
                <p className="text-sm text-[#DC2626]">{errors.country}</p>
              ) : null}
            </div>

            <div className="space-y-1">
              <Checkbox
                id="terms"
                label="I agree to the Terms"
                checked={formValues.terms}
                onChange={(event) =>
                  setFormValues((prev) => ({ ...prev, terms: event.target.checked }))
                }
                onBlur={() => setTouched((prev) => ({ ...prev, terms: true }))}
              />
              {touched.terms && errors.terms ? (
                <p className="text-sm text-[#DC2626]">{errors.terms}</p>
              ) : null}
            </div>

            {successMessage ? (
              <p className="rounded-2xl border border-[#DCFCE7] bg-[#F0FDF4] px-4 py-3 text-sm font-medium text-[#166534]">
                {successMessage}
              </p>
            ) : null}

            <PrimaryButton type="submit" disabled={!isValid || isSubmitting}>
              {isSubmitting ? "Creating Workspace..." : "Create Workspace"}
            </PrimaryButton>
          </form>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
