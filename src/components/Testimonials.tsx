import { motion } from "framer-motion";
import { Quote } from "lucide-react";
import { Card } from "@/components/ui/card";
import { useTranslation } from "react-i18next";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

const Testimonials = () => {
  const { t } = useTranslation();
  const items = t("testimonials.items", { returnObjects: true }) as Testimonial[];

  return (
    <section className="py-24 lg:py-32 px-6 lg:px-12 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground mb-4 block">
            {t("testimonials.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">
            {t("testimonials.title")}
          </h2>
          <p className="text-sm text-muted-foreground font-light max-w-lg mx-auto">
            {t("testimonials.subtitle")}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {items.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <Card className="p-8 h-full border border-border bg-card hover:border-primary/40 transition-colors">
                <Quote className="h-6 w-6 text-primary/60 mb-4" />
                <p className="text-sm text-foreground font-light leading-relaxed mb-6">
                  "{item.quote}"
                </p>
                <div className="border-t border-border pt-4">
                  <p className="text-sm font-normal text-foreground">{item.author}</p>
                  <p className="text-xs text-muted-foreground font-light">{item.role}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;