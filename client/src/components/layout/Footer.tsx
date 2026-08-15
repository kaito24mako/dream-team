import { Link } from "react-router-dom";

import GithubIcon from "../common/icon/socials/GithubIcon";
import LinkedInIcon from "../common/icon/socials/LinkedInIcon";
import FacebookIcon from "../common/icon/socials/FacebookIcon";

function Footer() {
  return (
    <footer className="footer sm:footer-horizontal bg-base-200 text-base-content rounded py-7 px-4 md:px-13">
      <aside className="grid-flow-col items-center mx-auto sm:mx-0">
        <p>Copyright © {new Date().getFullYear()} - Kaito Watanabe</p>
      </aside>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end mx-auto sm:mx-0">
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
      </nav>
    </footer>
  );
}
export default Footer;
