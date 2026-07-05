const IMG_MASK = { WebkitMaskImage: "linear-gradient(to right,transparent,#000 40%)", maskImage: "linear-gradient(to right,transparent,#000 40%)" };

function Pillar({ bg, fg, num, numColor, numOpacity, eyebrow, eyebrowColor, title, body, image, imageWidth }) {
  return (
    <div data-reveal="true" style={{ position: "relative", overflow: "hidden", background: bg, color: fg, padding: "clamp(70px,11vh,140px) clamp(16px,4vw,64px)" }}>
      <div
        aria-hidden="true"
        className="font-display"
        style={{ position: "absolute", right: "-2vw", top: "50%", transform: "translateY(-50%)", fontSize: "clamp(200px,34vw,560px)", lineHeight: 1, color: numColor, opacity: numOpacity, pointerEvents: "none" }}
      >
        {num}
      </div>
      {image && (
        <img
          aria-hidden="true"
          src={image}
          alt=""
          style={{ position: "absolute", right: 0, top: 0, height: "100%", width: imageWidth, objectFit: "cover", objectPosition: "center top", opacity: 0.55, mixBlendMode: "multiply", pointerEvents: "none", ...IMG_MASK }}
        />
      )}
      <div style={{ position: "relative", maxWidth: 1400, margin: "0 auto" }}>
        <div className="font-mono" style={{ fontSize: 12, letterSpacing: ".22em", textTransform: "uppercase", color: eyebrowColor, marginBottom: 16 }}>{eyebrow}</div>
        <h3 className="font-display" style={{ margin: "0 0 18px", fontSize: "clamp(44px,7vw,110px)", lineHeight: 1 }}>{title}</h3>
        <p style={{ margin: 0, maxWidth: "50ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.65, opacity: 0.8 }}>{body}</p>
      </div>
    </div>
  );
}

export default function Pillars() {
  return (
    <section id="piliers">
      <Pillar
        bg="var(--black)" fg="var(--cream)" num="1" numColor="var(--lime)" numOpacity={0.1}
        eyebrow="Pilier 01 — le pilier phare" eyebrowColor="var(--lime)"
        title="Transparence"
        body="Le prix que vous voyez est le prix que vous payez. Affiché en boutique, affiché en ligne. Sans astérisque, sans fausse promo, sans négociation au comptoir."
      />
      <Pillar
        bg="var(--cream)" fg="var(--black)" num="2" numColor="var(--violet)" numOpacity={0.12}
        eyebrow="Pilier 02" eyebrowColor="var(--violet)"
        title="Style"
        body="Des montures choisies une à une, loin des marques sur-licenciées qu'on retrouve dans toutes les vitrines. Vous ne croiserez pas votre paire à chaque coin de rue."
        image="/images/modele-femme.png" imageWidth="clamp(380px,52vw,860px)"
      />
      <Pillar
        bg="var(--violet)" fg="var(--cream)" num="3" numColor="var(--black)" numOpacity={0.16}
        eyebrow="Pilier 03" eyebrowColor="var(--lime)"
        title="Indépendance"
        body="Un opticien qui répond à ses clients, pas à un siège. Chaque décision — montures, prix, garanties — se prend ici, à Vevey."
      />
      <Pillar
        bg="var(--lime)" fg="var(--black)" num="4" numColor="var(--black)" numOpacity={0.1}
        eyebrow="Pilier 04" eyebrowColor="var(--violet)"
        title="Humain"
        body="Zéro objectif de vente. Zéro prime au multi-équipement. Du temps par client, un conseil honnête par construction."
        image="/images/glim-club-team.png" imageWidth="clamp(380px,55vw,900px)"
      />
    </section>
  );
}
