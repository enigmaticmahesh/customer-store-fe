import type { Product } from "./app-global.interface";

export interface CartItem {
  id: number; // Product ID
  name: string;
  qty: number;
  price: string;
  amount: string; // qty * price
  img: string;
}

export interface CartState {
  cartItemIds: string[];
  cartItemsTracker: Map<string, CartItem>;
  cartTotal: number;
}

export interface CartStoreFuncs {
  createCartItem: (product: Product) => CartItem;
  // getCartItemQty: (itemId: number) => number;
  addToCart: (product: Product) => void;
  removeFromCart: (itemId: string) => void;
  isProdOnCart: (prodId: number) => boolean;
  incQty: (itemId: string) => void;
  decQty: (itemId: string) => void;
  calcTotal: (tracker: Map<string, CartItem>) => number;
  noOfItems: () => number;
  // updateStore: (data: Partial<CartState>) => void;
  resetStore: () => void;
}

export type CartStore = CartState & CartStoreFuncs;
