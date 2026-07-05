import { useEffect } from "react";
import Cursor from "./components/Cursor";
import Grain from "./components/Grain";
import Preloader from "./components/Preloader";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import Film from "./components/Film";
import Manifesto from "./components/Manifesto";
import Pillars from "./components/Pillars";
import AntiReflets from "./components/AntiReflets";
import Configurator from "./components/Configurator";
import Guarantees from "./components/Guarantees";
import Boutique from "./components/Boutique";
import Club from "./components/Club";
import Footer from "./components/Footer";
import { initScrollFX } from "./lib/motion";

function App() {
  useEffect(() => {
    const cleanup = initScrollFX();
    return cleanup;
  }, []);

  return (
    <>
      <Grain />
      <Cursor />
      <Preloader />

      <Hero />
      <Marquee />
      <Film />
      <Manifesto />
      <Pillars />
      <AntiReflets />
      <Configurator />
      <Guarantees />
      <Boutique />
      <Club />
      <Footer />
    </>
  );
}

export default App;
