import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/motion";

const KIN_TEXT = "Des prix simples. Enfin.";
const ACCENT_FROM = KIN_TEXT.indexOf("Enfin");

const INTRO = "Chez GLIM CLUB, le prix est clair dès le départ. Pas de rabais selon votre âge, pas d'offre anniversaire qui dure toute l'année, pas de bon magique sorti du tiroir parce que vous avez insisté. On traite tout le monde pareil — un prix juste doit être juste pour tout le monde.";

const STEPS = [
  {
    n: "01",
    title: "Pas de fausse paire offerte",
    body: "Spoiler : elle est rarement vraiment offerte. Nous préférons vous proposer une bonne paire, au bon prix. Si vous avez besoin d'une deuxième paire, on vous le dira. Si vous n'en avez pas besoin, on vous le dira aussi.",
  },
  {
    n: "02",
    title: "Des montures qu'on ne voit pas partout",
    body: "Nous choisissons nos montures chez des petits créateurs — européens, asiatiques, indépendants, avec une vraie identité. Pas des modèles vus sur tous les nez. Vos lunettes doivent vous ressembler, pas ressembler à celles de tout le monde.",
  },
  {
    n: "03",
    title: "Des verres européens",
    body: "Nos verres proviennent d'Europe. Des gammes simples, des choix clairs, des explications compréhensibles. Pas 200 références, pas d'options inutiles, pas de blabla technique pour vous perdre. Juste ce qu'il faut pour bien voir.",
  },
  {
    n: "04",
    title: "Pas de vendeurs déguisés en opticiens",
    body: "Chez nous, les opticiens ne sont pas formés à vendre plus. Ils sont formés à conseiller mieux. Pas de quota caché, pas de prime au forcing, pas de « vous êtes sûr de ne pas vouloir ajouter ça ? ». Votre besoin passe avant notre panier moyen. Ça paraît normal. On trouvait aussi.",
  },
  {
    n: "05",
    title: "Pas de grand cirque marketing",
    body: "Nous ne mettons pas notre budget dans des campagnes énormes. Pas d'affiches géantes, pas de slogans vides. Chez GLIM CLUB, on fait beaucoup nous-mêmes — et notre meilleure publicité, c'est vous : votre avis, votre sourire, votre bouche-à-oreille.",
  },
];

export default function Manifesto() {
  const headingRef = useRef(null);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const letters = headingRef.current?.querySelectorAll("[data-kin]");
    if (!letters || !letters.length) return;
    if (reduced) {
      letters.forEach((el) => { el.style.opacity = 1; el.style.transform = "none"; });
      return;
    }
    gsap.set(letters, { opacity: 0.1, y: "0.25em" });
    const tween = gsap.to(letters, {
      opacity: 1,
      y: 0,
      ease: "none",
      stagger: 0.05,
      scrollTrigger: {
        trigger: headingRef.current,
        start: "top 90%",
        end: "top 30%",
        scrub: 0.3,
      },
    });
    return () => tween.scrollTrigger?.kill();
  }, []);

  let ci = 0;

  return (
    <section id="manifeste" style={{ background: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 28 }}>
          Notre philosophie
        </div>
        <h2
          ref={headingRef}
          aria-label={KIN_TEXT}
          className="font-display"
          style={{ margin: "0 0 clamp(32px,5vh,48px)", fontSize: "clamp(40px,7.5vw,120px)", lineHeight: 1.02, color: "var(--cream)", maxWidth: "14ch" }}
        >
          {KIN_TEXT.split(" ").map((word, wi) => {
            const startIndex = ci;
            ci += word.length + 1;
            return (
              <span key={wi} aria-hidden="true" style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                {word.split("").map((ch, li) => (
                  <span
                    key={li}
                    data-kin="true"
                    style={{
                      display: "inline-block",
                      opacity: 0.1,
                      transform: "translateY(.25em)",
                      color: startIndex + li >= ACCENT_FROM ? "var(--lime)" : "var(--cream)",
                    }}
                  >
                    {ch}
                  </span>
                ))}
                <span style={{ whiteSpace: "pre" }}> </span>
              </span>
            );
          })}
        </h2>

        <p data-reveal="true" style={{ margin: "0 0 clamp(60px,9vh,120px)", maxWidth: "62ch", fontSize: "clamp(16px,1.4vw,20px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.8 }}>
          {INTRO}
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "clamp(48px,8vh,96px)" }}>
          {STEPS.map((s) => (
            <div
              key={s.n}
              data-reveal="true"
              style={{
                display: "grid",
                gridTemplateColumns: "minmax(90px,220px) 1fr",
                gap: "clamp(16px,3vw,48px)",
                alignItems: "start",
                borderTop: "1px solid rgba(245,240,232,.16)",
                paddingTop: "clamp(24px,4vh,48px)",
              }}
            >
              <div className="font-display" style={{ fontSize: "clamp(64px,9vw,150px)", lineHeight: 0.9, color: "var(--violet)" }}>{s.n}</div>
              <div>
                <h3 className="font-display" style={{ margin: "0 0 14px", fontSize: "clamp(26px,3.2vw,48px)", lineHeight: 1.05, color: "var(--cream)" }}>{s.title}</h3>
                <p style={{ margin: 0, maxWidth: "58ch", fontSize: "clamp(15px,1.2vw,18px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.7 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <p data-reveal="true" style={{ margin: "clamp(64px,9vh,110px) 0 0", maxWidth: "60ch", fontSize: "clamp(15px,1.2vw,18px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.7 }}>
          Des prix clairs. Des créateurs bien choisis. Des verres européens. Des conseils sincères. Des lunettes avec du caractère. Pas besoin d'en faire des tonnes.
        </p>

        <div data-reveal="scale" style={{ marginTop: "clamp(32px,5vh,48px)", background: "var(--lime)", color: "var(--black)", padding: "clamp(40px,6vw,90px)" }}>
          <p className="font-display" style={{ margin: 0, fontSize: "clamp(30px,4.5vw,72px)", lineHeight: 1.08 }}>
            GLIM CLUB, simplement.<br />
            <span style={{ color: "var(--violet)" }}>Juste mieux voir. Et se sentir bien.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
