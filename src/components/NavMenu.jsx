import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PRIMARY = [
  { label: "Accueil", to: "/" },
  { label: "Notre concept", to: "/concept" },
  { label: "Nos verres", to: "/verres" },
  { label: "Nos garanties", to: "/garanties" },
  { label: "Notre boutique", to: "/boutique" },
  { label: "Rejoindre le club", to: "/club" },
];

const SECONDARY = [
  { label: "À propos", to: "/apropos" },
  { label: "Conseils", to: "/conseils" },
  { label: "Presse", to: "/presse" },
  { label: "Shop", to: "/shop" },
  { label: "Événements", to: "/evenements" },
  { label: "Nos offres", to: "/offres", accent: true },
  { label: "Contact", to: "/contact" },
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => { if (e.key === "Escape") setOpen(false); };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  const goTo = (to) => {
    setOpen(false);
    navigate(to);
  };

  return (
    <>
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={open ? "Fermer le menu" : "Ouvrir le menu"}
        aria-expanded={open}
        style={{
          position: "fixed",
          top: "clamp(16px,3vw,40px)",
          left: "clamp(16px,3vw,40px)",
          zIndex: 9700,
          width: 52,
          height: 52,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 6,
          background: open ? "var(--lime)" : "rgba(10,10,15,.55)",
          border: "2px solid var(--lime)",
          backdropFilter: "blur(6px)",
          transition: "background .2s",
        }}
      >
        <span style={{ width: 22, height: 2, background: open ? "var(--black)" : "var(--lime)", transition: "transform .25s ease, opacity .2s", transform: open ? "translateY(4px) rotate(45deg)" : "none" }} />
        <span style={{ width: 22, height: 2, background: open ? "var(--black)" : "var(--lime)", transition: "opacity .2s", opacity: open ? 0 : 1 }} />
        <span style={{ width: 22, height: 2, background: open ? "var(--black)" : "var(--lime)", transition: "transform .25s ease", transform: open ? "translateY(-4px) rotate(-45deg)" : "none" }} />
      </button>

      <div
        style={{
          position: "fixed",
          inset: 0,
          zIndex: 9650,
          background: "var(--black)",
          overflowY: "auto",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          gap: "clamp(28px,5vh,56px)",
          padding: "clamp(90px,12vh,140px) clamp(24px,6vw,100px) clamp(40px,6vh,64px)",
          boxSizing: "border-box",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transform: open ? "none" : "translateY(-16px)",
          transition: "opacity .35s ease, transform .35s ease, visibility 0s linear " + (open ? "0s" : ".35s"),
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: "clamp(6px,1.4vh,16px)" }}>
          {PRIMARY.map((link) => (
            <button
              key={link.label}
              onClick={() => goTo(link.to)}
              className="font-display"
              style={{ textAlign: "left", background: "none", border: "none", padding: 0, color: "var(--cream)", fontSize: "clamp(30px,5.5vw,72px)", lineHeight: 1.08, cursor: "pointer" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <nav style={{ display: "flex", flexWrap: "wrap", gap: "12px 28px", borderTop: "1px solid rgba(245,240,232,.16)", paddingTop: "clamp(24px,4vh,40px)" }}>
          {SECONDARY.map((link) => (
            <button
              key={link.label}
              onClick={() => goTo(link.to)}
              className="font-mono"
              style={{ background: "none", border: "none", padding: 0, cursor: "pointer", color: link.accent ? "var(--lime)" : "var(--cream)", opacity: link.accent ? 1 : 0.75, fontSize: 13, letterSpacing: ".1em", textTransform: "uppercase" }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".18em", color: "var(--cream)", opacity: 0.4, textTransform: "uppercase" }}>
          GLIM CLUB — Vevey, Suisse
        </div>
      </div>
    </>
  );
}
