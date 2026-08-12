import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsRoute,
});

function SettingsRoute() {
  return <DashboardLayout />;
}
