import "./Navbar.css";
import GrownexLogo from "./GrownexLogo";
import { NAV_LINKS } from "../data/constants";

export default function Navbar({ currentPage, onNav }) {
  return (
    <div className="nav-wrapper">
      <nav className="nav">
        <div className="nav__logo" onClick={() => onNav("Home")}>
          <GrownexLogo height={28} color="#0A0A0A" />
        </div>
        <ul className="nav__links">
          {NAV_LINKS.map((link) => (
            <li key={link}>
              <a onClick={() => onNav(link)} className={currentPage === link ? "active" : ""}>{link}</a>
            </li>
          ))}
        </ul>
        <button className="nav__cta" onClick={() => onNav("Contact")}>Get In Touch</button>
      </nav>
    </div>
  );
}