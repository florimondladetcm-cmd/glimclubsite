import { useRef, useState } from "react";
import Magnetic from "./Magnetic";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const nameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const submit = (e) => {
    e.preventDefault();
    const email = emailRef.current?.value;
    if (email && email.includes("@")) setSent(true);
  };

  return (
    <section id="contact" style={{ background: "var(--violet)", color: "var(--cream)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "clamp(32px,5vw,72px)" }}>
        <div>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 24 }}>
            Contact
          </div>
          <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 24px", fontSize: "clamp(40px,6.5vw,96px)", lineHeight: 1 }}>
            Une question ?<br />On répond.
          </h2>
          <div data-reveal="true" style={{ display: "flex", flexDirection: "column", gap: 14, fontSize: 16, lineHeight: 1.6 }}>
            <div>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 4 }}>E-mail</div>
              <a href="mailto:bonjour@glimclub.ch" style={{ color: "var(--cream)", textDecoration: "none", fontWeight: 600 }}>bonjour@glimclub.ch</a>
            </div>
            <div>
              <div className="font-mono" style={{ fontSize: 11, letterSpacing: ".18em", textTransform: "uppercase", color: "var(--lime)", marginBottom: 4 }}>Boutique</div>
              <div style={{ opacity: 0.85 }}>Vevey, Suisse — adresse exacte communiquée à l'ouverture (T1 2027)</div>
            </div>
          </div>
        </div>

        <div data-reveal="true">
          {!sent ? (
            <form onSubmit={submit} style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              <input ref={nameRef} type="text" placeholder="Votre nom" style={{ border: "2px solid var(--black)", background: "var(--cream)", color: "var(--black)", padding: "16px 18px", fontSize: 15, outline: "none", boxSizing: "border-box" }} />
              <input ref={emailRef} type="email" required placeholder="votre@email.ch" style={{ border: "2px solid var(--black)", background: "var(--cream)", color: "var(--black)", padding: "16px 18px", fontSize: 15, outline: "none", boxSizing: "border-box" }} />
              <textarea ref={messageRef} placeholder="Votre message" rows={4} style={{ border: "2px solid var(--black)", background: "var(--cream)", color: "var(--black)", padding: "16px 18px", fontSize: 15, outline: "none", boxSizing: "border-box", resize: "vertical", fontFamily: "inherit" }} />
              <Magnetic as="button" type="submit" style={{ border: "none", background: "var(--lime)", color: "var(--black)", fontWeight: 700, fontSize: 15, letterSpacing: ".05em", textTransform: "uppercase", padding: "18px 30px", alignSelf: "flex-start" }}>
                Envoyer
              </Magnetic>
            </form>
          ) : (
            <div style={{ background: "var(--black)", color: "var(--lime)", padding: "28px 32px" }}>
              <div className="font-display" style={{ fontSize: "clamp(24px,3vw,36px)", lineHeight: 1.1 }}>Message envoyé.</div>
              <div style={{ fontSize: 15, marginTop: 10, color: "var(--cream)", opacity: 0.8 }}>On vous répond au plus vite.</div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
