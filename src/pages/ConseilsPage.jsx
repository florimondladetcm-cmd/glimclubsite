import { asset } from "../lib/asset";
import Footer from "../components/Footer";

const TIPS = [
  {
    n: "01",
    title: "Nettoyer ses verres",
    body: "Toujours avec une microfibre et un peu d'eau ou de spray dédié — jamais à sec, jamais avec un vêtement ou du papier essuie-tout. Les fibres grossières rayent les traitements, même les meilleurs.",
  },
  {
    n: "02",
    title: "Ranger ses lunettes",
    body: "Dans un étui, verres vers le haut si possible. Une paire posée à plat sur ses verres, ou glissée nue dans un sac, ramasse micro-rayures et pression sur la monture.",
  },
  {
    n: "03",
    title: "Ajuster sa monture",
    body: "Les branches se détendent avec le temps, la monture finit par glisser ou serrer d'un côté. Un réglage prend deux minutes chez votre opticien — chez GLIM, c'est gratuit à vie.",
  },
  {
    n: "04",
    title: "Verres teintés & photochromiques",
    body: "Évitez la chaleur prolongée (plage arrière de voiture, radiateur) : certains traitements et teintes vieillissent plus vite sous forte chaleur. Un étui rigide protège aussi mieux ces verres, souvent plus épais.",
  },
];

export default function ConseilsPage() {
  return (
    <>
      <section style={{ background: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px) clamp(56px,8vh,90px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 24 }}>
            Conseils
          </div>
          <h1 data-reveal="true" className="font-display" style={{ margin: "0 0 16px", fontSize: "clamp(40px,7vw,104px)", lineHeight: 1, color: "var(--cream)" }}>
            Entretenir sa paire,<br /><span style={{ color: "var(--violet)" }}>ça change tout.</span>
          </h1>
          <p data-reveal="true" style={{ margin: 0, maxWidth: "56ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.7 }}>
            Quelques réflexes simples pour que vos verres et votre monture tiennent la distance.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--black)", padding: "0 clamp(16px,4vw,64px) clamp(90px,12vh,140px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "flex", flexDirection: "column", gap: "clamp(40px,6vh,72px)" }}>
          {TIPS.map((t) => (
            <div
              key={t.n}
              data-reveal="true"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(70px,160px) 1fr",
                gap: "clamp(16px,3vw,48px)",
                alignItems: "start",
                borderTop: "1px solid rgba(245,240,232,.16)",
                paddingTop: "clamp(20px,3vh,36px)",
              }}
            >
              <div className="font-display" style={{ fontSize: "clamp(48px,6vw,96px)", lineHeight: 0.9, color: "var(--lime)" }}>{t.n}</div>
              <div>
                <h3 className="font-display" style={{ margin: "0 0 10px", fontSize: "clamp(22px,2.6vw,38px)", lineHeight: 1.05, color: "var(--cream)" }}>{t.title}</h3>
                <p style={{ margin: 0, maxWidth: "58ch", fontSize: "clamp(15px,1.15vw,17px)", lineHeight: 1.6, color: "var(--cream)", opacity: 0.7 }}>{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--cream)", color: "var(--black)", padding: "clamp(56px,8vh,90px) clamp(16px,4vw,64px)" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "clamp(32px,5vw,64px)", alignItems: "center" }}>
          <div>
            <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 16px", fontSize: "clamp(26px,3.5vw,42px)", lineHeight: 1.1 }}>
              Le duo qui fait le travail.
            </h2>
            <p data-reveal="true" style={{ margin: 0, fontSize: 16, lineHeight: 1.65, opacity: 0.8, maxWidth: "48ch" }}>
              Microfibre collector et spray nettoyant GLIM sont pensés pour ça : nettoyer sans rayer, sans traces,
              sur tous les traitements. Offerts aux 100 premiers membres, disponibles ensuite en boutique.
            </p>
          </div>
          <div style={{ aspectRatio: "4/3", border: "2px solid var(--black)", overflow: "hidden" }}>
            <img src={asset("images/spray.png")} alt="Spray nettoyant GLIM CLUB" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
