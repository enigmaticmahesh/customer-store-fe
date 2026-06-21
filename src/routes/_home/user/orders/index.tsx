import { createFileRoute } from '@tanstack/react-router'
import RecentOrders from './-components/recent-orders.component'

const UserOrders = () => {
    return (
        <div className="overflow-hidden">
            <RecentOrders />
        </div>
    )
}

export const Route = createFileRoute('/_home/user/orders/')({
  component: UserOrders,
})
