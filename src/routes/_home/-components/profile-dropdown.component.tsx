import { getInitials, isValidImageUrl } from "@/app-utils/string-utils"
import ImageWithFallback from "@/components/custom/image-with-fallback.component"
import { Link } from "@tanstack/react-router"
import { Bell, Clipboard, Grid2x2, Key, LogOut, Star, User, UserCircle } from "lucide-react"

const userInfo = {
    "name": "Justin J. Ruiz",
    "email": "justin@gmail.com",
    "image": "https://images.pexels.com/photos/5254256/pexels-photo-5254256.jpeg",
    "id": "6439713c1d8869133e8881e9",
    "phone": "212-512-2888",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NDM5NzEzYzFkODg2OTEzM2U4ODgxZTkiLCJuYW1lIjoiSnVzdGluIEouIFJ1aXoiLCJlbWFpbCI6Imp1c3RpbkBnbWFpbC5jb20iLCJwaG9uZSI6IjIxMi01MTItMjg4OCIsImltYWdlIjoiaHR0cHM6Ly9pbWFnZXMucGV4ZWxzLmNvbS9waG90b3MvNTI1NDI1Ni9wZXhlbHMtcGhvdG8tNTI1NDI1Ni5qcGVnIiwiaWF0IjoxNzgxNTM3ODE1LCJleHAiOjE3ODE1Mzk2MTV9.weV9J0k-4vG2jLtTN9nBJr6INXz5e5txNA3OZOfLINc",
    "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0Mzk3MTNjMWQ4ODY5MTMzZTg4ODFlOSIsImlhdCI6MTc4MTQyMDU5NiwiZXhwIjoxNzgyMDI1Mzk2fQ.5I_EwQD-y5f5uVnzZkixGV1Qh2MSMz3DGXF1ZDIvNSI"
}

const accountMenuItems = [
  { name: "Dashboard", href: "/user/dashboard", Icon: Grid2x2 },
  {
    name: "My Orders",
    href: "/user/my-orders",
    Icon: Clipboard,
  },
  { name: "My Reviews", href: "/user/my-reviews", Icon: Star },
  { name: "My Account", href: "/user/my-account", Icon: UserCircle },
  {
    name: "Update Profile",
    href: "/user/update-profile",
    Icon: UserCircle,
  },
  { name: "Notifications", href: "/user/notifications", Icon: Bell },
  { name: "Change Password", href: "/user/change-password", Icon: Key },
];

const ProfileDropdown = () => {
    if (!userInfo?.email) {
        return (
            <Link to="/login" className="-m-1.5 flex items-center p-1.5" viewTransition>
                <span className="sr-only">Open user menu</span>
                <User
                    className="h-6 w-6 text-primary-foreground"
                    aria-hidden="true"
                />
            </Link>
        )
    }

    const userImgUi = (trigger: boolean = true) => {
        const hasValidImage = isValidImageUrl(userInfo?.image);
        if (!trigger) {
            if (hasValidImage) {
                return (
                  <ImageWithFallback
                    src={userInfo.image}
                    width={36}
                    height={36}
                    className="h-9 w-9 rounded-full object-cover ring-2 ring-white"
                    alt={userInfo?.name || "User"}
                  />
                )
            }

            return (
                <div className="h-9 w-9 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <User className="h-5 w-5 text-primary" />
                </div>
            )
        }

        if (hasValidImage) {
            return (
              <ImageWithFallback
                src={userInfo.image}
                width={32}
                height={32}
                className="h-8 w-8 rounded-full bg-muted object-cover ring-2 ring-white"
                alt={getInitials(userInfo.name)}
              />
            )
        }
        return (
            <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary/10 text-xl font-bold text-center">
                {getInitials(userInfo.name)}
            </div>
        )
    }

    const accItemsUi = accountMenuItems.map(({ name, href, Icon }) => (
        <Link
            key={name}
            to={href}
            className="flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
            <Icon className="h-4.5 w-4.5 text-gray-400 dark:text-gray-500 shrink-0" />
            {name}
        </Link>
    ))
    return (
        <div className="relative group">
          {/* Trigger */}
          <button className="-m-1.5 flex items-center p-1.5">
            <span className="sr-only">Open user menu</span>
            {userImgUi()}
          </button>

          {/* Hover dropdown panel */}
          <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 absolute right-0 top-full mt-2 z-50 w-64 transition-all duration-200 ease-in-out">
            {/* Triangle arrow */}
            <div className="absolute -top-2 right-6 h-4 w-4 rotate-45 bg-white dark:bg-gray-800 z-10" />

            {/* Panel */}
            <div className="relative z-20 overflow-hidden rounded-xl bg-white dark:bg-gray-800 shadow-lg">
              {/* Header — user info */}
              <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-gray-700 bg-gray-50 dark:bg-gray-900/50">
                {userImgUi(false)}
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white truncate">
                    {userInfo?.name || "User"}
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                    {userInfo?.email}
                  </div>
                </div>
              </div>

              {/* Nav items */}
              <div className="py-1.5">
                {accItemsUi}
              </div>

              {/* Sign out */}
              <div className="border-t border-gray-100 dark:border-gray-700 py-1.5">
                <button
                //   onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full flex items-center gap-3 px-4 py-2.5 text-sm text-gray-700 dark:text-gray-300 hover:bg-red-50 dark:hover:bg-red-950/30 hover:text-red-600 dark:hover:text-red-400 transition-colors"
                >
                    <LogOut className="h-4.5 w-4.5 text-gray-400 dark:text-gray-500 shrink-0" />
                    Logout
                </button>
              </div>
            </div>
          </div>
        </div>
    )
}

export default ProfileDropdown