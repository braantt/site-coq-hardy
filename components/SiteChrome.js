"use client";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X, Sparkles } from "lucide-react";
import Navbar from "./Navbar";

const BANNER_HEIGHT = 40; // px

export default function SiteChrome() {
  const [showBanner, setShowBanner] = useState(true);

  return (
    <>
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: -BANNER_HEIGHT }}
            animate={{ y: 0 }}
            exit={{ y: -BANNER_HEIGHT, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed top-0 inset-x-0 z-[60] bg-gold text-forest"
            style={{ height: BANNER_HEIGHT }}
          >
            <div className="relative mx-auto max-w-7xl h-full px-6 flex items-center justify-center gap-2 text-sm font-medium">
              <Sparkles size={16} className="shrink-0" />
              <span className="text-center leading-tight">
                Ouverture prochaine à Mantes-la-Jolie — suivez-nous pour ne rien
                manquer&nbsp;!
              </span>
              <button
                onClick={() => setShowBanner(false)}
                aria-label="Fermer le bandeau"
                className="absolute right-4 hover:opacity-60 transition-opacity"
              >
                <X size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar topOffset={showBanner ? BANNER_HEIGHT : 0} />
    </>
  );
}
