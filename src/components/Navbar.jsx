import "./Navbar.css";
import GrownexLogo from "./GrownexLogo.jsx";
import { NAV_LINKS } from "../data/constants.js";

export default function Navbar({ currentPage, onNav }) {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <div className="nav__logo" onClick={() => onNav("Home")}>
          <GrownexLogo height={28} color="#0A0A0A" />
        </div>
        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link.name}>
              <a onClick={() => onNav(link.name)} className={currentPage === link.name ? "active" : ""}>{link.name}</a>
            </li>
          ))}
        </ul>
        <button className="nav__cta" onClick={() => onNav("Contact")}>Get In Touch</button>
      </nav>
    </div>
  );
}