import { AR_OPTIONS, chf } from "../data/pricing";
import { asset } from "../lib/asset";

export default function AntiReflets() {
  const spectra = AR_OPTIONS[1];

  return (
    <section id="antireflets" style={{ background: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto" }}>
        <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 24 }}>
          Les anti-reflets
        </div>
        <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 16px", fontSize: "clamp(40px,6.5vw,104px)", lineHeight: 1, color: "var(--cream)" }}>
          La moitié du confort<br /><span style={{ color: "var(--violet)" }}>se joue dans le traitement.</span>
        </h2>
        <p data-reveal="true" style={{ margin: "0 0 clamp(40px,6vh,64px)", maxWidth: "56ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.7 }}>
          Tous nos verres partent avec un anti-reflet sérieux, inclus d'office. Ceux qui détestent nettoyer leurs lunettes prendront le niveau au-dessus.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 14 }}>
          <div data-reveal="true" style={{ border: "2px solid rgba(245,240,232,.2)", display: "flex", flexDirection: "column" }}>
            <div style={{ aspectRatio: "1", background: `#000 url('${asset("images/ar-standard.jpeg")}') center/cover no-repeat` }} />
            <div style={{ padding: "clamp(22px,2.5vw,34px)", display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lime)" }}>Inclus dans tous nos verres</div>
              <div className="font-display" style={{ fontSize: "clamp(26px,2.6vw,40px)", letterSpacing: ".02em", color: "var(--cream)" }}>Oasis</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--cream)", opacity: 0.7 }}>Anti-reflet standard, traitement durci pour limiter les micro-rayures.</p>
            </div>
          </div>
          <div data-reveal="true" style={{ border: "2px solid var(--lime)", display: "flex", flexDirection: "column" }}>
            <div style={{ aspectRatio: "1", background: `#000 url('${asset("images/ar-super.png")}') center/cover no-repeat` }} />
            <div style={{ padding: "clamp(22px,2.5vw,34px)", display: "flex", flexDirection: "column", gap: 10 }}>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lime)" }}>L'option premium — + {chf(spectra.price)} · indicatif</div>
              <div className="font-display" style={{ fontSize: "clamp(26px,2.6vw,40px)", letterSpacing: ".02em", color: "var(--cream)" }}>Spectra</div>
              <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "var(--cream)", opacity: 0.7 }}>
                Anti-reflet premium multicouches. Oléophobe, hydrophobe, antistatique : l'eau perle, les traces s'effacent, la poussière renonce. Des verres si purs qu'on oublie qu'ils sont là.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
