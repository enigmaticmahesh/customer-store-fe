import { createFileRoute } from "@tanstack/react-router";
import ChangePasswordPage from "./-change-pwd.page";

export const Route = createFileRoute("/_home/_protected/user/change-password/")({
  component: ChangePasswordPage,
});
