import "./globals.css";

const SITE_URL = "https://site-coq-hardy.vercel.app";

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Le Coq Hardy — Bar à Cocktails & Brasserie à Mantes-la-Jolie",
    template: "%s | Le Coq Hardy Mantes-la-Jolie",
  },
  description:
    "Le Coq Hardy, bar à cocktails et brasserie à Mantes-la-Jolie (78200). Venez déjeuner ou dîner : formules brasserie 15–20 € à service rapide, repas complet en 1h. Cocktails dès 8 €, Happy Hour à 6 € et terrasse ensoleillée. Réservez votre table.",
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
      "Cocktails signatures, Happy Hour à 6 €, formules brasserie 15–20 € à service rapide. Le rendez-vous chic et tropical de Mantes-la-Jolie.",
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
      "Cocktails dès 8 €, Happy Hour à 6 €, formules 15–20 € à service rapide. Réservez votre table à Mantes-la-Jolie.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "restaurant",
};

export const viewport = {
  themeColor: "#68825b",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": ["BarOrPub", "Restaurant"],
  "@id": SITE_URL + "/#business",
  name: "Le Coq Hardy",
  description:
    "Bar à cocktails et brasserie tropicale chic à Mantes-la-Jolie : cocktails signatures, Happy Hour, formules brasserie à service rapide et terrasse ensoleillée.",
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

const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Faut-il réserver une table au Coq Hardy ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "La réservation est conseillée, surtout le week-end et en soirée. Vous pouvez réserver directement en ligne depuis notre site. Les groupes sont les bienvenus sur demande.",
      },
    },
    {
      "@type": "Question",
      name: "Le Coq Hardy est-il un bar ou une brasserie ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Les deux. Le midi et le soir, nous servons des formules brasserie de 15 à 20 € avec un service rapide — un repas complet en une heure. Et à tout moment, vous pouvez profiter de nos cocktails signatures sur la terrasse.",
      },
    },
    {
      "@type": "Question",
      name: "Quels sont les horaires du Happy Hour ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Notre Happy Hour a lieu tous les jours de 18h à 20h : tous les cocktails sont à 6 €.",
      },
    },
    {
      "@type": "Question",
      name: "Où se situe Le Coq Hardy et comment y accéder ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nous sommes au 25 Place du Marché au Blé, au cœur de Mantes-la-Jolie (78200), à quelques minutes de la gare et accessible depuis Mantes-la-Ville, Limay et Buchelay.",
      },
    },
    {
      "@type": "Question",
      name: "Y a-t-il une terrasse ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Oui, notre terrasse ensoleillée à l'ambiance tropicale est ouverte en saison, parfaite pour un déjeuner, un verre au coucher du soleil ou un afterwork.",
      },
    },
    {
      "@type": "Question",
      name: "Proposez-vous des soirées et événements ?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Pour le moment, notre rendez-vous régulier est le Happy Hour quotidien de 18h à 20h. De nouvelles soirées et animations arriveront au fur et à mesure : la programmation sera communiquée plus tard sur nos réseaux sociaux.",
      },
    },
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }}
        />
      </head>
      <body className="font-body">{children}</body>
    </html>
  );
}
