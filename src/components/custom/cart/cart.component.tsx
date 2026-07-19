import { ShoppingCart, X } from "lucide-react";
import ImageWithFallback from "../image-with-fallback.component";
import NoResult from "@/assets/no-result.svg";
import { useNavigate } from "@tanstack/react-router";
import { formatPriceString } from "@/core/app-utils/string-utils";
import { CART_EVENTS } from "@/configs/event.config";
import useCart from "@/core/stores/cart.store";
import CartItem from "./cart-item";
import { toast } from "sonner";

const Cart = () => {
  const navigate = useNavigate();
  const cartItemIds = useCart((state) => state.cartItemIds);
  const cartTotal = useCart((state) => state.cartTotal);
  const closeCart = () =>
    document.dispatchEvent(new CustomEvent(CART_EVENTS.CLOSE_CART));

  const handleCheckout = () => {
    if (cartItemIds.length < 1) {
      toast("Please add some products to checkout");
      return;
    }
    closeCart();
    navigate({
      to: "/checkout",
      viewTransition: true,
    });
  };

  const emptyCartUi = cartItemIds.length < 1 && (
    <div className="flex flex-col h-full justify-center">
      <div className="flex flex-col items-center">
        <ImageWithFallback
          className="size-40 flex-none rounded-md object-cover"
          src={NoResult}
          alt="no-result"
          width={400}
          height={380}
        />
        <h3 className=" font-semibold text-muted-foreground text-lg pt-5">
          Your cart is empty
        </h3>
        <p className="px-12 text-center text-sm text-muted-foreground pt-2">
          No items added in your cart. Please add product to your cart list.
        </p>
      </div>
    </div>
  );

  const cartItemsUi = cartItemIds.map((item, i) => (
    <CartItem key={i + 1} itemId={item} />
  ));

  // const cartTotal = cartItemIds.reduce((acc, curr) => acc + +curr.amount, 0);
  return (
    <div className="flex flex-col h-full justify-between items-middle bg-background rounded w-screen max-w-lg">
      <div className="w-full flex justify-between items-center relative px-5 py-4 border-b bg-primary/5 border-border">
        <h2 className="font-semibold text-lg m-0 text-foreground flex items-center">
          <ShoppingCart aria-hidden="true" className="size-6 shrink-0 me-2" />
          Shopping Cart
        </h2>
        <button
          onClick={closeCart}
          className="inline-flex text-base items-center cursor-pointer justify-center text-muted-foreground p-2 focus:outline-none transition-opacity hover:text-red-400"
        >
          {/*<Close />*/}
          <X className="size-4" />
          <span className="font-sens text-xs text-muted-foreground hover:text-red-400 ml-1">
            Close
          </span>
        </button>
      </div>
      <div className="overflow-y-scroll grow scrollbar-hide w-full max-h-full p-4 lg:p-6">
        {emptyCartUi}

        {cartItemsUi}
      </div>
      <div className="bg-muted/50 dark:bg-muted/30 border-t border-border p-5">
        <p className="flex justify-between font-semibold text-foreground">
          <span>
            <span>Subtotal</span>
            <span className="block text-sm text-muted-foreground font-normal">
              Shipping and taxes calculated at checkout.
            </span>
          </span>
          <span>{formatPriceString(cartTotal.toString())}</span>
        </p>

        <div className="flex space-x-3 mt-5">
          {/*<Link
            to="/checkout"
            className="relative h-auto inline-flex items-center justify-center rounded-lg transition-colors text-sm sm:text-base font-medium py-2.5 px-3 bg-background text-foreground hover:bg-muted flex-1 border border-border"
            viewTransition
          >
            View Cart
          </Link>*/}
          <button
            type="button"
            onClick={handleCheckout}
            className="relative h-auto inline-flex items-center justify-center rounded-lg transition-colors text-sm sm:text-base font-medium py-2.5 px-3 bg-primary hover:bg-primary/90 text-primary-foreground flex-1 focus:outline-none disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed"
            disabled={cartItemIds.length < 1}
          >
            Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
