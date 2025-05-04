
import { Button } from "@/components/ui/button";

const Services = () => {
  const servicesData = [
    {
      title: "Personal Training",
      description: "One-on-one sessions tailored to your specific goals with expert trainers who will push you to your limits safely.",
      image: "https://images.unsplash.com/photo-1571388208497-71bedc66e932?q=80&w=2072&auto=format&fit=crop",
      features: ["Custom workout plans", "Nutritional guidance", "Progress tracking", "Flexible scheduling"]
    },
    {
      title: "Group Fitness Classes",
      description: "High-energy workouts in a motivating group environment. From HIIT to yoga, we offer classes for all fitness levels.",
      image: "https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&w=2070&auto=format&fit=crop",
      features: ["Over 50 weekly classes", "Expert instructors", "Variety of formats", "All fitness levels"]
    },
    {
      title: "Strength Training",
      description: "Build muscle, increase strength, and improve your overall physical performance with our comprehensive strength programs.",
      image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=2012&auto=format&fit=crop",
      features: ["Premium equipment", "Form guidance", "Progressive programs", "Spotting assistance"]
    },
    {
      title: "Recovery & Wellness",
      description: "Enhance your recovery with our range of wellness services designed to reduce soreness and prevent injuries.",
      image: "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2020&auto=format&fit=crop",
      features: ["Massage therapy", "Stretching area", "Sauna & steam room", "Cold plunge"]
    }
  ];

  return (
    <section id="services" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gym-darkGray max-w-2xl mx-auto">
            We offer a comprehensive range of fitness services to help you reach your goals, whether you're just starting out or looking to take your training to the next level.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {servicesData.map((service, index) => (
            <div key={index} className="bg-gym-lightGray rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <div className="h-64 overflow-hidden">
                <img 
                  src={service.image} 
                  alt={service.title} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-3 text-gym-navy">{service.title}</h3>
                <p className="text-gym-darkGray mb-4">{service.description}</p>
                <ul className="mb-6 space-y-1">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <span className="mr-2 text-gym-red">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="bg-gym-red hover:bg-gym-navy text-white w-full">
                  Learn More
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gym-navy text-white p-8 md:p-12 rounded-lg shadow-xl">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Not Sure What's Right For You?
              </h3>
              <p className="mb-6">
                Schedule a free fitness consultation with one of our expert trainers. We'll assess your current fitness level, discuss your goals, and recommend the best programs for you.
              </p>
              <Button className="bg-gym-red hover:bg-white hover:text-gym-red text-white">
                Book a Free Consultation
              </Button>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&w=2070&auto=format&fit=crop" 
                alt="Fitness consultation" 
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
