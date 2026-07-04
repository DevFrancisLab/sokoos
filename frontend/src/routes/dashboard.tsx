import { useEffect } from "react";
import { createFileRoute } from "@tanstack/react-router";
import { isAuthenticated, getMockUser, signOutMock } from "@/lib/auth";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

function DashboardInner() {
  const user = getMockUser();

  return (
    <div className="min-h-screen bg-background p-6">
      <div className="container-page">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex items-center gap-3">
            <span className="text-sm text-muted-foreground">{user?.name}</span>
            <button
              onClick={() => {
                signOutMock();
                window.location.href = "/";
              }}
              className="rounded-md border px-3 py-1 text-sm"
            >
              Sign out
            </button>
          </div>
        </div>

        <section className="mt-6">
          <h2 className="text-xl font-semibold">Home</h2>
          <p className="mt-2 text-muted-foreground">Welcome to your dashboard home page.</p>
        </section>
      </div>
    </div>
  );
}

export default function Dashboard() {
  useEffect(() => {
    if (!isAuthenticated()) {
      // not authenticated — redirect to sign-in
      window.location.href = "/sign-in";
    }
  }, []);

  // If authenticated, render inner dashboard
  if (!isAuthenticated()) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background px-4">
        <div className="max-w-md text-center">
          <h1 className="text-xl font-semibold">Redirecting to sign in…</h1>
        </div>
      </div>
    );
  }

  return <DashboardInner />;
}
