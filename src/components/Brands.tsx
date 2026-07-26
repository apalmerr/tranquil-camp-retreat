import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

type Brand = {
  name: string;
  slug: string;
  logo: string;
  /** Optional height class for logos that look visually smaller due to their shape. */
  sizeClass?: string;
};

const brands: Brand[] = [
  { name: "LINN", slug: "linn", logo: "/brands/linn.png", sizeClass: "h-12 md:h-14" },
  { name: "SONOS", slug: "sonos", logo: "/brands/sonos.png" },
  { name: "CISCO", slug: "cisco", logo: "/brands/cisco.svg" },
  { name: "KNX", slug: "knx", logo: "/brands/knx.svg" },
  { name: "APPLE", slug: "apple", logo: "/brands/apple.png", sizeClass: "h-12 md:h-14" },
  { name: "JVC", slug: "jvc", logo: "/brands/jvc.svg" },
  { name: "BOSE", slug: "bose", logo: "/brands/bose.png" },
  { name: "SAMSUNG", slug: "samsung", logo: "/brands/samsung.png" },
  { name: "LG", slug: "lg", logo: "/brands/lg.png" },
  { name: "UBIQUITI", slug: "ubiquiti", logo: "/brands/ubiquiti.png" },
  { name: "MICROSOFT", slug: "microsoft", logo: "/brands/microsoft.png" },
  { name: "SIGENERGY", slug: "sigenergy", logo: "/brands/sigenergy.png" },
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
                <img
                  src={brand.logo}
                  alt={brand.name}
                  loading="lazy"
                  className={`${brand.sizeClass ?? "h-8 md:h-10"} w-auto max-w-[140px] md:max-w-[170px] object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300`}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;
