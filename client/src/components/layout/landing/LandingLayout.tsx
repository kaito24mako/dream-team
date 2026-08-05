import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import LandingNavbar from "./LandingNavbar";

function LandingLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <LandingNavbar />

      <div className="min-h-dvh py-7 px-7 md:px-14">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
export default LandingLayout;
