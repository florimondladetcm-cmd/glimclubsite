import { Link } from "react-router-dom";
import ScrollExpandMedia from "./ui/scroll-expansion-hero";
import Magnetic from "./Magnetic";
import { asset } from "../lib/asset";

export default function HeroScrollExpand() {
  return (
    <ScrollExpandMedia
      mediaType="video"
      mediaSrc={asset("assets/hero-scrub.mp4")}
      posterSrc={asset("images/interieur-magasin.png")}
      bgImageSrc={asset("images/vitrine-exterieur.png")}
      title="Voir le monde autrement."
      date="Opticien indépendant — Suisse"
      scrollToExpand="Scrollez pour découvrir"
    >
      <div style={{ maxWidth: 640, margin: "0 auto", textAlign: "center" }}>
        <p style={{ margin: "0 0 32px", fontSize: "clamp(16px,1.4vw,20px)", lineHeight: 1.55, color: "var(--cream)", opacity: 0.9 }}>
          Un vrai opticien. Des prix affichés. Une communauté.
        </p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 16, justifyContent: "center" }}>
          <Magnetic
            as={Link}
            to="/concept"
            style={{ background: "var(--lime)", color: "var(--black)", textDecoration: "none", fontWeight: 700, fontSize: 15, letterSpacing: ".04em", padding: "18px 34px", textTransform: "uppercase" }}
          >
            Découvrir le concept
          </Magnetic>
          <Magnetic
            as={Link}
            to="/verres"
            style={{ border: "2px solid var(--violet)", color: "var(--cream)", textDecoration: "none", fontWeight: 700, fontSize: 15, letterSpacing: ".04em", padding: "16px 32px", textTransform: "uppercase" }}
          >
            Voir nos verres
          </Magnetic>
        </div>
      </div>
    </ScrollExpandMedia>
  );
}
