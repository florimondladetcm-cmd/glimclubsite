import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LINKS = [
  { label: "Accueil", to: "/" },
  { label: "Notre concept", to: "/concept" },
  { label: "Nos verres", to: "/verres" },
  { label: "Nos garanties", to: "/garanties" },
  { label: "Notre boutique", to: "/boutique" },
  { label: "Conseils", to: "/conseils" },
  { label: "Shop", to: "/shop" },
  { label: "Presse", to: "/presse" },
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
      <Link
        to="/"
        className="font-display global-wordmark"
        style={{
          position: "fixed",
          top: "clamp(16px,3vw,40px)",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 9700,
          background: "rgba(10,10,15,.75)",
          border: "2px solid rgba(196,240,0,.4)",
          padding: "10px 18px",
          fontSize: 18,
          letterSpacing: ".02em",
          color: "var(--cream)",
          textDecoration: "none",
        }}
      >
        GLIM<span style={{ color: "var(--lime)" }}> CLUB</span>
      </Link>

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
          background: open ? "var(--lime)" : "rgba(10,10,15,.75)",
          border: "2px solid var(--lime)",
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
          padding: "clamp(90px,12vh,140px) clamp(24px,6vw,100px) clamp(40px,6vh,64px)",
          boxSizing: "border-box",
          opacity: open ? 1 : 0,
          visibility: open ? "visible" : "hidden",
          transform: open ? "none" : "translateY(-16px)",
          transition: "opacity .35s ease, transform .35s ease, visibility 0s linear " + (open ? "0s" : ".35s"),
        }}
      >
        <nav style={{ display: "flex", flexDirection: "column", gap: "clamp(2px,.6vh,6px)" }}>
          {LINKS.map((link) => (
            <button
              key={link.label}
              onClick={() => goTo(link.to)}
              className="font-display"
              style={{
                textAlign: "left",
                background: "none",
                border: "none",
                padding: "6px 0",
                color: link.accent ? "var(--lime)" : "var(--cream)",
                fontSize: "clamp(20px,3.2vw,32px)",
                lineHeight: 1.2,
                cursor: "pointer",
              }}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="font-mono" style={{ marginTop: "clamp(24px,4vh,40px)", fontSize: 11, letterSpacing: ".18em", color: "var(--cream)", opacity: 0.4, textTransform: "uppercase" }}>
          GLIM CLUB — Vevey, Suisse
        </div>
      </div>
    </>
  );
}
