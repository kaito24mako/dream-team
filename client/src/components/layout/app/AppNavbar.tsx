import { Link } from "react-router-dom";
import { PiQuestionLight } from "react-icons/pi";
import { VscAccount } from "react-icons/vsc";

import ThemeToggle from "../../features/theme/ThemeToggle";
import HamburgerIcon from "../../common/icon/ui/HamburgerIcon";
import logo from "../../../assets/icon/logo.png";

function AppNavbar() {
  return (
    <header className="max-lg:collapse bg-base-200 shadow-sm w-full rounded-md text-sm py-2 px-2 md:px-10">
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
            <img src={logo} className="w-24 h-12" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
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

        <div className="navbar-end">
          <span className="text-coin mr-2.5 mt-0.5">$250</span>
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/guide">
                <PiQuestionLight className="w-6 h-6" />
              </Link>
            </li>
            <li>
              <Link to="/account">
                <VscAccount className="w-5 h-5" />
              </Link>
            </li>
          </ul>
          <ThemeToggle />
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
