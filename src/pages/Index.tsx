import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Experience from "@/components/Experience";
import Brands from "@/components/Brands";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { useTranslation } from "react-i18next";

const Index = () => {
  const { t } = useTranslation();
  const faqItems = t("faq.items", { returnObjects: true }) as { q: string; a: string }[];
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqItems.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
  return (
    <div className="min-h-screen overflow-x-hidden">
      <SEO
        title={t("seo.home.title") as string}
        description={t("seo.home.description") as string}
        path="/"
        jsonLd={faqJsonLd}
      />
      <Navigation />
      <Hero />
      <Locations />
      <Experience />
      <Brands />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
