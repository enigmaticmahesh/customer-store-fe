import { createFileRoute } from '@tanstack/react-router'
import OrderInvoice from './-components/invoice.component'

const OrderDetails = () => {
    return (
        <>
            <OrderInvoice />
        </>
    )
}

export const Route = createFileRoute('/user/orders/$orderId')({
  component: OrderDetails,
})
