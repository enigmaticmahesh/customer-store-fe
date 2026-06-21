import { createFileRoute } from '@tanstack/react-router'
import OrderInvoice from './-components/invoice.component'

const OrderDetailsPage = () => {
    return <OrderInvoice />
}

export const Route = createFileRoute('/_home/orders/$orderId')({
  component: OrderDetailsPage,
})
