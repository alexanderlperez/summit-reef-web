import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone } from "lucide-react";

const EmergencyService = () => {
  return (
    <section className="py-12 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="max-w-md mx-auto">
          <Card className="shadow-card border-0 bg-gradient-ocean text-white">
            <CardHeader>
              <CardTitle className="text-2xl">Emergency Service</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4 opacity-90">
                Aquarium emergency? We offer 24/7 emergency support for critical situations.
              </p>
              <Button variant="secondary" size="lg" className="w-full">
                <Phone className="w-5 h-5 mr-2" />
                Emergency Hotline: (555) 911-REEF
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default EmergencyService;