import Concept from "../components/Concept";
import Manifesto from "../components/Manifesto";
import Pillars from "../components/Pillars";
import Footer from "../components/Footer";
import { asset } from "../lib/asset";

export default function ConceptPage() {
  return (
    <>
      <Concept />
      <section style={{ background: "var(--cream)", color: "var(--black)", padding: "clamp(56px,8vh,90px) clamp(16px,4vw,64px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
          <div>
            <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--violet)", textTransform: "uppercase", marginBottom: 20 }}>
              À propos
            </div>
            <p data-reveal="true" className="font-display" style={{ margin: 0, maxWidth: "22ch", fontSize: "clamp(24px,3.2vw,46px)", lineHeight: 1.15 }}>
              Un métier repris par ceux qui l'aiment.
            </p>
          </div>
          <div data-reveal="true" style={{ border: "2px solid rgba(10,10,15,.15)" }}>
            <video
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              src={asset("assets/equipe.mp4")}
              style={{ display: "block", width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>
      <Manifesto />
      <Pillars />
      <Footer />
    </>
  );
}
