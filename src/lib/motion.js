import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

// Shared handle so components outside the App-level effect (e.g. the nav
// menu) can trigger a smooth scroll-to through the same Lenis instance.
export const lenisHandle = { current: null };

// Sets up Lenis smooth scroll wired into GSAP's ticker/ScrollTrigger.
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
    lenisHandle.current = lenis;
  }

  return () => {
    if (rafId) cancelAnimationFrame(rafId);
    lenis?.destroy();
    lenisHandle.current = null;
  };
}

// Scans for any [data-reveal] element not yet wired up (freshly mounted
// route content included) and attaches its fade/slide-in ScrollTrigger.
// Safe to call repeatedly — already-bound elements are skipped.
export function bindReveals() {
  const els = gsap.utils.toArray("[data-reveal]:not([data-reveal-bound])");
  els.forEach((el) => {
    el.setAttribute("data-reveal-bound", "true");
    const scale = el.dataset.reveal === "scale";
    gsap.fromTo(
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
}

// Smoothly scrolls to a #hash target, using Lenis when available (desktop,
// motion allowed) and falling back to native scrollIntoView otherwise.
export function scrollToHash(hash) {
  const el = document.querySelector(hash);
  if (!el) return;
  if (lenisHandle.current) {
    lenisHandle.current.scrollTo(el, { offset: 0 });
  } else {
    el.scrollIntoView({ behavior: "smooth" });
  }
}

export { gsap, ScrollTrigger };
