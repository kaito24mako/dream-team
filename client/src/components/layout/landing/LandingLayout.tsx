import { Outlet } from "react-router-dom";

import Footer from "../Footer";
import LandingNavbar from "./LandingNavbar";

function LandingLayout() {
  return (
    <div className="flex flex-col h-dvh">
      <LandingNavbar />

      <div className="flex-1 py-7 px-7 md:px-14">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
export default LandingLayout;
