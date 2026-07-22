import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard/inbox")({
  component: InboxRoute,
});

export default function InboxRoute() {
  return <DashboardLayout />;
}
