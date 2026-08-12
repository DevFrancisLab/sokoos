import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard/inbox")({
  component: InboxRoute,
});

function InboxRoute() {
  return <DashboardLayout />;
}
