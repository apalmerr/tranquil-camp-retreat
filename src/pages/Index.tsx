import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Locations from "@/components/Locations";
import Experience from "@/components/Experience";
import Brands from "@/components/Brands";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navigation />
      <Hero />
      <Locations />
      <Experience />
      <Brands />
      <Footer />
    </div>
  );
};

export default Index;
