import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard/customers")({
  component: CustomersRoute,
});

export default function CustomersRoute() {
  return <DashboardLayout />;
}
