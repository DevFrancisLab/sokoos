import { Outlet, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";

export function ProtectedRoute() {
  const router = useRouter();
  const isAuthenticated =
    typeof window !== "undefined" && localStorage.getItem("sokoos-auth") === "true";

  useEffect(() => {
    if (!isAuthenticated) {
      void router.navigate({ to: "/signin", replace: true });
    }
  }, [isAuthenticated, router]);

  if (!isAuthenticated) {
    return null;
  }

  return <Outlet />;
}
