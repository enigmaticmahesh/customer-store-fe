import type { Product } from "@/core/interfaces/app-global.interface";
import useCart from "@/core/stores/cart.store";
import { ShoppingBag } from "lucide-react";

// const Item = ({ itemId }: { itemId: string }) => {
//   const decQty = useCart((state) => state.decQty);
//   const incQty = useCart((state) => state.incQty);
//   const qty = useCart((state) => state.cartItemsTracker.get(itemId)?.qty ?? 0);

//   const handleInc = () => {
//     incQty(itemId);
//   };
//   const handleDec = () => {
//     decQty(itemId);
//   };

//   return (
//     <div
//       // key={itemId}
//       className="flex flex-col w-11 h-22 items-center p-1 justify-between bg-primary text-primary-foreground ring-2 ring-white rounded-full"
//     >
//       <button onClick={handleDec}>
//         <span className="text-xl cursor-pointer">
//           <Minus />
//         </span>
//       </button>
//       <p className="text-sm px-1 font-medium">{qty}</p>
//       <button onClick={handleInc}>
//         <span className="text-lg cursor-pointer">
//           <Plus />
//         </span>
//       </button>
//     </div>
//   );
// };

const AddToCartBtn = ({ product }: { product: Product }) => {
  // const isProdOnCart = useCart((state) => state.isProdOnCart);
  // const cartItemIds = useCart((state) => state.cartItemIds);
  const prodId = useCart(
    (state) => state.cartItemsTracker.get(product.id.toString())?.id,
  );
  const addToCart = useCart((state) => state.addToCart);

  const handleAddProd = () => {
    addToCart(product);
  };

  if (prodId) {
    return null;
    // const itemsList = cartItemIds.map(
    //   (itemId) =>
    //     itemId === product.id.toString() && (
    //       <Item key={product.id} itemId={product.id.toString()}></Item>
    //     ),
    // );
    // return <div> {itemsList} </div>;
  }

  return (
    <button
      onClick={handleAddProd}
      aria-label="cart"
      className="w-10 h-10 flex items-center justify-center rounded-full cursor-pointer border-2 bg-primary text-primary-foreground border-primary font-medium transition-colors duration-300 hover:bg-primary/90 hover:border-primary hover:text-primary-foreground focus:border-primary focus:bg-primary focus:text-primary-foreground"
    >
      <ShoppingBag className="text-xl size-5" />
    </button>
  );
};

export default AddToCartBtn;
