import Footer from "../components/Footer";

export default function PressePage() {
  return (
    <>
      <section style={{ background: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)", minHeight: "70vh" }}>
        <div style={{ maxWidth: 900, margin: "0 auto" }}>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 24 }}>
            Presse
          </div>
          <h1 data-reveal="true" className="font-display" style={{ margin: "0 0 24px", fontSize: "clamp(36px,6.5vw,92px)", lineHeight: 1.05, color: "var(--cream)" }}>
            Personne n'en parle<br /><span style={{ color: "var(--violet)" }}>encore. Ça arrive.</span>
          </h1>
          <p data-reveal="true" style={{ margin: "0 0 40px", maxWidth: "56ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.75 }}>
            GLIM CLUB n'a pas encore ouvert : logiquement, la revue de presse est vide. Cette page se remplira
            au fil des articles, dès les premiers mois du club. Vous êtes journaliste et voulez qu'on en parle
            maintenant ?
          </p>
          <a
            href="mailto:presse@glimclub.ch"
            className="font-display"
            style={{ display: "inline-block", background: "var(--lime)", color: "var(--black)", textDecoration: "none", fontSize: "clamp(18px,1.6vw,22px)", padding: "18px 30px", textTransform: "uppercase" }}
          >
            presse@glimclub.ch
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
