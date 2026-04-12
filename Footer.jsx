import "./Footer.css";
import GrownexLogo from "./GrownexLogo";

const NAV_COL = ["Home","About Us","Portfolio","Services","Contact"];
const SOCIAL_COL = ["LinkedIn","Facebook","Instagram"];
const INFO_ITEMS = [
  { label: "📞 Phone",         val: "+91 98765 43210" },
  { label: "✉ Email",          val: "hello@grownex.in" },
  { label: "📍 Address",       val: "Hyderabad, Telangana, India" },
  { label: "🕐 Opening Hours", val: "Mon to Sat: 9:00am – 7:00pm" },
];

export default function Footer({ onNav }) {
  const handleNav = (label) => onNav(label === "Portfolio" ? "Work" : label);
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <div className="footer__logo"><GrownexLogo height={44} color="#FFFFFF" /></div>
            <p className="footer__tagline">The next big thing starts here — drop us a line and let's get creating!</p>
          </div>
          <div>
            <p className="footer__col-title">Navigation</p>
            <ul className="footer__nav-list">
              {NAV_COL.map((l) => <li key={l}><a onClick={() => handleNav(l)}>{l}</a></li>)}
            </ul>
          </div>
          <div>
            <p className="footer__col-title">Social</p>
            <ul className="footer__nav-list">
              {SOCIAL_COL.map((l) => <li key={l}><a href="#">{l}</a></li>)}
            </ul>
          </div>
        </div>
        <div className="footer__bar">
          <div className="footer__bar-grid">
            {INFO_ITEMS.map((item) => (
              <div key={item.label}>
                <div className="footer__bar-label">{item.label}</div>
                <div className="footer__bar-val">{item.val}</div>
              </div>
            ))}
          </div>
          <div className="footer__copy">
            <span>© 2026 Grownex. All rights reserved.</span>
            <span>Built with purpose &amp; precision</span>
          </div>
        </div>
      </div>
    </footer>
  );
}