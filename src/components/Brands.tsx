import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

type Brand = {
  name: string;
  slug: string;
  /** Optional custom font-family class to give each wordmark a distinctive look */
  className?: string;
};

const brands: Brand[] = [
  { name: "LINN", slug: "linn", className: "font-serif tracking-[0.35em]" },
  { name: "SONOS", slug: "sonos", className: "font-serif tracking-[0.3em]" },
  { name: "CISCO", slug: "cisco", className: "font-sans tracking-[0.15em]" },
  { name: "KNX", slug: "knx", className: "font-sans tracking-[0.2em] italic" },
  { name: "APPLE", slug: "apple", className: "font-light tracking-[0.3em]" },
  { name: "JVC", slug: "jvc", className: "font-black tracking-[0.1em] italic" },
  { name: "BOSE", slug: "bose", className: "font-black tracking-[0.15em]" },
  { name: "SAMSUNG", slug: "samsung", className: "font-semibold tracking-[0.2em]" },
  { name: "LG", slug: "lg", className: "font-serif tracking-[0.3em]" },
  { name: "UBIQUITI", slug: "ubiquiti", className: "font-light tracking-[0.25em]" },
  { name: "MICROSOFT", slug: "microsoft", className: "font-sans tracking-[0.15em]" },
  { name: "SIGENERGY", slug: "sigenergy", className: "font-semibold tracking-[0.2em]" },
];

const Brands = () => {
  const { t } = useTranslation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.15 });

  return (
    <section id="brands" className="py-24 lg:py-32 bg-muted/40 border-y border-border/60" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-14 lg:mb-20"
        >
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground mb-4 block">
            {t("brands.eyebrow")}
          </span>
          <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground">
            {t("brands.title")}
          </h2>
          <p className="mt-4 text-sm text-muted-foreground max-w-md mx-auto font-light">
            {t("brands.subtitle")}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-px bg-border/60 rounded-md overflow-hidden">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.slug}
              initial={{ opacity: 0, y: 12 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              <Link
                to={`/blog/marca-${brand.slug}`}
                aria-label={t("brands.readAbout", { name: brand.name }) as string}
                className="group flex items-center justify-center h-28 lg:h-32 bg-background hover:bg-accent/40 transition-colors"
              >
                <span
                  className={`text-lg md:text-xl text-muted-foreground/80 group-hover:text-primary transition-colors ${brand.className ?? ""}`}
                >
                  {brand.name}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;