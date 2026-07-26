import { MessageCircle } from "lucide-react";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";

const WHATSAPP_NUMBER = "34711536425";

const WhatsAppFloat = () => {
  const { t } = useTranslation();
  const label = t("whatsapp.aria") as string;
  return (
    <motion.a
      href={`https://wa.me/${WHATSAPP_NUMBER}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      initial={{ opacity: 0, scale: 0.6 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 200 }}
      className="fixed bottom-5 right-5 z-50 group"
    >
      <span className="pointer-events-none absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping" aria-hidden />
      <span className="relative flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] text-white shadow-lg shadow-[#25D366]/40 hover:scale-110 transition-transform">
        <MessageCircle className="h-6 w-6" strokeWidth={2} />
      </span>
      <span className="pointer-events-none absolute right-full mr-3 top-1/2 -translate-y-1/2 whitespace-nowrap rounded-md bg-foreground text-background text-[11px] uppercase tracking-wider font-normal px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
        {t("whatsapp.tooltip")}
      </span>
    </motion.a>
  );
};

export default WhatsAppFloat;