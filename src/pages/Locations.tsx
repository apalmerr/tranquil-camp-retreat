import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bannerImage from "@/assets/banner-services.jpg";
import { locations } from "@/data/locations";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

const Locations = () => {
  const { t } = useTranslation();
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title={t("seo.locations.title") as string}
        description={t("seo.locations.description") as string}
        path="/services"
      />
      <Navigation />

      {/* Hero Image with Parallax */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <motion.img
          src={bannerImage}
          alt="Locations banner"
          style={{ y }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-[120%] object-cover"
        loading="lazy" decoding="async" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main className="py-24 lg:py-32 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground mb-4 block">
              {t("locations.allEyebrow")}
            </span>
            <h1 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-4">
              {t("locations.allTitle")}
            </h1>
            <p className="text-sm text-muted-foreground font-light max-w-md mx-auto">
              {t("locations.allSubtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {locations.map((location, index) => {
              const name = t(`locations.list.${location.id}.name`) as string;
              const tagline = t(`locations.list.${location.id}.location`) as string;
              const features = t(`locations.list.${location.id}.features`, { returnObjects: true }) as string[];
              const Icon = location.icon;
              return (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden border border-border bg-card shadow-soft hover:shadow-lg transition-shadow duration-300">
                  <Link to={`/service/${location.id}`} className="block">
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={location.image}
                        alt={name}
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                      loading="lazy" decoding="async" />
                      <div className="absolute top-3 right-3 bg-card/95 backdrop-blur-sm p-2 rounded-md flex items-center gap-1">
                        <Icon className="h-4 w-4 text-primary" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-base font-normal mb-1 text-card-foreground tracking-tight">
                        {name}
                      </h2>
                      <p className="text-muted-foreground mb-4 text-xs font-light">{tagline}</p>
                      <div className="flex flex-wrap gap-1.5 mb-5">
                        {features.map((feature) => (
                          <span
                            key={feature}
                            className="text-[10px] uppercase tracking-wide px-2 py-1 bg-accent text-accent-foreground rounded-sm font-light"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center justify-end">
                        <Button variant="ghost" size="sm" className="text-primary hover:text-primary/80 text-xs font-light">
                          {t("locations.viewDetails")}
                          <ArrowRight className="ml-1 h-3 w-3" />
                        </Button>
                      </div>
                    </div>
                  </Link>
                </Card>
              </motion.div>
              );
            })}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Locations;
