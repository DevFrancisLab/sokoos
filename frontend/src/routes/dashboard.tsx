import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { isAuthenticated, getMockUser, signOutMock } from "@/lib/auth";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

// The layout handles the sidebar and page placeholders; keep this route minimal.

export default function Dashboard() {
  useEffect(() => {
    if (!isAuthenticated()) {
      // not authenticated — redirect to sign-in
      window.location.href = "/sign-in";
    }
  }, []);

  // If authenticated, render the DashboardLayout which manages its own internal
  // placeholder pages via React state.
  if (!isAuthenticated()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold">Redirecting to sign in…</h1>
        </div>
      </div>
    );
  }

  return <DashboardLayout />;
}
