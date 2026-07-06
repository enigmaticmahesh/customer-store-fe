import useCart from "@/stores/cart.store";

const useCartItem = (itemId: string) => {
  const itemImg = useCart((state) => state.cartItemsTracker.get(itemId)?.img);
  const itemName = useCart((state) => state.cartItemsTracker.get(itemId)?.name);
  const itemPrice = useCart(
    (state) => state.cartItemsTracker.get(itemId)?.price,
  );
  const itemAmount = useCart(
    (state) => state.cartItemsTracker.get(itemId)?.amount,
  );
  const itemQty = useCart((state) => state.cartItemsTracker.get(itemId)?.qty);
  const name = itemName ?? "";
  const img = itemImg ?? "";
  const price = itemPrice ?? "0";
  const amount = itemAmount ?? "0";
  const qty = itemQty ?? 0;

  return {
    name,
    img,
    price,
    amount,
    qty,
  };
};

export default useCartItem;
