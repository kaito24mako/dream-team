import { Outlet } from "react-router-dom";

import BattleNavbar from "./BattleNavbar";
import court from "../../../assets/bg/court.png";

function BattleLayout() {
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
