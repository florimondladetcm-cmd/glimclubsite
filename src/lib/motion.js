import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// Sets up Lenis smooth scroll wired into GSAP's ticker/ScrollTrigger, and
// fades/slides in every [data-reveal] element as it enters the viewport.
// Returns a cleanup function. No-ops the smooth scroll (native scroll instead)
// under prefers-reduced-motion.
export function initScrollFX() {
  const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let lenis;
  let rafId;

  if (!reduced) {
    lenis = new Lenis({ duration: 1.1, smoothWheel: true });
    lenis.on("scroll", ScrollTrigger.update);
    const raf = (time) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };
    rafId = requestAnimationFrame(raf);
    gsap.ticker.lagSmoothing(0);
  }

  const revealTriggers = gsap.utils.toArray("[data-reveal]").map((el) => {
    const scale = el.dataset.reveal === "scale";
    return gsap.fromTo(
      el,
      { opacity: 0, y: 48, scale: scale ? 0.96 : 1 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.9,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          toggleActions: "play none none none",
        },
      }
    );
  });

  ScrollTrigger.refresh();

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    lenis?.destroy();
    revealTriggers.forEach((t) => t.scrollTrigger?.kill());
  };
}

export { gsap, ScrollTrigger };
