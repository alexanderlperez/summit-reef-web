import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Droplets, Fish, Settings, CheckCircle } from "lucide-react";
import coralAquariumImage from "@/assets/coral-aquarium-new.jpg";
const Services = () => {
  const services = [{
    icon: <Droplets className="w-8 h-8 text-primary" />,
    title: "Water Quality Management",
    description: "Complete water testing, balancing, and quality optimization for healthy marine life.",
    features: ["pH & salinity testing", "Chemical balancing", "Water changes", "Quality monitoring"]
  }, {
    icon: <Fish className="w-8 h-8 text-coral" />,
    title: "Marine and Freshwater Life Care",
    description: "Expert care for your fish, coral, and other marine inhabitants.",
    features: ["Health assessments", "Feeding programs", "Disease prevention", "Species consulting"]
  }, {
    icon: <Settings className="w-8 h-8 text-primary-light" />,
    title: "Equipment Maintenance",
    description: "Professional maintenance of all aquarium systems and equipment.",
    features: ["Filter cleaning", "Pump maintenance", "Lighting optimization", "System upgrades"]
  }];
  return <section className="py-20 bg-gradient-subtle">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive aquarium maintenance solutions tailored to your specific needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => <Card key={index} className="shadow-card hover:shadow-ocean transition-all duration-300 border-0 bg-card">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 rounded-full bg-gradient-subtle w-fit">
                  {service.icon}
                </div>
                <CardTitle className="text-2xl text-card-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6 text-center">
                  {service.description}
                </p>
                <ul className="space-y-3">
                  {service.features.map((feature, featureIndex) => <li key={featureIndex} className="flex items-center text-card-foreground">
                      <CheckCircle className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                      {feature}
                    </li>)}
                </ul>
              </CardContent>
            </Card>)}
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Why Choose Summit Reef Aquariums?
            </h3>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Local Expertise</h4>
                  <p className="text-muted-foreground">Local to the Denver Metropolitan Area</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-coral mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">20 Years of Experience</h4>
                  <p className="text-muted-foreground">Two decades of expertise in marine anaquarium care and maintenance</p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Veteran Owned and Operated</h4>
                  <p className="text-muted-foreground">Proudly serving the community with military values of dedication and integrity</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-primary-light mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="font-semibold text-foreground mb-1">Emergency Support</h4>
                  <p className="text-muted-foreground">24/7 emergency support for critical aquarium issues</p>
                </div>
              </div>
            </div>
          </div>
          <div className="relative">
            <img src={coralAquariumImage} alt="Beautiful coral reef aquarium display" className="rounded-lg shadow-card w-full h-auto" />
          </div>
        </div>
      </div>
    </section>;
};
export default Services;