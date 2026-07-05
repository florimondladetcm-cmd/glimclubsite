import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cursor from "./components/Cursor";
import Grain from "./components/Grain";
import Preloader from "./components/Preloader";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import Offres from "./pages/Offres";
import { initScrollFX, bindReveals } from "./lib/motion";

function App() {
  const location = useLocation();

  useEffect(() => {
    const cleanup = initScrollFX();
    return cleanup;
  }, []);

  useEffect(() => {
    // Route content mounts after this effect runs, so new [data-reveal]
    // elements on the page just navigated to get their ScrollTrigger.
    bindReveals();
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <>
      <Grain />
      <Cursor />
      <Preloader />
      <NavMenu />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/offres" element={<Offres />} />
      </Routes>
    </>
  );
}

export default App;
