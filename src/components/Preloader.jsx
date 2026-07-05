import { useEffect, useState } from "react";

export default function Preloader() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setShow(false);
    }
  }, []);

  if (!show) return null;

  return (
    <div
      onAnimationEnd={(e) => {
        if (e.animationName === "glimPre") setShow(false);
      }}
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 9990,
        background: "var(--black)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: 24,
        animation: "glimPre 2.1s cubic-bezier(.7,0,.3,1) forwards",
      }}
    >
      <div style={{ overflow: "hidden", padding: "4px 0" }}>
        <div
          className="font-display"
          style={{
            fontSize: "clamp(48px,9vw,130px)",
            lineHeight: 1,
            color: "var(--lime)",
            letterSpacing: ".01em",
            animation: "glimPreLogo 1.1s cubic-bezier(.16,1,.3,1) both",
          }}
        >
          GLIM CLUB
        </div>
      </div>
      <div
        style={{
          width: "min(320px,60vw)",
          height: 3,
          background: "var(--violet)",
          transformOrigin: "left",
          animation: "glimPreBar 1.5s cubic-bezier(.16,1,.3,1) .2s both",
        }}
      />
    </div>
  );
}
