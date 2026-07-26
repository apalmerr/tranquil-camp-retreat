import { writeFileSync, readdirSync } from "fs";
import { resolve } from "path";

const BASE_URL = "https://palmerit.es";
const LANGS = ["es", "en", "de"];

const services = ["redes", "domotica", "audiovisuales", "gestion-documental", "fotovoltaicas"];

const blogDir = resolve("src/content/blog");
const blogSlugs = readdirSync(blogDir)
  .filter((f) => f.endsWith(".md") && f.toLowerCase() !== "readme.md")
  .map((f) => f.replace(/\.md$/, ""));

interface Entry { path: string; changefreq?: string; priority?: string; }

const entries: Entry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/services", changefreq: "monthly", priority: "0.9" },
  { path: "/about", changefreq: "monthly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/cookies", changefreq: "yearly", priority: "0.2" },
  { path: "/privacidad", changefreq: "yearly", priority: "0.2" },
  { path: "/aviso-legal", changefreq: "yearly", priority: "0.2" },
  ...services.map((s) => ({ path: `/service/${s}`, changefreq: "monthly", priority: "0.7" })),
  ...blogSlugs.map((s) => ({ path: `/blog/${s}`, changefreq: "monthly", priority: "0.6" })),
];

const xhtml = 'xmlns:xhtml="http://www.w3.org/1999/xhtml"';
const urls = entries.map((e) => {
  const alternates = LANGS.map(
    (l) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${BASE_URL}${e.path}?lang=${l}" />`
  ).join("\n");
  return [
    "  <url>",
    `    <loc>${BASE_URL}${e.path}</loc>`,
    e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
    e.priority ? `    <priority>${e.priority}</priority>` : null,
    alternates,
    `    <xhtml:link rel="alternate" hreflang="x-default" href="${BASE_URL}${e.path}" />`,
    "  </url>",
  ].filter(Boolean).join("\n");
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" ${xhtml}>`,
  ...urls,
  "</urlset>",
].join("\n");

writeFileSync(resolve("public/sitemap.xml"), xml);
console.log(`sitemap.xml written (${entries.length} entries)`);