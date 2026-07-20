import { useState } from "react";
import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";
import { asset } from "../lib/asset";

// Titre d'accroche : un des trois tiré au hasard à chaque chargement de page.
// `l2` s'affiche en citron sous `l1`, façon "Voir le monde / autrement.".
const TAGLINES = [
  { l1: "Voir.", l2: "Être vu." },
  { l1: "Good eyes.", l2: "Good taste." },
  { l1: "Not for", l2: "everyone." },
];

export default function Hero() {
  const [tagline] = useState(() => TAGLINES[Math.floor(Math.random() * TAGLINES.length)]);

  return (
    <section
      id="hero"
      style={{ position: "relative", height: "100vh", overflow: "hidden", background: "var(--black)" }}
    >
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        poster={asset("images/interieur-magasin.png")}
        src={asset("assets/hero-scrub.mp4")}
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(180deg, rgba(10,10,15,.4) 0%, rgba(10,10,15,.35) 45%, rgba(10,10,15,.8) 100%)",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", padding: "clamp(16px,3vw,40px)", boxSizing: "border-box" }}>
        <nav style={{ display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 16 }}>
          <div className="font-mono hero-eyebrow-label" style={{ fontSize: 12, letterSpacing: ".14em", color: "var(--cream)", opacity: 0.6, textTransform: "uppercase" }}>
            Vevey — T1 2027
          </div>
          <Magnetic
            as={Link}
            to="/concept"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              background: "var(--lime)",
              color: "var(--black)",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: 14,
              letterSpacing: ".04em",
              padding: "12px 22px",
              textTransform: "uppercase",
            }}
          >
            Découvrir le concept
          </Magnetic>
        </nav>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "center", maxWidth: 880 }}>
          <div
            data-reveal="true"
            className="font-mono"
            style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--violet)", textTransform: "uppercase", marginBottom: 20 }}
          >
            Opticien indépendant — Suisse <span className="glim-sparkle">✦</span>
          </div>
          <h1
            className="font-display"
            style={{
              margin: 0,
              fontSize: "clamp(48px,10.5vw,176px)",
              lineHeight: 0.96,
              letterSpacing: ".005em",
              color: "var(--cream)",
              textTransform: "uppercase",
            }}
          >
            <span style={{ display: "block" }}>{tagline.l1}</span>
            <span style={{ display: "block", color: "var(--lime)" }}>{tagline.l2}</span>
          </h1>
          <p data-reveal="true" style={{ margin: "28px 0 0", maxWidth: "44ch", fontSize: "clamp(16px,1.4vw,20px)", lineHeight: 1.55, color: "var(--cream)", opacity: 0.9 }}>
            Un vrai opticien. Des prix affichés. Une communauté.
          </p>
          <div data-reveal="true" className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 36 }}>
            <Magnetic
              as={Link}
              to="/concept"
              style={{ background: "var(--lime)", color: "var(--black)", textDecoration: "none", fontWeight: 700, fontSize: 15, letterSpacing: ".04em", padding: "18px 34px", textTransform: "uppercase" }}
            >
              Découvrir le concept
            </Magnetic>
            <Magnetic
              as={Link}
              to="/verres"
              style={{ border: "2px solid var(--violet)", color: "var(--cream)", textDecoration: "none", fontWeight: 700, fontSize: 15, letterSpacing: ".04em", padding: "16px 32px", textTransform: "uppercase" }}
            >
              Voir nos verres
            </Magnetic>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
          <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".3em", opacity: 0.5, textTransform: "uppercase", color: "var(--cream)" }}>Scroll</div>
          <div className="glim-scroll-hint" />
        </div>
      </div>
    </section>
  );
}
