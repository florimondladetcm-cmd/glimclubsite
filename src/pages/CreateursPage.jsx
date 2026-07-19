import { Link } from "react-router-dom";
import { useRef } from "react";
import { asset } from "../lib/asset";
import Footer from "../components/Footer";

const chf = (n) => `CHF ${n}.–`;

// Montures mises en avant. `file` = nom du fichier (sans extension) dans public/assets/createurs/
// -> attend un .mp4 (vidéo boucle) ET un .jpg (poster / 1re image).
const FRAMES = [
  { brand: "Bali Eyewear", name: "Lou", desc: "Aviateur acétate honey · verres verts", price: 250, file: "monture-bali-lou" },
  { brand: "Bali Eyewear", name: "Chester", desc: "Rond écaille · verres marron dégradés", price: 250, file: "monture-bali-chester" },
  { brand: "Bali Eyewear", name: "Neil", desc: "Carré double-pont noir · verres rouges", price: 250, file: "monture-bali-neil" },
  { brand: "Gigi Studios", name: "Nyssa", desc: "Grande carrée acétate écaille/vert", price: 260, file: "monture-gigi-nyssa" },
  { brand: "Gigi Studios", name: "Amelis", desc: "Ovale métal doré · verres verts", price: 260, file: "monture-gigi-amelis" },
  { brand: "Gigi Studios", name: "Jude", desc: "Rectangulaire écaille · verres marron", price: 260, file: "monture-gigi-jude" },
];

// Carte monture : poster figé, la vidéo se lance au survol (desktop) ou au tap (mobile).
function FrameCard({ frame }) {
  const ref = useRef(null);
  const play = () => { const v = ref.current; if (v) v.play().catch(() => {}); };
  const stop = () => { const v = ref.current; if (v) { v.pause(); v.currentTime = 0; } };
  const toggle = () => { const v = ref.current; if (v) (v.paused ? v.play().catch(() => {}) : v.pause()); };

  return (
    <div
      className="cre-card"
      data-reveal="true"
      onMouseEnter={play}
      onMouseLeave={stop}
      style={{ border: "2px solid rgba(245,240,232,.2)", display: "flex", flexDirection: "column", transition: "border-color .2s, transform .2s" }}
    >
      <div style={{ position: "relative", aspectRatio: "1", background: "#101017", overflow: "hidden" }}>
        <video
          ref={ref}
          muted
          loop
          playsInline
          preload="none"
          poster={asset(`assets/createurs/${frame.file}.jpg`)}
          src={asset(`assets/createurs/${frame.file}.mp4`)}
          onClick={toggle}
          style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
        />
        <span className="font-mono" style={{ position: "absolute", top: 12, left: 12, fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "rgba(245,240,232,.7)", background: "rgba(10,10,15,.5)", padding: "4px 8px" }}>
          {frame.brand}
        </span>
      </div>
      <div style={{ padding: "clamp(18px,2.2vw,26px)", display: "flex", flexDirection: "column", gap: 6, flex: 1 }}>
        <div className="font-display" style={{ fontSize: "clamp(20px,2vw,28px)", color: "var(--cream)" }}>{frame.name}</div>
        <div style={{ fontSize: 13, lineHeight: 1.5, color: "var(--cream)", opacity: 0.7 }}>{frame.desc}</div>
        <div className="font-display" style={{ fontSize: "clamp(18px,1.6vw,24px)", marginTop: "auto", color: "var(--lime)" }}>{chf(frame.price)}</div>
      </div>
    </div>
  );
}

