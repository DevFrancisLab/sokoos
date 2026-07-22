import { createFileRoute } from "@tanstack/react-router";
import DashboardLayout from "@/components/dashboard-layout";

export const Route = createFileRoute("/dashboard/catalog")({
  component: CatalogRoute,
});

export default function CatalogRoute() {
  return <DashboardLayout />;
}
