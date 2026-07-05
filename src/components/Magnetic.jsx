import { useRef } from "react";

const reducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

export default function Magnetic({ as: Tag = "button", strength = 0.12, style, children, ...props }) {
  const ref = useRef(null);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || reducedMotion()) return;
    const r = el.getBoundingClientRect();
    const dx = (e.clientX - (r.left + r.width / 2)) * strength;
    const dy = (e.clientY - (r.top + r.height / 2)) * (strength * 1.5);
    el.style.translate = `${dx}px ${dy}px`;
  };

  const handleLeave = () => {
    if (ref.current) ref.current.style.translate = "";
  };

  return (
    <Tag
      ref={ref}
      data-magnetic="true"
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transition: "translate .25s cubic-bezier(.16,1,.3,1)", ...style }}
      {...props}
    >
      {children}
    </Tag>
  );
}
