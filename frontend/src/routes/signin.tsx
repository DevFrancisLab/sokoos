import { createFileRoute } from "@tanstack/react-router";
import { SignIn } from "./sign-in";

export const Route = createFileRoute("/signin")({
  component: SignIn,
});

