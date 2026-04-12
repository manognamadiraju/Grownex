import "./Services.css";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";

const SERVICES = [
  {
    num: "01",
    name: "Branding & Creative Services",
    desc: "From brand naming to complete visual systems, we craft identities that mean something. Our branding practice covers strategy through execution — positioning, visual identity, messaging frameworks, and brand guidelines that scale.",
    tags: ["Brand Strategy", "Visual Identity", "Logo Design", "Brand Guidelines", "Print & Packaging", "Campaign Creative"],
  },
  {
    num: "02",
    name: "Digital Marketing",
    desc: "Marketing that doesn't just look good — it performs. We design and execute data-driven campaigns across every relevant channel, from social media to paid advertising, with a relentless focus on measurable outcomes.",
    tags: ["Social Media Marketing", "Paid Media (Meta/Google)", "SEO & Content Strategy", "Email Marketing", "Analytics & Reporting"],
  },
  {
    num: "03",
    name: "Web Development & UX/UI",
    desc: "Your digital home should be beautiful, fast, and built to convert. We design and build websites and web applications that serve your business goals — from landing pages to full-scale platforms.",
    tags: ["Website Design", "Web App Development", "UI/UX Design", "Landing Pages", "CMS Integration", "Performance Optimisation"],
  },
  {
    num: "04",
    name: "Video Production",
    desc: "From concept to cut, we make video that tells your story with impact. Brand films, social content, product demonstrations, event coverage — crafted to engage audiences and drive action.",
    tags: ["Brand Films", "Social Video", "Product Videos", "Motion Graphics", "Reels & Shorts", "Event Coverage"],
  },
];

const PROCESS_STEPS = [
  { num: "01", name: "Discovery", desc: "We start by deeply understanding your business, audience, competitors, and goals through research and strategic workshops." },
  { num: "02", name: "Strategy", desc: "We define the positioning, messaging architecture, and creative direction that will drive your brand forward." },
  { num: "03", name: "Execution", desc: "Our team brings the strategy to life with precision — design, development, content, and campaigns built to perform." },
  { num: "04", name: "Optimise", desc: "We measure, learn, and refine continuously — ensuring every initiative compounds over time into sustainable growth." },
];

const WHY_ITEMS = [
  { icon: "🎯", name: "Senior-led work", desc: "Every project gets direct involvement from our senior strategists and creatives — not delegated to juniors." },
  { icon: "📊", name: "Results-focused", desc: "We measure success the way you do — leads, conversions, revenue. Not vanity metrics." },
  { icon: "⚡", name: "Agile delivery", desc: "Fast turnarounds without cutting corners. We move with urgency while maintaining quality." },
  { icon: "🤝", name: "True partnership", desc: "We embed ourselves in your business and think like owners, not vendors." },
];

export default function Services({ onNav }) {
  return (
    <>
      {/* ── Hero ── */}
      <section className="services-page">
        <div className="container">
          <p className="section-tag">Services</p>
          <h1 className="services-page__headline">
            What We <span className="dot-orange">Do.</span>
          </h1>
          <p className="services-page__sub">
            End-to-end creative, marketing, and technology solutions built for
            brands that want to grow with purpose — not just presence.
          </p>

          {/* ── Service list ── */}
          <div className="services-page__list">
            {SERVICES.map((s) => (
              <div key={s.num} className="services-page__item" onClick={() => onNav("Contact")}>
                <div>
                  <div className="services-page__item-num">{s.num}</div>
                  <div className="services-page__item-name">{s.name}</div>
                  <div className="services-page__item-tags">
                    {s.tags.map((t) => (
                      <span key={t} className="services-page__item-tag">{t}</span>
                    ))}
                  </div>
                </div>
                <p className="services-page__item-desc">{s.desc}</p>
                <div className="services-page__item-arrow">↗</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Our Process ── */}
      <section className="services-process">
        <div className="container">
          <p className="section-tag">Our Process</p>
          <h2 className="services-process__title">How we work</h2>
          <p className="services-process__sub">
            A proven framework that takes brands from insight to market impact —
            consistently, efficiently, and without compromise.
          </p>
          <div className="services-process__grid">
            {PROCESS_STEPS.map((step) => (
              <div key={step.num} className="services-process__step">
                <div className="services-process__step-num">{step.num}</div>
                <div className="services-process__step-name">{step.name}</div>
                <p className="services-process__step-desc">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Why Grownex ── */}
      <section className="services-why">
        <div className="container">
          <div className="services-why__grid">
            <div>
              <p className="section-tag">Why Grownex</p>
              <h2 className="services-why__title">
                Built different.<br />
                Built for results.
              </h2>
              <p className="services-why__text">
                We're not a faceless agency with 200 employees and a bloated
                process. We're a focused team of senior strategists, designers,
                and marketers who care deeply about the work — and your outcomes.
              </p>
              <div className="services-why__list">
                {WHY_ITEMS.map((item) => (
                  <div key={item.name} className="services-why__list-item">
                    <span className="services-why__list-icon">{item.icon}</span>
                    <div>
                      <div className="services-why__list-name">{item.name}</div>
                      <div className="services-why__list-desc">{item.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="services-why__img">Team at work</div>
          </div>
        </div>
      </section>

      <CtaSection onNav={onNav} />
      <Footer onNav={onNav} />
    </>
  );
}