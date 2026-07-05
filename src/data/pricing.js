// ============================================================
// DONNÉES MODIFIABLES — SOURCE DE VÉRITÉ UNIQUE
// Tous les prix affichés sur le site viennent d'ici. Montants
// d'exemple, à remplacer une fois le fournisseur de verres choisi.
// ============================================================
import { asset } from "../lib/asset";

export const FRAME_FROM = 150; // prix d'appel des montures (choisies en boutique)

export const LENSES = [
  { id: "unifocal", kind: "uni", name: "Unifocaux", price: 60, tag: "Vision simple", desc: "Loin ou près, un seul foyer. Anti-reflet Oasis inclus.", img: asset("images/ar-super.png"), fit: "cover" },
  { id: "essential", kind: "prog", name: "Essential", price: 250, tag: "Progressifs", desc: "L'accès aux progressifs, précis et fiable. Anti-reflet Oasis inclus.", img: asset("images/essential.png"), fit: "contain" },
  { id: "signature", kind: "prog", name: "Signature", price: 350, tag: "Progressifs", desc: "Champ de vision élargi, transitions plus douces. Anti-reflet Oasis inclus.", img: asset("images/signature.png"), fit: "contain" },
  { id: "prestige", kind: "prog", name: "Prestige", price: 450, tag: "Progressifs — le meilleur", desc: "Le plus large champ de vision : mettez toutes les chances du côté de vos yeux.", img: asset("images/prestige.png"), fit: "contain" },
];

export const THICKNESS = [
  { id: "fin", label: "Verres fins — indice 1.6", price: 40 },
  { id: "superfin", label: "Verres super fins — indice 1.67", price: 80 },
  { id: "ultrafin", label: "Verres ultra fins — indice 1.74", price: 140 },
];

export const AR_OPTIONS = [
  { id: "oasis", name: "Oasis", price: 0, tag: "Inclus", desc: "Anti-reflet standard, traitement durci pour limiter les micro-rayures." },
  { id: "spectra", name: "Spectra", price: 50, tag: "Premium", desc: "Multicouches, oléophobe, hydrophobe, antistatique : des verres si purs qu'on les oublie." },
];

export const TINTS = [
  { id: "teinte-unie", name: "Teinte unie", price: 30, desc: "Une couleur pleine, du gris au brun : vos verres passent en mode solaire." },
  { id: "degradee", name: "Teinte dégradée", price: 40, desc: "Foncée en haut, claire en bas. Le style solaire, la lecture en prime." },
  { id: "polarise", name: "Polarisé", price: 90, desc: "Coupe les reflets de l'eau, de la route, de la neige. Le confort solaire ultime." },
  { id: "photochromique", name: "Photochromique", price: 90, desc: "Clairs à l'intérieur, foncés au soleil. Une seule paire pour tout." },
];

export const AR_INTERNE_PRICE = 30; // anti-reflet face interne (verres teintés)
export const BLUE_LIGHT_PRICE = 25; // filtre lumière bleue (verres clairs uniquement)

// ============================================================
// RÉGLAGES ÉDITABLES — club & boutique
// ============================================================
export const NEXT_MEMBER_NUMBER = 27; // numéro du prochain membre fondateur
export const SHOW_COUNTDOWN = true;
export const OPENING_DATE = "2027-02-15T10:00:00";
export const MEMBER_GOAL = 100;

export const chf = (n) => n.toLocaleString("fr-CH") + " CHF";

// ============================================================
// SHOP — accessoires, prix indicatifs
// ============================================================
export const SHOP_PRODUCTS = [
  { id: "spray", name: "Spray nettoyant", price: 12, video: "assets/spray.mp4", img: "images/spray.png", desc: "Formule douce, sans traces, tous types de verres. 35 ml." },
  { id: "microfibre", name: "Microfibre collector", price: 8, video: "assets/microfibre.mp4", img: "images/microfibre.png", desc: "Le tissu qu'on garde toujours sur soi. Lavable, réutilisable." },
  { id: "totebag", name: "Tote bag GLIM CLUB", price: 25, video: "assets/tote-bag.mp4", img: "images/totebag.png", desc: "Coton épais, format généreux. Pour transporter autre chose que des lunettes." },
];
