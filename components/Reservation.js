"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export default function Reservation() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    people: "2",
    date: "",
    time: "",
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = () => {
    if (form.name && form.phone && form.date && form.time) setSent(true);
  };

  const field =
    "w-full rounded-xl bg-white/90 border border-forest/10 px-4 py-3.5 text-forest placeholder-forest/40 focus:outline-none focus:ring-2 focus:ring-gold transition";

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
          <div className="glass rounded-3xl p-8 md:p-10 shadow-soft">
            {sent ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-10"
              >
                <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-gold">
                  <Check className="text-forest" size={32} />
                </div>
                <h3 className="font-display text-3xl text-sand">
                  Demande envoyée !
                </h3>
                <p className="mt-3 text-sand/80">
                  Merci {form.name}. Nous vous confirmons votre table très
                  vite au {form.phone}.
                </p>
              </motion.div>
            ) : (
              <div className="space-y-4">
                <input
                  className={field}
                  placeholder="Nom complet"
                  value={form.name}
                  onChange={update("name")}
                />
                <input
                  className={field}
                  placeholder="Téléphone"
                  type="tel"
                  value={form.phone}
                  onChange={update("phone")}
                />
                <div className="grid grid-cols-2 gap-4">
                  <select
                    className={field}
                    value={form.people}
                    onChange={update("people")}
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                      <option key={n} value={n}>
                        {n} {n > 1 ? "personnes" : "personne"}
                      </option>
                    ))}
                  </select>
                  <input
                    className={field}
                    type="date"
                    value={form.date}
                    onChange={update("date")}
                  />
                </div>
                <input
                  className={field}
                  type="time"
                  value={form.time}
                  onChange={update("time")}
                />
                <button
                  onClick={submit}
                  className="w-full rounded-xl bg-gold py-4 font-medium text-forest hover:bg-sand transition-all hover:scale-[1.02] shadow-glow"
                >
                  Réserver maintenant
                </button>
              </div>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
