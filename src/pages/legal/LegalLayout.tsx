import { ReactNode } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

interface Props {
  eyebrow: string;
  title: string;
  updatedAt: string;
  children: ReactNode;
}

const LegalLayout = ({ eyebrow, title, updatedAt, children }: Props) => (
  <div className="min-h-screen bg-background">
    <Navigation />
    <main className="pt-32 pb-24">
      <div className="container mx-auto px-6 lg:px-12 max-w-3xl">
        <p className="uppercase-label text-muted-foreground mb-4">{eyebrow}</p>
        <h1 className="text-4xl md:text-5xl font-light tracking-tight text-foreground mb-4">
          {title}
        </h1>
        <p className="text-xs font-light text-muted-foreground mb-12">
          Última actualización: {updatedAt}
        </p>
        <div className="space-y-8 text-sm font-light leading-relaxed text-foreground/85 [&_h2]:text-lg [&_h2]:font-medium [&_h2]:text-foreground [&_h2]:mt-10 [&_h2]:mb-3 [&_h3]:text-base [&_h3]:font-medium [&_h3]:text-foreground [&_h3]:mt-6 [&_h3]:mb-2 [&_p]:mb-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-1 [&_a]:underline [&_a]:decoration-primary/40 hover:[&_a]:text-primary">
          {children}
        </div>
      </div>
    </main>
    <Footer />
  </div>
);

export default LegalLayout;