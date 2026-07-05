export default function About() {
  return (
    <section id="apropos" style={{ background: "var(--cream)", color: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(32px,5vw,80px)", alignItems: "start" }}>
        <div>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--violet)", textTransform: "uppercase", marginBottom: 24 }}>
            À propos
          </div>
          <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 24px", fontSize: "clamp(40px,6.5vw,100px)", lineHeight: 1 }}>
            Un métier repris<br />par ceux qui l'aiment.
          </h2>
        </div>
        <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: 22, fontSize: "clamp(15px,1.2vw,18px)", lineHeight: 1.7, opacity: 0.85 }}>
          <p style={{ margin: 0 }}>
            GLIM CLUB est né d'un constat simple : l'optique suisse regorge d'excellents professionnels, coincés
            dans des enseignes qui leur imposent des objectifs de vente plutôt que du temps pour leurs clients.
          </p>
          <p style={{ margin: 0 }}>
            Nous avons choisi l'indépendance. Pas de siège à qui répondre, pas de quota à tenir, pas de prime au
            multi-équipement. Juste un métier fait correctement : bien voir, bien conseiller, au juste prix.
          </p>
          <p style={{ margin: 0 }}>
            GLIM CLUB ouvrira à Vevey au premier trimestre 2027. D'ici là, le club se construit avec ses futurs
            membres — vous y êtes déjà bienvenu.
          </p>
        </div>
      </div>
    </section>
  );
}
