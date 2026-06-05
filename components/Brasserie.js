"use client";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { Timer, Check } from "lucide-react";

const formules = [
  {
    name: "Formule Midi",
    price: "15 €",
    items: ["Plat du jour", "Boisson soft ou café", "Service rapide"],
    img: "https://images.unsplash.com/photo-1467003909585-2f8a72700288?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Formule Coq",
    price: "18 €",
    items: ["Entrée + Plat", "Dessert maison", "Service rapide"],
    featured: true,
    img: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Formule Terrasse",
    price: "20 €",
    items: ["Plat + Dessert", "Verre de vin ou cocktail soft", "Service rapide"],
    img: "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Brasserie() {
  return (
    <section id="brasserie" className="relative bg-pool py-28 grain">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-forest font-medium">
              La brasserie
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-forest">
              Pas qu'un bar : une vraie brasserie
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-forest/70 text-lg">
              Le midi comme le soir, on vient manger au Coq Hardy. Cuisine
              maison, produits frais et service éclair : entrée, plat et
              dessert, le tout en moins d'une heure. Idéal pour une pause
              déjeuner ou un dîner sans attendre.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.25}>
          <div className="mx-auto mb-14 flex w-fit flex-wrap items-center justify-center gap-x-6 gap-y-2 rounded-full bg-forest px-6 py-3 text-sand shadow-soft">
            <span className="flex items-center gap-2">
              <Timer size={20} className="text-gold" />
              <span className="font-medium">Service rapide</span>
            </span>
            <span className="hidden sm:inline h-4 w-px bg-sand/30" />
            <span className="font-medium">Repas complet en 1h chrono</span>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-3 gap-8">
          {formules.map((f, i) => (
            <Reveal key={f.name} delay={i * 0.1} y={50}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className={`group h-full rounded-3xl overflow-hidden bg-sand shadow-soft ${
                  f.featured ? "ring-2 ring-gold" : ""
                }`}
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                  loading="lazy"
                  decoding="async"
                    src={f.img}
                    alt={f.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  {f.featured && (
                    <span className="absolute top-4 left-4 rounded-full bg-gold px-4 py-1.5 text-xs font-semibold text-forest">
                      Le plus choisi
                    </span>
                  )}
                </div>
                <div className="p-8">
                  <div className="flex items-baseline justify-between">
                    <h3 className="font-display text-2xl text-forest">{f.name}</h3>
                    <span className="font-display text-3xl text-forest">{f.price}</span>
                  </div>
                  <ul className="mt-5 space-y-3">
                    {f.items.map((it) => (
                      <li key={it} className="flex items-center gap-3 text-forest/75 text-sm">
                        <Check size={18} className="text-gold shrink-0" />
                        {it}
                      </li>
                    ))}
                  </ul>
                  <a
                    href="#reservation"
                    className="mt-7 block rounded-xl bg-forest py-3 text-center font-medium text-sand hover:bg-forest-dark transition-colors"
                  >
                    Réserver
                  </a>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
