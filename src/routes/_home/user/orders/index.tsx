import { createFileRoute } from "@tanstack/react-router";
import UserOrders from "./-user-orders.page";

export const Route = createFileRoute("/_home/user/orders/")({
  component: UserOrders,
});
