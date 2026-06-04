import "./globals.css";

const SITE_URL = "https://site-coq-hardy.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Le Coq Hardy — Bar à Cocktails & Brasserie à Mantes-la-Jolie",
    template: "%s | Le Coq Hardy Mantes-la-Jolie",
  },
  description:
    "Le Coq Hardy, bar à cocktails et brasserie à Mantes-la-Jolie (78200). Venez déjeuner ou dîner : formules brasserie 15–20 € servies en 15 min, repas complet en 1h. Cocktails dès 8 €, Happy Hour à 6 €, terrasse et soirées DJ. Réservez votre table.",
  keywords: [
    "bar Mantes-la-Jolie",
    "bar à cocktails Mantes-la-Jolie",
    "brasserie Mantes-la-Jolie",
    "restaurant Mantes-la-Jolie",
    "déjeuner Mantes-la-Jolie",
    "où manger Mantes-la-Jolie",
    "formule midi Mantes-la-Jolie",
    "menu du jour Mantes-la-Jolie",
    "pause déjeuner Mantes-la-Jolie",
    "cocktails Mantes-la-Jolie",
    "happy hour Mantes-la-Jolie",
    "bar lounge Yvelines",
    "terrasse Mantes-la-Jolie",
    "où boire un verre Mantes-la-Jolie",
    "bar Mantes-la-Ville",
    "bar Limay",
    "bar Buchelay",
    "sortie Mantes-la-Jolie",
    "afterwork Mantes-la-Jolie",
    "Le Coq Hardy",
  ],
  authors: [{ name: "Le Coq Hardy" }],
  creator: "Le Coq Hardy",
  publisher: "Le Coq Hardy",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: SITE_URL,
    siteName: "Le Coq Hardy",
    title: "Le Coq Hardy — Bar à Cocktails & Brasserie à Mantes-la-Jolie",
    description:
      "Cocktails signatures, Happy Hour à 6 €, formules brasserie 15–20 € servies en 15 min. Le rendez-vous chic et tropical de Mantes-la-Jolie.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Le Coq Hardy — bar à cocktails et brasserie à Mantes-la-Jolie",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Coq Hardy — Bar & Brasserie à Mantes-la-Jolie",
    description:
      "Cocktails dès 8 €, Happy Hour à 6 €, formules 15–20 € en 15 min. Réservez votre table à Mantes-la-Jolie.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "Restaurant"],
  "@id": SITE_URL + "/#business",
  name: "Le Coq Hardy",
  description:
    "Bar à cocktails et brasserie tropicale chic à Mantes-la-Jolie : cocktails signatures, Happy Hour, formules brasserie servies en 15 minutes, terrasse et soirées DJ.",
  url: SITE_URL,
  telephone: "+33-X-XX-XX-XX-XX",
  priceRange: "€€",
  servesCuisine: ["Cocktails", "Brasserie", "Cuisine française"],
  hasMenu: SITE_URL + "/#brasserie",
  image: SITE_URL + "/og-image.jpg",
  address: {
    "@type": "PostalAddress",
    streetAddress: "25 Place du Marché au Blé",
    addressLocality: "Mantes-la-Jolie",
    postalCode: "78200",
    addressRegion: "Île-de-France",
    addressCountry: "FR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 48.9906,
    longitude: 1.7156,
  },
  areaServed: [
    { "@type": "City", name: "Mantes-la-Jolie" },
    { "@type": "City", name: "Mantes-la-Ville" },
    { "@type": "City", name: "Limay" },
    { "@type": "City", name: "Buchelay" },
    { "@type": "City", name: "Magnanville" },
    { "@type": "City", name: "Rosny-sur-Seine" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday"],
      opens: "17:00",
      closes: "01:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Friday", "Saturday", "Sunday"],
      opens: "16:00",
      closes: "02:00",
    },
  ],
  acceptsReservations: "True",
  sameAs: [],
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
