import { createFileRoute } from "@tanstack/react-router";
import ProductDetails from "./-product-details.page";

export const Route = createFileRoute("/_home/product/$productId")({
  component: ProductDetails,
});
