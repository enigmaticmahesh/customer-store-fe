import ImageWithFallback from "@/components/custom/image-with-fallback.component";
import { CART_EVENTS } from "@/configs/event.config";
import useCart from "@/core/stores/cart.store";
import { Link } from "@tanstack/react-router";
import { Home, ShoppingCart, TextAlignStart, User } from "lucide-react";

const userInfo = {
  name: "Justin J. Ruiz",
  email: "justin@gmail.com",
  image: "https://images.pexels.com/photos/5254256/pexels-photo-5254256.jpeg",
  id: "6439713c1d8869133e8881e9",
  phone: "212-512-2888",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5NzEzYzFkODg2OTEzM2U4ODgxZTkiLCJuYW1lIjoiSnVzdGluIEouIFJ1aXoiLCJlbWFpbCI6Imp1c3RpbkBnbWFpbC5jb20iLCJwaG9uZSI6IjIxMi01MTItMjg4OCIsImltYWdlIjoiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTI1NDI1Ni9wZXhlbHMtcGhvdG8tNTI1NDI1Ni5qcGVnIiwiaWF0IjoxNzgxNTM3ODE1LCJleHAiOjE3ODE1Mzk2MTV9.weV9J0k-4vG2jLtTN9nBJr6INXz5e5txNA3OZOfLINc",
  refreshToken:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mzk3MTNjMWQ4ODY5MTMzZTg4ODFlOSIsImlhdCI6MTc4MTQyMDU5NiwiZXhwIjoxNzgyMDI1Mzk2fQ.5I_EwQD-y5f5uVnzZkixGV1Qh2MSMz3DGXF1ZDIvNSI",
};

const MobileFooter = () => {
  const noOfItems = useCart((state) => state.noOfItems);
  const totalItems = noOfItems();
  const openCart = () => {
    document.dispatchEvent(new CustomEvent(CART_EVENTS.OPEN_CART));
  };

  return (
    <>
      {/*<div className="flex flex-col h-full justify-between align-middle bg-background rounded cursor-pointer overflow-y-scroll flex-grow scrollbar-hide w-full">
        <PagesDrawer
          open={openPageDrawer}
          setOpen={setOpenPageDrawer}
          categories={categories}
          categoryError={categoryError}
        />
      </div>*/}
      <footer className="sm:hidden fixed z-30 bottom-0 bg-primary flex items-center justify-between w-full h-16 px-3 sm:px-10">
        <button
          aria-label="Bar"
          // onClick={() => setOpenPageDrawer(true)}
          className="flex items-center justify-center shrink-0 h-auto relative focus:outline-none"
        >
          <span className="text-xl text-primary-foreground">
            <TextAlignStart className="w-6 h-6 drop-shadow-xl" />
          </span>
        </button>
        <Link
          to="/"
          className="text-xl text-primary-foreground"
          rel="noreferrer"
          aria-label="Home"
        >
          <Home className="w-6 h-6 drop-shadow-xl" />
        </Link>

        <button
          onClick={openCart}
          className="h-9 w-9 relative whitespace-nowrap inline-flex items-center justify-center text-primary-foreground text-lg"
        >
          <span className="absolute z-10 top-0 right-0 inline-flex items-center justify-center p-1 h-5 w-5 text-xs font-bold leading-none text-red-100 transform translate-x-1/2 bg-red-500 rounded-full">
            {totalItems}
          </span>
          <ShoppingCart className="w-6 h-6 drop-shadow-xl" />
        </button>

        <button
          aria-label="User"
          type="button"
          className="text-xl text-primary-foreground indicator justify-center"
        >
          {userInfo?.image &&
          (userInfo.image.startsWith("http://") ||
            userInfo.image.startsWith("https://")) ? (
            <Link
              to="/user/dashboard"
              aria-label="user"
              className="relative top-1 w-6 h-6"
            >
              <ImageWithFallback
                width={29}
                height={29}
                src={userInfo.image}
                alt="user"
                className="rounded-full"
              />
            </Link>
          ) : userInfo?.name ? (
            <Link
              aria-label="User"
              to="/user/dashboard"
              className="leading-none font-bold  block"
            >
              {userInfo?.name[0]}
            </Link>
          ) : (
            <Link aria-label="user" to="/login">
              <User className="w-6 h-6 drop-shadow-xl" />
            </Link>
          )}
        </button>
      </footer>
    </>
  );
};

export default MobileFooter;
