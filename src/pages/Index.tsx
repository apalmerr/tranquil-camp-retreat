import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Experience from "@/components/Experience";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title={t("seo.home.title") as string}
        description={t("seo.home.description") as string}
        path="/"
      />
      <Navigation />
      <Hero />
      <Locations />
      <Experience />
      <Brands />
      <Footer />
    </div>
  );
};

export default Index;
