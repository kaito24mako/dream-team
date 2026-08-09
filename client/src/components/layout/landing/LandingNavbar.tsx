import { Link } from "react-router-dom";

import Button from "../../common/button/Button";

import logo from "../../../assets/icon/logo.png";

function LandingNavbar() {
  return (
    <header className="navbar bg-base-200 rounded-md text-sm py-4.5 px-2 md:px-10">
      <div className="flex-1">
        <img src={logo} className="w-28 h-15" alt="Dream Team logo" />
      </div>
      <div className="flex gap-3">
        <Link to="/home">
          <Button bgColor="primary" textColor="black">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button bgColor="secondary" textColor="black">
            Create Account
          </Button>
        </Link>
      </div>
    </header>
  );
}
export default LandingNavbar;
