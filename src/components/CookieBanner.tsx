import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const STORAGE_KEY = "palmer.cookie-consent";

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (!window.localStorage.getItem(STORAGE_KEY)) setVisible(true);
  }, []);

  const decide = (value: "accepted" | "rejected") => {
    window.localStorage.setItem(STORAGE_KEY, value);
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-4 bottom-4 z-50 md:inset-x-auto md:right-6 md:bottom-6 md:max-w-md">
      <div className="rounded-lg border border-border bg-card/95 backdrop-blur-md shadow-lg p-5">
        <p className="text-xs font-light text-foreground leading-relaxed">
          Usamos cookies estrictamente necesarias para el funcionamiento del sitio y, con tu permiso,
          cookies de medición para mejorar la experiencia. Puedes aceptarlas, rechazarlas o consultar
          nuestra{" "}
          <Link to="/cookies" className="underline hover:text-primary">
            Política de Cookies
          </Link>
          .
        </p>
        <div className="mt-4 flex flex-wrap gap-2 justify-end">
          <Button variant="ghost" size="sm" onClick={() => decide("rejected")}>
            Rechazar
          </Button>
          <Button size="sm" onClick={() => decide("accepted")}>
            Aceptar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default CookieBanner;