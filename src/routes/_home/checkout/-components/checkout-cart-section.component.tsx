import { formatPriceString } from "@/app-utils/string-utils";
import CouponCodeInput from "./coupon-code-input.component";
import { ShoppingBag } from "lucide-react";
import CartItem from "@/components/custom/cart/cart-item";
// import { items } from "../-temp.data"
import useCart from "@/stores/cart.store";

const CheckoutCartSection = () => {
  const cartItemIds = useCart((state) => state.cartItemIds);
  const cartTotal = useCart((state) => state.cartTotal);
  const shippingCost = 0;
  const discoount = 0;

  const cartItemsUi = () => {
    if (cartItemIds.length < 1) {
      return (
        <div className="text-center py-10">
          <span className="flex justify-center my-auto text-muted-foreground font-semibold text-4xl">
            <ShoppingBag />
          </span>
          <h2 className="font-medium  text-sm pt-2 text-muted-foreground">
            No Item Added Yet!
          </h2>
        </div>
      );
    }

    return cartItemIds.map((itemId, i) => (
      <CartItem key={i + 1} itemId={itemId} />
    ));
  };

  const totalCost = cartTotal + shippingCost + discoount;
  return (
    <div className="md:w-full lg:w-2/5 lg:ml-10 xl:ml-14 md:ml-6 flex flex-col h-full md:sticky lg:sticky top-44 md:order-2 lg:order-2">
      <div className="border p-5 lg:px-8 lg:py-8 rounded-xl bg-card border-border shadow-sm order-1 sm:order-2">
        <h2 className="font-semibold  text-lg pb-4">Order Summary</h2>

        <div className="overflow-y-scroll grow scrollbar-hide w-full max-h-64 bg-muted/30 rounded-lg block">
          {cartItemsUi()}
        </div>

        <div className="flex items-center mt-4 py-4 lg:py-4 text-sm w-full font-semibold text-foreground last:border-b-0 last:text-base last:pb-0">
          <CouponCodeInput />
        </div>
        <div className="flex items-center py-2 text-sm w-full font-semibold text-muted-foreground last:border-b-0 last:text-base last:pb-0">
          Subtotal
          <span className="ml-auto shrink-0 text-foreground font-bold">
            {formatPriceString(cartTotal.toString())}
          </span>
        </div>
        <div className="flex items-center py-2 text-sm w-full font-semibold text-muted-foreground last:border-b-0 last:text-base last:pb-0">
          Shipping Cost
          <span className="ml-auto shrink-0 text-foreground font-bold">
            {formatPriceString(`${shippingCost}`)}
          </span>
        </div>
        <div className="flex items-center py-2 text-sm w-full font-semibold text-muted-foreground last:border-b-0 last:text-base last:pb-0">
          Discount
          <span className="ml-auto shrink-0 font-bold text-orange-400">
            {formatPriceString(`${discoount}`)}
          </span>
        </div>
        <div className="border-t mt-4">
          <div className="flex items-center font-bold  justify-between pt-5 text-sm uppercase">
            Total Cost
            <span className=" font-extrabold text-lg">
              {formatPriceString(totalCost.toString())}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutCartSection;
