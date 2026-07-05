import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import Film from "../components/Film";
import Concept from "../components/Concept";
import Manifesto from "../components/Manifesto";
import Pillars from "../components/Pillars";
import AntiReflets from "../components/AntiReflets";
import Configurator from "../components/Configurator";
import Guarantees from "../components/Guarantees";
import Boutique from "../components/Boutique";
import About from "../components/About";
import Club from "../components/Club";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { scrollToHash } from "../lib/motion";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    const target = location.state?.scrollTo;
    if (!target) return;
    const t = setTimeout(() => scrollToHash(target), 150);
    return () => clearTimeout(t);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.state]);

  return (
    <>
      <Hero />
      <Marquee />
      <Concept />
      <Film />
      <Manifesto />
      <Pillars />
      <AntiReflets />
      <Configurator />
      <Guarantees />
      <Boutique />
      <About />
      <Club />
      <Contact />
      <Footer />
    </>
  );
}
