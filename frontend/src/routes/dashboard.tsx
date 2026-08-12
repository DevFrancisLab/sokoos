import { createFileRoute, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { isAuthenticated } from "@/lib/auth";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard")({
  component: Dashboard,
});

// The layout handles the sidebar and page placeholders; keep this route minimal.

function Dashboard() {
  const router = useRouter();
  const authenticated = isAuthenticated();

  useEffect(() => {
    if (!authenticated) {
      void router.navigate({ to: "/signin", replace: true });
    }
  }, [authenticated, router]);

  if (!authenticated) {
    return null;
  }

  return <DashboardLayout />;
}
