"use client";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const cocktails = [
  {
    name: "Mojito Tropical",
    desc: "Rhum ambré, menthe fraîche, fruit de la passion et citron vert.",
    price: "9 €",
    img: "https://images.unsplash.com/photo-1551538827-9c037cb4f32a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Sunset Spritz",
    desc: "Aperol, prosecco, nuances d'orange sanguine et romarin fumé.",
    price: "8 €",
    img: "https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Coq Hardy Signature",
    desc: "Gin botanique, sirop de fleur de sureau, concombre et tonic premium.",
    price: "11 €",
    img: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Paradise Mule",
    desc: "Vodka, ginger beer artisanal, ananas rôti et lime.",
    price: "10 €",
    img: "https://images.unsplash.com/photo-1609951651556-5334e2706168?q=80&w=800&auto=format&fit=crop",
  },
];

export default function Cocktails() {
  return (
    <section id="cocktails" className="relative bg-forest py-28 grain">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              La carte
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-sand">
              Nos cocktails signatures
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-sand/70 text-lg">
              Des créations pensées comme des voyages — fraîcheur, élégance et
              un soupçon d'exotisme dans chaque verre.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <div className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 text-forest shadow-glow">
              <span className="font-semibold">Happy Hour 18h — 20h</span>
              <span className="h-4 w-px bg-forest/30" />
              <span>Tous les cocktails à 6 €</span>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {cocktails.map((c, i) => (
            <Reveal key={c.name} delay={i * 0.1} y={50}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="group rounded-3xl overflow-hidden bg-sand shadow-soft"
              >
                <div className="relative h-60 overflow-hidden">
                  <img
                  loading="lazy"
                  decoding="async"
                    src={c.img}
                    alt={c.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4 rounded-full bg-gold px-4 py-1.5 text-sm font-semibold text-forest shadow-md">
                    {c.price}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-2xl text-forest">{c.name}</h3>
                  <p className="mt-2 text-sm text-forest/70 leading-relaxed">
                    {c.desc}
                  </p>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
