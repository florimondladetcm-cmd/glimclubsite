import { Link } from "react-router-dom";
import Magnetic from "./Magnetic";
import { asset } from "../lib/asset";

export default function ConceptTeaser() {
  return (
    <section style={{ position: "relative", minHeight: "100vh", overflow: "hidden", background: "var(--black)" }}>
      <img
        src={asset("images/vitrine-exterieur.png")}
        alt="La future vitrine GLIM CLUB à Vevey"
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
      />
      <div
        aria-hidden="true"
        style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(10,10,15,.92) 5%, rgba(10,10,15,.55) 45%, rgba(10,10,15,.25) 100%)" }}
      />
      <div style={{ position: "relative", zIndex: 1, minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(48px,10vh,120px) clamp(16px,4vw,64px)", boxSizing: "border-box" }}>
        <div style={{ maxWidth: 760 }}>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 20 }}>
            Notre concept
          </div>
          <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 20px", fontSize: "clamp(36px,6vw,88px)", lineHeight: 1.02, color: "var(--cream)" }}>
            Bienvenue<br /><span style={{ color: "var(--violet)" }}>dans le club.</span>
          </h2>
          <p data-reveal="true" style={{ margin: "0 0 32px", maxWidth: "56ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.9 }}>
            GLIM CLUB ouvre à Vevey au premier trimestre 2027. Un opticien indépendant, des prix transparents,
            une communauté plutôt qu'un fichier client. Ce site vous fait découvrir le concept, section par section.
          </p>
          <Magnetic
            as={Link}
            to="/concept"
            data-reveal="true"
            style={{ display: "inline-flex", background: "var(--lime)", color: "var(--black)", textDecoration: "none", fontWeight: 700, fontSize: 15, letterSpacing: ".04em", padding: "18px 34px", textTransform: "uppercase" }}
          >
            Découvrir le concept
          </Magnetic>
        </div>
      </div>
    </section>
  );
}
