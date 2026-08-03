import { Link } from "react-router-dom";

import ThemeToggle from "../features/theme/ThemeToggle";
import logo from "../../assets/logo.png";

function Navbar() {
  return (
    <header className="max-lg:collapse bg-base-200 lg:mb-48 shadow-sm w-full rounded-md text-sm">
      <input id="navbar-1-toggle" className="peer hidden" type="checkbox" />
      <label
        htmlFor="navbar-1-toggle"
        className="fixed inset-0 hidden max-lg:peer-checked:block"
      ></label>
      <nav className="collapse-title navbar">
        <div className="navbar-start">
          {/* hamburger */}
          <label
            htmlFor="navbar-1-toggle"
            className="lg:hidden p-3 cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          {/* logo */}
          <img src={logo} className="w-30 h-20" />
          <span className="text-coin">$250</span>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-primary">
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
            <button>Home</button>
          </li>
          <li>
            <button>League</button>
          </li>
          <li>
            <button>Packs</button>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Navbar;
