import { motion, useScroll, useTransform } from "framer-motion";
import { Leaf, Heart, Compass, Mountain, Users, TreePine } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import bannerImage from "@/assets/banner-about.jpg";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

const valueIcons = [Leaf, Heart, Compass, Mountain, Users, TreePine];

const About = () => {
  const { t } = useTranslation();
  const storyParas = t("about.story", { returnObjects: true }) as string[];
  const whyParas = t("about.why", { returnObjects: true }) as string[];
  const valueTexts = t("about.values", { returnObjects: true }) as { title: string; description: string }[];
  const values = valueTexts.map((v, i) => ({ ...v, icon: valueIcons[i] }));
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title={t("seo.about.title") as string}
        description={t("seo.about.description") as string}
        path="/about"
      />
      <Navigation />
      
      {/* Hero Image with Parallax */}
      <div className="relative w-full h-[50vh] overflow-hidden">
        <motion.img
          src={bannerImage}
          alt="Serene lake surrounded by nature"
          style={{ y }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="absolute inset-0 w-full h-[120%] object-cover"
        / loading="lazy" decoding="async">
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <main>
        {/* Our Story Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{t("about.eyebrow")}</span>
              <h1 className="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-8">{t("about.title")}</h1>
              
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                {storyParas.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Why Off-Grid Matters Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-12 bg-secondary/30">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{t("about.whyEyebrow")}</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-2 mb-8">{t("about.whyTitle")}</h2>
              
              <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                {whyParas.map((p, i) => (<p key={i}>{p}</p>))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-24 lg:py-32 px-6 lg:px-12">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <span className="text-[11px] uppercase tracking-wider text-muted-foreground">{t("about.valuesEyebrow")}</span>
              <h2 className="text-2xl md:text-3xl font-light tracking-tight mt-2">{t("about.valuesTitle")}</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-8 border border-border rounded-lg bg-card shadow-soft hover:shadow-md transition-shadow duration-300"
                >
                  <value.icon className="h-6 w-6 text-primary mb-4" />
                  <h3 className="text-lg font-light tracking-tight mb-3">{value.title}</h3>
                  <p className="text-sm text-muted-foreground font-light leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;