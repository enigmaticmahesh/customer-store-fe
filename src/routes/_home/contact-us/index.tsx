import { createFileRoute } from "@tanstack/react-router";
import ContactUsPage from "./-contact-us.page";

export const Route = createFileRoute("/_home/contact-us/")({
  component: ContactUsPage,
});
