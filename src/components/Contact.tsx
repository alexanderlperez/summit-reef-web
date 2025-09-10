import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import coralReefImage from "@/assets/coral-reef.jpg";

const Contact = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to give your aquarium the professional care it deserves? Contact us today!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <Card className="shadow-card border-0 bg-card">
              <CardHeader>
                <CardTitle className="text-2xl text-card-foreground">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-gradient-ocean mr-4">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Phone</h4>
                    <p className="text-muted-foreground">(555) 123-REEF</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-gradient-coral mr-4">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Email</h4>
                    <p className="text-muted-foreground">info@summitreefaquariums.com</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary mr-4">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Service Area</h4>
                    <p className="text-muted-foreground">Front Range & Denver Metro Area</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="p-3 rounded-full bg-primary-light mr-4">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-card-foreground">Hours</h4>
                    <p className="text-muted-foreground">Mon-Fri: 8AM-6PM | Sat: 9AM-4PM</p>
                  </div>
                </div>
              </CardContent>
            </Card>

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

          <div className="relative">
            <img 
              src={coralReefImage} 
              alt="Beautiful coral reef aquarium" 
              className="rounded-lg shadow-card w-full h-auto mb-8"
            />
            
            <div className="bg-card rounded-lg p-8 shadow-card">
              <h3 className="text-2xl font-bold text-card-foreground mb-6">
                Schedule Your Service
              </h3>
              <div className="flex justify-center">
                <Button variant="hero" size="lg" className="w-full max-w-xs">
                  <Phone className="w-5 h-5 mr-2" />
                  Schedule Service
                </Button>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-subtle rounded-lg">
                <p className="text-sm text-muted-foreground text-center">
                  <strong>New customers save 20%</strong> on their first maintenance service!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;