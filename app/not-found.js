import Link from "next/link";

export const metadata = {
  title: "Page introuvable",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-forest grain flex flex-col items-center justify-center text-center px-6">
      <span className="text-xs uppercase tracking-[0.3em] text-gold">
        Erreur 404
      </span>
      <h1 className="mt-5 font-display text-6xl md:text-7xl text-sand">
        Page introuvable
      </h1>
      <p className="mt-5 max-w-md text-sand/70">
        On dirait que ce cocktail n'est pas à la carte. Revenons à l'essentiel.
      </p>
      <Link
        href="/"
        className="mt-10 rounded-full bg-gold px-8 py-4 font-medium text-forest hover:bg-sand transition-all hover:scale-105 shadow-glow"
      >
        Retour à l'accueil
      </Link>
    </main>
  );
}
