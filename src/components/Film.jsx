import { useEffect, useRef } from "react";

export default function Film() {
  const wrapRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    const v = videoRef.current;
    if (!wrap || !v) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((en) => {
        if (en.isIntersecting) v.play?.().catch(() => {});
        else v.pause?.();
      }),
      { threshold: 0.5 }
    );
    io.observe(wrap);
    return () => io.disconnect();
  }, []);

  return (
    <section id="film" ref={wrapRef} style={{ position: "relative", height: "100vh", background: "var(--black)", overflow: "hidden" }}>
      <video
        ref={videoRef}
        muted
        loop
        playsInline
        preload="metadata"
        poster="/images/interieur-magasin.png"
        src="/assets/glim-film.mp4"
        style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div
        className="font-mono"
        style={{
          position: "absolute",
          left: "clamp(16px,3vw,40px)",
          bottom: "clamp(16px,3vw,40px)",
          fontSize: 12,
          letterSpacing: ".18em",
          textTransform: "uppercase",
          color: "var(--lime)",
        }}
      >
        Le film — GLIM CLUB, Vevey
      </div>
    </section>
  );
}
