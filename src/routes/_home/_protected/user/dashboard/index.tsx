import { createFileRoute } from "@tanstack/react-router";
import UserDashboard from "./-user-dashboard.page";

export const Route = createFileRoute("/_home/_protected/user/dashboard/")({
  component: UserDashboard,
});
