import { getInitials } from "@/core/app-utils/string-utils";
// import ImageWithFallback from "@/components/custom/image-with-fallback.component";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useAuthUserStore } from "@/core/stores/app-auth-user.store";
import { useTokensStore } from "@/core/stores/app-tokens.store";
import { Link } from "@tanstack/react-router";
import {
  // Bell,
  Clipboard,
  Grid2x2,
  Key,
  LogOut,
  // Star,
  User,
  UserCircle,
} from "lucide-react";

const accountMenuItems = [
  { name: "Dashboard", href: "/user/dashboard", Icon: Grid2x2 },
  {
    name: "My Orders",
    href: "/user/orders",
    Icon: Clipboard,
  },
  // { name: "My Reviews", href: "/user/my-reviews", Icon: Star },
  // { name: "My Account", href: "/user/my-account", Icon: UserCircle },
  {
    name: "Update Profile",
    href: "/user/update-profile",
    Icon: UserCircle,
  },
  // { name: "Notifications", href: "/user/notifications", Icon: Bell },
  { name: "Change Password", href: "/user/change-password", Icon: Key },
];

const ProfileDropdown = () => {
  const userEmail = useAuthUserStore(state => state.email)
  const userName = useAuthUserStore(state => state.fullName)
  const userImage = ""
  // const userImage = "https://images.pexels.com/photos/5254256/pexels-photo-5254256.jpeg"

  const logOut = () => {
    useTokensStore.getState().resetStore();
    useAuthUserStore.getState().resetStore();
    window.location.replace(window.location.origin);
  }

  if (!userEmail) {
    return (
      <Link
        to="/login"
        className="-m-1.5 flex items-center p-1.5"
        viewTransition
      >
        <span className="sr-only">Open user menu</span>
        <User className="h-6 w-6 text-primary-foreground" aria-hidden="true" />
      </Link>
    );
  }

  const userImgUi = (trigger: boolean = true) => {
    // const hasValidImage = isValidImageUrl(userImage);
    // if (!trigger) {
    //   if (hasValidImage) {
    //     return (
    //       <ImageWithFallback
    //         src={userImage}
    //         width={36}
    //         height={36}
    //         className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
    //         alt={userName || "User"}
    //       />
    //     );
    //   }

    //   return (
    //     <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
    //       <User className="h-5 w-5 text-primary" />
    //     </div>
    //   );
    // }

    // if (hasValidImage) {
    //   return (
    //     <ImageWithFallback
    //       src={userImage}
    //       width={32}
    //       height={32}
    //       className="h-8 w-8 rounded-full bg-muted object-cover ring-2 ring-white"
    //       alt={getInitials(userName)}
    //     />
    //   );
    // }
    // return (
    //   <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-xl font-bold text-center">
    //     <Avatar>
    //       <AvatarImage src={userImage} />
    //       <AvatarFallback>{getInitials(userName)}</AvatarFallback>
    //     </Avatar>
    //   </div>
    // );


    return (
      <Avatar data-test={trigger}>
        <AvatarImage src={userImage} />
        <AvatarFallback>{getInitials(userName)}</AvatarFallback>
      </Avatar>
    )
  };

  const accItemsUi = accountMenuItems.map(({ name, href, Icon }) => (
    <Link
      key={name}
      to={href}
      className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white transition-colors"
      viewTransition
    >
      <Icon className="h-4.5 w-4.5 text-gray-400 dark:text-gray-500 shrink-0" />
      {name}
    </Link>
  ));

  return (
    <div className="relative group">
      {/* Trigger */}
      <button className="-m-1.5 flex items-center p-1.5">
        <span className="sr-only">Open user menu</span>
        {userImgUi()}
      </button>

      {/* Hover dropdown panel */}
      <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute -right-2 top-full mt-2 z-50 w-64 transition-all duration-200 ease-in-out">
        {/* Triangle arrow */}
        <div className="absolute -top-2 right-4 h-4 w-4 rotate-45 bg-white dark:bg-gray-800 z-10" />

        {/* Panel */}
        <div className="relative z-20 overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg">
          {/* Header — user info */}
          <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
            {userImgUi(false)}
            <div className="min-w-0">
              <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                {userName || "User"}
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                {userEmail}
              </div>
            </div>
          </div>

          {/* Nav items */}
          <div className="py-1.5">{accItemsUi}</div>

          {/* Sign out */}
          <div className="border-t border-gray-100 dark:border-gray-700 py-1.5">
            <button
              onClick={logOut}
              className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 dark:hover:text-red-400 transition-colors"
            >
              <LogOut className="h-4.5 w-4.5 text-gray-400 dark:text-gray-500 shrink-0" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
