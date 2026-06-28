import { Minus, Plus, ShoppingBag } from "lucide-react";

const AddToCartBtn = ({ product }: { product: any }) => {
  const prodInCart = false;
  const cartItems: { id: string; quantity: number }[] = [];

  if (prodInCart) {
    const itemsList = cartItems.map(
      (item) =>
        item.id === product._id && (
          <div
            key={item.id}
            className="flex flex-col w-11 h-22 items-center p-1 justify-between bg-primary text-primary-foreground ring-2 ring-white rounded-full"
          >
            <button
            // onClick={() =>
            //     updateItemQuantity(item.id, item.quantity - 1)
            // }
            >
              <span className="text-xl cursor-pointer">
                <Minus />
              </span>
            </button>
            <p className="text-sm px-1 font-medium">{item.quantity}</p>
            <button
            // onClick={() =>
            // item?.variants?.length > 0
            //     ? handleAddItem(item)
            //     : handleIncreaseQuantity(item)
            // }
            >
              <span className="text-lg cursor-pointer">
                <Plus />
              </span>
            </button>
          </div>
        ),
    );
    return <div> {itemsList} </div>;
  }
  return (
    <button
      // onClick={() => handleAddItem(product)}
      aria-label="cart"
      className="w-11 h-11 flex items-center justify-center rounded-full cursor-pointer border-2 bg-primary text-primary-foreground border-primary font-medium transition-colors duration-300 hover:bg-primary/90 hover:border-primary hover:text-primary-foreground focus:border-primary focus:bg-primary focus:text-primary-foreground"
    >
      <ShoppingBag className="text-xl" />
    </button>
  );
};

export default AddToCartBtn;
