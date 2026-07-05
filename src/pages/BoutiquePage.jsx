import Boutique from "../components/Boutique";
import Footer from "../components/Footer";
import { asset } from "../lib/asset";

export default function BoutiquePage() {
  return (
    <>
      <section style={{ position: "relative", height: "70vh", minHeight: 420, overflow: "hidden", background: "var(--black)" }}>
        <img
          src={asset("images/vitrine-exterieur.png")}
          alt="La vitrine GLIM CLUB à Vevey, au bord du Léman"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(10,10,15,.85) 0%, rgba(10,10,15,.15) 55%)" }} />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(48px,8vh,90px) clamp(16px,4vw,64px)", boxSizing: "border-box" }}>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 16 }}>
            Notre boutique
          </div>
          <h1 className="font-display" style={{ margin: 0, fontSize: "clamp(40px,7vw,110px)", lineHeight: 1, color: "var(--cream)" }}>
            Vevey, au bord<br />du Léman.
          </h1>
        </div>
      </section>
      <Boutique />
      <Footer />
    </>
  );
}
