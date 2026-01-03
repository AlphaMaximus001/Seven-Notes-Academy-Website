import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Monitor, MapPin, Clock, Users, Zap, CheckCircle } from "lucide-react";

export function ClassOptions() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const classTypes = [
    {
      title: "Online Classes",
      subtitle: "Learn from anywhere",
      icon: Monitor,
      gradient: "from-blue-600 to-blue-400",
      features: [
        "HD video sessions",
        "Flexible scheduling", 
        "Session recordings",
        "Digital resources"
      ],
      pricing: "Starting ₹800/session"
    },
    {
      title: "Studio Classes", 
      subtitle: "Premium in-person experience",
      icon: MapPin,
      gradient: "from-gt-primary to-gt-secondary",
      features: [
        "Professional instruments",
        "Face-to-face instruction",
        "Studio environment",
        "Hands-on guidance"
      ],
      pricing: "Starting ₹1200/session"
    }
  ];

  return (
    <section id="class-options" className="py-20 bg-gradient-to-b from-white to-gt-neutral-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gt-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary/10 to-blue-500/10 px-6 py-3 rounded-full border border-gt-primary/20">
            <Monitor className="h-5 w-5 text-gt-primary" />
            <span className="text-sm text-gt-primary font-bold tracking-wide">FLEXIBLE LEARNING OPTIONS</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gt-neutral-900 leading-tight">
              Choose Your{" "}
              <span className="text-transparent bg-gradient-to-r from-gt-primary via-blue-600 to-gt-secondary bg-clip-text">
                Learning Style
              </span>
            </h2>
            <p className="text-lg text-gt-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Whether you prefer learning from home or in our professional studio, 
              we offer exceptional music education tailored to your lifestyle.
            </p>
          </div>
        </div>

        {/* Simplified comparison cards */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 mb-12">
          {classTypes.map((classType, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 gt-shadow-elegant hover:gt-shadow-intense transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-3xl">
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${classType.gradient}`}></div>

              <CardContent className="p-8 space-y-6">
                <div className="flex items-center space-x-4">
                  <div className={`p-4 bg-gradient-to-r ${classType.gradient} rounded-2xl gt-shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <classType.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-gt-neutral-900 group-hover:text-gt-primary transition-colors">
                      {classType.title}
                    </h3>
                    <p className="text-gt-primary font-semibold mt-1">{classType.subtitle}</p>
                  </div>
                </div>

                {/* Simplified features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {classType.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm font-medium text-gt-neutral-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Pricing and CTA */}
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between pt-4 border-t border-gt-neutral-200 space-y-3 sm:space-y-0">
                  <div>
                    <span className="text-lg sm:text-xl font-bold text-gt-neutral-900">{classType.pricing}</span>
                  </div>
                  <Button 
                    onClick={() => scrollToSection('booking')}
                    className={`w-full sm:w-auto bg-gradient-to-r ${classType.gradient} hover:scale-105 text-white font-semibold px-6 py-3 h-12 rounded-2xl gt-shadow-elegant hover:gt-shadow-intense transition-all duration-300`}
                  >
                    Choose Plan
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simplified bottom section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gt-primary/5 via-gt-secondary/5 to-gt-primary/5 border border-gt-primary/20 rounded-3xl p-8 gt-shadow-elegant">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary to-gt-secondary px-4 py-2 rounded-full">
                <Zap className="h-4 w-4 text-white" />
                <span className="text-sm text-white font-bold">FLEXIBLE LEARNING</span>
              </div>
              
              <h3 className="text-2xl font-bold text-gt-neutral-900">
                Can't Decide? Try Both!
              </h3>
              <p className="text-lg text-gt-neutral-600 max-w-2xl mx-auto leading-relaxed">
                Start with our free trial class to experience both online and studio options. 
                Our team will help you choose the perfect learning format.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('booking')}
                  className="bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold px-8 py-4 h-14 rounded-2xl gt-shadow-elegant transform hover:scale-105 transition-all duration-300"
                >
                  Book Free Trial
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gt-primary text-gt-primary hover:bg-gt-primary hover:text-white font-semibold px-8 py-4 h-14 rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Guidance
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}