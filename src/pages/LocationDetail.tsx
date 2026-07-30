import { useParams, useNavigate, Link } from "react-router-dom";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useState } from "react";
import { getLocationById } from "@/data/locations";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

const LocationDetail = () => {
  const { t } = useTranslation();
  const { id } = useParams();
  const navigate = useNavigate();
  const service = id ? getLocationById(id) : null;
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-light mb-4">{t("locationDetail.notFound")}</h1>
          <Button onClick={() => navigate("/")} variant="outline" size="sm" className="text-xs font-light">
            {t("locationDetail.returnHome")}
          </Button>
        </div>
      </div>
    );
  }

  const allImages = [service.image, ...service.images];
  const name = t(`locations.list.${service.id}.name`) as string;
  const tagline = t(`locations.list.${service.id}.location`) as string;
  const description = t(`locations.list.${service.id}.description`) as string;
  const amenityTexts = t(`locations.list.${service.id}.amenities`, { returnObjects: true }) as { label: string; description: string }[];
  const detailTexts = t(`locations.list.${service.id}.details`, { returnObjects: true }) as string[];
  const amenities = amenityTexts.map((a, i) => ({ ...a, icon: service.amenityIcons[i] }));
  const Icon = service.icon;

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    provider: {
      "@type": "LocalBusiness",
      name: "ARNAU PALMER",
      areaServed: "Mallorca, Islas Baleares, España",
    },
    serviceType: tagline,
  };

  const nextImage = () => setCurrentImageIndex((p) => (p + 1) % allImages.length);
  const prevImage = () => setCurrentImageIndex((p) => (p - 1 + allImages.length) % allImages.length);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title={`${name} — PALMER`}
        description={description}
        path={`/service/${service.id}`}
        type="article"
        image={service.image}
        jsonLd={serviceJsonLd}
      />
      <Navigation />

      <div className="relative w-full h-[50vh] overflow-hidden">
        <motion.img
          src={allImages[0]}
          alt={name}
          style={{ y }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-[120%] object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main>
        <div className="container mx-auto px-4 sm:px-6 lg:px-12 py-12 lg:py-16 max-w-full overflow-hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => navigate("/services")}
            className="mb-8 text-[11px] uppercase tracking-wider font-normal"
          >
            <ArrowLeft className="mr-2 h-3 w-3" />
            {t("locationDetail.back")}
          </Button>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-10"
          >
            <div className="flex items-center gap-2 text-xs text-muted-foreground mb-3">
              <Icon className="h-4 w-4 text-primary" />
              <span className="font-light">{tagline}</span>
            </div>
            <h1 className="text-3xl md:text-4xl font-light mb-4 tracking-tight">{name}</h1>
            <p className="text-sm text-muted-foreground leading-relaxed font-light max-w-2xl">{description}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full h-[50vh] lg:h-[60vh] mb-16 rounded-lg overflow-hidden max-w-full"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentImageIndex}
                src={allImages[currentImageIndex]}
                alt={`${name} ${currentImageIndex + 1}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>
            <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-md border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
              <ChevronRight className="h-6 w-6" />
            </button>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {allImages.map((_, index) => (
                <button key={index} onClick={() => setCurrentImageIndex(index)} className={`w-2 h-2 rounded-full transition-colors ${index === currentImageIndex ? 'bg-white' : 'bg-white/40'}`} />
              ))}
            </div>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-sm text-white text-xs font-light">
              {currentImageIndex + 1} / {allImages.length}
            </div>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            <div className="lg:col-span-2 space-y-10">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>
                <Card className="p-8 border border-border shadow-soft">
                  <h2 className="text-[11px] uppercase tracking-wider font-normal mb-6">{t("locationDetail.amenities")}</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    {amenities.map((amenity, index) => {
                      const A = amenity.icon;
                      return (
                        <div key={index} className="flex gap-4">
                          <div className="flex-shrink-0">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                              <A className="h-4 w-4 text-primary" />
                            </div>
                          </div>
                          <div>
                            <h3 className="text-sm font-normal mb-1">{amenity.label}</h3>
                            <p className="text-xs text-muted-foreground font-light">{amenity.description}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </Card>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>
                <Card className="p-8 border border-border shadow-soft">
                  <h2 className="text-[11px] uppercase tracking-wider font-normal mb-6">{t("locationDetail.included")}</h2>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {detailTexts.map((detail, index) => (
                      <li key={index} className="flex items-start gap-3 text-sm text-muted-foreground font-light">
                        <span className="text-primary mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            </div>

            <div className="lg:col-span-1">
              <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="sticky top-24">
                <Card className="p-8 border border-border shadow-soft">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-normal">{name}</p>
                      <p className="text-xs text-muted-foreground font-light">{tagline}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground font-light mb-6 leading-relaxed">{t("locationDetail.ctaCopy")}</p>
                  <Link to="/contact">
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground rounded-md smooth-hover text-[11px] uppercase tracking-wider font-normal">
                      <Mail className="mr-2 h-4 w-4" />
                      {t("locationDetail.contactCta")}
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LocationDetail;