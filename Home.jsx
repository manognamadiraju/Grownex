import "./Home.css";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import { MARQUEE_ITEMS, WORK_ITEMS, SERVICES_HOME, VIDEO_THUMBS } from "../data/constants";

const WHY_POINTS = ["Strategic clarity in every engagement","Innovation-driven creative solutions","Customer-centric approach","Building stronger market presence"];

export default function Home({ onNav }) {
  const doubled = [...MARQUEE_ITEMS, ...MARQUEE_ITEMS];
  return (
    <>
      <section className="hero">
        <div className="container">
          <p className="hero__tag">Creators of purposeful, Enduring Brands</p>
          <h1 className="hero__headline">Creators of purposeful, <em>Enduring Brands</em></h1>
          <p className="hero__sub">Grownex is a branding and marketing consultancy focused on creating commercially effective, scalable identities.</p>
          <div className="hero__btns">
            <button className="btn-outline" onClick={() => onNav("About Us")}>Start a conversation</button>
            <button className="btn-primary" onClick={() => onNav("Work")}>View our work ↗</button>
          </div>
          <div className="hero__marquee">
            <div className="hero__marquee-track">
              {doubled.map((text, i) => <span key={i}>{text}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section className="home-work">
        <div className="container">
          <p className="section-tag">View Our Work</p>
          <p className="home-work__section-label" style={{ marginTop: 24 }}>Branding</p>
          <div className="home-work__grid">
            {WORK_ITEMS.map((w) => (
              <div key={w.id} className="home-work__card" onClick={() => onNav(w.page)}>
                <div className={`home-work__card-bg ${w.colorClass}`} />
                <div className="home-work__card-overlay" />
                <div className="home-work__card-content">
                  <span className="home-work__card-tag">{w.tag}</span>
                  <div className="home-work__card-name">{w.name}</div>
                  <div className="home-work__card-sub">{w.sub}</div>
                </div>
                <span className="home-work__card-year">{w.year}</span>
              </div>
            ))}
          </div>
          <p className="home-work__section-label" style={{ marginTop: 48 }}>Marketing</p>
          {[1, 2].map((i) => (
            <div key={i} className="home-dm__card" onClick={() => onNav("CaseStudy-DM")}>
              <div className="home-dm__card-bg" />
              <div className="home-dm__card-overlay" />
              <div className="home-dm__card-content">
                <div className="home-dm__card-title">Aruh Koncepts</div>
                <div className="home-dm__card-sub">Digital Marketing</div>
              </div>
              <span className="home-dm__card-link">View casestudy →</span>
            </div>
          ))}
          <div className="home-work__more">
            <button className="btn-outline" onClick={() => onNav("Work")}>View more</button>
          </div>
        </div>
      </section>

      <section className="home-video">
        <div className="container">
          <p className="home-video__title">Video Production</p>
          <p className="home-video__sub">All these visuals and concepts are made by Grownex that shows its world.</p>
          <div className="home-video__grid">
            {VIDEO_THUMBS.map((emoji, i) => (
              <div key={i} className="home-video__thumb" style={{ background: i % 2 === 0 ? "#111" : "#1a1a1a" }}>{emoji}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="home-services">
        <div className="container">
          <p className="section-tag">Our Services</p>
          <div className="home-services__headline">
            <h2 className="home-services__title">We serve end-to-end creative, marketing, and technology solutions for growing brands.</h2>
          </div>
          {SERVICES_HOME.map((s) => (
            <div key={s.num} className="home-services__row">
              <div><span className="home-services__num">{s.num}</span><p className="home-services__name">{s.title}</p></div>
              <p className="home-services__desc">{s.desc}</p>
              <div className="home-services__tags">{s.tags.map((t) => <span key={t} className="home-services__tag">{t}</span>)}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="home-why">
        <div className="container">
          <p className="section-tag">Why Us</p>
          <h2 style={{ fontFamily:"var(--font-display)", fontSize:"clamp(24px,3.5vw,44px)", fontWeight:800, lineHeight:1.1, maxWidth:680 }}>
            Independent thinking. Direct accountability. Real-world results.
          </h2>
          <div className="home-why__body">
            <div className="home-why__img">Team Photo</div>
            <div>
              <p className="home-why__subtitle">What Our Clients Can Expect</p>
              <p className="home-why__text">Engagements built on trust, clear communication, and a deep understanding of your goals. Every decision is backed by thinking — not templates.</p>
              {WHY_POINTS.map((pt) => (
                <div key={pt} className="home-why__item"><span className="home-why__check">✓</span>{pt}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection onNav={onNav} />
      <Footer onNav={onNav} />
    </>
  );
}