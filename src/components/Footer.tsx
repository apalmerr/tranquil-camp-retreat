import { Instagram, Facebook, Linkedin, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import palmerLogo from "@/assets/palmer-logo.png.asset.json";
const Footer = () => {
  const { t } = useTranslation();
  return <footer className="bg-foreground text-background py-20 lg:py-24">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col gap-10 lg:gap-12">
          {/* Brand Row */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={palmerLogo.url} alt={t("nav.brand") as string} className="h-6 w-auto object-contain" />
            </div>
            <p className="text-background/70 text-xs font-light leading-relaxed max-w-xs">
              {t("footer.tagline")}
            </p>
          </div>

          {/* Pages Row - Two Columns on Mobile */}
          <div>
            <h4 className="text-sm font-medium mb-4">{t("footer.pages")}</h4>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-3">
              <li>
                <Link to="/" className="text-background/70 hover:text-background smooth-hover text-xs font-light">
                  {t("footer.home")}
                </Link>
              </li>
              <li>
                <Link to="/locations" className="text-background/70 hover:text-background smooth-hover text-xs font-light">
                  {t("footer.services")}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-background/70 hover:text-background smooth-hover text-xs font-light">
                  {t("footer.about")}
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-background/70 hover:text-background smooth-hover text-xs font-light">
                  {t("footer.blog")}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-background/70 hover:text-background smooth-hover text-xs font-light">
                  {t("footer.contact")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Row */}
          <div>
            <h4 className="text-sm font-medium mb-4">{t("footer.contactUs")}</h4>
            <div className="flex flex-col gap-2 mb-8">
              <a href="mailto:info@palmer.es" className="text-background/70 hover:text-background smooth-hover text-xs font-light flex items-center gap-2">
                <Mail className="h-3 w-3" />
                info@palmer.es
              </a>
              <p className="text-background/70 text-xs font-light">
                {t("footer.hours")}
              </p>
              <p className="text-background/70 text-xs font-light">Mallorca, Baleares</p>
            </div>

            <h4 className="text-sm font-medium mb-4">{t("footer.follow")}</h4>
            <div className="flex items-center gap-4">
              <a href="#" className="text-background/70 hover:text-background smooth-hover">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="#" className="text-background/70 hover:text-background smooth-hover">
                <Facebook className="h-4 w-4" />
              </a>
              <a href="#" className="text-background/70 hover:text-background smooth-hover">
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 mt-12 text-center text-background/50 text-xs font-light">
          <p>{t("footer.rights")}</p>
          <ul className="mt-3 flex flex-wrap justify-center gap-x-6 gap-y-2">
            <li>
              <Link to="/aviso-legal" className="hover:text-background smooth-hover">
                Aviso Legal
              </Link>
            </li>
            <li>
              <Link to="/privacidad" className="hover:text-background smooth-hover">
                Privacidad
              </Link>
            </li>
            <li>
              <Link to="/cookies" className="hover:text-background smooth-hover">
                Cookies
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>;
};
export default Footer;