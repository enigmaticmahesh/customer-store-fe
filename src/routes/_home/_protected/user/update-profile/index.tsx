import { createFileRoute } from "@tanstack/react-router";
import UpdateProfilePage from "./-update-profile.page";

export const Route = createFileRoute("/_home/_protected/user/update-profile/")({
  component: UpdateProfilePage,
});
