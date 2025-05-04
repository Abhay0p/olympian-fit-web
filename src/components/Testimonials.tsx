
import { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jessica K.",
      role: "Member since 2021",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=60",
      quote: "Joining Olympian Fitness has completely transformed my life. I've lost 30 pounds in 6 months and gained so much confidence. The trainers here truly care about your progress."
    },
    {
      name: "Marcus T.",
      role: "Member since 2020",
      image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=500&auto=format&fit=crop&q=60",
      quote: "As a former athlete, I needed a gym that could push me to my limits. Olympian Fitness delivers exactly that with their excellent trainers and premium equipment. Couldn't recommend it more!"
    },
    {
      name: "Aisha L.",
      role: "Member since 2022",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=60",
      quote: "The variety of classes keeps me engaged and motivated. I've tried everything from HIIT to yoga, and the instructors are top-notch. It's the highlight of my day!"
    },
    {
      name: "David R.",
      role: "Member since 2019",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=60",
      quote: "After trying several gyms in the area, Olympian Fitness is by far the best. The community aspect is what sets it apart - everyone is supportive and friendly, which makes working out enjoyable."
    }
  ];

  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="bg-gym-navy text-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Success <span className="text-gym-red">Stories</span>
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Hear from our members who have transformed their lives with Olympian Fitness Center.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/10 backdrop-blur-lg rounded-lg p-8 md:p-12 relative">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-32 h-32 rounded-full overflow-hidden flex-shrink-0 border-4 border-gym-red">
                <img 
                  src={testimonials[currentTestimonial].image} 
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div>
                <svg 
                  className="text-gym-red/30 h-12 w-12 absolute top-6 left-6" 
                  fill="currentColor" 
                  viewBox="0 0 32 32"
                >
                  <path d="M10 8c-2.2 0-4 1.8-4 4v10c0 2.2 1.8 4 4 4h10c2.2 0 4-1.8 4-4v-6.5c0-0.3-0.2-0.5-0.5-0.5h-3c-0.8 0-1.5-0.7-1.5-1.5v-3c0-0.8 0.7-1.5 1.5-1.5h3c0.3 0 0.5-0.2 0.5-0.5v-0.5c0-2.2-1.8-4-4-4h-10zM26 8c-0.3 0-0.5 0.2-0.5 0.5v0.5c0 0.3 0.2 0.5 0.5 0.5h3c0.8 0 1.5 0.7 1.5 1.5v3c0 0.8-0.7 1.5-1.5 1.5h-3c-0.3 0-0.5 0.2-0.5 0.5v6.5c0 2.2-1.8 4-4 4h-10c-0.3 0-0.5 0.2-0.5 0.5v0.5c0 0.3 0.2 0.5 0.5 0.5h10c3.3 0 6-2.7 6-6v-6h2.5c0.8 0 1.5-0.7 1.5-1.5v-3c0-0.8-0.7-1.5-1.5-1.5h-2.5v-0.5c0-3.3-2.7-6-6-6h-10c-0.3 0-0.5 0.2-0.5 0.5v0.5c0 0.3 0.2 0.5 0.5 0.5h10z"></path>
                </svg>
                
                <blockquote className="text-xl mb-6 relative z-10">
                  "{testimonials[currentTestimonial].quote}"
                </blockquote>
                
                <div>
                  <h4 className="text-lg font-bold">{testimonials[currentTestimonial].name}</h4>
                  <p className="text-gym-red">{testimonials[currentTestimonial].role}</p>
                </div>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={prevTestimonial}
                className="bg-white/10 hover:bg-gym-red text-white p-3 rounded-full transition-colors"
                aria-label="Previous testimonial"
              >
                <ArrowLeft size={20} />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-3 h-3 rounded-full ${
                      currentTestimonial === index ? 'bg-gym-red' : 'bg-white/30'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="bg-white/10 hover:bg-gym-red text-white p-3 rounded-full transition-colors"
                aria-label="Next testimonial"
              >
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
