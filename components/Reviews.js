"use client";
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Star } from "lucide-react";
import Reveal from "./Reveal";

const reviews = [
  {
    name: "Camille D.",
    text: "Un cadre digne d'un beach club de la Côte d'Azur. Les cocktails signatures sont sublimes et le service impeccable.",
  },
  {
    name: "Antoine R.",
    text: "Ambiance feutrée au coucher du soleil, musique parfaite. On se croirait en vacances à Palm Springs.",
  },
  {
    name: "Léa M.",
    text: "Le Coq Hardy Signature est une tuerie. Décor magnifique, terrasse paradisiaque, je recommande à 1000%.",
  },
  {
    name: "Yanis B.",
    text: "Le meilleur spot pour une soirée chic. Tout est soigné, du verre à l'éclairage. Une vraie adresse premium.",
  },
];

export default function Reviews() {
  const [i, setI] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setI((p) => (p + 1) % reviews.length), 4500);
    return () => clearInterval(t);
  }, []);

  return (
    <section id="avis" className="relative bg-sand py-28 overflow-hidden">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <Reveal>
          <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
            Ils en parlent
          </span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mt-4 font-display text-5xl md:text-6xl text-forest">
            Avis clients
          </h2>
        </Reveal>

        <div className="mt-14 relative h-64 flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.6 }}
              className="absolute inset-0 flex flex-col items-center justify-center"
            >
              <div className="flex gap-1 text-gold mb-6">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} size={22} fill="currentColor" />
                ))}
              </div>
              <p className="font-display text-2xl md:text-3xl text-forest/90 italic leading-relaxed">
                « {reviews[i].text} »
              </p>
              <p className="mt-6 text-forest/60 tracking-wide">
                — {reviews[i].name}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="flex justify-center gap-3 mt-6">
          {reviews.map((_, d) => (
            <button
              key={d}
              onClick={() => setI(d)}
              aria-label={`Avis ${d + 1}`}
              className={`h-2.5 rounded-full transition-all ${
                d === i ? "w-8 bg-forest" : "w-2.5 bg-forest/30"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
