import { useRef, useState } from "react";
import { SHOP_PRODUCTS, chf } from "../data/pricing";
import { asset } from "../lib/asset";
import Magnetic from "../components/Magnetic";
import Footer from "../components/Footer";

export default function ShopPage() {
  const [sent, setSent] = useState(false);
  const emailRef = useRef(null);

  const notify = (e) => {
    e.preventDefault();
    const v = emailRef.current?.value;
    if (v && v.includes("@")) setSent(true);
  };

  return (
    <>
      <section style={{ background: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px) clamp(56px,8vh,90px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".2em", color: "var(--lime)", textTransform: "uppercase", marginBottom: 24 }}>
            Shop
          </div>
          <h1 data-reveal="true" className="font-display" style={{ margin: "0 0 16px", fontSize: "clamp(40px,7vw,104px)", lineHeight: 1, color: "var(--cream)" }}>
            L'essentiel,<br /><span style={{ color: "var(--violet)" }}>en dehors des verres.</span>
          </h1>
          <p data-reveal="true" style={{ margin: 0, maxWidth: "56ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.7 }}>
            Disponible à l'ouverture de la boutique. Prix indicatifs. Laissez votre e-mail pour être prévenu dès que la commande en ligne ouvre.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--black)", padding: "0 clamp(16px,4vw,64px) clamp(56px,8vh,90px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
          {SHOP_PRODUCTS.map((p) => (
            <div key={p.id} data-reveal="true" style={{ border: "2px solid rgba(245,240,232,.2)", display: "flex", flexDirection: "column" }}>
              <div style={{ aspectRatio: "1", background: `#000 url('${asset(p.img)}') center/cover no-repeat` }} />
              <div style={{ padding: "clamp(20px,2.5vw,28px)", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <div className="font-display" style={{ fontSize: "clamp(22px,2.2vw,30px)", letterSpacing: ".02em", color: "var(--cream)" }}>{p.name}</div>
                <div style={{ fontSize: 14, lineHeight: 1.5, color: "var(--cream)", opacity: 0.7 }}>{p.desc}</div>
                <div className="font-display" style={{ fontSize: "clamp(20px,1.8vw,26px)", marginTop: "auto", color: "var(--lime)" }}>dès {chf(p.price)}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section style={{ background: "var(--cream)", color: "var(--black)", padding: "clamp(56px,8vh,90px) clamp(16px,4vw,64px)" }}>
        <div style={{ maxWidth: 700, margin: "0 auto", textAlign: "center" }}>
          <img
            src={asset("images/totebag-porte.png")}
            alt=""
            aria-hidden="true"
            style={{ width: "100%", maxWidth: 360, height: "auto", margin: "0 auto 32px", display: "block", borderRadius: 2 }}
          />
          <h2 data-reveal="true" className="font-display" style={{ margin: "0 0 20px", fontSize: "clamp(28px,4vw,48px)", lineHeight: 1.1 }}>
            Prévenez-moi à l'ouverture.
          </h2>
          {!sent ? (
            <form onSubmit={notify} style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
              <input ref={emailRef} type="email" required placeholder="votre@email.ch" style={{ border: "2px solid var(--black)", background: "var(--cream)", color: "var(--black)", padding: "16px 18px", fontSize: 15, minWidth: "min(300px,80vw)", outline: "none", boxSizing: "border-box" }} />
              <Magnetic as="button" type="submit" style={{ border: "none", background: "var(--violet)", color: "var(--cream)", fontWeight: 700, fontSize: 14, letterSpacing: ".05em", textTransform: "uppercase", padding: "16px 26px" }}>
                M'avertir
              </Magnetic>
            </form>
          ) : (
            <div style={{ display: "inline-block", background: "var(--black)", color: "var(--lime)", padding: "18px 28px" }}>
              C'est noté — on vous écrit dès l'ouverture du shop.
            </div>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}
