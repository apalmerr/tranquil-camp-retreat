import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Home, MessageCircle } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const { t } = useTranslation();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title={t("notFound.seoTitle") as string}
        description={t("notFound.sub") as string}
        path={location.pathname}
        noindex
      />
      <Navigation />
      <main className="flex-1 flex items-center justify-center px-6 py-24">
        <div className="text-center max-w-md">
          <p className="text-[11px] uppercase tracking-[0.3em] text-primary mb-6">PALMER</p>
          <h1 className="text-7xl md:text-9xl font-light tracking-tight text-foreground mb-6">404</h1>
          <p className="text-lg text-muted-foreground font-light mb-2">{t("notFound.sub")}</p>
          <p className="text-sm text-muted-foreground/70 font-light mb-10">{t("notFound.hint")}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link to="/">
              <Button className="rounded-md text-[11px] uppercase tracking-wider font-normal">
                <Home className="mr-2 h-3 w-3" />
                {t("notFound.link")}
              </Button>
            </Link>
            <Link to="/contact">
              <Button variant="outline" className="rounded-md text-[11px] uppercase tracking-wider font-normal">
                <MessageCircle className="mr-2 h-3 w-3" />
                {t("notFound.contact")}
              </Button>
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;