import "./Insights.css";
import CtaSection from "../components/CtaSection.jsx";
import Footer from "../components/Footer.jsx";
import { INSIGHT_POSTS } from "../data/constants.js";

export default function Insights({ onNav }) {
  return (
    <>
      <section className="insights">
        <div className="container">
          <div className="insights__header">
            <p className="section-tag" style={{justifyContent:"center"}}>Insights</p>
            <h1 className="insights__title">Thinking out loud<span className="dot-orange">.</span></h1>
            <p className="insights__sub">Perspectives on branding, marketing, and building businesses that last.</p>
          </div>
          <div className="insights__grid">
            {INSIGHT_POSTS.map((post, i) => (
              <div key={i} className="insights__card" onClick={() => onNav(post.page)}>
                <div className="insights__card-img"><div className={post.colorClass} /></div>
                <p className="insights__card-cat">{post.cat}</p>
                <h3 className="insights__card-title">{post.title}</h3>
                <p className="insights__card-meta">{post.date} · {post.read}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <CtaSection onNav={onNav} /><Footer onNav={onNav} />
    </>
  );
}