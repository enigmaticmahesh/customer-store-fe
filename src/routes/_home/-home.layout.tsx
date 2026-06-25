import Navbar from "./-components/navbar.component";
import Footer from "./-components/footer.component";
import { Outlet } from "@tanstack/react-router";

const HomeLayout = () => {
  return (
    <div className="bg-background z-10">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default HomeLayout;
