import { useEffect, useState } from "react";
import { OPENING_DATE, SHOW_COUNTDOWN } from "../data/pricing";
import { asset } from "../lib/asset";

function getRemaining() {
  const diff = Math.max(0, new Date(OPENING_DATE).getTime() - Date.now());
  const pad = (n) => String(n).padStart(2, "0");
  return {
    d: String(Math.floor(diff / 86400000)),
    h: pad(Math.floor(diff / 3600000) % 24),
    m: pad(Math.floor(diff / 60000) % 60),
    s: pad(Math.floor(diff / 1000) % 60),
  };
}

function CountdownUnit({ value, label }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
      <div className="font-display" style={{ fontSize: "clamp(36px,4vw,64px)", lineHeight: 1, color: "var(--lime)", minWidth: "1.2em" }}>{value}</div>
      <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--cream)", opacity: 0.5 }}>{label}</div>
    </div>
  );
}

export default function Boutique() {
  const [t, setT] = useState(getRemaining);

  useEffect(() => {
    if (!SHOW_COUNTDOWN) return;
    const id = setInterval(() => setT(getRemaining()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="boutique" style={{ background: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(32px,5vw,80px)", alignItems: "center" }}>
        <div>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 24 }}>
            La boutique — Vevey
          </div>
          <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 20px", fontSize: "clamp(44px,6.5vw,100px)", lineHeight: 1, color: "var(--cream)" }}>
            Pas un point de vente.<br /><span style={{ color: "var(--violet)", textShadow: "0 0 24px rgba(124,58,237,.55)" }}>Un club.</span>
          </h2>
          <p data-reveal="true" style={{ margin: "0 0 36px", maxWidth: "48ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.7 }}>
            Noir profond, néons violet et citron, montures en scène comme des objets qu'on a envie d'essayer. Ouverture au premier trimestre 2027, au bord du Léman.
          </p>
          {SHOW_COUNTDOWN && (
            <div data-reveal="true" style={{ display: "flex", gap: "clamp(16px,2.5vw,40px)" }}>
              <CountdownUnit value={t.d} label="jours" />
              <CountdownUnit value={t.h} label="heures" />
              <CountdownUnit value={t.m} label="minutes" />
              <CountdownUnit value={t.s} label="secondes" />
            </div>
          )}
        </div>
        <div data-reveal="scale" style={{ aspectRatio: "4/5", border: "2px solid var(--violet)", overflow: "hidden" }}>
          <img src={asset("images/vitrine-nb.png")} alt="La vitrine GLIM CLUB à Vevey" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
        </div>
      </div>
    </section>
  );
}
