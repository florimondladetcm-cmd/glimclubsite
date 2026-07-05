import { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Cursor from "./components/Cursor";
import Grain from "./components/Grain";
import Preloader from "./components/Preloader";
import NavMenu from "./components/NavMenu";
import Home from "./pages/Home";
import ConceptPage from "./pages/ConceptPage";
import VerresPage from "./pages/VerresPage";
import GarantiesPage from "./pages/GarantiesPage";
import BoutiquePage from "./pages/BoutiquePage";
import ContactPage from "./pages/ContactPage";
import PressePage from "./pages/PressePage";
import ShopPage from "./pages/ShopPage";
import ShopProductPage from "./pages/ShopProductPage";
import EvenementsPage from "./pages/EvenementsPage";
import ConseilsPage from "./pages/ConseilsPage";
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
        <Route path="/concept" element={<ConceptPage />} />
        <Route path="/verres" element={<VerresPage />} />
        <Route path="/garanties" element={<GarantiesPage />} />
        <Route path="/boutique" element={<BoutiquePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/presse" element={<PressePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/shop/:id" element={<ShopProductPage />} />
        <Route path="/evenements" element={<EvenementsPage />} />
        <Route path="/conseils" element={<ConseilsPage />} />
        <Route path="/offres" element={<Offres />} />
      </Routes>
    </>
  );
}

export default App;
