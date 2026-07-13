import { createFileRoute } from "@tanstack/react-router";
import CheckoutPage from "./-checkout.page";

export const Route = createFileRoute("/_home/_protected/checkout/")({
  component: CheckoutPage,
});
