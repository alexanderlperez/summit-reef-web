import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-aquarium.jpg";
import { Phone, Mail } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Summit Reef
          <span className="block text-coral-light">Aquariums</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
          Cleaning and emergency maintenance for fresh water and saltwater reef aquariums.
        </p>
        
        <div className="flex justify-center">
          <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
            <Phone className="w-5 h-5 mr-2" />
            Schedule Service
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg opacity-90">
            <span className="text-colorado-gold font-semibold">20 Years of Experience, Veteran-Owned and Operated. 🇺🇸</span>
          </p>
        </div>
      </div>
      
      {/* Decorative Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1200 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 60C200 20 400 100 600 60C800 20 1000 100 1200 60V120H0V60Z" fill="hsl(var(--background))" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;