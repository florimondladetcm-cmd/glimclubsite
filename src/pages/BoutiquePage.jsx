import Boutique from "../components/Boutique";
import Footer from "../components/Footer";
import { asset } from "../lib/asset";

export default function BoutiquePage() {
  return (
    <>
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", background: "var(--black)" }}>
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={asset("images/vitrine-exterieur.png")}
          src={asset("assets/boutique.mp4")}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(0deg, rgba(10,10,15,.88) 0%, rgba(10,10,15,.25) 55%, rgba(10,10,15,.5) 100%)" }} />
        <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(48px,8vh,90px) clamp(16px,4vw,64px)", boxSizing: "border-box" }}>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 16 }}>
            Notre boutique <span className="glim-sparkle">✦</span>
          </div>
          <h1 className="font-display" style={{ margin: "0 0 16px", fontSize: "clamp(44px,8vw,130px)", lineHeight: 0.98, color: "var(--cream)" }}>
            Vevey, au bord<br /><span style={{ color: "var(--violet)" }}>du Léman.</span>
          </h1>
          <p style={{ margin: 0, maxWidth: "48ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.6, color: "var(--cream)", opacity: 0.85 }}>
            Noir profond, néons violet et citron. Ouverture au premier trimestre 2027.
          </p>
        </div>
      </section>
      <Boutique />
      <Footer />
    </>
  );
}
