"use client";
import Reveal from "./Reveal";
import { CalendarClock, Instagram } from "lucide-react";

export default function Reservation() {
  return (
    <section
      id="reservation"
      className="relative bg-forest py-28 grain overflow-hidden"
    >
      <div className="absolute top-0 left-1/4 h-72 w-72 rounded-full bg-pool/20 blur-3xl" />
      <div className="absolute bottom-0 right-1/4 h-72 w-72 rounded-full bg-gold/20 blur-3xl" />

      <div className="relative mx-auto max-w-2xl px-6">
        <div className="text-center mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Votre table vous attend
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-sand">
              Réservation
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={50}>
          <div className="glass rounded-3xl p-8 md:p-12 shadow-soft text-center">
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-gold">
              <CalendarClock className="text-forest" size={32} />
            </div>
            <h3 className="font-display text-3xl text-sand">
              Réservations bientôt disponibles
            </h3>
            <p className="mt-4 text-sand/80 leading-relaxed">
              Le Coq Hardy ouvre prochainement à Mantes-la-Jolie. La réservation
              en ligne sera activée dès l'ouverture. En attendant, suivez-nous
              sur nos réseaux sociaux pour être informé en avant-première de la
              date d'ouverture et des premières soirées.
            </p>
            <a
              href="#"
              aria-label="Suivez-nous sur Instagram"
              className="mt-8 inline-flex items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 font-medium text-forest hover:bg-sand transition-all hover:scale-[1.02] shadow-glow"
            >
              <Instagram size={20} />
              Nous suivre
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
