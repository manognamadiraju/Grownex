import "./CtaSection.css";

export default function CtaSection({ onNav }) {
  return (
    <section className="cta">
      <div className="container">
        <div className="cta__inner">
          <div className="cta__left">
            <h2 className="cta__title">Get in <em>/touch/.</em></h2>
            <p className="cta__desc">Reach out to discover how Grownex can support your digital goals and help elevate your brand to new heights.</p>
            <div className="cta__contact-item">
              <span className="cta__contact-icon">📍</span>
              <div>
                <div className="cta__contact-label">Office</div>
                <div className="cta__contact-val">Hyderabad, Telangana<br />India</div>
              </div>
            </div>
            <div className="cta__contact-item">
              <span className="cta__contact-icon">📞</span>
              <div>
                <div className="cta__contact-label">Contact</div>
                <div className="cta__contact-val">+91 98765 43210<br />hello@grownex.in</div>
              </div>
            </div>
          </div>
          <div className="cta__form">
            <input className="cta__input" placeholder="Your Name *" />
            <input className="cta__input" placeholder="Your Email *" type="email" />
            <textarea className="cta__textarea" placeholder="Your message" />
            <button className="cta__submit" onClick={() => onNav("Contact")}>Get in touch ↗</button>
            <p className="cta__terms">By submitting, you agree to our <a href="#">Terms</a> and <a href="#">Privacy Policy</a></p>
          </div>
        </div>
      </div>
    </section>
  );
}