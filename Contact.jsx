import "./Contact.css";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const INFO_ITEMS = [
  { icon:"📍", label:"Office",        val:"Hyderabad, Telangana\nIndia" },
  { icon:"📞", label:"Phone",         val:"+91 98765 43210" },
  { icon:"✉",  label:"Email",         val:"hello@grownex.in" },
  { icon:"🕐", label:"Working Hours", val:"Mon – Sat: 9:00 am – 7:00 pm" },
];

export default function Contact({ onNav }) {
  return (
    <>
      <section className="contact">
        <div className="container">
          <p className="section-tag">Contact</p>
          <h1 className="contact__headline">Let's talk<span className="dot-orange">.</span></h1>
          <p className="contact__sub">Have a project in mind? Reach out and let's discover how Grownex can help elevate your brand to new heights.</p>
          <div className="contact__body">
            <div className="contact__form-box">
              <p className="contact__form-title">Send us a message</p>
              <div className="contact__form-row">
                <div className="contact__form-group" style={{marginBottom:0}}>
                  <label className="contact__form-label">Full Name *</label>
                  <input className="contact__input" placeholder="John Doe" />
                </div>
                <div className="contact__form-group" style={{marginBottom:0}}>
                  <label className="contact__form-label">Email *</label>
                  <input className="contact__input" placeholder="john@company.com" type="email" />
                </div>
              </div>
              <div className="contact__form-row">
                <div className="contact__form-group" style={{marginBottom:0}}>
                  <label className="contact__form-label">Phone</label>
                  <input className="contact__input" placeholder="+91 98765 43210" />
                </div>
                <div className="contact__form-group" style={{marginBottom:0}}>
                  <label className="contact__form-label">Subject</label>
                  <select className="contact__select">
                    <option value="">Select a topic</option>
                    <option>Branding</option>
                    <option>Digital Marketing</option>
                    <option>Web Development</option>
                    <option>Video Production</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>
              <div className="contact__form-group" style={{marginTop:4}}>
                <label className="contact__form-label">Your Message *</label>
                <textarea className="contact__textarea" placeholder="Tell us about your project..." />
              </div>
              <button className="btn-primary">Send Message ↗</button>
              <p className="contact__terms">By submitting, you agree to our Terms and Privacy Policy.</p>
            </div>
            <div className="contact__info">
              {INFO_ITEMS.map((item) => (
                <div key={item.label} className="contact__info-item">
                  <div className="contact__info-icon">{item.icon}</div>
                  <div>
                    <div className="contact__info-label">{item.label}</div>
                    <div className="contact__info-val" style={{whiteSpace:"pre-line"}}>{item.val}</div>
                  </div>
                </div>
              ))}
              <div className="contact__quick-chat">
                <p className="contact__quick-chat-title">Prefer a quick chat?</p>
                <p className="contact__quick-chat-desc">Schedule a 15-minute discovery call and let's explore how we can help your brand grow.</p>
                <a className="contact__quick-chat-link" href="mailto:hello@grownex.in">hello@grownex.in →</a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection onNav={onNav} /><Footer onNav={onNav} />
    </>
  );
}