import { createFileRoute } from "@tanstack/react-router";
import SignInPage, { Route as SignInRoute } from "./sign-in";

export const Route = createFileRoute("/signin")({
  component: SignInPage,
});

export default SignInPage;
