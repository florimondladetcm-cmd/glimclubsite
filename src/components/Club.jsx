import { useRef, useState } from "react";
import { MEMBER_GOAL, NEXT_MEMBER_NUMBER } from "../data/pricing";
import Magnetic from "./Magnetic";

export default function Club() {
  const [joined, setJoined] = useState(false);
  const emailRef = useRef(null);
  const memberNo = NEXT_MEMBER_NUMBER;

  const joinClub = (e) => {
    e.preventDefault();
    const v = emailRef.current?.value;
    if (v && v.includes("@")) setJoined(true);
  };

  const progressW = Math.min(100, memberNo - 1) + "%";

  return (
    <section id="club" style={{ background: "var(--violet)", color: "var(--cream)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
        <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 24 }}>
          Membres fondateurs <span className="glim-sparkle">✦</span>
        </div>
        <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 18px", fontSize: "clamp(48px,8vw,130px)", lineHeight: 0.98 }}>
          Les 100 premiers.
        </h2>
        <p data-reveal="true" style={{ margin: "0 auto 40px", maxWidth: "52ch", fontSize: "clamp(15px,1.3vw,19px)", lineHeight: 1.65, opacity: 0.85 }}>
          Avantages fondateurs à l'ouverture, accès en avant-première aux montures, et votre numéro de membre gravé quelque part dans la boutique.
        </p>

        {!joined ? (
          <form data-reveal="true" onSubmit={joinClub} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10, marginBottom: 28 }}>
            <input ref={emailRef} type="email" required placeholder="votre@email.ch" style={{ border: "2px solid var(--black)", background: "var(--cream)", color: "var(--black)", padding: "18px 20px", fontSize: 16, minWidth: "min(320px,80vw)", outline: "none", boxSizing: "border-box" }} />
            <Magnetic as="button" type="submit" style={{ border: "none", background: "var(--lime)", color: "var(--black)", fontWeight: 700, fontSize: 15, letterSpacing: ".05em", textTransform: "uppercase", padding: "18px 30px" }}>
              Devenir membre n°{memberNo}
            </Magnetic>
          </form>
        ) : (
          <div data-reveal="true" style={{ display: "inline-block", background: "var(--black)", color: "var(--lime)", padding: "28px 40px", marginBottom: 28 }}>
            <div className="font-display" style={{ fontSize: "clamp(28px,3.5vw,52px)", lineHeight: 1.1 }}>Bienvenue, membre n°{memberNo}.</div>
            <div style={{ fontSize: 15, marginTop: 10, color: "var(--cream)", opacity: 0.8 }}>On se voit à Vevey. Gardez un œil sur votre boîte mail.</div>
          </div>
        )}

        <div style={{ maxWidth: 520, margin: "0 auto" }}>
          <div className="font-mono" style={{ display: "flex", justifyContent: "space-between", fontSize: 12, letterSpacing: ".12em", marginBottom: 8, opacity: 0.8 }}>
            <span>{memberNo - 1} membres inscrits</span><span>objectif : {MEMBER_GOAL}</span>
          </div>
          <div style={{ height: 8, background: "rgba(10,10,15,.35)" }}>
            <div style={{ height: "100%", background: "var(--lime)", width: progressW, transition: "width .6s cubic-bezier(.16,1,.3,1)" }} />
          </div>
        </div>

        <div data-reveal="true" style={{ marginTop: "clamp(48px,7vh,80px)", textAlign: "left" }}>
          <div className="font-mono" style={{ fontSize: 12, letterSpacing: ".2em", textTransform: "uppercase", color: "var(--black)", marginBottom: 14 }}>
            Le kit du membre fondateur <span className="glim-sparkle">✦</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 12 }}>
            <div style={{ aspectRatio: "1", border: "2px solid var(--black)", overflow: "hidden" }}>
              <img src="/images/microfibre.png" alt="Microfibre collector GLIM" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ aspectRatio: "1", border: "2px solid var(--black)", overflow: "hidden" }}>
              <img src="/images/spray.png" alt="Spray nettoyant GLIM" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
            <div style={{ aspectRatio: "1", border: "2px solid var(--black)", overflow: "hidden" }}>
              <img src="/images/totebag.png" alt="Tote bag GLIM CLUB" style={{ display: "block", width: "100%", height: "100%", objectFit: "cover" }} />
            </div>
          </div>
          <div className="font-mono" style={{ marginTop: 10, fontSize: 11, letterSpacing: ".08em", opacity: 0.6 }}>
            Microfibre collector · spray nettoyant · tote bag — offerts aux 100 premiers.
          </div>
        </div>
      </div>
    </section>
  );
}
