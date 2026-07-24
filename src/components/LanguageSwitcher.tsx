import { useTranslation } from "react-i18next";
import { SUPPORTED_LANGUAGES, type SupportedLanguage } from "@/i18n";

const LABELS: Record<SupportedLanguage, string> = {
  es: "ES",
  en: "EN",
  de: "DE",
};

interface Props {
  variant?: "light" | "dark";
}

const LanguageSwitcher = ({ variant = "light" }: Props) => {
  const { i18n } = useTranslation();
  const current = (i18n.resolvedLanguage || i18n.language || "es").slice(0, 2) as SupportedLanguage;
  const activeCls = variant === "light" ? "text-white" : "text-foreground";
  const inactiveCls = variant === "light" ? "text-white/50 hover:text-white" : "text-muted-foreground hover:text-foreground";

  return (
    <div className="flex items-center gap-2 text-[11px] uppercase tracking-wider font-normal">
      {SUPPORTED_LANGUAGES.map((lng, i) => (
        <div key={lng} className="flex items-center gap-2">
          {i > 0 && <span className={inactiveCls}>/</span>}
          <button
            type="button"
            onClick={() => i18n.changeLanguage(lng)}
            className={`smooth-hover ${current === lng ? activeCls : inactiveCls}`}
            aria-label={`Cambiar idioma a ${LABELS[lng]}`}
          >
            {LABELS[lng]}
          </button>
        </div>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
