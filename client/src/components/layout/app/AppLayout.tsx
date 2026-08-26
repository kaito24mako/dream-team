import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useUserGetById } from "../../../utils/context/UserContext.jsx";

import AppNavbar from "./AppNavbar";
import Footer from "../Footer";

function AppLayout() {
  // get the user once on mount
  const getUserById = useUserGetById();

  useEffect(() => {
    getUserById();
  }, [getUserById]);

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
