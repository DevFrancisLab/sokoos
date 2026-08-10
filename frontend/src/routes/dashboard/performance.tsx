import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard/performance")({
  component: PerformanceRoute,
});

function PerformanceRoute() {
  return <DashboardLayout />;
}
