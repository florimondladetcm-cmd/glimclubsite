const ITEMS = ["Prix affichés", "Sans astérisque", "Zéro fausse promo", "Un vrai opticien", "Vevey — T1 2027"];

function MarqueeGroup() {
  return (
    <div
      className="font-display"
      style={{ display: "flex", gap: 40, paddingRight: 40, fontSize: "clamp(16px,1.6vw,22px)", letterSpacing: ".06em", color: "var(--cream)" }}
    >
      {ITEMS.map((item, i) => (
        <span key={i} style={{ display: "contents" }}>
          <span>{item}</span>
          <span style={{ color: "var(--yellow)" }}>✦</span>
        </span>
      ))}
    </div>
  );
}

export default function Marquee() {
  return (
    <div style={{ background: "var(--violet)", overflow: "hidden", padding: "14px 0" }}>
      <div className="glim-marquee-track">
        <MarqueeGroup />
        <MarqueeGroup />
      </div>
    </div>
  );
}
