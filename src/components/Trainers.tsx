
import { Card, CardContent } from "@/components/ui/card";

const Trainers = () => {
  const trainersData = [
    {
      name: "Alex Johnson",
      role: "Head Trainer",
      specialty: "Strength & Conditioning",
      image: "https://images.unsplash.com/photo-1611672585731-fa10603fb9e0?q=80&w=1974&auto=format&fit=crop",
      bio: "With over 10 years of experience, Alex specializes in strength training and athletic performance.",
      certifications: ["NASM CPT", "CSCS", "Precision Nutrition"]
    },
    {
      name: "Sarah Williams",
      role: "Fitness Coach",
      specialty: "HIIT & Functional Training",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
      bio: "Sarah helps clients transform their bodies with high-intensity workouts and nutritional guidance.",
      certifications: ["ACE CPT", "TRX Certified", "CrossFit L2"]
    },
    {
      name: "Michael Chen",
      role: "Yoga Instructor",
      specialty: "Yoga & Mobility",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
      bio: "Michael focuses on improving flexibility, balance, and mental wellness through yoga practices.",
      certifications: ["RYT-500", "Mobility Specialist", "Meditation Coach"]
    },
    {
      name: "Tanya Rodriguez",
      role: "Nutrition Coach",
      specialty: "Sports Nutrition",
      image: "https://images.unsplash.com/photo-1489980557514-251d61e3eeb6?q=80&w=2070&auto=format&fit=crop",
      bio: "Tanya helps athletes optimize their diet for performance, recovery, and body composition.",
      certifications: ["Precision Nutrition", "ISSN", "Sports Dietitian"]
    }
  ];

  return (
    <section id="trainers" className="section-padding bg-gym-lightGray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="text-gradient">Expert Trainers</span>
          </h2>
          <p className="text-gym-darkGray max-w-2xl mx-auto">
            Our team of certified professionals is passionate about helping you achieve your fitness goals through personalized guidance and motivation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trainersData.map((trainer, index) => (
            <Card key={index} className="overflow-hidden hover-scale">
              <div className="h-64 overflow-hidden">
                <img 
                  src={trainer.image} 
                  alt={trainer.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-1 text-gym-navy">{trainer.name}</h3>
                <p className="text-gym-red font-medium mb-2">{trainer.specialty}</p>
                <p className="text-sm text-gym-darkGray mb-4">{trainer.bio}</p>
                <div className="border-t pt-4">
                  <p className="text-sm font-medium mb-2">Certifications:</p>
                  <div className="flex flex-wrap gap-2">
                    {trainer.certifications.map((cert, i) => (
                      <span 
                        key={i} 
                        className="text-xs bg-gym-navy text-white py-1 px-2 rounded-full"
                      >
                        {cert}
                      </span>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trainers;
