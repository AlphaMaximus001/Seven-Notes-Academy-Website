import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Check, Star, Users, User, Music, Clock, Calendar, Globe, MapPin, Zap, Gift } from "lucide-react";

export function Pricing() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const westernGroupSessions = {
    title: "Western Music - Group Sessions",
    subtitle: "In-person group learning",
    description: "Guitar, Ukulele, Piano/Keys & Vocals in small groups with collaborative learning.",
    icon: Users,
    gradient: "from-blue-600 to-blue-400",
    popular: false,
    details: {
      frequency: "1 class per week",
      duration: "1 hour per session", 
      total: "12 sessions (3 months)",
      location: "In-person only"
    },
    instruments: ["Guitar", "Ukulele", "Piano/Keys", "Vocals"],
    pricing: {
      "Level 1 (Grade 3 & below)": "₹6,000",
      "Level 2 (Grade 4 & 5)": "₹8,000", 
      "Level 3 (Grade 6-8)": "₹10,000"
    },
    features: [
      "Small group collaborative learning",
      "1 hour weekly sessions",
      "12 sessions over 3 months",
      "In-person interaction with peers",
      "Group performance opportunities",
      "Cost-effective approach"
    ]
  };

  const westernOneOnOne = {
    title: "Western Music - One-on-One",
    subtitle: "Personalized individual sessions",
    description: "Guitar, Ukulele, Piano/Keys, Vocals, Drums & Music Theory with dedicated personal instruction.",
    icon: User,
    gradient: "from-gt-primary to-gt-secondary",
    popular: true,
    details: {
      frequency: "1 class per week",
      duration: "45 minutes per session",
      total: "12 sessions (3 months)", 
      location: "Online or In-person"
    },
    instruments: ["Guitar", "Ukulele", "Piano/Keys", "Vocals", "Drums", "Music Theory"],
    pricing: {
      "Level 1 (Grade 3 & below)": "₹9,600",
      "Level 2 (Grade 4 & 5)": "₹12,000",
      "Level 3 (Grade 6-8)": "₹14,400"
    },
    features: [
      "Dedicated personal instructor",
      "45-minute focused sessions",
      "12 sessions over 3 months",
      "Choose online or in-person",
      "Customized curriculum design",
      "Flexible scheduling options"
    ]
  };

  const indianVocals = {
    title: "Indian Music - Vocals",
    subtitle: "Traditional Indian vocal training", 
    description: "Classical and semi-classical Indian vocal music in group settings with traditional teaching methods.",
    icon: Music,
    gradient: "from-orange-600 to-orange-400",
    popular: false,
    details: {
      frequency: "2 classes per week",
      duration: "1 hour per session",
      total: "24 sessions (3 months)",
      location: "In-person only"
    },
    instruments: ["Indian Classical Vocals", "Semi-Classical Vocals", "Devotional Music"],
    pricing: {
      "Level 1 (Grade 3 & below)": "₹6,000",
      "Level 2 (Grade 4 & 5)": "₹8,000",
      "Level 3 (Grade 6-8)": "₹10,000"
    },
    features: [
      "Traditional Indian vocal techniques",
      "2 sessions per week for faster progress",
      "1 hour intensive sessions",
      "Classical and semi-classical styles",
      "Group learning with cultural context",
      "24 sessions over 3 months"
    ]
  };

  const pricingPlans = [westernGroupSessions, westernOneOnOne, indianVocals];

  return (
    <section id="pricing" className="py-20 bg-gradient-to-b from-white via-gt-neutral-50 to-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gt-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-orange-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary/10 to-orange-500/10 px-6 py-3 rounded-full border border-gt-primary/20">
            <Star className="h-5 w-5 text-gt-primary" />
            <span className="text-sm text-gt-primary font-bold tracking-wide">COMPREHENSIVE PRICING</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-gt-neutral-900 leading-tight">
              Structured{" "}
              <span className="text-transparent bg-gradient-to-r from-gt-primary via-orange-600 to-gt-secondary bg-clip-text">
                Learning Packages
              </span>
            </h2>
            <p className="text-lg text-gt-neutral-600 max-w-3xl mx-auto leading-relaxed">
              Choose from our carefully designed 3-month packages for Western and Indian music. 
              All packages include comprehensive curriculum and expert instruction.
            </p>
          </div>

          {/* Registration fee highlight */}
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-secondary/10 to-gt-primary/10 px-6 py-3 rounded-2xl border border-gt-secondary/20">
            <Gift className="h-5 w-5 text-gt-secondary" />
            <span className="text-sm font-semibold text-gt-neutral-700">
              One-time registration: <span className="text-gt-primary font-bold">₹1,000</span> (includes materials & assessment)
            </span>
          </div>
        </div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 gt-shadow-elegant hover:gt-shadow-intense transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-3xl">
              {plan.popular && (
                <div className="absolute top-6 right-6 z-10">
                  <Badge className="bg-gradient-to-r from-gt-primary to-gt-secondary text-white font-bold px-4 py-2 rounded-full gt-shadow-md">
                    <Star className="h-3 w-3 mr-1 fill-current" />
                    Popular
                  </Badge>
                </div>
              )}

              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${plan.gradient}`}></div>

              <CardHeader className="pb-4 pt-6">
                <div className="flex items-center space-x-4 mb-4">
                  <div className={`p-4 bg-gradient-to-r ${plan.gradient} rounded-2xl gt-shadow-md group-hover:scale-110 transition-transform duration-300`}>
                    <plan.icon className="h-8 w-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gt-neutral-900 group-hover:text-gt-primary transition-colors leading-tight">
                      {plan.title}
                    </CardTitle>
                    <p className="text-gt-primary font-semibold mt-1 text-sm">{plan.subtitle}</p>
                  </div>
                </div>
                <p className="text-gt-neutral-600 text-sm">{plan.description}</p>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Session details */}
                <div className="bg-gt-neutral-50 rounded-2xl p-4 space-y-3">
                  <h4 className="font-semibold text-gt-neutral-900 text-sm flex items-center">
                    <Calendar className="h-4 w-4 text-gt-primary mr-2" />
                    Package Details
                  </h4>
                  <div className="space-y-2 text-xs">
                    <div className="flex items-center justify-between">
                      <span className="text-gt-neutral-600">Frequency:</span>
                      <span className="font-medium text-gt-neutral-900">{plan.details.frequency}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gt-neutral-600">Duration:</span>
                      <span className="font-medium text-gt-neutral-900">{plan.details.duration}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gt-neutral-600">Total:</span>
                      <span className="font-medium text-gt-neutral-900">{plan.details.total}</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-gt-neutral-600">Location:</span>
                      <span className="font-medium text-gt-neutral-900 flex items-center">
                        {plan.details.location.includes('Online') ? (
                          <Globe className="h-3 w-3 mr-1" />
                        ) : (
                          <MapPin className="h-3 w-3 mr-1" />
                        )}
                        {plan.details.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Instruments offered */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gt-neutral-900 text-sm">Instruments Available:</h4>
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {plan.instruments.map((instrument, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs border-gt-neutral-300 text-gt-neutral-600 px-2 py-1 text-center">
                        {instrument}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Pricing tiers */}
                <div className="space-y-3">
                  <h4 className="font-semibold text-gt-neutral-900 text-sm flex items-center">
                    <Clock className="h-4 w-4 text-gt-secondary mr-2" />
                    3-Month Package Pricing
                  </h4>
                  {Object.entries(plan.pricing).map(([level, price]) => (
                    <div key={level} className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-3 bg-gt-neutral-50 rounded-xl space-y-1 sm:space-y-0">
                      <span className="font-medium text-gt-neutral-900 text-sm leading-tight">{level}</span>
                      <div className="text-left sm:text-right">
                        <span className="text-lg font-bold text-gt-primary">{price}</span>
                        <p className="text-xs text-gt-neutral-500">for 3 months</p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Features */}
                <div className="space-y-2">
                  <h4 className="font-semibold text-gt-neutral-900 text-sm">What's Included:</h4>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="h-4 w-4 text-green-600 flex-shrink-0" />
                      <span className="text-sm text-gt-neutral-600">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => scrollToSection('booking')}
                  className={`w-full bg-gradient-to-r ${plan.gradient} hover:scale-105 text-white font-semibold py-4 h-14 rounded-2xl gt-shadow-elegant hover:gt-shadow-intense transition-all duration-300`}
                >
                  Choose This Package
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Additional information */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Package benefits */}
          <Card className="bg-gradient-to-r from-gt-primary/5 to-gt-secondary/5 border border-gt-primary/20 rounded-3xl p-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gt-primary/10 rounded-2xl">
                  <Zap className="h-6 w-6 text-gt-primary" />
                </div>
                <h3 className="text-xl font-bold text-gt-neutral-900">Package Benefits</h3>
              </div>
              <div className="space-y-3 text-gt-neutral-600">
                <p className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Structured 3-month learning journey</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Grade-based curriculum progression</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Regular progress assessments</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Certificate upon completion</p>
                <p className="flex items-center"><Check className="h-4 w-4 text-green-600 mr-2" />Flexible payment options available</p>
              </div>
            </div>
          </Card>

          {/* Grade system explanation */}
          <Card className="bg-gradient-to-r from-blue-500/5 to-green-500/5 border border-blue-500/20 rounded-3xl p-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-blue-500/10 rounded-2xl">
                  <Star className="h-6 w-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gt-neutral-900">Grade System</h3>
              </div>
              <div className="space-y-3 text-gt-neutral-600 text-sm">
                <div className="p-3 bg-green-50 rounded-xl">
                  <strong className="text-green-700">Level 1 (Grade 3 & below):</strong> Beginners with little to no experience
                </div>
                <div className="p-3 bg-blue-50 rounded-xl">
                  <strong className="text-blue-700">Level 2 (Grade 4 & 5):</strong> Intermediate players with basic foundation
                </div>
                <div className="p-3 bg-purple-50 rounded-xl">
                  <strong className="text-purple-700">Level 3 (Grade 6-8):</strong> Advanced students with strong skills
                </div>
                <p className="text-xs text-gt-neutral-500 mt-3">Not sure about your level? We'll assess during your free trial class!</p>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gt-primary/5 via-gt-secondary/5 to-gt-primary/5 border border-gt-primary/20 rounded-3xl p-8 gt-shadow-elegant">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary to-gt-secondary px-4 py-2 rounded-full">
                <Gift className="h-4 w-4 text-white" />
                <span className="text-sm text-white font-bold">START FREE</span>
              </div>
              <h3 className="text-3xl font-bold text-gt-neutral-900">
                Ready to Begin Your 3-Month Musical Journey?
              </h3>
              <p className="text-lg text-gt-neutral-600 max-w-2xl mx-auto">
                Start with a free trial class to determine your level and choose the perfect package. 
                No commitment required - just bring your passion for music!
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('booking')}
                className="bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold px-8 py-4 h-14 rounded-2xl gt-shadow-elegant transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="h-5 w-5 mr-2" />
                Book Free Trial Class
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}