import { useMemo, useRef, useState } from "react";
import {
  FRAME_FROM, LENSES, THICKNESS, AR_OPTIONS, TINTS,
  AR_INTERNE_PRICE, BLUE_LIGHT_PRICE, chf,
} from "../data/pricing";
import Magnetic from "./Magnetic";

function CheckRow({ selected, onClick, label, priceLabel }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 16, textAlign: "left", padding: "18px 20px",
        border: `2px solid ${selected ? "var(--lime)" : "rgba(245,240,232,.2)"}`,
        background: selected ? "#181822" : "transparent", color: "var(--cream)",
        transition: "border-color .2s, background .2s", width: "100%", maxWidth: 560, boxSizing: "border-box",
        font: "inherit",
      }}
    >
      <div style={{ width: 22, height: 22, flex: "none", border: "2px solid var(--lime)", background: selected ? "var(--lime)" : "transparent", display: "flex", alignItems: "center", justifyContent: "center", transition: "background .15s" }}>
        <div style={{ width: 10, height: 6, borderLeft: "2px solid var(--black)", borderBottom: "2px solid var(--black)", transform: "rotate(-45deg) translate(1px,-1px)", opacity: selected ? 1 : 0 }} />
      </div>
      <div style={{ flex: 1, fontWeight: 500, fontSize: 15 }}>{label}</div>
      <div style={{ fontWeight: 700, fontSize: 15, color: "var(--lime)" }}>{priceLabel}</div>
    </button>
  );
}

function LensCard({ lens, selected, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: "left", padding: 0,
        border: `2px solid ${selected ? "var(--lime)" : "rgba(245,240,232,.2)"}`,
        background: selected ? "var(--lime)" : "transparent",
        color: selected ? "var(--black)" : "var(--cream)",
        display: "flex", flexDirection: "column", transition: "border-color .2s, background .2s, color .2s",
        font: "inherit", cursor: "pointer",
      }}
    >
      <div style={{ width: "100%", aspectRatio: "4/3", background: `#000 url('${lens.img}') center/${lens.fit} no-repeat` }} />
      <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
        <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: selected ? "var(--violet)" : "var(--lime)" }}>{lens.tag}</div>
        <div className="font-display" style={{ fontSize: "clamp(24px,2.2vw,34px)", letterSpacing: ".02em" }}>{lens.name}</div>
        <div style={{ fontSize: 14, lineHeight: 1.5, opacity: 0.75 }}>{lens.desc}</div>
        <div className="font-display" style={{ fontSize: "clamp(22px,2vw,30px)", marginTop: "auto" }}>
          dès {chf(lens.price)} <span className="font-mono" style={{ fontSize: 12, letterSpacing: ".08em", textTransform: "none", opacity: 0.65, color: selected ? "var(--black)" : "var(--violet)" }}>la paire de verres</span>
        </div>
      </div>
    </button>
  );
}

function TintOrArCard({ selected, onClick, tag, name, desc, priceLabel }) {
  return (
    <button
      onClick={onClick}
      style={{
        display: "flex", alignItems: "center", gap: 18, textAlign: "left", padding: "18px 20px",
        border: `2px solid ${selected ? "var(--lime)" : "rgba(245,240,232,.2)"}`,
        background: selected ? "#181822" : "transparent", color: "var(--cream)",
        transition: "border-color .2s, background .2s", font: "inherit",
      }}
    >
      <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 4 }}>
        <div className="font-mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", opacity: 0.55 }}>{tag}</div>
        <div className="font-display" style={{ fontSize: 22, letterSpacing: ".02em", color: selected ? "var(--lime)" : "var(--cream)" }}>{name}</div>
        <div style={{ fontSize: 13, lineHeight: 1.5, opacity: 0.65 }}>{desc}</div>
      </div>
      <div style={{ fontWeight: 700, fontSize: 15, color: "var(--lime)" }}>{priceLabel}</div>
    </button>
  );
}

