import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Play, Users, Clock, Award, Sparkles, MapPin, Phone, UserCheck, UsersRound, Star } from "lucide-react";

export function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative overflow-hidden bg-gt-neutral-900 min-h-screen flex items-center">
      {/* Advanced background with Guitar Tricks style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 gt-gradient-dark opacity-90"></div>
        
        {/* Sophisticated blur effects */}
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-gt-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] bg-gt-secondary/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-3xl"></div>
        
        {/* Elegant accent shapes */}
        <div className="absolute top-32 right-32 w-24 h-24 bg-gt-primary/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-32 left-32 w-36 h-36 bg-gt-secondary/5 rounded-full blur-xl"></div>
        <div className="absolute top-1/3 left-1/4 w-16 h-16 bg-amber-400/5 rounded-full blur-lg"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-10">
            <div className="space-y-8">
              {/* Premium badge */}
              <div className="inline-flex items-center space-x-2 bg-gt-primary/10 backdrop-blur-sm px-4 py-2 rounded-full border border-gt-primary/20">
                <Sparkles className="h-4 w-4 text-gt-primary" />
                <span className="text-sm text-gt-primary font-semibold tracking-wide">MASTER YOUR INSTRUMENT WITH CONFIDENCE</span>
              </div>
              
              {/* Hero headline with enhanced typography */}
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-white leading-[0.9] tracking-tight">
                  Discover Your{" "}
                  <span className="text-transparent bg-gradient-to-r from-gt-primary via-gt-secondary to-amber-400 bg-clip-text">
                    Musical Talent
                  </span>
                </h1>
                <h2 className="text-2xl lg:text-3xl font-medium text-gt-neutral-200 leading-relaxed">
                  at Seven Notes Academy
                </h2>
              </div>
              
              <p className="text-xl text-gt-neutral-300 leading-relaxed max-w-2xl">
                Master guitar, piano, drums, vocals, ukulele, and music theory with certified educators. 
                Experience flexible online and offline classes designed for today's passionate learners.
              </p>
            </div>
            
            {/* Enhanced feature badges */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-3 sm:gap-4">
              {[
                { icon: UserCheck, text: "Certified Instructors", color: "from-gt-primary to-gt-primary-light" },
                { icon: UsersRound, text: "Small Groups & 1-to-1", color: "from-gt-secondary to-gt-secondary-light" },
                { icon: Clock, text: "Flexible Timings", color: "from-purple-600 to-purple-400" },
                { icon: Users, text: "All Ages Welcome", color: "from-green-600 to-green-400" },
              ].map((feature, index) => (
                <div key={index} 
                     className="flex items-center space-x-3 bg-white/5 backdrop-blur-sm p-3 sm:p-4 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300 group">
                  <div className={`p-2 bg-gradient-to-r ${feature.color} rounded-xl group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                    <feature.icon className="h-4 w-4 text-white" />
                  </div>
                  <span className="text-sm text-gt-neutral-200 font-medium group-hover:text-white transition-colors">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Contact info with premium styling */}
            <div className="flex flex-wrap gap-6 text-sm text-gt-neutral-400">
              <div className="flex items-center space-x-2 hover:text-gt-primary transition-colors">
                <MapPin className="h-4 w-4 text-gt-primary" />
                <span>Lucknow, Uttar Pradesh</span>
              </div>
              <div className="flex items-center space-x-2 hover:text-gt-primary transition-colors">
                <Phone className="h-4 w-4 text-gt-primary" />
                <span>+91 7827888988</span>
              </div>
            </div>
            
            {/* Premium CTA buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('booking')}
                className="w-full sm:w-auto bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold px-6 sm:px-8 py-4 h-12 sm:h-auto rounded-2xl gt-shadow-elegant hover:gt-shadow-intense transform hover:scale-105 transition-all duration-300"
              >
                Book Free Trial Class
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('courses')}
                className="w-full sm:w-auto border-2 border-gt-primary/30 text-gt-primary hover:bg-gt-primary hover:text-white font-semibold px-6 sm:px-8 py-4 h-12 sm:h-auto rounded-2xl backdrop-blur-sm bg-white/5 hover:bg-gt-primary transition-all duration-300 transform hover:scale-105"
              >
                <Play className="h-4 w-4 mr-2" />
                Explore Courses
              </Button>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Enhanced hero image */}
            <div className="relative rounded-3xl overflow-hidden gt-shadow-intense transform hover:scale-105 transition-all duration-500 border border-white/10">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Seven Notes Academy Music Studio in Lucknow"
                className="w-full h-auto object-cover"
              />
              {/* Premium overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-6">
                <div className="text-white">
                  <h3 className="text-xl font-bold mb-2">Visit Our Music Studio</h3>
                  <p className="text-sm text-gray-200 mb-4">Professional facilities with international standards</p>
                  <Button 
                    size="sm" 
                    onClick={() => scrollToSection('contact')}
                    className="bg-white/90 text-gray-900 hover:bg-white font-semibold rounded-xl"
                  >
                    Schedule Free Consultation
                  </Button>
                </div>
              </div>
            </div>
            
            {/* Premium lead capture form */}
            <Card className="p-6 gt-glass-dark shadow-2xl border border-white/10 rounded-3xl">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary to-gt-secondary px-4 py-2 rounded-full mb-3">
                    <Star className="h-3 w-3 text-white" />
                    <span className="text-xs text-white font-bold tracking-wide">FREE TRIAL CLASS</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Start Your Musical Journey</h3>
                  <p className="text-sm text-gt-neutral-300">Join 500+ students learning with international standards</p>
                </div>
                
                <form name="hero-lead-form" method="POST" data-netlify="true" className="space-y-4">
                  <input type="hidden" name="form-name" value="hero-lead-form" />
                  <Input 
                    name="name"
                    placeholder="Your full name" 
                    required
                    className="border border-white/20 focus:border-gt-primary rounded-xl h-12 text-sm bg-white/5 text-white placeholder:text-gt-neutral-400 backdrop-blur-sm"
                  />
                  <Input 
                    name="email"
                    placeholder="Email address" 
                    type="email" 
                    required
                    className="border border-white/20 focus:border-gt-primary rounded-xl h-12 text-sm bg-white/5 text-white placeholder:text-gt-neutral-400 backdrop-blur-sm"
                  />
                  <Input 
                    name="phone"
                    placeholder="Phone number (WhatsApp preferred)" 
                    type="tel" 
                    required
                    className="border border-white/20 focus:border-gt-primary rounded-xl h-12 text-sm bg-white/5 text-white placeholder:text-gt-neutral-400 backdrop-blur-sm"
                  />
                  <select name="instrument" required className="w-full px-4 py-3 border border-white/20 focus:border-gt-primary rounded-xl bg-white/5 text-white h-12 text-sm backdrop-blur-sm">
                    <option className="bg-gt-neutral-800" value="">Choose your instrument</option>
                    <option className="bg-gt-neutral-800" value="guitar">🎸 Guitar</option>
                    <option className="bg-gt-neutral-800" value="piano">🎹 Piano/Keyboard</option>
                    <option className="bg-gt-neutral-800" value="drums">🥁 Drums</option>
                    <option className="bg-gt-neutral-800" value="vocals">🎤 Vocals (Western/Indian)</option>
                    <option className="bg-gt-neutral-800" value="ukulele">🎵 Ukulele</option>
                    <option className="bg-gt-neutral-800" value="theory">📚 Music Theory</option>
                  </select>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
                    <label className="flex items-center space-x-2 p-3 border border-white/20 rounded-xl cursor-pointer hover:bg-white/5 text-gt-neutral-300 transition-colors">
                      <input type="radio" name="class-type" value="online" className="text-gt-primary focus:ring-gt-primary" />
                      <span>💻 Online Classes</span>
                    </label>
                    <label className="flex items-center space-x-2 p-3 border border-white/20 rounded-xl cursor-pointer hover:bg-white/5 text-gt-neutral-300 transition-colors">
                      <input type="radio" name="class-type" value="offline" className="text-gt-primary focus:ring-gt-primary" />
                      <span>🏢 Studio Classes</span>
                    </label>
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white h-12 text-sm font-bold rounded-xl gt-shadow-elegant transform hover:scale-105 transition-all duration-300"
                  >
                    Book Free Trial Class 🎵
                  </Button>
                </form>
                
                <p className="text-xs text-gt-neutral-400 text-center">
                  No commitment required • Quick response via WhatsApp
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}