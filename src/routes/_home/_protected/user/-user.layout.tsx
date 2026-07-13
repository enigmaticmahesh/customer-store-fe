import { Outlet } from "@tanstack/react-router";
import UserSidebar from "./-components/user-sidebar.component";

const UserLayout = () => {
  return (
    <div className="bg-background min-h-screen">
      <div className="mx-auto max-w-screen-2xl px-3 sm:px-10 py-6 lg:py-10">
        <div className="flex flex-col lg:flex-row w-full gap-6 lg:gap-0">
          <div className="shrink-0 w-full lg:w-80 mr-0 lg:mr-10 xl:mr-10">
            {" "}
            <UserSidebar />{" "}
          </div>
          <div className="w-full overflow-hidden">
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserLayout;
