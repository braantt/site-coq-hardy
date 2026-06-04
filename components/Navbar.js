"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { label: "Présentation", href: "#presentation" },
  { label: "Cocktails", href: "#cocktails" },
  { label: "Brasserie", href: "#brasserie" },
  { label: "Ambiance", href: "#ambiance" },
  { label: "Événements", href: "#evenements" },
  { label: "Avis", href: "#avis" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "py-6"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 flex items-center justify-between">
        <a
          href="#hero"
          className={`font-display text-2xl tracking-wide transition-colors ${
            scrolled ? "text-sand" : "text-sand"
          }`}
        >
          Le Coq Hardy
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-sand/90 hover:text-gold transition-colors tracking-wide"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#reservation"
            className="rounded-full bg-gold px-6 py-2.5 text-sm font-medium text-forest hover:bg-sand transition-colors shadow-glow"
          >
            Réserver
          </a>
        </nav>

        <button
          className="md:hidden text-sand"
          onClick={() => setOpen(true)}
          aria-label="Ouvrir le menu"
        >
          <Menu size={28} />
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-forest flex flex-col items-center justify-center gap-8"
          >
            <button
              className="absolute top-6 right-6 text-sand"
              onClick={() => setOpen(false)}
              aria-label="Fermer le menu"
            >
              <X size={32} />
            </button>
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl text-sand hover:text-gold transition-colors"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#reservation"
              onClick={() => setOpen(false)}
              className="mt-4 rounded-full bg-gold px-8 py-3 text-forest font-medium"
            >
              Réserver une table
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
