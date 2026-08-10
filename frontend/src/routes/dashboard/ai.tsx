import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard/ai")({
  component: AiRoute,
});

function AiRoute() {
  return <DashboardLayout />;
}
