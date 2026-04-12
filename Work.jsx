import { useState } from "react";
import "./Work.css";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import { WORK_ITEMS, DELIVER_ITEMS, VIDEO_THUMBS } from "../data/constants";

function BrandingTab({ onNav }) {
  return (
    <div className="work__branding-grid">
      {WORK_ITEMS.map((w) => (
        <div key={w.id} className="work__card" onClick={() => onNav(w.page)}>
          <div className={`work__card-img ${w.imgClass}`}>
            <span className="work__card-badge">{w.tag}</span>
            <span className="work__card-year">{w.year}</span>
            <span className="work__card-logo">{w.logo}</span>
          </div>
          <p className="work__card-name">{w.name}</p>
          <div className="work__card-meta">
            <span className="work__card-sub">{w.sub}</span>
            <span className="work__card-link">View Case Study</span>
          </div>
        </div>
      ))}
    </div>
  );
}

function MarketingTab({ onNav }) {
  return (
    <div>
      <p className="work-dm__intro-title">Marketing</p>
      <p className="work-dm__intro-desc">We're a dynamic digital marketing agency committed to making your business thrive. Whether you're a seasoned player in the digital landscape or just stepping into it, we have the expertise and strategies to propel your brand.</p>
      {[1, 2].map((i) => (
        <div key={i}>
          <div className="work-dm__card" onClick={() => onNav("CaseStudy-DM")}>
            <div className="work-dm__card-overlay" />
            <div className="work-dm__card-content"><div className="work-dm__card-title">Aruh Koncepts</div></div>
            <span className="work-dm__card-link">View casestudy →</span>
          </div>
          <div className="work-dm__card-meta">
            <div className="work-dm__card-meta-name">Aruh Koncepts</div>
            <div className="work-dm__card-meta-sub">Digital Marketing</div>
          </div>
        </div>
      ))}
      <div className="work-dm__more"><button className="btn-outline">View more</button></div>
      <div style={{ marginTop: 60 }}>
        <p className="work-video__title">Video Production</p>
        <p className="work-video__sub">All these visuals and concepts are made by Grownex that shows its world.</p>
        <div className="work-video__grid">
          {VIDEO_THUMBS.map((e, i) => <div key={i} className="work-video__thumb" style={{ background: i%2===0?"#111":"#1a1a1a" }}>{e}</div>)}
        </div>
      </div>
      <div className="work-deliver">
        <p className="work-deliver__title">What We Deliver</p>
        <p className="work-deliver__sub">Full-spectrum digital marketing services designed to generate awareness, leads, and measurable growth.</p>
        <div className="work-deliver__grid">
          {DELIVER_ITEMS.map((d) => (
            <div key={d.num} className="work-deliver__item">
              <div className="work-deliver__num">{d.num}</div>
              <div className="work-deliver__name">{d.name}</div>
              <div className="work-deliver__desc">{d.desc}</div>
            </div>
          ))}
        </div>
        <div className="work-ready">
          <div>
            <div className="work-ready__title">Ready to grow?</div>
            <div className="work-ready__sub">Let's build a digital marketing strategy that generates real results.</div>
          </div>
          <button className="btn-primary" onClick={() => onNav("Contact")}>Start a conversation ↗</button>
        </div>
      </div>
    </div>
  );
}

export default function Work({ onNav }) {
  const [tab, setTab] = useState("branding");
  return (
    <>
      <section className="work">
        <div className="container">
          <p className="section-tag">Portfolio</p>
          <h1 className="work__title">Our Work<span className="dot-orange">.</span></h1>
          <p className="work__sub">A selection of projects where strategy met craft — identities built to perform, not just to look pretty.</p>
          <div className="work__tabs">
            <button className={`work__tab${tab==="branding"?" work__tab--active":""}`} onClick={() => setTab("branding")}>Visual Branding</button>
            <button className={`work__tab${tab==="marketing"?" work__tab--active":""}`} onClick={() => setTab("marketing")}>Digital Marketing</button>
          </div>
          {tab === "branding" ? <BrandingTab onNav={onNav} /> : <MarketingTab onNav={onNav} />}
        </div>
      </section>
      <CtaSection onNav={onNav} /><Footer onNav={onNav} />
    </>
  );
}