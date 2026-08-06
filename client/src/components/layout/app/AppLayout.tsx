import { Outlet } from "react-router-dom";

import AppNavbar from "./AppNavbar";
import Footer from "../Footer";

function AppLayout() {
  return (
    <div className="flex flex-col min-h-dvh">
      <AppNavbar />

      <div className="flex-1 py-7 px-7 md:px-14">
        <Outlet />
      </div>

      <Footer />
    </div>
  );
}
export default AppLayout;
