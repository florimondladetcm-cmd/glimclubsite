import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { scrollToHash } from "../lib/motion";

const LINKS = [
  { label: "À propos", type: "anchor", hash: "#apropos" },
  { label: "Notre concept", type: "anchor", hash: "#concept" },
  { label: "Nos garanties", type: "anchor", hash: "#garanties" },
  { label: "Nos verres", type: "anchor", hash: "#verres" },
  { label: "Nos offres", type: "route", to: "/offres" },
  { label: "Contact", type: "anchor", hash: "#contact" },
];

export default function NavMenu() {
  const [open, setOpen] = useState(false);
  const location = useLocation();
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

  const goTo = (link) => {
    setOpen(false);
    if (link.type === "route") {
      navigate(link.to);
      return;
    }
    if (location.pathname !== "/") {
      navigate("/", { state: { scrollTo: link.hash } });
    } else {
      requestAnimationFrame(() => scrollToHash(link.hash));
    }
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
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "clamp(24px,6vw,100px)",
          boxSizing: "border-box",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transform: open ? "none" : "translateY(-16px)",
          transition: "opacity .35s ease, transform .35s ease, visibility 0s linear " + (open ? "0s" : ".35s"),
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: "clamp(10px,2vh,22px)" }}>
          {LINKS.map((link, i) => (
            <button
              key={link.label}
              onClick={() => goTo(link)}
              className="font-display"
              style={{
                textAlign: "left",
                background: "none",
                border: "none",
                padding: 0,
                color: link.label === "Nos offres" ? "var(--lime)" : "var(--cream)",
                fontSize: "clamp(34px,6.5vw,88px)",
                lineHeight: 1.05,
                cursor: "pointer",
                transitionDelay: open ? `${i * 0.03}s` : "0s",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>
        <div className="font-mono" style={{ marginTop: "clamp(32px,6vh,64px)", fontSize: 12, letterSpacing: ".18em", color: "var(--cream)", opacity: 0.5, textTransform: "uppercase" }}>
          GLIM CLUB — Vevey, Suisse
        </div>
      </div>
    </>
  );
}
