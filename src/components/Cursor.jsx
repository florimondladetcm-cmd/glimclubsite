import { useEffect, useRef, useState } from "react";

export default function Cursor() {
  const ref = useRef(null);
  const [enabled] = useState(() => window.matchMedia("(pointer: fine)").matches);

  useEffect(() => {
    if (!enabled) return;
    const el = ref.current;
    const onMove = (e) => {
      if (!el) return;
      el.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
      const hot = e.target.closest && e.target.closest("a, button, [data-magnetic]");
      const s = hot ? 44 : 14;
      el.style.width = s + "px";
      el.style.height = s + "px";
      el.style.marginTop = -(s / 2) + "px";
      el.style.marginLeft = -(s / 2) + "px";
    };
    document.addEventListener("mousemove", onMove);
    return () => document.removeEventListener("mousemove", onMove);
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={ref}
      style={{
        position: "fixed",
        left: 0,
        top: 0,
        width: 14,
        height: 14,
        marginTop: -7,
        marginLeft: -7,
        borderRadius: "50%",
        background: "var(--lime)",
        zIndex: 9500,
        pointerEvents: "none",
        mixBlendMode: "difference",
        transition: "width .2s, height .2s, margin .2s",
        willChange: "transform",
      }}
    />
  );
}
