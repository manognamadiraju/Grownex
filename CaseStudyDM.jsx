import "./CaseStudyDM.css";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const META = [
  { label:"Client",   val:"Aruh Koncepts" },
  { label:"Services", val:"Digital Marketing, Meta Ads, GMB" },
  { label:"Industry", val:"Interior Design" },
  { label:"Year",     val:"2025" },
];
const RESULTS = [
  { num:"27",   label:"Qualified leads per month" },
  { num:"71%",  label:"Lead qualification rate" },
  { num:"₹478", label:"Cost per qualified lead" },
  { num:"84%",  label:"Reduction in junk leads" },
];
const PHASES = [
  { title:"Phase 1: Social Media Marketing Strategy", label:"Platform Focus: Instagram & Facebook", body:"Given Aruh Koncepts' visual product and target demographic, we prioritised Instagram as the primary brand-building platform with Facebook serving acquisition and retargeting functions. We built a multi-format content ecosystem designed to attract, qualify, and convert high-intent prospects." },
  { title:"Phase 2: Meta Advertising Campaign Architecture", label:"Precision Targeting + Algorithm Optimisation", body:"Data-backed targeting parameters were refined weekly to drive down cost-per-qualified-lead. Campaigns were structured across awareness, consideration, and conversion objectives aligned with Meta's Andromeda algorithm update." },
  { title:"Phase 3: Google My Business Optimisation", label:"Local Search Dominance", body:"Strategic GMB optimisation ensured Aruh Koncepts appeared prominently for high-intent local searches — dramatically increasing foot traffic enquiries and appointment bookings from premium residential areas across Hyderabad." },
];

export default function CaseStudyDM({ onNav }) {
  return (
    <>
      <section className="cs-dm">
        <div className="container">
          <p className="cs__back" onClick={() => onNav("Insights")}>← Back to Insights</p>
          <div className="cs__badges">
            <span className="cs__badge">Case Study</span>
            <span className="cs__badge cs__badge--outline">Feb 20, 2025</span>
            <span className="cs__badge cs__badge--outline">11 min read</span>
          </div>
          <h1 className="cs-dm__title">Case Study: Precision Lead Generation for Aruh Koncepts Interior Design Studio</h1>
          <p className="cs-dm__sub">How Grownex transformed lead quality for a premium interior design studio — from 5% to 71% qualification rate through precision-targeted Meta advertising, social media marketing, and Google My Business optimisation.</p>
          <div className="cs-dm__hero-img">
            <div>
              <p className="cs-dm__hero-headline">Looking for Luxury Home Interiors in HYDERABAD?</p>
              <span className="cs-dm__hero-banner">LUXURY HOME INTERIORS</span>
            </div>
          </div>
          <div className="cs-dm__meta-grid">
            {META.map((m) => (
              <div key={m.label} className="cs-dm__meta-item">
                <div className="cs-dm__meta-label">{m.label}</div>
                <div className="cs-dm__meta-val">{m.val}</div>
              </div>
            ))}
          </div>
          <h2 className="cs-dm__section-title">Client & Market Context</h2>
          <p className="cs-dm__text">Aruh Koncepts is a premium interior design studio based in Hyderabad, India, specialising in high-end residential and commercial interior projects. Operating in a competitive market, Aruh Koncepts needed to establish distinct market positioning and generate qualified leads from clients capable of investing in premium design services.</p>
          <h2 className="cs-dm__section-title">Measurable Impact</h2>
          <div className="cs-dm__results">
            {RESULTS.map((r) => (
              <div key={r.label} className="cs-dm__result-item">
                <div className="cs-dm__result-num">{r.num}</div>
                <div className="cs-dm__result-label">{r.label}</div>
              </div>
            ))}
          </div>
          <div className="cs-dm__cta-banner">
            <p className="cs-dm__cta-banner-title">Precision targeting. Real business outcomes.</p>
            <p className="cs-dm__cta-banner-desc">Grownex implemented precision-targeted Meta advertising and social media marketing campaigns that transformed lead quality for a premium interior design studio.</p>
            <button className="btn-primary" onClick={() => onNav("Contact")}>Get in touch ↗</button>
          </div>
          <h2 className="cs-dm__section-title">Strategic Framework</h2>
          <p className="cs-dm__text">Grownex developed an integrated digital marketing strategy across Social Media Marketing, Meta Advertising, and Google My Business, with precision targeting aligned with Meta's Andromeda algorithm update to maximise qualified lead generation.</p>
          {PHASES.map((phase) => (
            <div key={phase.title}>
              <h2 className="cs-dm__section-title">{phase.title}</h2>
              <p className="cs-dm__phase-label">{phase.label}</p>
              <p className="cs-dm__text">{phase.body}</p>
            </div>
          ))}
        </div>
      </section>
      <CtaSection onNav={onNav} /><Footer onNav={onNav} />
    </>
  );
}