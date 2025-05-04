
import { Dumbbell, Users, Clock, Calendar } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gym-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            About <span className="text-gradient">Olympian Fitness</span>
          </h2>
          <p className="text-gym-darkGray max-w-2xl mx-auto">
            More than just a gym, we're a community dedicated to helping you achieve your fitness goals through expert guidance and world-class facilities.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Our <span className="text-gym-red">Mission</span>
            </h3>
            <p className="text-gym-darkGray">
              At Olympian Fitness Center, we believe everyone has the potential to achieve greatness. Our mission is to provide an inspiring environment where members can push their limits, build strength, and transform their lives through fitness.
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white p-4 rounded-lg shadow-md hover-scale">
                <Dumbbell className="text-gym-red mb-2" size={24} />
                <h4 className="font-semibold mb-1">Premium Equipment</h4>
                <p className="text-sm text-gym-darkGray">
                  State-of-the-art fitness machines & free weights
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md hover-scale">
                <Users className="text-gym-red mb-2" size={24} />
                <h4 className="font-semibold mb-1">Expert Trainers</h4>
                <p className="text-sm text-gym-darkGray">
                  Certified professionals to guide your journey
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md hover-scale">
                <Clock className="text-gym-red mb-2" size={24} />
                <h4 className="font-semibold mb-1">24/7 Access</h4>
                <p className="text-sm text-gym-darkGray">
                  Train on your schedule, any time of day
                </p>
              </div>
              
              <div className="bg-white p-4 rounded-lg shadow-md hover-scale">
                <Calendar className="text-gym-red mb-2" size={24} />
                <h4 className="font-semibold mb-1">Diverse Classes</h4>
                <p className="text-sm text-gym-darkGray">
                  From yoga to HIIT, something for everyone
                </p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="rounded-lg overflow-hidden shadow-xl hover-scale">
              <img 
                src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop" 
                alt="Gym interior with modern equipment" 
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-gym-navy text-white p-6 rounded-lg shadow-lg max-w-xs hidden md:block">
              <h4 className="font-bold text-xl mb-2">10+ Years</h4>
              <p>Of excellence in fitness training and member satisfaction</p>
            </div>
          </div>
        </div>
        
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center py-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-4xl font-bold text-gym-navy mb-2">2,500+</h3>
            <p className="text-gym-darkGray">Active Members</p>
          </div>
          
          <div className="text-center py-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-4xl font-bold text-gym-navy mb-2">50+</h3>
            <p className="text-gym-darkGray">Expert Trainers</p>
          </div>
          
          <div className="text-center py-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-4xl font-bold text-gym-navy mb-2">100+</h3>
            <p className="text-gym-darkGray">Weekly Classes</p>
          </div>
          
          <div className="text-center py-8 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-4xl font-bold text-gym-navy mb-2">4</h3>
            <p className="text-gym-darkGray">Locations</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
