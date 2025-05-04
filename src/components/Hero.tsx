
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-gym-navy to-black overflow-hidden"
    >
      <div 
        className="absolute inset-0 z-0 opacity-40 bg-cover bg-center"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop')",
          backgroundBlendMode: "overlay",
        }}
      ></div>
      
      <div className="container mx-auto px-4 z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="text-white animate-fade-in">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              TRAIN LIKE AN <span className="text-gym-red">OLYMPIAN</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-lg">
              Transform your body, elevate your mind, and reach peak performance with our state-of-the-art facilities and expert trainers.
            </p>
            <div className="space-x-4">
              <Button className="bg-gym-red hover:bg-white hover:text-gym-red text-white px-8 py-6 text-lg">
                Start Your Journey
              </Button>
              <Button variant="outline" className="border-white text-white hover:bg-white hover:text-gym-navy px-8 py-6 text-lg">
                Learn More
              </Button>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="relative h-[500px] w-full">
              <div className="absolute top-10 right-0 bg-gym-red rounded-lg shadow-xl p-6 text-white max-w-xs animate-fade-in" style={{ animationDelay: "0.3s" }}>
                <h3 className="text-xl font-bold mb-2">Personal Training</h3>
                <p>Expert trainers dedicated to your fitness goals and success</p>
              </div>
              <div className="absolute top-40 left-0 bg-white rounded-lg shadow-xl p-6 text-gym-navy max-w-xs animate-fade-in" style={{ animationDelay: "0.6s" }}>
                <h3 className="text-xl font-bold mb-2">Group Classes</h3>
                <p>High-energy sessions designed for maximum results</p>
              </div>
              <div className="absolute bottom-10 right-10 bg-gym-navy rounded-lg shadow-xl p-6 text-white max-w-xs animate-fade-in" style={{ animationDelay: "0.9s" }}>
                <h3 className="text-xl font-bold mb-2">Premium Equipment</h3>
                <p>State-of-the-art machines and free weights</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-0 right-0 flex justify-center">
        <a 
          href="#about" 
          className="text-white animate-bounce hover:text-gym-red transition-colors"
          aria-label="Scroll down"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="24" 
            height="24" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round"
          >
            <path d="M12 5v14M5 12l7 7 7-7"/>
          </svg>
        </a>
      </div>
    </section>
  );
};

export default Hero;
