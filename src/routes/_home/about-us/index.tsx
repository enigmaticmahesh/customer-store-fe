import { createFileRoute } from "@tanstack/react-router";
import AboutUsPage from "./-about-us.page";

export const Route = createFileRoute("/_home/about-us/")({
  component: AboutUsPage,
});
