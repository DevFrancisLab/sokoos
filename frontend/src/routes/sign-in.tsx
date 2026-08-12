import { createFileRoute, Link, useRouter } from "@tanstack/react-router";
import { useEffect, useState } from "react";

import { AuthCard } from "@/components/auth-card";
import { AuthHeader } from "@/components/auth-header";
import { AuthLayout } from "@/components/auth-layout";
import { Checkbox } from "@/components/auth/checkbox";
import { PasswordInput } from "@/components/auth/password-input";
import { PrimaryButton } from "@/components/auth/primary-button";
import { TextInput } from "@/components/auth/text-input";
import { signInMock } from "@/lib/auth";

export const Route = createFileRoute("/sign-in")({
  component: SignIn,
});

export function SignIn() {
  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined" && localStorage.getItem("sokoos-auth") === "true") {
      void router.navigate({ to: "/dashboard", replace: true });
    }
  }, [router]);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [touched, setTouched] = useState({ email: false, password: false });
  const [authError, setAuthError] = useState("");

  const emailError = !email.trim()
    ? "Email is required."
    : !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
      ? "Enter a valid email address."
      : "";
  const passwordError = !password.trim() ? "Password is required." : "";
  const isValid = !emailError && !passwordError;

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setTouched({ email: true, password: true });

    if (!isValid) return;

    if (email.trim() === "demo@sokoos.com" && password === "password123") {
      localStorage.setItem("sokoos-auth", "true");
      signInMock({ id: "demo", name: "Demo User" });
      setAuthError("");
      void router.navigate({ to: "/dashboard" });
      return;
    }

    setAuthError("Invalid email or password.");
  };

  return (
    <AuthLayout>
      <AuthCard
        footer={
          <>
            New to Sokoos? {" "}
            <Link to="/sign-up" className="font-semibold text-[#111827] transition-colors hover:text-[#16A34A]">
              Create an account
            </Link>
          </>
        }
      >
        <div className="space-y-6">
          <AuthHeader
            eyebrow="Preview access"
            title="Welcome back"
            description="Sign in to your Sokoos workspace."
          />

          <form className="space-y-5" onSubmit={handleSubmit} noValidate>
            <div className="space-y-1">
              <TextInput
                id="email"
                label="Email Address"
                type="email"
                placeholder="you@company.com"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, email: true }))}
              />
              {touched.email && emailError ? (
                <p className="text-sm text-[#DC2626]">{emailError}</p>
              ) : null}
            </div>

            <div className="space-y-1">
              <PasswordInput
                id="password"
                label="Password"
                placeholder="Enter your password"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
                onBlur={() => setTouched((prev) => ({ ...prev, password: true }))}
              />
              {touched.password && passwordError ? (
                <p className="text-sm text-[#DC2626]">{passwordError}</p>
              ) : null}
            </div>

            <div className="flex items-center justify-between gap-3 text-sm">
              <Checkbox id="remember-me" label="Remember Me" />

              <a href="#" className="font-medium text-[#111827] transition-colors hover:text-[#16A34A]">
                Forgot Password?
              </a>
            </div>

            {authError ? <p className="text-sm font-medium text-[#DC2626]">{authError}</p> : null}

            <PrimaryButton type="submit" disabled={!isValid}>
              Sign In
            </PrimaryButton>
          </form>
        </div>
      </AuthCard>
    </AuthLayout>
  );
}
