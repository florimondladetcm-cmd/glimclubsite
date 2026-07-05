import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "../lib/motion";

const KIN_TEXT = "L'optique est bien réglée. Contre vous.";
const ACCENT_FROM = KIN_TEXT.indexOf("Contre");

const STEPS = [
  {
    n: "01",
    title: "Un prix qui change selon qui vous êtes",
    body: "Le même verre, trois prix différents. Selon votre âge, l'« anniversaire » qui dure un an, votre capacité à négocier. Le prix devrait être une information, pas un rapport de force.",
  },
  {
    n: "02",
    title: "Un examen qui ressemble à un show",
    body: "Des machines impressionnantes, un verdict expédié en douze minutes. Le spectacle avant la précision. Vos yeux méritent du temps, pas une mise en scène.",
  },
  {
    n: "03",
    title: "Un vendeur payé pour vous équiper deux fois",
    body: "Objectifs de vente, quotas, prime au multi-équipement. Quand le conseil est rémunéré au volume, son intérêt n'est plus le vôtre.",
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
          Le manifeste
        </div>
        <h2
          ref={headingRef}
          aria-label={KIN_TEXT}
          className="font-display"
          style={{ margin: "0 0 clamp(60px,9vh,120px)", fontSize: "clamp(40px,7.5vw,120px)", lineHeight: 1.02, color: "var(--cream)", maxWidth: "14ch" }}
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
                <p style={{ margin: 0, maxWidth: "52ch", fontSize: "clamp(15px,1.2vw,18px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.7 }}>{s.body}</p>
              </div>
            </div>
          ))}
        </div>

        <div data-reveal="scale" style={{ marginTop: "clamp(80px,12vh,160px)", background: "var(--lime)", color: "var(--black)", padding: "clamp(40px,6vw,90px)" }}>
          <p className="font-display" style={{ margin: 0, fontSize: "clamp(30px,4.5vw,72px)", lineHeight: 1.08 }}>
            Chez GLIM, il n'y a plus de 01 / 02 / 03.<br />
            <span style={{ color: "var(--violet)" }}>Juste un prix. Un opticien. Un choix.</span>
          </p>
        </div>
      </div>
    </section>
  );
}
