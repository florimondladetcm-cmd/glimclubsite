import Concept from "../components/Concept";
import Manifesto from "../components/Manifesto";
import Pillars from "../components/Pillars";
import Footer from "../components/Footer";

export default function ConceptPage() {
  return (
    <>
      <Concept />
      <section style={{ background: "var(--cream)", color: "var(--black)", padding: "clamp(56px,8vh,90px) clamp(16px,4vw,64px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--violet)", textTransform: "uppercase", marginBottom: 20 }}>
            À propos
          </div>
          <p data-reveal="true" className="font-display" style={{ margin: 0, maxWidth: "22ch", fontSize: "clamp(24px,3.2vw,46px)", lineHeight: 1.15 }}>
            Un métier repris par ceux qui l'aiment.
          </p>
        </div>
      </section>
      <Manifesto />
      <Pillars />
      <Footer />
    </>
  );
}
