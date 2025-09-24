import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-aquarium.jpg";
import aquariumBg from "@/assets/hero-aquarium-new.jpg";
import summitReefLogo from "@/assets/summit-reef-logo.png";
import { Phone, Mail } from "lucide-react";
import usFlag from "@/assets/us-flag.png";

const Hero = () => {
  const handleScheduleService = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${aquariumBg})` }}
      ></div>
      <div className="absolute inset-0 bg-black/55"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <div className="mt-4 mb-8 flex justify-center">
          <img 
            src={summitReefLogo} 
            alt="Summit Reef Aquariums Logo" 
            className="w-32 h-32 md:w-40 md:h-40 block"
          />
        </div>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tight">
          Summit Reef
          <span className="block text-coral">Aquariums</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto leading-relaxed opacity-95">
          Tank Cleaning and Emergency Maintenance for Fresh Water and Saltwater Reef Aquariums.
        </p>
        
        <div className="flex justify-center">
          <Button variant="ocean" size="lg" className="px-8 py-4 text-lg" onClick={handleScheduleService}>
            <Phone className="w-5 h-5 mr-2" />
            Schedule Service
          </Button>
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg opacity-90">
            <span className="text-colorado-gold font-semibold">{' '}20 Years of Experience, Veteran-Owned and Operated <img src={usFlag} alt="US Flag" className="inline w-4 h-3 ml-1" /></span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;