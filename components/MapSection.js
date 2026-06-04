"use client";
import Reveal from "./Reveal";
import { MapPin, Navigation } from "lucide-react";

export default function MapSection() {
  return (
    <section
      id="acces"
      aria-label="Accès et localisation à Mantes-la-Jolie"
      className="relative bg-sand py-24"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">
              Nous trouver
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-forest">
              Au cœur de Mantes-la-Jolie
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-5 text-forest/70 text-lg">
              Idéalement situé Place du Marché au Blé, à quelques minutes de la
              gare de Mantes-la-Jolie et facilement accessible depuis
              Mantes-la-Ville, Limay et Buchelay.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.2} y={50}>
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 rounded-3xl overflow-hidden shadow-soft h-[420px]">
              <iframe
                title="Carte Le Coq Hardy — 25 Place du Marché au Blé, Mantes-la-Jolie"
                src="https://www.google.com/maps?q=25+Place+du+March%C3%A9+au+Bl%C3%A9,+78200+Mantes-la-Jolie&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>

            <div className="rounded-3xl bg-forest p-8 grain flex flex-col justify-center shadow-soft">
              <MapPin className="text-gold" size={36} />
              <h3 className="mt-5 font-display text-2xl text-sand">
                Le Coq Hardy
              </h3>
              <p className="mt-3 text-sand/80 text-sm leading-relaxed">
                25 Place du Marché au Blé
                <br />
                78200 Mantes-la-Jolie
                <br />
                Yvelines, Île-de-France
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=25+Place+du+March%C3%A9+au+Bl%C3%A9+78200+Mantes-la-Jolie"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-gold py-3 font-medium text-forest hover:bg-sand transition-colors"
              >
                <Navigation size={18} />
                Itinéraire
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
