import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Martinez",
      role: "Marine Enthusiast",
      content: "Summit Reef has been maintaining my 180-gallon reef tank for over 2 years. Their attention to detail is incredible - my corals have never looked better! They caught a water chemistry issue early that could have been devastating.",
      rating: 5,
      location: "Downtown"
    },
    {
      name: "Mike Chen",
      role: "Restaurant Owner",
      content: "Our restaurant's centerpiece aquarium brings so much joy to our customers. Summit Reef keeps it pristine and healthy. When we had an emergency filtration failure on a busy Saturday, they were there within an hour!",
      rating: 5,
      location: "Metro District"
    },
    {
      name: "Jennifer & Tom Wilson",
      role: "Family Aquarium",
      content: "We were struggling to keep our fish healthy until we found Summit Reef. Their monthly maintenance program has been a game-changer. The kids love watching the fish thrive, and we love the peace of mind.",
      rating: 5,
      location: "Suburban Hills"
    },
    {
      name: "Dr. Amanda Foster",
      role: "Veterinary Office",
      content: "Professional, reliable, and truly knowledgeable. Summit Reef maintains our waiting room aquarium and it's become a calming focal point for our anxious pets and their owners. Highly recommend their services!",
      rating: 5,
      location: "Medical Center"
    },
    {
      name: "Robert Garcia",
      role: "Coral Collector",
      content: "As someone with expensive rare corals, I needed experts I could trust. Summit Reef's team understands the unique needs of each species. My collection has never been more vibrant and healthy.",
      rating: 5,
      location: "Eastside"
    },
    {
      name: "Lisa Thompson",
      role: "Office Manager",
      content: "Our office lobby aquarium was constantly having issues until Summit Reef took over. Now it's a beautiful, stress-free centerpiece that everyone admires. Their emergency support is outstanding too!",
      rating: 5,
      location: "Business District"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${
          i < rating ? "text-coral fill-coral" : "text-muted-foreground/30"
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it - hear from the aquarium owners who trust us with their marine paradise
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index} 
              className="shadow-card hover:shadow-ocean transition-all duration-300 border-0 bg-card group hover:scale-105 animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <Quote className="w-8 h-8 text-primary opacity-60 mr-3" />
                  <div className="flex space-x-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
                
                <p className="text-card-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>
                
                <div className="border-t border-border pt-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-semibold text-card-foreground">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-xs text-primary font-medium">
                        {testimonial.location}
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="animate-fade-in" style={{ animationDelay: '0.6s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Happy Customers</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.7s' }}>
            <div className="text-3xl md:text-4xl font-bold text-coral mb-2">10+</div>
            <div className="text-muted-foreground">Years Experience</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.8s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary-light mb-2">24/7</div>
            <div className="text-muted-foreground">Emergency Support</div>
          </div>
          <div className="animate-fade-in" style={{ animationDelay: '0.9s' }}>
            <div className="text-3xl md:text-4xl font-bold text-primary mb-2">99%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;