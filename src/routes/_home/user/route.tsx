import { createFileRoute } from "@tanstack/react-router";
import UserLayout from "./-user.layout";

export const Route = createFileRoute("/_home/user")({
  component: UserLayout,
});
