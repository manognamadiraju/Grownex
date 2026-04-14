import "./CaseStudyBranding.css";
import CtaSection from "../components/CtaSection.jsx";
import Footer from "../components/Footer.jsx";

const META = [
  { label:"Client",   val:"Sowjanya Studios" },
  { label:"Services", val:"Brand Identity, Outdoor Marketing" },
  { label:"Industry", val:"Fashion & Lifestyle" },
  { label:"Year",     val:"2024" },
];
const PALETTE = ["#d4a800","#8b1a1a","#1a1a1a","#f5f5f5"];

export default function CaseStudyBranding({ onNav }) {
  return (
    <>
      <section className="cs-branding">
        <div className="container">
          <p className="cs__back" onClick={() => onNav("Work")}>← Back to Work</p>
          <div className="cs__badges">
            <span className="cs__badge">Branding</span>
            <span className="cs__badge cs__badge--outline">Visual Identity</span>
          </div>
          <h1 className="cs__title">Draping Tradition, Defining Style.</h1>
          <p className="cs__sub">Comprehensive brand identity development for Sowjanya Studios, a premium design studio specialising in traditional Indian fashion. We crafted a distinctive visual identity system including logo design, brand guidelines, and outdoor marketing materials.</p>
          <div className="cs__hero-img" style={{background:"linear-gradient(135deg,#3a0000,#7a1a00)"}}>
            <span style={{fontFamily:"var(--font-display)",fontSize:32,fontWeight:800,color:"#d4a800",textAlign:"center"}}>SOWJANYA STUDIOS</span>
          </div>
          <div className="cs__meta-grid">
            {META.map((m) => (
              <div key={m.label} className="cs__meta-item">
                <div className="cs__meta-label">{m.label}</div>
                <div className="cs__meta-val">{m.val}</div>
              </div>
            ))}
          </div>
          <h2 className="cs__section-title">About the Brand</h2>
          <p className="cs__text">Sowjanya Studios is a premium design studio rooted in the traditions of Indian fashion and craftsmanship. They have evolved the seamless fusion of timeless ethnic identity with contemporary aesthetics, offering services that focus on traditional textiles embracing modern elegance.</p>
          <h2 className="cs__section-title">The Challenge</h2>
          <p className="cs__text">Create a brand identity that bridges traditional Indian fashion culture with contemporary design sensibilities, appearing in both traditional and digital media environments to reach a sophisticated, style-conscious audience.</p>
          <h2 className="cs__section-title">Brand Identity</h2>
          <div className="cs__identity-grid">
            <div className="cs__palette">
              {PALETTE.map((color) => <div key={color} className="cs__palette-swatch" style={{background:color}} />)}
            </div>
            <div className="cs__typography">
              <p className="cs__typeface-name">Playfair Display</p>
              <p className="cs__typeface-sub">Primary Typeface</p>
            </div>
          </div>
          <h2 className="cs__section-title">Project Gallery</h2>
          <div className="cs__gallery">
            <div className="cs__gallery-main">
              <span className="cs__gallery-label" style={{fontSize:36,color:"#d4a800"}}>SOWJANYA STUDIOS</span>
            </div>
            <div className="cs__gallery-grid">
              <div className="cs__gallery-item" style={{background:"#f5f0e8"}}>
                <span className="cs__gallery-label" style={{fontSize:18,color:"#3a0000"}}>SOWJANYA STUDIOS</span>
              </div>
              <div className="cs__gallery-item" style={{background:"#8b1a1a"}}>
                <span className="cs__gallery-label" style={{fontSize:18,color:"#d4a800"}}>SOWJANYA STUDIOS</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <CtaSection onNav={onNav} /><Footer onNav={onNav} />
    </>
  );
}