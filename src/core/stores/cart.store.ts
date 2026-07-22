import { getImgUrl } from "@/core/app-utils/img-utils";
import { customSuccessToast } from "@/components/custom/custom-toasts";
import type {
  CartItem,
  CartState,
  CartStore,
} from "@/core/interfaces/app-cart.interface";
import { toast } from "sonner";
import { create } from "zustand";

const InitialCartData: CartState = {
  cartItemIds: [],
  cartItemsTracker: new Map<string, CartItem>(),
  cartTotal: 0,
};

const useCart = create<CartStore>((set, get) => ({
  ...InitialCartData,
  // updateStore: (data) => set((state) => ({ ...state, ...data })),
  resetStore: () => set((state) => ({ ...state, ...InitialCartData })),
  createCartItem: (product) => {
    const cartItem: CartItem = {
      id: product.id,
      img: getImgUrl(product.sku, product.id, 1),
      price: product.mrp,
      qty: 1,
      amount: product.mrp,
      name: product.name,
    };

    return cartItem;
  },
  isProdOnCart: (prodId) => get().cartItemsTracker.has(prodId.toString()),
  addToCart: (product) => {
    if (get().isProdOnCart(product.id)) {
      toast.warning("This product is already present in the cart.");
      return;
    }

    // Create cart item
    const cartItem = get().createCartItem(product);
    // Create new tracker
    const tracker = new Map(get().cartItemsTracker);
    tracker.set(product.id.toString(), cartItem);
    // Create cart items
    // const cartItems = [...tracker.values()];
    const cartItemIds = [...tracker.keys()];
    set((state) => ({
      ...state,
      // cartItems,
      cartItemsTracker: tracker,
      cartItemIds,
      cartTotal: get().calcTotal(tracker),
    }));
    // toast.success(`${product.name} added to cart`);
    customSuccessToast(product.name, "added to cart");
  },
  removeFromCart: (prodId) => {
    const tracker = new Map(get().cartItemsTracker);
    const cartItem = tracker.get(prodId);
    tracker.delete(prodId);
    // const cartItems = [...tracker.values()];
    const cartItemIds = [...tracker.keys()];
    set((state) => ({
      ...state,
      // cartItems,
      cartItemsTracker: tracker,
      cartItemIds,
      cartTotal: get().calcTotal(tracker),
    }));
    if (!cartItem) return;
    // toast.success(`${cartItem.name} removed from cart`);
    // toast.success();
    customSuccessToast(cartItem.name, "removed from cart");
  },
  incQty: (prodId) => {
    const tracker = new Map(get().cartItemsTracker);
    const cartItem = tracker.get(prodId);
    if (!cartItem) {
      toast.warning("This product is not in the cart.");
      return;
    }
    cartItem.qty += 1;
    cartItem.amount = `${cartItem.qty * +cartItem.price}`;
    tracker.set(prodId.toString(), cartItem);
    // const cartItems = [...tracker.values()];
    set((state) => ({
      ...state,
      // cartItems,
      cartItemsTracker: tracker,
      cartTotal: get().calcTotal(tracker),
    }));
  },
  decQty: (prodId) => {
    const tracker = new Map(get().cartItemsTracker);
    const cartItem = tracker.get(prodId);
    if (!cartItem) {
      toast.warning("This product is not in the cart.");
      return;
    }
    if (cartItem.qty < 2) {
      get().removeFromCart(prodId);
      return;
    }
    cartItem.qty -= 1;
    cartItem.amount = `${cartItem.qty * +cartItem.price}`;
    tracker.set(prodId.toString(), cartItem);
    // const cartItems = [...tracker.values()];
    set((state) => ({
      ...state,
      // cartItems,
      cartItemsTracker: tracker,
      cartTotal: get().calcTotal(tracker),
    }));
  },
  calcTotal: (tracker) => {
    const items = tracker.values();
    return items.reduce((acc, curr) => acc + Number(curr.amount), 0);
  },
  noOfItems: () => get().cartItemsTracker.size,
  // getCartItemQty: (itemId) => {
  //   if (!get().isProdOnCart(itemId)) {
  //     return 0;
  //   }

  //   return get().cartItemsTracker.get(itemId.toString())!.qty;
  // },
}));

export default useCart;
