import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../../../utils/context/UserContext.jsx";
import { useLineup } from "../../../utils/context/LineupContext.jsx";

// session management
import { useSelector } from "react-redux";
import { getUser } from "../../../utils/redux/slices/authSlice.js";

import AppNavbar from "./AppNavbar";
import Footer from "../Footer";

function AppLayout() {
  // get the user and player details once on mount
  // needed to keep the "user" state updated every refresh
  const { getUserAndPlayers } = useUser();
  const { getLineup } = useLineup();

  // get the logged in user's id
  const authUser = useSelector(getUser);
  const userId = authUser?.userId;

  useEffect(() => {
    if (!userId) return;

    getUserAndPlayers(userId);
    getLineup(userId);
  }, [userId]);

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
