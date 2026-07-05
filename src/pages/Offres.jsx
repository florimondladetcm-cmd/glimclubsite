import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import Magnetic from "../components/Magnetic";

const GAGS = [
  "Pas de -20% si vous avez plus de 60 ans.",
  "Pas d'« offre exceptionnelle » qui dure depuis 2019.",
  "Pas de deuxième paire « offerte » (en fait payée sur la première).",
  "Pas d'anniversaire qui se fête toute l'année — le vôtre dure un jour, comme tout le monde.",
  "Pas de devis à négocier au comptoir, les yeux dans les yeux.",
  "Pas de prix qui double juste avant les soldes, pour mieux baisser après.",
];

export default function Offres() {
  const navigate = useNavigate();
  const stampRef = useRef(null);
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const t = setTimeout(() => setSearching(false), reduced ? 0 : 1100);

    if (stampRef.current && !reduced) {
      gsap.fromTo(
        stampRef.current,
        { scale: 2.6, rotate: 0, opacity: 0 },
        { scale: 1, rotate: -7, opacity: 1, duration: 0.7, ease: "back.out(1.8)", delay: 0.15 }
      );
    }
    return () => clearTimeout(t);
  }, []);


  return (
    <section style={{ minHeight: "100vh", background: "var(--black)", color: "var(--cream)", padding: "clamp(90px,16vh,180px) clamp(16px,4vw,64px) clamp(60px,8vh,100px)", boxSizing: "border-box" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <button
          onClick={() => navigate("/")}
          className="font-mono"
          style={{ background: "none", border: "none", color: "var(--cream)", opacity: 0.7, fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", cursor: "pointer", padding: 0, marginBottom: "clamp(40px,6vh,72px)" }}
        >
          ← Retour au site
        </button>

        <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--violet)", textTransform: "uppercase", marginBottom: 20 }}>
          Nos offres
        </div>

        <div style={{ position: "relative", marginBottom: "clamp(48px,7vh,80px)" }}>
          <h1 className="font-display" style={{ margin: 0, fontSize: "clamp(40px,7vw,110px)", lineHeight: 1, color: "var(--cream)" }}>
            On a cherché.<br />On a bien cherché.
          </h1>
          <div
            ref={stampRef}
            className="font-display"
            style={{
              display: "inline-block",
              marginTop: 28,
              fontSize: "clamp(56px,10vw,160px)",
              lineHeight: 1,
              color: "var(--black)",
              background: "var(--lime)",
              padding: "6px 28px",
              transform: "rotate(-7deg)",
              boxShadow: "0 0 0 6px var(--black)",
            }}
          >
            AUCUNE.
          </div>
        </div>

        <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".08em", color: "var(--lime)", marginBottom: "clamp(32px,5vh,56px)", minHeight: 20 }}>
          {searching ? "Recherche d'une offre en cours…" : "0 résultat. Comme prévu."}
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 0, marginBottom: "clamp(56px,8vh,90px)" }}>
          {GAGS.map((line) => (
            <p
              key={line}
              style={{ margin: 0, padding: "18px 0", borderTop: "1px solid rgba(245,240,232,.16)", fontSize: "clamp(16px,1.6vw,22px)", lineHeight: 1.5, color: "var(--cream)", opacity: 0.85 }}
            >
              {line}
            </p>
          ))}
          <div style={{ borderTop: "1px solid rgba(245,240,232,.16)" }} />
        </div>

        <div style={{ background: "var(--violet)", color: "var(--cream)", padding: "clamp(32px,5vw,56px)" }}>
          <p className="font-display" style={{ margin: "0 0 28px", fontSize: "clamp(26px,3.5vw,48px)", lineHeight: 1.15 }}>
            Vous pouvez toujours chercher ailleurs.<br />
            <span style={{ color: "var(--lime)" }}>On a déjà mis le prix le plus juste. Une fois. Pour tout le monde.</span>
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 16 }}>
            <Magnetic as="button" onClick={() => navigate("/verres")} style={{ background: "var(--lime)", color: "var(--black)", border: "none", fontWeight: 700, fontSize: 15, letterSpacing: ".04em", padding: "18px 32px", textTransform: "uppercase", cursor: "pointer" }}>
              Voir nos vrais prix
            </Magnetic>
            <Magnetic as="button" onClick={() => navigate("/club")} style={{ background: "none", border: "2px solid var(--lime)", color: "var(--cream)", fontWeight: 700, fontSize: 15, letterSpacing: ".04em", padding: "16px 30px", textTransform: "uppercase", cursor: "pointer" }}>
              Rejoindre le club quand même
            </Magnetic>
          </div>
        </div>
      </div>
    </section>
  );
}
