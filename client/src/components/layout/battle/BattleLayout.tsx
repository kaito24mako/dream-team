import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../../../utils/context/UserContext.jsx";

import BattleNavbar from "./BattleNavbar";
import court from "../../../assets/bg/court.png";

function BattleLayout() {
  // get the user and player details once on mount
  // needed to keep the "user" state updated every refresh
  const { getUserAndPlayers } = useUser();

  useEffect(() => {
    getUserAndPlayers();
  }, []);

  return (
    <div className="flex flex-col min-h-dvh">
      <BattleNavbar />

      <div
        className="flex-1 bg-cover bg-center"
        style={{ backgroundImage: `url(${court})` }}
      >
        <Outlet />
      </div>
    </div>
  );
}
export default BattleLayout;
