import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Summit Reef <span className="text-coral-light">Aquariums</span>
            </h3>
            <p className="text-primary-foreground/80 mb-4">
              Professional aquarium maintenance and care services for your marine paradise. 
              Serving the local community with expertise and passion for over a decade.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-coral-light" />
                <span>(555) 123-REEF</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-coral-light" />
                <span>info@summitreefaquariums.com</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-3 text-coral-light" />
                <span>Greater Metro Area</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Water Quality Management</li>
              <li>Marine Life Care</li>
              <li>Equipment Maintenance</li>
              <li>Emergency Support</li>
              <li>Aquarium Setup</li>
              <li>Consulting Services</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © 2024 Summit Reef Aquariums. All rights reserved. | Licensed & Insured
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;