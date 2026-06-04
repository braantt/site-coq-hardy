const SITE_URL = "https://site-coq-hardy.vercel.app";

export default function robots() {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: SITE_URL + "/sitemap.xml",
  };
}
