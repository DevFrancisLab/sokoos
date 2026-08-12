import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard/integrations")({
  component: IntegrationsRoute,
});

function IntegrationsRoute() {
  return <DashboardLayout />;
}
