import { Link } from "react-router-dom";
import { SHOP_PRODUCTS, chf } from "../data/pricing";
import { asset } from "../lib/asset";
import Footer from "../components/Footer";

export default function ShopPage() {
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
            Disponible à l'ouverture de la boutique. Prix indicatifs. Cliquez sur un produit pour le détail.
          </p>
        </div>
      </section>

      <section style={{ background: "var(--black)", padding: "0 clamp(16px,4vw,64px) clamp(90px,12vh,140px)" }}>
        <div style={{ maxWidth: 1400, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))", gap: 14 }}>
          {SHOP_PRODUCTS.map((p) => (
            <Link
              key={p.id}
              to={`/shop/${p.id}`}
              data-reveal="true"
              data-magnetic="true"
              style={{ border: "2px solid rgba(245,240,232,.2)", display: "flex", flexDirection: "column", textDecoration: "none", color: "inherit", transition: "border-color .2s" }}
            >
              <div style={{ aspectRatio: "1", background: `#000 url('${asset(p.img)}') center/cover no-repeat` }} />
              <div style={{ padding: "clamp(20px,2.5vw,28px)", display: "flex", flexDirection: "column", gap: 8, flex: 1 }}>
                <div className="font-display" style={{ fontSize: "clamp(22px,2.2vw,30px)", letterSpacing: ".02em", color: "var(--cream)" }}>{p.name}</div>
                <div style={{ fontSize: 14, lineHeight: 1.5, color: "var(--cream)", opacity: 0.7 }}>{p.shortDesc}</div>
                <div className="font-display" style={{ fontSize: "clamp(20px,1.8vw,26px)", marginTop: "auto", color: "var(--lime)" }}>dès {chf(p.price)}</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </>
  );
}
