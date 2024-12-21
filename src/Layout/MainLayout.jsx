import { Outlet } from "react-router-dom";
import Footer from "../SharedComponents/Footer";
import Navbar from "../SharedComponents/Navbar";
import { Toaster } from "react-hot-toast";

const MainLayout = () => {
  return (
    <div>
      <Toaster />
      {/* Header Section */}
      <Navbar />
      {/* Main Content */}
      <div className="min-h-[calc(100vh-288px)]">
        <Outlet />
      </div>
      {/* Footer Section */}
      <Footer />
    </div>
  );
};

export default MainLayout;
