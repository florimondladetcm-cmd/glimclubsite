const CARDS = [
  { big: "2 mois", title: "Adaptation", body: "Changement de correction ou non-adaptation : on refait les verres, ou on vous rembourse.", dark: false },
  { big: "1 an", title: "Casse accidentelle", body: "Prise en charge 60 % GLIM / 40 % client. Les accidents arrivent.", dark: false },
  { big: "2 ans", title: "Défaut de fabrication", body: "100 % pris en charge — monture, verres, traitements.", dark: false },
  { big: "À vie", title: "Entretien & ajustages", body: "Nettoyage, resserrage, réglages : gratuits, pour toujours.", dark: true },
];

export default function Guarantees() {
  return (
    <section id="garanties" style={{ background: "var(--cream)", color: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--violet)", textTransform: "uppercase", marginBottom: 24 }}>
          Les garanties
        </div>
        <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 clamp(48px,7vh,80px)", fontSize: "clamp(44px,7vw,110px)", lineHeight: 1 }}>
          Écrites noir sur crème.
        </h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(270px,1fr))", gap: 14 }}>
          {CARDS.map((c) => (
            <div
              key={c.title}
              data-reveal="true"
              style={{
                border: "2px solid var(--black)",
                background: c.dark ? "var(--black)" : "transparent",
                color: c.dark ? "var(--cream)" : "var(--black)",
                padding: "clamp(24px,2.5vw,36px)", display: "flex", flexDirection: "column", gap: 14,
                minHeight: 240, boxSizing: "border-box",
              }}
            >
              <div className="font-display" style={{ fontSize: "clamp(40px,4vw,64px)", lineHeight: 1, color: c.dark ? "var(--lime)" : "var(--violet)" }}>{c.big}</div>
              <h3 className="font-display" style={{ margin: 0, fontSize: 22 }}>{c.title}</h3>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, opacity: 0.75 }}>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
