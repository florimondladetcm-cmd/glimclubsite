import { useRef, useState } from "react";
import Magnetic from "../components/Magnetic";
import Footer from "../components/Footer";

export default function EvenementsPage() {
  const [sent, setSent] = useState(false);
  const emailRef = useRef(null);

  const notify = (e) => {
    e.preventDefault();
    const v = emailRef.current?.value;
    if (v && v.includes("@")) setSent(true);
  };

  return (
    <>
      <section style={{ background: "var(--violet)", color: "var(--cream)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)", minHeight: "70vh" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 24 }}>
            Événements
          </div>
          <h1 data-reveal="true" className="font-display" style={{ margin: "0 0 24px", fontSize: "clamp(36px,6.5vw,92px)", lineHeight: 1.05 }}>
            Un club, ça se<br />retrouve aussi.
          </h1>
          <p data-reveal="true" style={{ margin: "0 0 40px", maxWidth: "56ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.65, opacity: 0.85 }}>
            Portes ouvertes à l'ouverture de la boutique, ateliers d'essayage, rencontres avec l'opticien —
            le programme se construit avec les premiers membres. Rien n'est encore calé, mais vous serez
            informé en premier.
          </p>
          {!sent ? (
            <form onSubmit={notify} style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
              <input ref={emailRef} type="email" required placeholder="votre@email.ch" style={{ border: "2px solid var(--black)", background: "var(--cream)", color: "var(--black)", padding: "18px 20px", fontSize: 16, minWidth: "min(320px,80vw)", outline: "none", boxSizing: "border-box" }} />
              <Magnetic as="button" type="submit" style={{ border: "none", background: "var(--lime)", color: "var(--black)", fontWeight: 700, fontSize: 15, letterSpacing: ".05em", textTransform: "uppercase", padding: "18px 30px" }}>
                Être informé
              </Magnetic>
            </form>
          ) : (
            <div style={{ display: "inline-block", background: "var(--black)", color: "var(--lime)", padding: "18px 28px" }}>
              Noté — vous saurez tout en premier.
            </div>
          )}
        </div>
      </section>
      <Footer />
    </>
  );
}
