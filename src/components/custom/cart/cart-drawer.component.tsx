// import { Button } from "@/components/ui/button";
import {
  Drawer,
  // DrawerClose,
  // DrawerDescription,
  // DrawerFooter,
  // DrawerHeader,
  // DrawerTitle,
  DrawerContent,
  // DrawerTrigger,
} from "@/components/ui/drawer";
import Cart from "./cart.component";
import { useEffect, useState } from "react";
import { CART_EVENTS } from "@/configs/event.config";

const CartDrawer = () => {
  const [openCart, setOpenCart] = useState(false);

  const handleChange = (state: boolean) => {
    setOpenCart(state);
  };

  useEffect(() => {
    const controller = new AbortController();

    const handleCartOpen = () => {
      setOpenCart(true);
    };
    const handleCartClose = () => {
      setOpenCart(false);
    };

    document.addEventListener(CART_EVENTS.OPEN_CART, handleCartOpen, {
      signal: controller.signal,
    });
    document.addEventListener(CART_EVENTS.CLOSE_CART, handleCartClose, {
      signal: controller.signal,
    });

    return () => {
      controller.abort();
    };
  });
  return (
    <Drawer direction="right" open={openCart} onOpenChange={handleChange}>
      {/*<DrawerTrigger>Open</DrawerTrigger>*/}
      <DrawerContent className="min-w-120">
        {/*<DrawerHeader>
          <DrawerTitle>Are you absolutely sure?</DrawerTitle>
          <DrawerDescription>This action cannot be undone.</DrawerDescription>
        </DrawerHeader>*/}
        <div className="fixed inset-y-0 right-0 flex max-w-full">
          <Cart />
        </div>
        {/*<DrawerFooter>
          <Button>Submit</Button>
          <DrawerClose>
            <Button variant="outline">Cancel</Button>
          </DrawerClose>
        </DrawerFooter>*/}
      </DrawerContent>
    </Drawer>
  );
};

export default CartDrawer;
