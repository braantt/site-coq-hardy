"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="hero"
      ref={ref}
      className="relative h-screen min-h-[640px] overflow-hidden grain"
    >
      {/* Fond parallaxe */}
      <motion.div style={{ y }} className="absolute inset-0 -z-10 scale-110">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1571896349842-33c89424de2d?q=80&w=2000&auto=format&fit=crop')",
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/50 via-forest/30 to-forest/80" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6"
      >
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mb-6 inline-block rounded-full glass px-5 py-2 text-xs uppercase tracking-[0.3em] text-sand"
        >
          Bar à Cocktails · Brasserie · Mantes-la-Jolie
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 1 }}
          className="font-display text-6xl md:text-8xl lg:text-9xl text-sand leading-none tracking-wide"
        >
          LE COQ HARDY
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.9 }}
          className="mt-6 max-w-xl text-lg md:text-xl text-sand/90 font-light italic"
        >
          Bar, brasserie & cocktails — venez déjeuner, dîner ou boire un verre.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row gap-4"
        >
          <a
            href="#reservation"
            className="rounded-full bg-gold px-8 py-4 font-medium text-forest hover:bg-sand transition-all hover:scale-105 shadow-glow"
          >
            Réserver une table
          </a>
          <a
            href="#brasserie"
            className="rounded-full glass px-8 py-4 font-medium text-sand hover:bg-white/25 transition-all hover:scale-105"
          >
            Voir les formules brasserie
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.9 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-sm text-sand/90"
        >
          <span className="flex items-center gap-2">
            <span className="text-gold">●</span> Formules midi 15–20 €
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">●</span> Service rapide
          </span>
          <span className="flex items-center gap-2">
            <span className="text-gold">●</span> Repas complet en 1h
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-sand/70 text-sm tracking-widest"
      >
        ↓
      </motion.div>
    </section>
  );
}
