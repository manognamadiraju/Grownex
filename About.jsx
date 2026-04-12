import { useState } from "react";
import "./About.css";
import CtaSection from "../components/CtaSection";
import Footer from "../components/Footer";
import { CAPABILITIES } from "../data/constants";

const MISSION_POINTS = ["Strategic clarity in every engagement","Innovation-driven creative solutions","Customer-centric approach","Building stronger market presence"];
const VISION_POINTS = ["Inspiring modern brand architecture","Pioneering digital-first strategies","Championing measurable outcomes","Empowering ambitious businesses"];

export default function About({ onNav }) {
  const [capIdx, setCapIdx] = useState(0);
  const cap = CAPABILITIES[capIdx];
  return (
    <>
      <section className="about-hero">
        <div className="container">
          <div className="about-hero__grid">
            <div>
              <p className="section-tag">About Us</p>
              <h1 className="about-hero__title">Crafting Brands That <span>Matter</span></h1>
              <p className="about-hero__text">We exist to create brands that matter and marketing that moves markets. Not brands that exist only in guidelines, but identities that shape perception, drive preference, and create commercial value.</p>
              <p className="about-hero__text">Not marketing that looks impressive in decks, but systems that generate pipeline, acquire customers, and accelerate growth.</p>
              <p className="about-hero__text">With a team of skilled professionals and a commitment to quality, we work hand-in-hand with our clients to bring their ideas to life.</p>
            </div>
            <div className="about-hero__img">Team photo — Grownex</div>
          </div>
        </div>
      </section>

      <section className="capabilities">
        <div className="container">
          <div className="capabilities__header">
            <p className="section-tag">Our<br/>Capabilities</p>
            <h2 className="capabilities__title">Capabilities<span className="dot-orange">.</span></h2>
            <p className="capabilities__desc">See how our full-spectrum capabilities transform your brand with custom solutions that deliver measurable impact from day one.</p>
          </div>
          <div className="capabilities__body">
            <div className="capabilities__img">⌨️</div>
            <div>
              <p className="capabilities__num">{cap.num}</p>
              <h3 className="capabilities__name">{cap.name}</h3>
              <p className="capabilities__text">{cap.desc}</p>
              <div className="capabilities__nav">
                <button className="capabilities__btn" onClick={() => setCapIdx(i => Math.max(0, i-1))}>‹</button>
                <button className="capabilities__btn" onClick={() => setCapIdx(i => Math.min(CAPABILITIES.length-1, i+1))}>›</button>
                <div className="capabilities__dots">
                  {CAPABILITIES.map((_,i) => (
                    <div key={i} className={`capabilities__dot${i===capIdx?" capabilities__dot--active":""}`} onClick={() => setCapIdx(i)} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mv">
        <div className="container">
          <div className="mv__grid">
            <div>
              <p className="mv__tag">Our Mission</p>
              <h3 className="mv__title">Building brands that drive growth</h3>
              <p className="mv__text">To deliver exceptional branding and marketing solutions that exceed client expectations through innovation, quality craftsmanship, and a commitment to measurable results.</p>
              <ul className="mv__list">{MISSION_POINTS.map(pt => <li key={pt}>{pt}</li>)}</ul>
            </div>
            <div>
              <p className="mv__tag">Our Vision</p>
              <h3 className="mv__title">Redefining the future of branding</h3>
              <p className="mv__text">To redefine the future of branding and marketing through innovation, sustainability, and excellence. We aim to create identities that not only inspire but also contribute to the growth of businesses.</p>
              <ul className="mv__list">{VISION_POINTS.map(pt => <li key={pt}>{pt}</li>)}</ul>
            </div>
          </div>
        </div>
      </section>
      <CtaSection onNav={onNav} /><Footer onNav={onNav} />
    </>
  );
}