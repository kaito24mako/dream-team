import { Link } from "react-router-dom";

import ThemeToggle from "../features/theme/ThemeToggle";
import logo from "../../assets/logo.png";
import HamburgerIcon from "../common/icon/ui/HamburgerIcon";

function Navbar() {
  return (
    <header className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md text-sm py-2 px-4">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <nav className="collapse-title navbar">
        <div className="navbar-start">
          <label
            htmlFor="navbar-1-toggle"
            className="lg:hidden p-3 cursor-pointer"
          >
            <HamburgerIcon />
          </label>
          <Link to="/">
            <img src={logo} className="w-24 h-12" />
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
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
              <Link to="/guide">How to Play</Link>
            </li>
            <li>
              <Link to="/account">Account</Link>
            </li>
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      <div className="collapse-content lg:hidden z-1">
        <ul className="menu">
          <li>
            <Link to="/">Home</Link>
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
export default Navbar;
