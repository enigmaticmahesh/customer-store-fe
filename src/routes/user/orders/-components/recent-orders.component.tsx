import { Eye, Handbag } from "lucide-react";
import { dashboard, data } from "../-temp.data";
import { Link } from "@tanstack/react-router";
import OrdersHistory from "./orders-history.component";

const RecentOrders = () => {

    if (data?.orders?.length === 0) {
        return (
            <div className="max-w-screen-2xl mx-auto">
                <div className="rounded-md">
                    <div className="text-center">
                        <span className="flex justify-center my-30 pt-16 text-primary font-semibold text-6xl">
                            <Handbag />
                        </span>
                        <h2 className="font-medium text-md my-4 text-muted-foreground">
                            You Have no order Yet!
                        </h2>
                    </div>
                </div>
            </div>
        )
    }

    const ordersUi = () => {
        return data?.orders?.map((order) => {
            const cellUi = () => {
                const link = true
                if (link) {
                    return (
                        <Link to="/orders/$orderId" params={{orderId: order._id}} viewTransition>
                        {/* // <Link to="/" viewTransition> */}
                            <span className="text-primary text-end cursor-pointer hover:text-primary transition-all p-3 font-semibold rounded-full flex items-center justify-end gap-1.5">
                                <Eye className="h-4 w-4" />
                            </span>
                        </Link>
                    )
                }
                return (
                    <span
                        // onClick={() => {
                        //     handleOrderDetails(order);
                        //     setDrawerOpen(true);
                        // }}
                        className="text-primary text-end cursor-pointer hover:text-primary transition-all p-3 font-semibold rounded-full flex items-center justify-end gap-1.5"
                    >
                        <Eye className="h-4 w-4" />
                    </span>
                )
            }
            return  (
                <tr key={order._id}>
                    {/* <OrderHistory order={order} /> */}
                    <OrdersHistory order={order} />
                    <td className="px-4 text-sm whitespace-nowrap text-end">
                        {cellUi()}
                    </td>
                </tr>
            )
        })
    }

    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="rounded-md">
                <div className="flex flex-col">
                    <h3 className="text-lg font-medium mb-5">
                        {/* {showingTranslateValue(title)} */}
                        {dashboard?.recent_order.en}
                    </h3>
                    <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
                        <div className="align-middle inline-block min-w-full pb-2 sm:px-6 lg:px-8 rounded-md">
                            <div className="overflow-hidden border-b last:border-b-0 border-border rounded-md">
                                <div className="inline-block min-w-full py-2 align-middle">
                                    <div className="overflow-hidden border border-border sm:rounded-lg">
                                        <table className="table-auto min-w-full divide-y divide-border">
                                            <thead className="bg-muted pb-10">
                                                <tr className="bg-muted">
                                                    <th scope="col" className="py-3 pr-1 pl-4 text-left text-sm font-semibold text-muted-foreground sm:pl-6">
                                                        Order ID
                                                    </th>
                                                    <th scope="col" className="px-3 py-1 text-left text-sm font-semibold text-muted-foreground">
                                                        OrderTime
                                                    </th>

                                                    <th scope="col" className="px-3 py-1 text-left text-sm font-semibold text-muted-foreground">
                                                        Method
                                                    </th>
                                                    <th scope="col" className="px-3 py-1 text-left text-sm font-semibold text-muted-foreground">
                                                        Status
                                                    </th>
                                                    {/* <th
                                                    scope="col"
                                                    className="px-3 py-1 text-left text-sm font-semibold text-muted-foreground"
                                                    >
                                                    Qty
                                                    </th> */}
                                                    <th scope="col" className="px-3 py-1 text-left text-sm font-semibold text-muted-foreground" >
                                                        Shipping
                                                    </th>
                                                    <th scope="col" className="px-3 py-1 text-left text-sm font-semibold text-muted-foreground" >
                                                        Shipping Cost
                                                    </th>
                                                    <th scope="col" className="px-3 py-1 text-left text-sm font-semibold text-muted-foreground" >
                                                        Total
                                                    </th>
                                                    <th scope="col" className="relative text-end py-1 pr-3 pl-3 text-sm sm:pr-6 font-semibold text-muted-foreground" >
                                                        Action
                                                    </th>
                                                </tr>
                                            </thead>
                                            <tbody className="divide-y divide-border bg-background">
                                                {ordersUi()}
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                                {/* {data?.totalDoc > 10 && (
                                    <Pagination
                                    totalResults={data?.totalDoc}
                                    resultsPerPage={10}
                                    onChange={handleChangePage}
                                    label="Product Page Navigation"
                                    />
                                )} */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RecentOrders