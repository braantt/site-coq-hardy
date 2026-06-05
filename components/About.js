"use client";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="presentation" className="relative bg-sand py-28 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Bienvenue
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-forest leading-tight">
              Une expérience unique
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-lg text-forest/80 leading-relaxed">
              Au cœur de <span className="text-forest font-medium">Mantes-la-Jolie</span>,
              à deux pas de la Place du Marché au Blé, Le Coq Hardy réinvente
              l'art du cocktail. Nos mixologues composent des
              <span className="text-forest font-medium"> créations signatures </span>
              à partir de produits frais et d'alcools d'exception.
            </p>
          </Reveal>
          <Reveal delay={0.3}>
            <p className="mt-4 text-lg text-forest/80 leading-relaxed">
              Premier bar lounge tropical des Yvelines, nous accueillons les
              habitants de Mantes-la-Jolie, Mantes-la-Ville, Limay et Buchelay
              dans une ambiance raffinée — entre palmiers, terrasse ensoleillée
              et soirées musicales feutrées. Une parenthèse de luxe, comme en
              vacances, à deux pas de chez soi.
            </p>
          </Reveal>
          <Reveal delay={0.4}>
            <div className="mt-10 flex gap-10">
              {[
                ["+40", "Cocktails signatures"],
                ["5★", "Expérience premium"],
                ["7j/7", "Ouvert en saison"],
              ].map(([n, l]) => (
                <div key={l}>
                  <div className="font-display text-4xl text-forest">{n}</div>
                  <div className="mt-1 text-sm text-forest/60">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={60}>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative rounded-[2rem] overflow-hidden shadow-soft"
          >
            <img
                  loading="lazy"
                  decoding="async"
              src="https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop"
              alt="Cocktails Le Coq Hardy"
              className="w-full h-[560px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            <div className="absolute bottom-6 left-6 glass rounded-2xl px-6 py-4">
              <p className="text-sand font-display text-xl">Terrasse & Lounge</p>
              <p className="text-sand/80 text-sm">Côte d'Azur · Palm Springs</p>
            </div>
          </motion.div>
        </Reveal>
      </div>
    </section>
  );
}
