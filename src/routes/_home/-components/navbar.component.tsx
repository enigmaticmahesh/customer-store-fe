import { Link } from "@tanstack/react-router";
import ImageWithFallback from "@/components/custom/image-with-fallback.component";
import lightLogo from "@/assets/logo/logo-light.svg";
import SearchInput from "./search-input.component";
import NotifyIcon from "./notify-icon.component";
import ProfileDropdown from "./profile-dropdown.component";
import MobileFooter from "./mobile-footer.component";

const Navbar = () => {
  return (
    <div className="sticky z-40 top-0 w-full">
      {/* navbar top section */}

      {/* <TopNavbar storeCustomization={storeCustomization} /> */}

      <header className="bg-primary shadow">
        <div className="max-w-screen-2xl mx-auto px-3 sm:px-10">
          <div className="relative flex h-20 justify-between">
            <div className="relative z-10 hidden sm:flex px-2 lg:px-0">
              <Link
                to="/"
                className="flex shrink-0 items-center"
                viewTransition
              >
                <ImageWithFallback
                  width={160}
                  height={50}
                  className="h-10 w-auto max-w-40 object-contain"
                  // priority
                  src={lightLogo}
                  alt="logo"
                />
              </Link>
            </div>

            {/* search input section */}
            <div className="min-w-0 flex-1 md:px-8 lg:px-10 xl:col-span-6">
              <div className="flex items-center px-6 py-4 md:mx-auto md:max-w-3xl lg:mx-0 lg:max-w-none xl:px-0">
                <div className="w-full">
                  <SearchInput />
                </div>
              </div>
            </div>

            {/* notification icons */}
            <div className="lg:relative lg:z-10 sm:flex sm:items-center hidden">
              <NotifyIcon />

              {/* Profile dropdown */}
              <div className="relative ml-4 shrink-0">
                <ProfileDropdown />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* navbar bottom */}
      {/* <NavbarPromo
                languages={languages}
                categories={categories}
                categoryError={categoryError}
                themes={themes}
                defaultTheme={defaultTheme}
                storeLayout={storeLayout}
            />
            <MobileFooter
                categories={categories}
                categoryError={categoryError}
                globalSetting={globalSetting}
            /> */}
      <MobileFooter />
    </div>
  );
};

export default Navbar;
