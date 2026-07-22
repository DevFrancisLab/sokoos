import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard/settings")({
  component: SettingsRoute,
});

export default function SettingsRoute() {
  return <DashboardLayout />;
}
