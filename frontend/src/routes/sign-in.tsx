import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { signInMock } from "@/lib/auth";

export const Route = createFileRoute("/sign-in")({
  component: SignIn,
});

export default function SignIn() {
  useEffect(() => {
    // set a mock user and redirect to /dashboard
    signInMock({ id: "1", name: "Mock User" });
    // give a tick for storage then redirect
    setTimeout(() => {
      window.location.href = "/dashboard";
    }, 50);
  }, []);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold">Signing you in…</h1>
        <p className="mt-2 text-sm text-muted-foreground">Redirecting to your dashboard.</p>
      </div>
    </div>
  );
}
