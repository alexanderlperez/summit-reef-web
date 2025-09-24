import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-aquarium.jpg";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Summit Reef
          <span className="block text-coral-light">Aquariums</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
          Tank Cleaning and Emergency Maintenance for Fresh Water and Saltwater Reef Aquariums.
        </p>
        
        <div className="flex justify-center">
          <Button variant="ocean" size="lg" className="px-8 py-4 text-lg">
            <Phone className="w-5 h-5 mr-2" />
            Schedule Service
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg opacity-90">
            <span className="text-colorado-gold font-semibold">{' '}20 Years of Experience, Veteran-Owned and Operated 🇺🇸</span>
          </p>
        </div>
      </div>
  );
};

export default Hero;