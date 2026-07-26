import { useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { User, Mail, MessageSquare, FileText, Instagram, Linkedin, Phone, MessageCircle } from "lucide-react";
import palmerMark from "@/assets/palmer-mark-color.png.asset.json";
import { useTranslation } from "react-i18next";
import SEO from "@/components/SEO";

// Contact channels — edit these values to update all links across the site.
const CONTACT_INFO = {
  email: "info@palmerit.es",
  phone: "+34711536425",
  phoneDisplay: "+34 711 536 425",
  whatsapp: "34711536425", // digits only, no '+'
  instagram: "https://www.instagram.com/palmer.it",
  // TODO: paste your LinkedIn URL here when ready
  linkedin: "",
};

const Contact = () => {
  const { t } = useTranslation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const form = e.currentTarget;
      const data = new FormData(form);
      const body = new URLSearchParams(data as never).toString();

      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body,
      });

      if (!response.ok) throw new Error(`Netlify returned ${response.status}`);

      toast({
        title: t("contact.sent") as string,
        description: t("contact.sentDesc") as string,
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (err) {
      console.error("Netlify form submit failed:", err);
      toast({
        title: t("contact.errorTitle") as string,
        description: t("contact.errorDesc") as string,
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const whatsappUrl = `https://wa.me/${CONTACT_INFO.whatsapp}`;
  const channels = [
    {
      key: "instagram",
      href: CONTACT_INFO.instagram,
      external: true,
      Icon: Instagram,
      value: "@palmer.it",
    },
    {
      key: "linkedin",
      href: CONTACT_INFO.linkedin || "#",
      external: true,
      Icon: Linkedin,
      value: CONTACT_INFO.linkedin ? "LinkedIn" : "—",
      disabled: !CONTACT_INFO.linkedin,
    },
    {
      key: "phone",
      href: `tel:${CONTACT_INFO.phone}`,
      Icon: Phone,
      value: CONTACT_INFO.phoneDisplay,
    },
    {
      key: "whatsapp",
      href: whatsappUrl,
      external: true,
      Icon: MessageCircle,
      value: CONTACT_INFO.phoneDisplay,
    },
    {
      key: "email",
      href: `mailto:${CONTACT_INFO.email}`,
      Icon: Mail,
      value: CONTACT_INFO.email,
    },
  ];

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <SEO
        title={t("seo.contact.title") as string}
        description={t("seo.contact.description") as string}
        path="/contact"
      />
      <Navigation />

      {/* Hero with PALMER logo */}
      <div className="relative w-full h-[50vh] overflow-hidden bg-foreground flex items-center justify-center">
        <motion.img
          src={palmerMark.url}
          alt="PALMER"
          style={{ y }}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          className="relative w-40 md:w-56 lg:w-64 h-auto"
        />
      </div>

      <main className="py-24 lg:py-32 px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-md mx-auto"
        >
          <div className="text-center mb-16">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground mb-4 block">
              {t("contact.eyebrow")}
            </span>
            <h1 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-4">
              {t("contact.title")}
            </h1>
            <p className="text-sm text-muted-foreground font-light">
              {t("contact.subtitle")}
            </p>
          </div>

          <Card className="p-8 lg:p-10 shadow-soft border border-border bg-card">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <input type="hidden" name="form-name" value="contact" />
              <div className="hidden">
                <Label htmlFor="bot-field">No completar este campo</Label>
                <Input id="bot-field" name="bot-field" />
              </div>

              <div>
                <Label htmlFor="name" className="flex items-center gap-1.5 mb-3 text-card-foreground text-[11px] uppercase tracking-wider font-normal">
                  <User className="h-3 w-3" />
                  {t("contact.name")}
                </Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  maxLength={100}
                  className="rounded-md text-sm font-light"
                />
              </div>

              <div>
                <Label htmlFor="email" className="flex items-center gap-1.5 mb-3 text-card-foreground text-[11px] uppercase tracking-wider font-normal">
                  <Mail className="h-3 w-3" />
                  {t("contact.email")}
                </Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  maxLength={255}
                  className="rounded-md text-sm font-light"
                />
              </div>

              <div>
                <Label htmlFor="subject" className="flex items-center gap-1.5 mb-3 text-card-foreground text-[11px] uppercase tracking-wider font-normal">
                  <MessageSquare className="h-3 w-3" />
                  {t("contact.subject")}
                </Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  maxLength={200}
                  className="rounded-md text-sm font-light"
                />
              </div>

              <div>
                <Label htmlFor="message" className="flex items-center gap-1.5 mb-3 text-card-foreground text-[11px] uppercase tracking-wider font-normal">
                  <FileText className="h-3 w-3" />
                  {t("contact.message")}
                </Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  maxLength={1000}
                  rows={5}
                  className="rounded-md resize-none text-sm font-light"
                />
              </div>

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-md bg-primary text-primary-foreground hover:bg-primary/90 text-[11px] uppercase tracking-wider font-normal"
              >
                {isSubmitting ? t("contact.sending") : t("contact.send")}
              </Button>
            </form>
          </Card>
        </motion.div>

        {/* Social / direct channels */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto mt-24 lg:mt-32"
        >
          <div className="text-center mb-12">
            <span className="text-[11px] uppercase tracking-wider text-muted-foreground mb-4 block">
              {t("contact.socialEyebrow")}
            </span>
            <h2 className="text-2xl md:text-3xl font-light tracking-tight text-foreground mb-4">
              {t("contact.socialTitle")}
            </h2>
            <p className="text-sm text-muted-foreground font-light max-w-lg mx-auto">
              {t("contact.socialSubtitle")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {channels.map(({ key, href, Icon, value, external, disabled }) => {
              const content = (
                <Card
                  className={`p-6 h-full flex items-start gap-4 border border-border bg-card transition-all ${
                    disabled
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:border-primary/50 hover:shadow-soft"
                  }`}
                >
                  <div className="rounded-md bg-primary/10 text-primary p-2.5 flex-shrink-0">
                    <Icon className="h-4 w-4" />
                  </div>
                  <div className="min-w-0">
                    <div className="text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      {t(`contact.channels.${key}`)}
                    </div>
                    <div className="text-sm font-light text-card-foreground truncate">
                      {value}
                    </div>
                    <div className="text-xs text-muted-foreground font-light mt-1">
                      {t(`contact.channels.${key}Desc`)}
                    </div>
                  </div>
                </Card>
              );

              if (disabled) {
                return <div key={key}>{content}</div>;
              }

              return (
                <a
                  key={key}
                  href={href}
                  {...(external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="block"
                >
                  {content}
                </a>
              );
            })}
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;
