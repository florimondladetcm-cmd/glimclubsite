import { useEffect, useRef } from "react";
import Magnetic from "./Magnetic";

export default function Hero() {
  const logoRef = useRef(null);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduced) return;

    const onMove = (e) => {
      const el = logoRef.current;
      if (!el) return;
      const r = el.getBoundingClientRect();
      const dx = (e.clientX - (r.left + r.width / 2)) / window.innerWidth;
      const dy = (e.clientY - (r.top + r.height / 2)) / window.innerHeight;
      const hot = e.target.closest && e.target.closest("a, button, [data-magnetic]");
      el.style.transform = `translate(${dx * 16}px, ${dy * 12}px) rotate(${dx * 2}deg) scale(${hot ? 1.04 : 1})`;
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="hero"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        padding: "clamp(16px,3vw,40px)",
        background: "var(--black)",
      }}
    >
      <nav style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div className="font-display" style={{ fontSize: 26, letterSpacing: ".02em", color: "var(--cream)" }}>
          GLIM<span style={{ color: "var(--lime)" }}> CLUB</span>
        </div>
        <div className="font-mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "var(--cream)", opacity: 0.55, textTransform: "uppercase" }}>
          Vevey — T1 2027
        </div>
        <Magnetic
          as="a"
          href="#club"
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
          Rejoindre le club
        </Magnetic>
      </nav>

      <div className="hero-grid" style={{ flex: 1, padding: "clamp(40px,6vh,80px) 0" }}>
        <div>
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
              fontSize: "clamp(56px,10.5vw,176px)",
              lineHeight: 0.96,
              letterSpacing: ".005em",
              color: "var(--cream)",
            }}
          >
            <span style={{ display: "block" }}>Voir le monde</span>
            <span style={{ display: "block", color: "var(--lime)" }}>autrement.</span>
          </h1>
          <p data-reveal="true" style={{ margin: "28px 0 0", maxWidth: "44ch", fontSize: "clamp(16px,1.4vw,20px)", lineHeight: 1.55, color: "var(--cream)", opacity: 0.85 }}>
            Un vrai opticien. Des prix affichés. Une communauté.
          </p>
          <div data-reveal="true" className="hero-ctas" style={{ display: "flex", flexWrap: "wrap", gap: 16, marginTop: 36 }}>
            <Magnetic
              as="a"
              href="#club"
              style={{ background: "var(--lime)", color: "var(--black)", textDecoration: "none", fontWeight: 700, fontSize: 15, letterSpacing: ".04em", padding: "18px 34px", textTransform: "uppercase" }}
            >
              Rejoindre le club
            </Magnetic>
            <Magnetic
              as="a"
              href="#verres"
              style={{ border: "2px solid var(--violet)", color: "var(--cream)", textDecoration: "none", fontWeight: 700, fontSize: 15, letterSpacing: ".04em", padding: "16px 32px", textTransform: "uppercase" }}
            >
              Voir nos verres
            </Magnetic>
          </div>
        </div>

        <div className="hero-logo" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14 }}>
          <img
            ref={logoRef}
            src="/images/logo-final.png"
            alt="Logo GLIM CLUB"
            style={{ display: "block", width: "clamp(180px,26vw,400px)", height: "auto", transition: "transform .25s ease-out", willChange: "transform" }}
          />
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 10 }}>
        <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".3em", opacity: 0.5, textTransform: "uppercase" }}>Scroll</div>
        <div className="glim-scroll-hint" />
      </div>
    </section>
  );
}
