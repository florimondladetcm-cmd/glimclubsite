import Hero from "../components/Hero";
import ConceptTeaser from "../components/ConceptTeaser";
import Footer from "../components/Footer";

// Test: swapped in for <Hero /> to try the scroll-expansion effect on the
// homepage. Hero.jsx is untouched — revert by swapping this import back.
export default function Home() {
  return (
    <>
      <Hero />
      <ConceptTeaser />
      <Footer />
    </>
  );
}
