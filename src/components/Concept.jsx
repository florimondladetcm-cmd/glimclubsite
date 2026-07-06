const STEPS = [
  { n: "01", title: "Vous composez en toute transparence", body: "Monture, verres, options : vous voyez le prix se construire sous vos yeux, jamais après coup." },
  { n: "02", title: "On vous aide à durer", body: "Conseils d'entretien, ajustements gratuits à vie, garanties écrites noir sur crème. Une paire, ça se choisit une fois — et ça doit tenir la distance." },
];

export default function Concept() {
  return (
    <section id="concept" style={{ background: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 24 }}>
          Notre concept
        </div>
        <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 clamp(48px,7vh,80px)", fontSize: "clamp(40px,7vw,112px)", lineHeight: 1, color: "var(--cream)" }}>
          Un club.<br /><span style={{ color: "var(--violet)" }}>Pas une boutique.</span>
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(40px,6vh,72px)" }}>
          {STEPS.map((s) => (
            <div
              key={s.n}
              data-reveal="true"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(70px,160px) 1fr",
                gap: "clamp(16px,3vw,48px)",
                alignItems: "start",
                borderTop: "1px solid rgba(245,240,232,.16)",
                paddingTop: "clamp(20px,3vh,36px)",
              }}
            >
              <div className="font-display" style={{ fontSize: "clamp(48px,6vw,96px)", lineHeight: 0.9, color: "var(--lime)" }}>{s.n}</div>
              <div>
                <h3 className="font-display" style={{ margin: "0 0 10px", fontSize: "clamp(22px,2.6vw,38px)", lineHeight: 1.05, color: "var(--cream)" }}>{s.title}</h3>
                <p style={{ margin: 0, maxWidth: "52ch", fontSize: "clamp(15px,1.15vw,17px)", lineHeight: 1.6, color: "var(--cream)", opacity: 0.7 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
