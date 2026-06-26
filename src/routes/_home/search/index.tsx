import { createFileRoute } from "@tanstack/react-router";
import SearchProductsPage from "./-search-products.page";

export const Route = createFileRoute("/_home/search/")({
  component: SearchProductsPage,
});
