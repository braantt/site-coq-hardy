"use client";
import { Instagram, Facebook, MapPin, Phone, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-forest-dark text-sand pt-16 pb-8 grain relative">
      <div className="mx-auto max-w-7xl px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h3 className="font-display text-3xl">Le Coq Hardy</h3>
          <p className="mt-4 text-sand/70 text-sm leading-relaxed">
            Bar à cocktails & brasserie tropicale au cœur de Mantes-la-Jolie.
            Cocktails signatures, Happy Hour et formules midi à service rapide.
          </p>
          <div className="mt-6 flex gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="rounded-full glass p-3 hover:bg-gold hover:text-forest transition-colors"
            >
              <Instagram size={20} />
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="rounded-full glass p-3 hover:bg-gold hover:text-forest transition-colors"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold mb-4">Adresse</h4>
          <a
            href="https://www.google.com/maps/search/?api=1&query=25+Place+du+March%C3%A9+au+Bl%C3%A9+78200+Mantes-la-Jolie"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-start gap-2 text-sand/80 text-sm hover:text-gold transition-colors"
          >
            <MapPin size={18} className="mt-0.5 shrink-0" />
            <span>
              25 Place du Marché au Blé
              <br />
              78200 Mantes-la-Jolie, France
            </span>
          </a>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold mb-4">Contact</h4>
          <p className="flex items-center gap-2 text-sand/80 text-sm">
            <Phone size={18} /> 01 XX XX XX XX
          </p>
        </div>

        <div>
          <h4 className="font-display text-xl text-gold mb-4">Horaires</h4>
          <p className="flex items-start gap-2 text-sand/80 text-sm">
            <Clock size={18} className="mt-0.5 shrink-0" />
            Lun — Jeu : 17h — 01h
            <br />
            Ven — Dim : 16h — 02h
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 mt-14 pt-8 border-t border-sand/15 flex flex-col md:flex-row justify-between items-center gap-4 text-sand/50 text-xs">
        <p>© {new Date().getFullYear()} Le Coq Hardy. Tous droits réservés.</p>
        <p>Beach Club · Lounge · Cocktails Premium</p>
      </div>
    </footer>
  );
}
