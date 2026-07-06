import { Link } from "@tanstack/react-router";
import ImageWithFallback from "../image-with-fallback.component";
import { formatPriceString } from "@/app-utils/string-utils";
import { Minus, Plus, Trash2 } from "lucide-react";
import useCart from "@/stores/cart.store";

const CartItem = ({ itemId }: { itemId: string }) => {
  const decQty = useCart((state) => state.decQty);
  const incQty = useCart((state) => state.incQty);
  const itemImg = useCart((state) => state.cartItemsTracker.get(itemId)?.img);
  const itemName = useCart((state) => state.cartItemsTracker.get(itemId)?.name);
  const itemPrice = useCart(
    (state) => state.cartItemsTracker.get(itemId)?.price,
  );
  const itemAmount = useCart(
    (state) => state.cartItemsTracker.get(itemId)?.amount,
  );
  const itemQty = useCart((state) => state.cartItemsTracker.get(itemId)?.qty);
  const removeFromCart = useCart((state) => state.removeFromCart);
  const name = itemName ?? "";
  const img = itemImg ?? "";
  const price = itemPrice ?? "0";
  const amount = itemAmount ?? "0";
  const qty = itemQty ?? 0;

  const handleInc = () => {
    incQty(itemId);
  };
  const handleDec = () => {
    decQty(itemId);
  };
  const removeItem = () => {
    removeFromCart(itemId);
  };

  return (
    <div className="group w-full h-auto flex justify-start items-center py-4 transition-all relative border-b border-border/60 last:border-b-0">
      <div className="relative flex overflow-hidden shrink-0 cursor-pointer mr-4">
        {/* <Link href={`/product/${item.slug || item.id}`}> */}
        <Link to="/">
          <ImageWithFallback
            // img
            width={40}
            height={40}
            src={img}
            alt={name}
            className="size-20 flex-none rounded-lg bg-muted object-cover border border-border/50"
          />
        </Link>
      </div>
      <div className="flex flex-col w-full overflow-hidden">
        <div className="flex">
          <div className="min-w-0 flex-1">
            <Link
              to="/"
              className="truncate text-sm font-medium text-foreground line-clamp-1 hover:text-primary transition-colors"
            >
              {name}
            </Link>
            <span className="text-xs text-muted-foreground mb-1">
              Item Price {formatPriceString(price.toString())}
            </span>
          </div>
          <div className="ml-4 flow-root shrink-0">
            <button
              onClick={removeItem}
              className="hover:text-red-600 text-red-400 text-lg cursor-pointer"
            >
              <Trash2 className="size-4" />
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="font-semibold text-primary text-sm md:text-base leading-5">
            <span>{formatPriceString(amount)}</span>
          </div>

          <div className="h-8 w-22 md:w-24 lg:w-24 flex flex-wrap items-center justify-evenly p-1 border border-border bg-muted/50 text-foreground rounded-full">
            <button onClick={handleDec}>
              <span className="text-foreground text-base cursor-pointer hover:text-primary">
                <Minus className="size-4" />
              </span>
            </button>
            <p className="text-xs font-semibold text-foreground px-1">{qty}</p>
            <button onClick={handleInc}>
              <span className="text-foreground text-base cursor-pointer hover:text-primary">
                <Plus className="size-4" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
