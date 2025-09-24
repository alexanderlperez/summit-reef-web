import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";

const EmergencyService = () => {
  return (
    <section className="w-full bg-gradient-ocean text-white">
      <div className="px-8 py-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-4">Emergency Service</h2>
          <p className="mb-6 opacity-90 text-lg">
            Aquarium emergency? We offer 24/7 emergency support for critical situations.
          </p>
          <Button variant="secondary" size="lg" className="w-full max-w-md" asChild>
            <a href="tel:7205880075">
              <Phone className="w-5 h-5 mr-2" />
              Emergency Hotline: 720-588-0075
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EmergencyService;