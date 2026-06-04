"use client";
import Reveal from "./Reveal";
import { motion } from "framer-motion";

const photos = [
  "https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1437418747212-8d9709afab22?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1535958636474-b021ee887b13?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1572116469696-31de0f17cc34?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&w=800&auto=format&fit=crop",
];

export default function Ambiance() {
  return (
    <section id="ambiance" className="relative bg-pool py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <Reveal>
            <span className="text-xs uppercase tracking-[0.3em] text-forest font-medium">
              L'atmosphère
            </span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-4 font-display text-5xl md:text-6xl text-forest">
              Ambiance & lumière dorée
            </h2>
          </Reveal>
        </div>

        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {photos.map((src, i) => (
            <Reveal key={src} delay={(i % 4) * 0.08} y={40}>
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.4 }}
                className="overflow-hidden rounded-2xl shadow-soft break-inside-avoid"
              >
                <img
                  src={src}
                  alt={`Ambiance ${i + 1}`}
                  className={`w-full object-cover ${
                    i % 3 === 0 ? "h-80" : "h-56"
                  }`}
                />
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
