import { PiQuestionLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";
import {
  IoCashOutline,
  IoHomeOutline,
  IoShirtOutline,
  IoTrophyOutline,
} from "react-icons/io5";

import { Link, NavLink } from "react-router-dom";
import { useUser } from "../../../utils/context/UserContext.jsx";
import { logout } from "../../../utils/redux/slices/authSlice.js";
import { useDispatch } from "react-redux";

import CoinIcon from "../../common/icon/ui/CoinIcon";
import logo from "../../../assets/icon/logo.png";

function AppNavbar() {
  const { user } = useUser();

  // setup usage of logout action
  const dispatch = useDispatch();

  function leave() {
    console.log("Log out clicked");
    dispatch(logout());
  }

  return (
    <header className="bg-base-100 shadow-sm w-full text-sm py-3 px-6 md:px-10 lg:px-25 fixed z-100">
      <nav className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 gap-y-2 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/team"
          className="col-start-2 row-start-1 justify-self-center lg:col-start-1 lg:justify-self-start"
        >
          <img
            src={logo}
            className="w-20 h-10 md:w-24 md:h-12"
            alt="Dream Team logo"
          />
        </Link>

        <div className="col-start-3 row-start-1 flex items-center justify-self-end text-coin gap-1 lg:hidden">
          <CoinIcon />
          {user.currency}
        </div>

        <ul className="col-span-2 col-start-1 row-start-2 flex justify-start gap-x-4 px-1 sm:gap-x-5 lg:col-span-1 lg:col-start-2 lg:row-start-1 lg:justify-center">
          <li>
            <NavLink
              to="/team"
              className={({
                isActive,
              }) => `flex items-center gap-1.5 hover:text-primary
                ${isActive ? "text-primary font-semibold underline underline-offset-3" : ""}`}
            >
              <IoShirtOutline className="h-4 w-4" />
              <span>Team</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/league"
              className={({
                isActive,
              }) => `flex items-center gap-1.5 hover:text-primary
                ${isActive ? "text-primary font-semibold underline underline-offset-3" : ""}`}
            >
              <IoTrophyOutline className="h-4 w-4" />
              <span>League</span>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/packs"
              className={({
                isActive,
              }) => `flex items-center gap-1.5 hover:text-primary
                ${isActive ? "text-primary font-semibold underline underline-offset-3" : ""}`}
            >
              <IoCashOutline className="h-4 w-4" />
              <span>Packs</span>
            </NavLink>
          </li>
        </ul>

        <div className="col-start-3 row-start-2 flex items-center justify-end lg:col-span-1 lg:col-start-3 lg:row-start-1">
          <div className="flex items-center gap-1">
            <div className="text-coin mr-1 hidden items-center gap-1 pr-3 lg:flex">
              <CoinIcon />
              {user.currency}
            </div>
            <div className="flex items-center gap-4 lg:gap-5">
              <NavLink
                to="/how-to-play"
                aria-label="Guide"
                className={({
                  isActive,
                }) => `flex gap-1 items-center hover:text-primary
                ${isActive ? "text-primary font-semibold underline underline-offset-3" : ""}`}
              >
                <PiQuestionLight className="h-5 w-5" />
                <span className="hidden lg:flex">How to play</span>
              </NavLink>
              <NavLink
                to="/account"
                aria-label="Account"
                className={({
                  isActive,
                }) => `flex gap-1.5 items-center hover:text-primary
                ${isActive ? "text-primary font-semibold underline underline-offset-3" : ""}`}
              >
                <VscAccount className="h-4 w-4" />
                <span className="hidden lg:flex">My account</span>
              </NavLink>
              <NavLink
                to="/"
                aria-label="Log out"
                onClick={leave}
                className={({
                  isActive,
                }) => `flex gap-1 items-center hover:text-error
                ${isActive ? "text-primary font-semibold" : ""}`}
              >
                <IoIosLogOut className="h-5 w-5" />
                <span className="hidden lg:flex">Log out</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default AppNavbar;