export default function CreateursPage() {
  return (
    <>
      {/* styles locaux : hero responsive + hover carte */}
      <style>{`
        .cre-hero-mobile { display: none; }
        @media (max-width: 700px) {
          .cre-hero-desktop { display: none; }
          .cre-hero-mobile { display: block; }
        }
        .cre-card:hover { border-color: var(--lime) !important; transform: translateY(-3px); }
        .cre-grid-2 { display: grid; grid-template-columns: 1.05fr .95fr; gap: clamp(24px,4vw,64px); align-items: center; }
        @media (max-width: 860px) { .cre-grid-2 { grid-template-columns: 1fr; } }
      `}</style>

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden", background: "var(--black)" }}>
        <video className="cre-hero-desktop" autoPlay muted loop playsInline preload="auto"
          poster={asset("assets/createurs/hero-createurs-desktop.jpg")}
          src={asset("assets/createurs/hero-createurs-desktop.mp4")}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <video className="cre-hero-mobile" autoPlay muted loop playsInline preload="auto"
          poster={asset("assets/createurs/hero-createurs-mobile.jpg")}
          src={asset("assets/createurs/hero-createurs-mobile.mp4")}
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }} />
        <div aria-hidden="true" style={{ position: "absolute", inset: 0, background: "linear-gradient(180deg, rgba(10,10,15,.25) 0%, rgba(10,10,15,.35) 45%, rgba(10,10,15,.8) 100%)" }} />

        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(24px,5vw,80px)", boxSizing: "border-box" }}>
          <div data-reveal="true" className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 18 }}>
            Marques créateurs
          </div>
          <h1 className="font-display" style={{ margin: 0, fontSize: "clamp(48px,9vw,150px)", lineHeight: 0.92, color: "var(--cream)" }}>
            <span style={{ display: "block" }}>Le design</span>
            <span style={{ display: "block", color: "var(--violet)" }}>a un auteur.</span>
          </h1>
          <p data-reveal="true" style={{ margin: "24px 0 0", maxWidth: "50ch", fontSize: "clamp(15px,1.3vw,19px)", lineHeight: 1.6, color: "var(--cream)", opacity: 0.85 }}>
            Au-delà de nos montures maison, Glim Club sélectionne une poignée de créateurs européens. Des pièces au caractère affirmé, montées et ajustées avec soin.
          </p>
        </div>
      </section>

      {/* INTRO */}
      <section style={{ background: "var(--black)", padding: "clamp(70px,11vh,140px) clamp(16px,4vw,64px) clamp(40px,6vh,70px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 20 }}>La sélection</div>
          <h2 data-reveal="true" className="font-display" style={{ margin: 0, fontSize: "clamp(34px,6vw,86px)", lineHeight: 1, color: "var(--cream)", maxWidth: "16ch" }}>
            Deux signatures, <span style={{ color: "var(--lime)" }}>une exigence.</span>
          </h2>
        </div>
      </section>

      {/* BLOC BALI (femme + homme) */}
      <section style={{ background: "var(--black)", padding: "clamp(50px,8vh,90px) clamp(16px,4vw,64px)", borderTop: "2px solid rgba(245,240,232,.12)" }}>
        <div className="cre-grid-2" style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1.4fr 1fr", gap: 12 }}>
            <video data-reveal="true" autoPlay muted loop playsInline preload="none"
              poster={asset("assets/createurs/bloc-bali.jpg")}
              src={asset("assets/createurs/bloc-bali.mp4")}
              style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", border: "2px solid rgba(245,240,232,.2)" }} />
            <video data-reveal="true" autoPlay muted loop playsInline preload="none"
              poster={asset("assets/createurs/bloc-homme.jpg")}
              src={asset("assets/createurs/bloc-homme.mp4")}
              style={{ width: "100%", aspectRatio: "3/5", objectFit: "cover", border: "2px solid rgba(245,240,232,.2)", marginTop: 28 }} />
          </div>
          <div>
            <div className="font-mono" style={{ fontSize: 13, color: "var(--violet)", letterSpacing: ".2em" }}>01 / Paris</div>
            <h3 className="font-display" style={{ margin: "10px 0 8px", fontSize: "clamp(34px,5vw,68px)", lineHeight: 0.95, color: "var(--cream)" }}>Bali Eyewear</h3>
            <div style={{ fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 20 }}>Acétate · dessiné à Paris</div>
            <p style={{ margin: "0 0 26px", fontSize: "clamp(15px,1.15vw,18px)", lineHeight: 1.7, color: "var(--cream)", opacity: 0.78, maxWidth: "52ch" }}>
              Créée par Vanessa Wang, Bali dessine chaque collection à Paris avec un esprit solaire venu d'Indonésie. Formes généreuses, couleurs assumées, acétate travaillé en couches — la monture qui se remarque, pour elle comme pour lui.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Acétate", "Coloré", "Statement", "Optique & solaire"].map((c) => (
                <span key={c} style={{ border: "1.5px solid rgba(245,240,232,.28)", padding: "8px 14px", borderRadius: 999, fontSize: 12, color: "var(--cream)" }}>{c}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* BLOC GIGI */}
      <section style={{ background: "var(--black)", padding: "clamp(50px,8vh,90px) clamp(16px,4vw,64px)", borderTop: "2px solid rgba(245,240,232,.12)" }}>
        <div className="cre-grid-2" style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ order: 2 }}>
            <div className="font-mono" style={{ fontSize: 13, color: "var(--violet)", letterSpacing: ".2em" }}>02 / Barcelone</div>
            <h3 className="font-display" style={{ margin: "10px 0 8px", fontSize: "clamp(34px,5vw,68px)", lineHeight: 0.95, color: "var(--cream)" }}>Gigi Studios</h3>
            <div style={{ fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 20 }}>Design catalan · rétro-moderne</div>
            <p style={{ margin: "0 0 26px", fontSize: "clamp(15px,1.15vw,18px)", lineHeight: 1.7, color: "var(--cream)", opacity: 0.78, maxWidth: "52ch" }}>
              Le studio barcelonais qui remet au goût du jour les silhouettes vintage. Lignes travaillées, acétates profonds et détails métal. Une élégance affirmée, mixte, qui assume le caractère.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              {["Rétro", "Acétate profond", "Détails métal", "Mixte"].map((c) => (
                <span key={c} style={{ border: "1.5px solid rgba(245,240,232,.28)", padding: "8px 14px", borderRadius: 999, fontSize: 12, color: "var(--cream)" }}>{c}</span>
              ))}
            </div>
          </div>
          <video data-reveal="true" autoPlay muted loop playsInline preload="none"
            poster={asset("assets/createurs/bloc-gigi.jpg")}
            src={asset("assets/createurs/bloc-gigi.mp4")}
            style={{ order: 1, width: "100%", aspectRatio: "4/5", objectFit: "cover", border: "2px solid rgba(245,240,232,.2)" }} />
        </div>
      </section>

      {/* GRILLE MONTURES */}
      <section style={{ background: "var(--black)", padding: "clamp(60px,9vh,120px) clamp(16px,4vw,64px)", borderTop: "2px solid rgba(245,240,232,.12)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 36 }}>
            <div>
              <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 10 }}>Les montures</div>
              <h2 data-reveal="true" className="font-display" style={{ margin: 0, fontSize: "clamp(30px,5vw,68px)", lineHeight: 1, color: "var(--cream)" }}>Pièces sélectionnées</h2>
            </div>
            <div className="font-mono" style={{ fontSize: 13, opacity: 0.6, maxWidth: "34ch", textAlign: "right", color: "var(--cream)" }}>Survolez une monture pour la voir en mouvement. Prix indicatifs.</div>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))", gap: 14 }}>
            {FRAMES.map((f) => <FrameCard key={f.file} frame={f} />)}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "var(--black)", padding: "clamp(70px,11vh,150px) clamp(16px,4vw,64px)", textAlign: "center", borderTop: "2px solid rgba(245,240,232,.12)" }}>
        <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 20 }}>La sélection Glim Club</div>
        <h2 className="font-display" style={{ margin: "0 0 24px", fontSize: "clamp(36px,7vw,100px)", lineHeight: 0.95, color: "var(--cream)" }}>
          Des montures <span style={{ color: "var(--lime)" }}>à voir en vrai.</span>
        </h2>
        <Link to="/boutique" className="font-display" style={{ display: "inline-block", background: "var(--lime)", color: "var(--black)", textTransform: "uppercase", letterSpacing: ".04em", fontSize: 18, padding: "16px 36px", textDecoration: "none" }}>
          Découvrir la boutique
        </Link>
      </section>

      <Footer />
    </>
  );
}
