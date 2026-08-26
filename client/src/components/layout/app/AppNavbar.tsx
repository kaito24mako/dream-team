import { Link, NavLink } from "react-router-dom";
import { PiQuestionLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";
import { IoIosLogOut } from "react-icons/io";

import { useUser } from "../../../utils/context/UserContext.jsx";

import HamburgerIcon from "../../common/icon/ui/HamburgerIcon";
import CoinIcon from "../../common/icon/ui/CoinIcon";
import logo from "../../../assets/icon/logo.png";

function AppNavbar() {
  const user = useUser();

  return (
    <header className="max-lg:collapse bg-base-200 w-full rounded-md text-sm py-2 px-2 md:px-10">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <nav className="collapse-title navbar">
        <div className="navbar-start">
          <label
            htmlFor="navbar-1-toggle"
            className="lg:hidden p-3 pr-6 md:pr-8 cursor-pointer"
          >
            <HamburgerIcon />
          </label>
          <Link to="/home">
            <img
              src={logo}
              className="w-20 h-10 md:w-24 md:h-12"
              alt="Dream Team logo"
            />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-5 px-1">
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/league"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                League
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/packs"
                className={({ isActive }) =>
                  isActive ? "text-primary font-semibold" : ""
                }
              >
                Packs
              </NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <div className="text-coin mr-2.5 mt-0.5 flex items-center gap-1">
            <CoinIcon />
            {user.currency}
          </div>
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/how-to-play">
                <PiQuestionLight className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to="/account">
                <VscAccount className="w-5 h-5" />
              </Link>
            </li>
            <li>
              <Link to="/" aria-label="Log out">
                <IoIosLogOut className="w-6 h-6 md:hidden" />
                <span className="hidden md:inline">Log Out</span>
              </Link>
            </li>
          </ul>
          {/* <ThemeToggle /> */}
        </div>
      </nav>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/league">League</Link>
          </li>
          <li>
            <Link to="/packs">Packs</Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default AppNavbar;
