"use client";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { Wine, CalendarClock } from "lucide-react";

const events = [
  {
    icon: Wine,
    title: "Happy Hour",
    desc: "Tous les cocktails à 6 € chaque jour de 18h à 20h sur la terrasse.",
    tag: "Tous les jours · 18h — 20h",
    featured: true,
  },
  {
    icon: CalendarClock,
    title: "Bientôt de nouveaux rendez-vous",
    desc: "Soirées et animations arriveront au fur et à mesure. La programmation sera communiquée sur nos réseaux sociaux — restez connectés !",
    tag: "Prochainement",
    featured: false,
  },
];

export default function Events() {
  return (
    <section id="evenements" className="relative bg-sage py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-forest font-medium">
              Le programme
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-forest">
              Nos événements
            </h2>
          </Reveal>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {events.map((e, i) => {
            const Icon = e.icon;
            return (
              <Reveal key={e.title} delay={i * 0.1} y={50}>
                <motion.div
                  whileHover={{ y: -8 }}
                  transition={{ type: "spring", stiffness: 280 }}
                  className="relative h-full rounded-3xl bg-forest p-8 overflow-hidden grain shadow-soft"
                >
                  <div className="absolute -top-10 -right-10 h-32 w-32 rounded-full bg-gold/20 blur-2xl" />
                  <span className="inline-block rounded-full bg-gold/20 px-3 py-1 text-xs text-gold tracking-wide">
                    {e.tag}
                  </span>
                  <Icon className="mt-6 text-gold" size={36} />
                  <h3 className="mt-5 font-display text-2xl text-sand">
                    {e.title}
                  </h3>
                  <p className="mt-3 text-sm text-sand/70 leading-relaxed">
                    {e.desc}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
