import { useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { SHOP_PRODUCTS, chf } from "../data/pricing";
import { asset } from "../lib/asset";
import Magnetic from "../components/Magnetic";
import Footer from "../components/Footer";

export default function ShopProductPage() {
  const { id } = useParams();
  const product = SHOP_PRODUCTS.find((p) => p.id === id);
  const [sent, setSent] = useState(false);
  const emailRef = useRef(null);

  if (!product) {
    return (
      <>
        <section style={{ background: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px)", minHeight: "60vh" }}>
          <div style={{ maxWidth: 900, margin: "0 auto" }}>
            <h1 className="font-display" style={{ margin: "0 0 24px", fontSize: "clamp(32px,5vw,64px)", color: "var(--cream)" }}>Produit introuvable.</h1>
            <Link to="/shop" style={{ color: "var(--lime)", textDecoration: "none", fontWeight: 700 }}>← Retour au shop</Link>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const notify = (e) => {
    e.preventDefault();
    const v = emailRef.current?.value;
    if (v && v.includes("@")) setSent(true);
  };

  return (
    <>
      <section style={{ background: "var(--black)", padding: "clamp(90px,14vh,180px) clamp(16px,4vw,64px) clamp(56px,8vh,90px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto" }}>
          <Link to="/shop" className="font-mono" style={{ display: "inline-block", marginBottom: "clamp(32px,5vh,56px)", color: "var(--cream)", opacity: 0.7, textDecoration: "none", fontSize: 13, letterSpacing: ".14em", textTransform: "uppercase" }}>
            ← Retour au shop
          </Link>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(32px,5vw,72px)", alignItems: "center" }}>
            <div style={{ aspectRatio: "16/9", border: "2px solid rgba(245,240,232,.2)", overflow: "hidden", background: "#000" }}>
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="auto"
                poster={asset(product.img)}
                src={asset(product.video)}
                style={{ width: "100%", height: "100%", objectFit: "contain", background: "#000" }}
              />
            </div>
            <div>
              <h1 data-reveal="true" className="font-display" style={{ margin: "0 0 16px", fontSize: "clamp(36px,5.5vw,80px)", lineHeight: 1, color: "var(--cream)" }}>
                {product.name}
              </h1>
              <p data-reveal="true" style={{ margin: "0 0 28px", maxWidth: "48ch", fontSize: "clamp(15px,1.25vw,19px)", lineHeight: 1.65, color: "var(--cream)", opacity: 0.8 }}>
                {product.desc}
              </p>
              <div data-reveal="true" className="font-display" style={{ fontSize: "clamp(26px,3vw,40px)", color: "var(--lime)", marginBottom: 8 }}>
                dès {chf(product.price)}
              </div>
              {product.refillPrice != null && (
                <div className="font-mono" style={{ fontSize: 13, letterSpacing: ".08em", color: "var(--cream)", opacity: 0.6, marginBottom: 32 }}>
                  Recharge : {chf(product.refillPrice)}
                </div>
              )}

              {!sent ? (
                <form onSubmit={notify} style={{ display: "flex", flexWrap: "wrap", gap: 10, marginTop: 24 }}>
                  <input ref={emailRef} type="email" required placeholder="votre@email.ch" style={{ border: "2px solid var(--cream)", background: "var(--black)", color: "var(--cream)", padding: "16px 18px", fontSize: 15, minWidth: "min(280px,80vw)", outline: "none", boxSizing: "border-box" }} />
                  <Magnetic as="button" type="submit" style={{ border: "none", background: "var(--lime)", color: "var(--black)", fontWeight: 700, fontSize: 14, letterSpacing: ".05em", textTransform: "uppercase", padding: "16px 26px" }}>
                    M'avertir
                  </Magnetic>
                </form>
              ) : (
                <div style={{ display: "inline-block", background: "var(--lime)", color: "var(--black)", padding: "16px 24px", marginTop: 24 }}>
                  C'est noté — on vous écrit dès l'ouverture du shop.
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {product.gallery?.length > 0 && (
        <section style={{ background: "var(--black)", padding: "0 clamp(16px,4vw,64px) clamp(90px,12vh,140px)" }}>
          <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 14 }}>
            {product.gallery.map((src) => (
              <div key={src} data-reveal="true" style={{ border: "2px solid rgba(245,240,232,.2)", overflow: "hidden" }}>
                <img src={asset(src)} alt={product.name} style={{ display: "block", width: "100%", height: "auto" }} />
              </div>
            ))}
          </div>
        </section>
      )}

      <Footer />
    </>
  );
}
