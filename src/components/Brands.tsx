import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import appleLogo from "@/assets/brands/apple-new.png.asset.json";
import boseLogo from "@/assets/brands/bose-new.png.asset.json";
import ciscoLogo from "@/assets/brands/cisco-new.svg.asset.json";
import jvcLogo from "@/assets/brands/jvc-new.svg.asset.json";
import knxLogo from "@/assets/brands/knx-new.svg.asset.json";
import linnLogo from "@/assets/brands/linn.png.asset.json";
import microsoftLogo from "@/assets/brands/microsoft.webp.asset.json";
import samsungLogo from "@/assets/brands/samsung.png.asset.json";
import sonosLogo from "@/assets/brands/sonos.png.asset.json";
import ubiquitiLogo from "@/assets/brands/ubiquiti.png.asset.json";
import lgLogo from "@/assets/brands/lg.png.asset.json";
import sigenergyLogo from "@/assets/brands/sigenergy.png.asset.json";

type Brand = {
  name: string;
  slug: string;
  /** CDN URL for the brand logo image. If missing, falls back to a wordmark. */
  logo?: string;
  /** Optional custom font-family class used only for the wordmark fallback */
  className?: string;
};

const brands: Brand[] = [
  { name: "LINN", slug: "linn", logo: linnLogo.url },
  { name: "SONOS", slug: "sonos", logo: sonosLogo.url },
  { name: "CISCO", slug: "cisco", logo: ciscoLogo.url },
  { name: "KNX", slug: "knx", logo: knxLogo.url },
  { name: "APPLE", slug: "apple", logo: appleLogo.url },
  { name: "JVC", slug: "jvc", logo: jvcLogo.url },
  { name: "BOSE", slug: "bose", logo: boseLogo.url },
  { name: "SAMSUNG", slug: "samsung", logo: samsungLogo.url },
  { name: "LG", slug: "lg", logo: lgLogo.url },
  { name: "UBIQUITI", slug: "ubiquiti", logo: ubiquitiLogo.url },
  { name: "MICROSOFT", slug: "microsoft", logo: microsoftLogo.url },
  { name: "SIGENERGY", slug: "sigenergy", logo: sigenergyLogo.url },
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
                {brand.logo ? (
                  <img
                    src={brand.logo}
                    alt={brand.name}
                    loading="lazy"
                    className="h-8 md:h-10 w-auto max-w-[140px] md:max-w-[170px] object-contain opacity-70 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-300"
                  />
                ) : (
                  <span
                    className={`text-lg md:text-xl text-muted-foreground/80 group-hover:text-primary transition-colors ${brand.className ?? ""}`}
                  >
                    {brand.name}
                  </span>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Brands;