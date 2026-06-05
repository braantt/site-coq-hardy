"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import Reveal from "./Reveal";

const faqs = [
  {
    q: "Faut-il réserver une table au Coq Hardy ?",
    a: "La réservation est conseillée, surtout le week-end et lors des soirées DJ. Vous pouvez réserver directement en ligne depuis la section réservation de notre site. Les groupes sont les bienvenus sur demande.",
  },
  {
    q: "Le Coq Hardy est-il un bar ou une brasserie ?",
    a: "Les deux. Le midi et le soir, nous servons des formules brasserie de 15 à 20 € avec un service rapide — un repas complet en une heure. Et à tout moment de la journée, vous pouvez venir profiter de nos cocktails signatures sur la terrasse.",
  },
  {
    q: "Quels sont les horaires du Happy Hour ?",
    a: "Notre Happy Hour a lieu tous les jours de 18h à 20h : tous les cocktails sont à 6 €. L'occasion idéale pour un afterwork entre Mantes-la-Jolie et les communes voisines.",
  },
  {
    q: "Où se situe Le Coq Hardy et comment y accéder ?",
    a: "Nous sommes au 25 Place du Marché au Blé, en plein cœur de Mantes-la-Jolie (78200), à quelques minutes de la gare et facilement accessible depuis Mantes-la-Ville, Limay et Buchelay.",
  },
  {
    q: "Y a-t-il une terrasse ?",
    a: "Oui, notre terrasse ensoleillée à l'ambiance tropicale est l'un de nos atouts. Elle est ouverte en saison, parfaite pour un déjeuner, un verre au coucher du soleil ou une Sunset Party.",
  },
  {
    q: "Proposez-vous des soirées et événements ?",
    a: "Oui : soirées DJ le vendredi, Live Music le samedi, Sunset Party le dimanche, et le Happy Hour chaque jour. Suivez-nous pour connaître la programmation à venir.",
  },
];

export default function Faq() {
  const [open, setOpen] = useState(0);

  return (
    <section
      id="faq"
      aria-label="Questions fréquentes"
      className="relative bg-sand py-28"
    >
      <div className="mx-auto max-w-3xl px-6">
        <div className="text-center mb-14">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Bon à savoir
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-forest">
              Questions fréquentes
            </h2>
          </Reveal>
        </div>

        <div className="space-y-4">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={f.q} delay={i * 0.05} y={30}>
                <div className="rounded-2xl bg-white/70 border border-forest/10 overflow-hidden shadow-soft">
                  <button
                    onClick={() => setOpen(isOpen ? -1 : i)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left"
                  >
                    <span className="font-display text-lg md:text-xl text-forest">
                      {f.q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="shrink-0 text-gold"
                    >
                      <Plus size={24} />
                    </motion.span>
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      >
                        <p className="px-6 pb-6 text-forest/75 leading-relaxed">
                          {f.a}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