export default function Configurator() {
  const [lens, setLens] = useState(null);
  const [thick, setThick] = useState(null);
  const [ar, setAr] = useState("oasis");
  const [tint, setTint] = useState(null);
  const [arInterne, setArInterne] = useState(false);
  const [blue, setBlue] = useState(false);
  const [cfgSent, setCfgSent] = useState(false);
  const emailRef = useRef(null);
  const totalRef = useRef(null);

  const popTotal = () => {
    const el = totalRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.style.animation = "none";
    void el.offsetWidth;
    el.style.animation = "glimPop .35s ease";
  };

  const pickLens = (id) => { setLens(id); popTotal(); };
  const pickThick = (id) => { setThick((cur) => (cur === id ? null : id)); popTotal(); };
  const pickAr = (id) => { setAr(id); popTotal(); };
  const pickTint = (id) => {
    setTint((cur) => {
      const next = cur === id ? null : id;
      if (next) { setBlue(false); } else { setArInterne(false); }
      return next;
    });
    popTotal();
  };
  const toggleBlue = () => { setBlue((v) => !v); popTotal(); };
  const toggleArInterne = () => { setArInterne((v) => !v); popTotal(); };

  const selectedLens = LENSES.find((l) => l.id === lens) || null;
  const selectedThick = THICKNESS.find((t) => t.id === thick) || null;
  const selectedTint = TINTS.find((t) => t.id === tint) || null;
  const selectedAr = AR_OPTIONS.find((a) => a.id === ar) || AR_OPTIONS[0];
  const arCost = selectedTint ? (arInterne ? AR_INTERNE_PRICE : 0) : selectedAr.price;
  const total = useMemo(
    () => (selectedLens ? selectedLens.price : 0) + (selectedThick ? selectedThick.price : 0) + (selectedTint ? selectedTint.price : 0) + arCost + (!selectedTint && blue ? BLUE_LIGHT_PRICE : 0),
    [selectedLens, selectedThick, selectedTint, arCost, blue]
  );

  const recapParts = [`Monture dès ${chf(FRAME_FROM)} · en boutique`];
  recapParts.push(selectedLens ? "Verres " + selectedLens.name.toUpperCase() + (selectedLens.id === "unifocal" ? "" : " (progressifs)") : "Verres : à choisir");
  if (selectedThick) recapParts.push(selectedThick.label);
  if (selectedTint) {
    recapParts.push(selectedTint.name);
    if (arInterne) recapParts.push("AR face interne");
  } else {
    recapParts.push("Anti-reflet " + selectedAr.name.toUpperCase());
    if (blue) recapParts.push("Filtre lumière bleue");
  }

  const sendConfig = (e) => {
    e.preventDefault();
    const v = emailRef.current?.value;
    if (v && v.includes("@")) setCfgSent(true);
  };

  const stepHeader = (n, title, note) => (
    <div style={{ display: "flex", flexWrap: "wrap", alignItems: "baseline", gap: 18, marginBottom: 28, borderTop: "1px solid rgba(245,240,232,.16)", paddingTop: 24 }}>
      <div className="font-display" style={{ fontSize: "clamp(32px,4vw,56px)", color: "var(--lime)" }}>{n}</div>
      <h3 className="font-display" style={{ margin: 0, fontSize: "clamp(22px,2.4vw,36px)", color: "var(--cream)" }}>{title}</h3>
      <div className="font-mono" style={{ fontSize: 12, color: "var(--cream)", opacity: 0.5 }}>{note}</div>
    </div>
  );

  return (
    <section id="verres" style={{ background: "var(--black)", padding: "clamp(90px,14vh,180px) 0 0" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 clamp(16px,4vw,64px)" }}>
        <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 24 }}>
          Nos verres — prix indicatifs <span className="glim-sparkle">✦</span>
        </div>
        <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 16px", fontSize: "clamp(44px,7.5vw,120px)", lineHeight: 1, color: "var(--cream)" }}>
          Composez votre paire.<br /><span style={{ color: "var(--violet)" }}>Le prix suit. En direct.</span>
        </h2>
        <p data-reveal="true" style={{ margin: "0 0 clamp(48px,7vh,80px)", maxWidth: "56ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.7 }}>
          Quelques clics, un total. Pas de surprise à la caisse, pas de « à partir de » qui devient autre chose. Les montants affichés sont indicatifs jusqu'à l'ouverture.
        </p>

        {/* Étape 1 : verres */}
        <div data-reveal="true" style={{ marginBottom: "clamp(56px,8vh,90px)" }}>
          {stepHeader("01", "Choisir vos verres", "monture dès 150 CHF, à choisir en boutique")}
          <p style={{ margin: "0 0 24px", maxWidth: "60ch", fontSize: 15, lineHeight: 1.6, color: "var(--cream)", opacity: 0.6 }}>
            Unifocaux ou progressifs : c'est l'un ou l'autre. Anti-reflet Oasis inclus partout. Le bon choix dépend de votre correction et du type de montage — on est là pour vous conseiller au mieux.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 32 }}>
            <div>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--violet)", marginBottom: 12 }}>Unifocaux — un seul foyer</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,420px))", gap: 14 }}>
                {LENSES.filter((l) => l.kind === "uni").map((l) => (
                  <LensCard key={l.id} lens={l} selected={lens === l.id} onClick={() => pickLens(l.id)} />
                ))}
              </div>
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--violet)", marginBottom: 12 }}>Progressifs — net à toutes les distances</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 14 }}>
                {LENSES.filter((l) => l.kind === "prog").map((l) => (
                  <LensCard key={l.id} lens={l} selected={lens === l.id} onClick={() => pickLens(l.id)} />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Étape 2 : amincissement */}
        <div data-reveal="true" style={{ marginBottom: "clamp(56px,8vh,90px)" }}>
          {stepHeader("02", "Affiner vos verres", "selon votre correction — montants d'exemple")}
          <p style={{ margin: "0 0 24px", maxWidth: "60ch", fontSize: 15, lineHeight: 1.6, color: "var(--cream)", opacity: 0.6 }}>
            Plus l'indice monte, plus le verre est fin et léger. Utile pour les fortes corrections et les montures fines.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 12 }}>
            {THICKNESS.map((o) => (
              <CheckRow key={o.id} selected={thick === o.id} onClick={() => pickThick(o.id)} label={o.label} priceLabel={"+ " + chf(o.price)} />
            ))}
          </div>
        </div>

        {/* Étape 3 : teintes */}
        <div data-reveal="true" style={{ marginBottom: "clamp(56px,8vh,90px)" }}>
          {stepHeader("03", "Choisir une teinte", "optionnel — une seule teinte à la fois, cliquez à nouveau pour retirer")}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 12 }}>
            {TINTS.map((t) => (
              <TintOrArCard
                key={t.id}
                selected={tint === t.id}
                onClick={() => pickTint(t.id)}
                tag={tint === t.id ? "Sélectionnée" : "Optionnel"}
                name={t.name}
                desc={t.desc}
                priceLabel={"+ " + chf(t.price)}
              />
            ))}
          </div>
        </div>

        {/* Étape 4 : anti-reflet */}
        <div data-reveal="true" style={{ marginBottom: "clamp(56px,8vh,90px)" }}>
          {stepHeader("04", "Choisir l'anti-reflet", selectedTint ? "avec une teinte, le traitement passe en face interne" : "Oasis inclus d'office")}
          {!selectedTint && (
            <>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 12 }}>
                {AR_OPTIONS.map((a) => (
                  <TintOrArCard
                    key={a.id}
                    selected={ar === a.id}
                    onClick={() => pickAr(a.id)}
                    tag={a.tag}
                    name={a.name}
                    desc={a.desc}
                    priceLabel={a.price > 0 ? "+ " + chf(a.price) : "inclus"}
                  />
                ))}
              </div>
              <div style={{ marginTop: 12 }}>
                <CheckRow selected={blue} onClick={toggleBlue} label="Filtre lumière bleue" priceLabel={"+ " + chf(BLUE_LIGHT_PRICE)} />
              </div>
            </>
          )}
          {selectedTint && (
            <>
              <p style={{ margin: "0 0 16px", maxWidth: "60ch", fontSize: 15, lineHeight: 1.6, color: "var(--cream)", opacity: 0.6 }}>
                Sur des verres teintés, l'anti-reflet se pose côté intérieur : il bloque les reflets qui reviennent par l'arrière du verre.
              </p>
              <CheckRow selected={arInterne} onClick={toggleArInterne} label="Anti-reflet face interne" priceLabel={"+ " + chf(AR_INTERNE_PRICE)} />
            </>
          )}
        </div>
      </div>

      {/* Récap sticky */}
      <div style={{ position: "sticky", bottom: 0, zIndex: 800, background: "var(--lime)", color: "var(--black)", borderTop: "3px solid var(--black)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", padding: "16px clamp(16px,4vw,64px)", display: "flex", flexWrap: "wrap", alignItems: "center", gap: "14px 28px" }}>
          <div style={{ flex: 1, minWidth: 220, display: "flex", flexDirection: "column", gap: 2 }}>
            <div className="font-mono" style={{ fontSize: 10, letterSpacing: ".18em", textTransform: "uppercase", opacity: 0.6 }}>Votre config</div>
            <div style={{ fontWeight: 600, fontSize: 14, lineHeight: 1.45 }}>{recapParts.join("  ·  ")}</div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div ref={totalRef} className="font-display" style={{ fontSize: "clamp(30px,3.4vw,52px)", lineHeight: 1, display: "inline-block" }}>
              {selectedLens ? "verres dès " + chf(total) : "0 CHF"}
            </div>
            {!cfgSent ? (
              <form onSubmit={sendConfig} style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
                <input ref={emailRef} type="email" required placeholder="votre@email.ch" style={{ border: "2px solid var(--black)", background: "var(--cream)", color: "var(--black)", padding: "12px 14px", fontSize: 14, minWidth: 190, outline: "none", boxSizing: "border-box" }} />
                <Magnetic as="button" type="submit" style={{ border: "none", background: "var(--black)", color: "var(--lime)", fontWeight: 700, fontSize: 13, letterSpacing: ".05em", textTransform: "uppercase", padding: "14px 20px", font: "inherit", cursor: "pointer" }}>
                  Recevoir cette config
                </Magnetic>
              </form>
            ) : (
              <div style={{ fontWeight: 700, fontSize: 14, background: "var(--black)", color: "var(--lime)", padding: "14px 20px" }}>
                C'est noté — la config arrive par e-mail.
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
