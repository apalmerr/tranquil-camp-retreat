import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FaqItem {
  q: string;
  a: string;
}

const FAQ = () => {
  const { t } = useTranslation();
  const items = t("faq.items", { returnObjects: true }) as FaqItem[];

  return (
    <section id="faq" className="py-24 lg:py-32 px-6 lg:px-12">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="text-[11px] uppercase tracking-wider text-muted-foreground mb-4 block">
            {t("faq.eyebrow")}
          </span>
          <h2 className="text-3xl md:text-4xl font-light tracking-tight text-foreground mb-4">
            {t("faq.title")}
          </h2>
          <p className="text-sm text-muted-foreground font-light">{t("faq.subtitle")}</p>
        </motion.div>

        <Accordion type="single" collapsible className="w-full">
          {items.map((item, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left text-sm font-normal">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-muted-foreground font-light leading-relaxed">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;