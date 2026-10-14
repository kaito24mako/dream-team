import { PiQuestionLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";

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
    <header className="bg-base-200 w-full rounded-md text-sm py-3 px-6 md:px-10 lg:px-25 fixed z-100">
      <nav className="grid grid-cols-[1fr_auto_1fr] items-center gap-x-2 gap-y-2 lg:grid-cols-[1fr_auto_1fr]">
        <Link
          to="/home"
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
              to="/home"
              className={({
                isActive,
              }) => `hover:underline hover:underline-offset-3
                ${isActive ? "text-primary font-semibold underline underline-offset-3" : ""}`}
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/league"
              className={({
                isActive,
              }) => `hover:underline hover:underline-offset-3
                ${isActive ? "text-primary font-semibold underline underline-offset-3" : ""}`}
            >
              League
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/packs"
              className={({
                isActive,
              }) => `hover:underline hover:underline-offset-3
                ${isActive ? "text-primary font-semibold underline underline-offset-3" : ""}`}
            >
              Packs
            </NavLink>
          </li>
        </ul>

        <div className="col-start-3 row-start-2 flex items-center justify-end lg:col-span-1 lg:col-start-3 lg:row-start-1">
          <div className="flex items-center gap-1">
            <div className="text-coin mr-1 hidden items-center gap-1 px-2 lg:flex">
              <CoinIcon />
              {user.currency}
            </div>
            <div className="flex items-center gap-4 lg:gap-5">
              <NavLink
                to="/how-to-play"
                aria-label="Guide"
                className={({
                  isActive,
                }) => `flex gap-1 items-center hover:underline hover:underline-offset-3
                ${isActive ? "text-primary font-semibold underline underline-offset-3" : ""}`}
              >
                <PiQuestionLight className="w-6 h-6 flex md:hidden" />
                <span className="hidden md:flex">How to play</span>
              </NavLink>
              <NavLink
                to="/account"
                aria-label="Account"
                className={({
                  isActive,
                }) => `flex gap-1 items-center  hover:underline hover:underline-offset-3
                ${isActive ? "text-primary font-semibold underline underline-offset-3" : ""}`}
              >
                <VscAccount className="w-5 h-5 flex md:hidden" />
                <span className="hidden md:flex">My account</span>
              </NavLink>
              <NavLink
                to="/"
                aria-label="Log out"
                onClick={leave}
                className={({
                  isActive,
                }) => `flex gap-1 items-center hover:underline hover:underline-offset-3
                ${isActive ? "text-primary font-semibold" : ""}`}
              >
                <IoIosLogOut className="w-5 h-5" />
                <span className="hidden sm:flex">Log out</span>
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
export default AppNavbar;
