import CartDrawer from "@/components/custom/cart/cart-drawer.component";
import { CART_EVENTS } from "@/configs/event.config";
import useCart from "@/stores/cart.store";
// import { Link } from "@tanstack/react-router";
import { ShoppingCart } from "lucide-react";

const NotifyIcon = () => {
  const cartItemIds = useCart((state) => state.cartItemIds);
  // const notificationCount = 3

  const openCart = () => {
    document.dispatchEvent(new CustomEvent(CART_EVENTS.OPEN_CART));
  };

  const totalItemsBadge = cartItemIds.length > 0 && (
    <span className="absolute z-10 top-0 -right-4 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
      {cartItemIds.length}
    </span>
  );

  // const notifsUi = notificationCount > 0 && (
  //    <span className="absolute z-10 top-0 -right-4 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-medium leading-none text-red-100 transform -translate-x-1/2 -translate-y-1/2 bg-red-500 rounded-full">
  //        {notificationCount > 9 ? "9+" : notificationCount}
  //    </span>
  // )
  return (
    <>
      {/* <CartDrawer open={openCartDrawer} setOpen={setOpenCartDrawer} /> */}
      <CartDrawer />
      <button
        type="button"
        aria-label={
          cartItemIds.length > 0
            ? `Cart with ${cartItemIds.length} items`
            : "Cart"
        }
        onClick={openCart}
        className="relative shrink-0 rounded-full text-primary-foreground/80 p-1 mx-2 hover:text-primary-foreground focus:outline-none"
      >
        {totalItemsBadge}
        <ShoppingCart className="h-6 w-6" aria-hidden="true" />
      </button>
      {/*<Link
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
         {notifsUi}
        <Bell className="h-6 w-6" aria-hidden="true" />
      </Link>*/}

      <span
        className="mx-4 h-6 w-px bg-primary-foreground/30 lg:mx-6"
        aria-hidden="true"
      />
    </>
  );
};

export default NotifyIcon;
