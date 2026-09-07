import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../../../utils/context/UserContext.jsx";
// import { currentUserId } from "../../../data/session.js";

import AppNavbar from "./AppNavbar";
import Footer from "../Footer";

function AppLayout() {
  // get the user and player details once on mount
  // needed to keep the "user" state updated every refresh
  const { getUserAndPlayers, getLineup } = useUser();

  //? need to get userId as params
  const userId = 1;

  useEffect(() => {
    getUserAndPlayers(userId);
    getLineup(userId);
  }, []);

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
