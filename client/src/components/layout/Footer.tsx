import { Link } from "react-router-dom";

import GithubIcon from "../common/icon/socials/GithubIcon";
import LinkedInIcon from "../common/icon/socials/LinkedInIcon";
import FacebookIcon from "../common/icon/socials/FacebookIcon";

function Footer() {
  return (
    <footer className="footer footer-horizontal footer-center bg-base-200 rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" to="/home">
          Home
        </Link>
        <Link className="link link-hover" to="/league">
          League
        </Link>
        <Link className="link link-hover" to="/packs">
          Packs
        </Link>
      </nav>

      <nav className="grid grid-flow-col gap-4">
        <Link className="link link-hover" to="/how-to-play">
          How to Play
        </Link>
        <Link className="link link-hover" to="/account">
          My Account
        </Link>
      </nav>

      <aside className="grid-flow-col items-center gap-10 md:gap-20 mx-auto sm:mx-0">
        <p>Copyright © {new Date().getFullYear()} - Kaito Watanabe</p>
        <nav>
          <div className="grid grid-flow-col gap-4">
            <a
              href="https://github.com/kaito24mako"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GithubIcon />
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedInIcon />
            </a>
            <a
              href="https://facebook.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          </div>
        </nav>
      </aside>
    </footer>
  );
}
export default Footer;
