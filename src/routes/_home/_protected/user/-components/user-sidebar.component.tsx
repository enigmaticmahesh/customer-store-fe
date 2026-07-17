import { getInitials } from "@/app-utils/string-utils";
import { useAuthUserStore } from "@/stores/app-auth-user.store";
import { useTokensStore } from "@/stores/app-tokens.store";
import { Link, useLocation } from "@tanstack/react-router";
import {
  ClipboardList,
  FileUser,
  Grid2x2,
  KeyRound,
  LogOut,
} from "lucide-react";

const userSidebar = [
  {
    //   title: showingTranslateValue(dashboard?.dashboard_title),
    title: "Dashboard",
    href: "/user/dashboard",
    icon: Grid2x2,
  },

  {
    // title: showingTranslateValue(dashboard?.my_order),
    title: "My Orders",
    href: "/user/orders",
    icon: ClipboardList,
  },
  // {
  //     title: "Notifications",
  //     href: "/user/notifications",
  //     icon: Bell,
  // },
  // {
  //     title: "My Reviews",
  //     href: "/user/my-reviews",
  //     icon: Star,
  // },
  // {
  //     title: "My Account",
  //     href: "/user/my-account",
  //     icon: CircleUserRound,
  // },
  {
    // title: showingTranslateValue(dashboard?.update_profile),
    title: "Update Profile",
    href: "/user/update-profile",
    icon: FileUser,
  },
  {
    // title: showingTranslateValue(dashboard?.change_password),
    title: "Change Password",
    href: "/user/change-password",
    icon: KeyRound,
  },
];

const UserSidebar = () => {
  const userEmail = useAuthUserStore((state) => state.email);
  const userName = useAuthUserStore((state) => state.fullName);
  const userImage = "";

  const logOut = () => {
    useTokensStore.getState().resetStore();
    useAuthUserStore.getState().resetStore();
    window.location.replace(window.location.origin);
  }

  const pathname = useLocation({
    select: (location) => location.pathname,
  });

  const userImageUi = () => {
    if (userImage) {
      return (
        <img
          src={userImage}
          width={64}
          height={64}
          className="h-16 w-16 rounded-full bg-muted"
          alt={getInitials(userName)}
        />
      );
    }

    return (
      <div className="flex items-center text-xl font-semibold justify-center text-muted-foreground">
        {getInitials(userName)}
      </div>
    );
  };

  const menuItemsList = () => {
    return userSidebar?.map((item) => {
      const isActive = pathname === item.href;
      const linkClass = () => {
        const activeClass = isActive
          ? "text-primary bg-primary/10"
          : "text-muted-foreground hover:text-foreground";
        return `inline-flex items-center rounded-lg hover:bg-muted py-3 px-4 text-sm font-medium w-full mb-1 transition-colors ${activeClass}`;
      };
      const iconClass = () => {
        const activeClass = isActive ? "text-primary" : "text-muted-foreground";
        return `shrink-0 h-4 w-4 mr-3 ${activeClass}`;
      };
      return (
        <Link
          to={item.href}
          key={item.title}
          className={linkClass()}
          viewTransition
        >
          <item.icon className={iconClass()} aria-hidden="true" />

          {item.title}
        </Link>
      );
    });
  };
  return (
    <div>
      {/* Mobile Dropdown */}
      {/* <div className="lg:hidden">
                <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center cursor-pointer justify-between w-full p-3 bg-card rounded-xl border border-border transition-all"
                >
                <div className="flex flex-row items-center">
                    <div className="relative w-10 h-10">
                    <div className="relative rounded-full w-10 h-10 border-2 border-border flex items-center justify-center bg-muted overflow-hidden">
                        {userInfo?.image &&
                        (userInfo.image.startsWith("http://") ||
                        userInfo.image.startsWith("https://")) ? (
                        <Image
                            src={userInfo.image}
                            width={32}
                            height={32}
                            className="h-8 w-8 rounded-full bg-muted"
                            alt={userInfo?.name?.[0] || "U"}
                        />
                        ) : (
                        <div className="flex items-center text-xl font-semibold justify-center">
                            {userInfo?.name?.charAt(0) || "U"}
                        </div>
                        )}
                    </div>
                    </div>
                    <div className="ml-3">
                    <h5 className="text-left text-md font-semibold leading-none text-foreground line-h">
                        {userInfo?.name}
                    </h5>
                    <p className="text-sm text-muted-foreground">{userInfo?.email}</p>
                    </div>
                </div>
                {isDropdownOpen ? (
                    <ChevronUpIcon className="h-5 w-5 text-muted-foreground" />
                ) : (
                    <ChevronDownIcon className="h-5 w-5 text-muted-foreground" />
                )}
                </button>

                {isDropdownOpen && (
                <div className="mt-1 bg-card rounded-xl border border-border overflow-hidden">
                    {userSidebar?.map((item) => (
                    <Link
                        key={item.title}
                        href={item.href}
                        className="flex items-center px-4 py-3 hover:bg-muted border-b border-border text-sm font-medium text-muted-foreground cursor-pointer"
                        onClick={() => setIsDropdownOpen(false)}
                    >
                        <item.icon className="h-4 w-4 mr-3 text-muted-foreground shrink-0" />
                        {item.title}
                    </Link>
                    ))}
                    <button
                    onClick={() => {
                        handleLogOut();
                        setIsDropdownOpen(false);
                    }}
                    className="flex items-center w-full px-4 py-3 hover:bg-muted text-sm font-medium cursor-pointer text-muted-foreground"
                    >
                    <ArrowRightStartOnRectangleIcon className="h-4 w-4 mr-3 text-muted-foreground shrink-0" />
                    {showingTranslateValue(storeCustomization?.navbar?.logout)}
                    </button>
                </div>
                )}
            </div> */}

      {/* Desktop Layout */}
      <div className="flex flex-col lg:flex-row w-full">
        {/* Desktop Sidebar - Hidden on mobile */}
        <div className="hidden lg:block shrink-0 w-full">
          <div className="rounded-2xl sticky top-4 bg-card border border-border p-5">
            {/* Avatar Section */}
            <div className="flex flex-row items-center mb-6 pb-5 border-b border-border">
              <div className="relative w-16 h-16">
                <div className="relative w-16 h-16 rounded-full border-2 border-primary/20 flex items-center justify-center bg-muted overflow-hidden">
                  {userImageUi()}
                </div>
                <div className="absolute bottom-0 right-0 w-4 h-4 bg-primary rounded-full border-2 border-background"></div>
              </div>
              <div className="ml-3">
                <div>
                  <h5 className="text-lg text-left font-semibold leading-none text-foreground line-h">
                    {userName}
                  </h5>
                  <p className="text-sm text-muted-foreground">{userEmail}</p>
                </div>
              </div>
            </div>

            {/* Menu Items */}
            {menuItemsList()}

            {/* Logout Button */}
            <span className="p-3 px-4 flex items-center rounded-lg hover:bg-red-50 w-full mt-2 pt-4 border-t border-border cursor-pointer group">
              <LogOut className="shrink-0 h-4 w-4 text-muted-foreground group-hover:text-red-500" />
              <button
                onClick={logOut}
                className="inline-flex items-center justify-between ml-3 text-sm font-medium w-full text-left cursor-pointer transition-colors text-muted-foreground group-hover:text-destructive"
              >
                {/* {showingTranslateValue(storeCustomization?.navbar?.logout)} */}
                Logout
              </button>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserSidebar;
