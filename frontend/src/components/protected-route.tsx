import { Outlet, useRouter } from "@tanstack/react-router";
import { useEffect } from "react";
import { isAuthenticated } from "@/lib/auth";

export function ProtectedRoute() {
  const router = useRouter();
  const authenticated = isAuthenticated();

  useEffect(() => {
    if (!authenticated) {
      void router.navigate({ to: "/signin", replace: true });
    }
  }, [authenticated, router]);

  if (!authenticated) {
    return null;
  }

  return <Outlet />;
}
