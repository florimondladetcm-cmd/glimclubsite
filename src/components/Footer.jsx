export default function Footer() {
  return (
    <footer style={{ background: "var(--black)", padding: "clamp(60px,9vh,110px) clamp(16px,4vw,64px) 32px" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px,7vh,72px)" }}>
        <div className="font-display" style={{ fontSize: "clamp(56px,11vw,190px)", lineHeight: 0.95, color: "var(--cream)" }}>
          GLIM<span style={{ color: "var(--lime)" }}> CLUB</span>
        </div>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", gap: 24, borderTop: "1px solid rgba(245,240,232,.16)", paddingTop: 28 }}>
          <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
            <a href="#hero" style={{ color: "var(--cream)", textDecoration: "none", fontSize: 14, fontWeight: 500, opacity: 0.7 }}>Instagram</a>
            <a href="#hero" style={{ color: "var(--cream)", textDecoration: "none", fontSize: 14, fontWeight: 500, opacity: 0.7 }}>TikTok</a>
            <a href="#hero" style={{ color: "var(--cream)", textDecoration: "none", fontSize: 14, fontWeight: 500, opacity: 0.7 }}>Mentions légales</a>
            <a href="#hero" style={{ color: "var(--cream)", textDecoration: "none", fontSize: 14, fontWeight: 500, opacity: 0.7 }}>Confidentialité</a>
          </div>
          <div className="font-mono" style={{ fontSize: 12, letterSpacing: ".14em", color: "var(--cream)", opacity: 0.5, textTransform: "uppercase" }}>
            Voir le monde autrement. — Vevey, Suisse
          </div>
        </div>
      </div>
    </footer>
  );
}
