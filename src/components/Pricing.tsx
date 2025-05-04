
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

const Pricing = () => {
  const plans = [
    {
      name: "Basic",
      price: "$49",
      period: "/month",
      description: "Perfect for beginners starting their fitness journey",
      features: [
        "Access to gym facilities (6AM-10PM)",
        "Basic fitness assessment",
        "Access to select group classes",
        "Locker room access"
      ],
      popular: false,
      color: "bg-white"
    },
    {
      name: "Premium",
      price: "$89",
      period: "/month",
      description: "Our most popular plan for dedicated fitness enthusiasts",
      features: [
        "24/7 gym access",
        "Unlimited group classes",
        "Monthly fitness assessment",
        "1 personal training session/month",
        "Nutrition consultation",
        "Sauna & recovery area access"
      ],
      popular: true,
      color: "bg-gym-navy"
    },
    {
      name: "Elite",
      price: "$129",
      period: "/month",
      description: "The ultimate fitness experience with all premium features",
      features: [
        "24/7 gym access",
        "Unlimited group classes",
        "Weekly fitness assessment",
        "4 personal training sessions/month",
        "Custom nutrition plan",
        "Massage therapy credits",
        "Priority class booking",
        "Guest passes (2/month)"
      ],
      popular: false,
      color: "bg-white"
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Membership <span className="text-gradient">Plans</span>
          </h2>
          <p className="text-gym-darkGray max-w-2xl mx-auto">
            Choose the membership that fits your fitness goals and lifestyle. All plans include access to our state-of-the-art facilities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 ${
                plan.popular ? 'transform md:-translate-y-4' : ''
              } ${plan.popular ? plan.color : plan.color}`}
            >
              {plan.popular && (
                <div className="bg-gym-red text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              
              <div className="p-8">
                <h3 className={`text-2xl font-bold mb-2 ${
                  plan.popular ? 'text-white' : 'text-gym-navy'
                }`}>
                  {plan.name}
                </h3>
                
                <div className="flex items-end mb-6">
                  <span className={`text-4xl font-bold ${
                    plan.popular ? 'text-white' : 'text-gym-navy'
                  }`}>
                    {plan.price}
                  </span>
                  <span className={`text-lg ${
                    plan.popular ? 'text-white/80' : 'text-gym-darkGray'
                  }`}>
                    {plan.period}
                  </span>
                </div>
                
                <p className={`mb-6 ${
                  plan.popular ? 'text-white/90' : 'text-gym-darkGray'
                }`}>
                  {plan.description}
                </p>
                
                <ul className="mb-8 space-y-3">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check 
                        className={`mr-2 h-5 w-5 mt-0.5 ${
                          plan.popular ? 'text-gym-red' : 'text-gym-red'
                        }`} 
                      />
                      <span className={
                        plan.popular ? 'text-white/90' : 'text-gym-darkGray'
                      }>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  className={`w-full ${
                    plan.popular 
                      ? 'bg-gym-red hover:bg-white hover:text-gym-red text-white' 
                      : 'bg-gym-navy hover:bg-gym-red text-white'
                  }`}
                >
                  Select Plan
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gym-darkGray mb-4">
            All memberships include a 7-day money-back guarantee. No long-term contracts required.
          </p>
          <Button variant="outline" className="border-gym-navy text-gym-navy hover:bg-gym-navy hover:text-white">
            View All Membership Details
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
