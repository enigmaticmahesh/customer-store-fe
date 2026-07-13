import { createFileRoute } from '@tanstack/react-router'
import OrderInvoice from './-components/invoice.component'

const OrderDetailsPage = () => {
    return <OrderInvoice />
}

export const Route = createFileRoute('/_home/_protected/orders/$orderId')({
  component: OrderDetailsPage,
})
