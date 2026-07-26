import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";

const SITE_URL = "https://tranquil-camp-retreat.lovable.app";
const LANGS = ["es", "en", "de"];

interface SEOProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  image?: string;
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
  noindex?: boolean;
}

const SEO = ({ title, description, path, type = "website", image, jsonLd, noindex }: SEOProps) => {
  const { i18n } = useTranslation();
  const canonical = `${SITE_URL}${path}`;
  const fullTitle = title.includes("PALMER") ? title : `${title} — PALMER`;
  const ogImage = image ? (image.startsWith("http") ? image : `${SITE_URL}${image}`) : undefined;

  return (
    <Helmet htmlAttributes={{ lang: i18n.language || "es" }}>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex, nofollow" />}
      <link rel="canonical" href={canonical} />
      {LANGS.map((l) => (
        <link key={l} rel="alternate" hrefLang={l} href={`${canonical}?lang=${l}`} />
      ))}
      <link rel="alternate" hrefLang="x-default" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonical} />
      <meta property="og:site_name" content="PALMER" />
      <meta property="og:locale" content={i18n.language === "en" ? "en_US" : i18n.language === "de" ? "de_DE" : "es_ES"} />
      {ogImage && <meta property="og:image" content={ogImage} />}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      {ogImage && <meta name="twitter:image" content={ogImage} />}
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(Array.isArray(jsonLd) ? jsonLd : [jsonLd])}</script>
      )}
    </Helmet>
  );
};

export default SEO;