import { Outlet } from "react-router-dom";

import LandingNavbar from "./LandingNavbar";
import Footer from "../Footer";

function LandingLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <LandingNavbar />

      <div className="flex-1 py-7 px-7 md:px-14">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
export default LandingLayout;
