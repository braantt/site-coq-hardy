const SITE_URL = "https://site-coq-hardy.vercel.app";

export default function sitemap() {
  const now = new Date();
  return [
    { url: SITE_URL, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: SITE_URL + "/#cocktails", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: SITE_URL + "/#brasserie", lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: SITE_URL + "/#evenements", lastModified: now, changeFrequency: "weekly", priority: 0.7 },
    { url: SITE_URL + "/#reservation", lastModified: now, changeFrequency: "monthly", priority: 0.9 },
  ];
}
