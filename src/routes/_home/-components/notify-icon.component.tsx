import { Link } from "@tanstack/react-router"
import { Bell, ShoppingCart } from "lucide-react"

const NotifyIcon = () => {
    return (
        <>
            {/* <CartDrawer open={openCartDrawer} setOpen={setOpenCartDrawer} /> */}
            <button
                type="button"
                // aria-label={isHydrated ? `Cart with ${totalItems} items` : "Cart"}
                // onClick={() => setOpenCartDrawer(!openCartDrawer)}
                className="relative shrink-0 rounded-full text-primary-foreground/80 p-1 mx-2 hover:text-primary-foreground focus:outline-none"
            >
                {/* {isHydrated && totalItems > 0 && (
                <span className="absolute z-10 top-0 -right-4 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {totalItems}
                </span>
                )} */}
                <ShoppingCart className="h-6 w-6" aria-hidden="true" />
            </button>
            <Link
                to="/user/dashboard"
                // to="/user/notifications"
                // aria-label={
                // notificationCount > 0
                //     ? `${notificationCount} unread notifications`
                //     : "Notifications"
                // }
                className="relative shrink-0 rounded-full text-primary-foreground/80 p-1 mx-2 hover:text-primary-foreground focus:outline-none"
                viewTransition
            >
                {/* {notificationCount > 0 && (
                <span className="absolute z-10 top-0 -right-4 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
                    {notificationCount > 9 ? "9+" : notificationCount}
                </span>
                )} */}
                <Bell className="h-6 w-6" aria-hidden="true" />
            </Link>

            <span
                className="mx-4 h-6 w-px bg-primary-foreground/30 lg:mx-6"
                aria-hidden="true"
            />
        </>
    )
}

export default NotifyIcon