import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Quote, ThumbsUp, Heart, Music, Award, Users, Zap } from "lucide-react";

export function Testimonials() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      name: "Arjun Sharma",
      role: "Software Engineer",
      instrument: "Guitar",
      duration: "8 months",
      rating: 5,
      testimonial: "Seven Notes Academy transformed my musical journey completely. The instructors are incredibly patient and skilled. I went from knowing zero guitar to playing my favorite songs confidently. The online classes are so convenient for my busy schedule!",
      achievement: "Can play 15+ songs fluently",
      gradient: "from-gt-primary to-gt-primary-light",
      verified: true
    },
    {
      name: "Priya Verma",
      role: "Medical Student",
      instrument: "Piano",
      duration: "1 year",
      rating: 5,
      testimonial: "The personalized approach at Seven Notes is exceptional. My instructor tailored lessons to my pace and interests. Despite my hectic medical studies, the flexible scheduling helped me pursue my musical passion. Highly recommend to everyone!",
      achievement: "Grade 5 Piano Certification",
      gradient: "from-blue-600 to-blue-400",
      verified: true
    },
    {
      name: "Rahul Singh",
      role: "Business Owner",
      instrument: "Drums",
      duration: "6 months",
      rating: 5,
      testimonial: "Learning drums at 35 seemed impossible, but Seven Notes made it happen! The studio sessions are fantastic with professional equipment. The instructors break down complex rhythms into simple steps. My stress levels have decreased significantly!",
      achievement: "Performed at local event",
      gradient: "from-purple-600 to-purple-400",
      verified: true
    },
    {
      name: "Ananya Gupta",
      role: "College Student",
      instrument: "Vocals",
      duration: "10 months",
      rating: 5,
      testimonial: "The vocal training here is world-class! My instructor helped me discover my true vocal range and improve my technique dramatically. The breathing exercises and pitch training have made me a confident performer. Worth every penny!",
      achievement: "Won college singing competition",
      gradient: "from-green-600 to-green-400",
      verified: true
    },
    {
      name: "Maya Patel",
      role: "Graphic Designer",
      instrument: "Ukulele",
      duration: "4 months",
      rating: 5,
      testimonial: "Ukulele classes at Seven Notes are pure joy! The instructor makes learning fun and engaging. I love how quickly I progressed from basic chords to playing full songs. The positive environment keeps me motivated every session.",
      achievement: "Can play 20+ songs",
      gradient: "from-pink-600 to-pink-400",
      verified: true
    },
    {
      name: "Vikram Kumar",
      role: "Retired Teacher",
      instrument: "Music Theory",
      duration: "1.5 years",
      rating: 5,
      testimonial: "At 60, I finally understood music theory thanks to Seven Notes! The systematic approach and patient instruction helped me grasp complex concepts easily. Now I can compose my own melodies and understand music at a deeper level.",
      achievement: "Composed 5 original pieces",
      gradient: "from-indigo-600 to-indigo-400",
      verified: true
    }
  ];

  const stats = [
    { number: "98%", label: "Student Satisfaction", icon: ThumbsUp, color: "text-green-600" },
    { number: "500+", label: "Happy Students", icon: Users, color: "text-gt-primary" },
    { number: "4.9/5", label: "Average Rating", icon: Star, color: "text-yellow-500" },
    { number: "95%", label: "Continue Learning", icon: Heart, color: "text-red-500" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-gt-neutral-50 via-white to-gt-neutral-50 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gt-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-green-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary/10 to-green-500/10 px-6 py-3 rounded-full border border-gt-primary/20">
            <Heart className="h-5 w-5 text-gt-primary" />
            <span className="text-sm text-gt-primary font-bold tracking-wide">STUDENT SUCCESS STORIES</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-gt-neutral-900 leading-tight">
              What Our{" "}
              <span className="text-transparent bg-gradient-to-r from-gt-primary via-green-600 to-gt-secondary bg-clip-text">
                Students Say
              </span>
            </h2>
            <p className="text-xl text-gt-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Discover how Seven Notes Academy has transformed the musical journeys of hundreds of students across Lucknow. 
              Their success stories speak louder than any advertisement.
            </p>
          </div>
        </div>

        {/* Premium stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 mb-16">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-white border-0 gt-shadow-elegant hover:gt-shadow-intense transition-all duration-300 rounded-3xl p-6 group hover:-translate-y-1">
              <div className="space-y-4">
                <div className="flex items-center justify-center">
                  <div className="p-3 bg-gt-neutral-100 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
                <div className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <p className="text-gt-neutral-600 font-semibold">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Premium testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 gt-shadow-elegant hover:gt-shadow-intense transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-3xl">
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${testimonial.gradient}`}></div>

              <CardContent className="p-6 space-y-6">
                {/* Quote icon */}
                <div className="flex justify-between items-start">
                  <div className={`p-3 bg-gradient-to-r ${testimonial.gradient} rounded-2xl`}>
                    <Quote className="h-6 w-6 text-white" />
                  </div>
                  {testimonial.verified && (
                    <Badge className="bg-green-100 text-green-700 border-green-300 font-semibold">
                      <Award className="h-3 w-3 mr-1" />
                      Verified
                    </Badge>
                  )}
                </div>

                {/* Rating */}
                <div className="flex items-center space-x-1">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-gt-neutral-600">
                    {testimonial.rating}.0
                  </span>
                </div>

                {/* Testimonial text */}
                <blockquote className="text-gt-neutral-700 leading-relaxed italic">
                  "{testimonial.testimonial}"
                </blockquote>

                {/* Achievement highlight */}
                <div className="bg-gradient-to-r from-gt-neutral-50 to-gt-neutral-100/50 rounded-2xl p-4 border border-gt-neutral-200/50">
                  <div className="flex items-center space-x-2 mb-2">
                    <Music className="h-4 w-4 text-gt-primary" />
                    <span className="text-sm font-semibold text-gt-neutral-900">Achievement</span>
                  </div>
                  <p className="text-sm text-gt-primary font-medium">{testimonial.achievement}</p>
                </div>

                {/* Student info */}
                <div className="pt-4 border-t border-gt-neutral-200">
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 bg-gradient-to-r ${testimonial.gradient} rounded-2xl flex items-center justify-center`}>
                      <span className="text-white font-bold text-lg">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold text-gt-neutral-900">{testimonial.name}</h4>
                      <p className="text-sm text-gt-neutral-600">{testimonial.role}</p>
                      <div className="flex items-center space-x-4 mt-1">
                        <Badge variant="outline" className="text-xs border-gt-neutral-300 text-gt-neutral-600">
                          {testimonial.instrument}
                        </Badge>
                        <span className="text-xs text-gt-neutral-500">{testimonial.duration}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Premium CTA section */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gt-primary/5 via-gt-secondary/5 to-gt-primary/5 border border-gt-primary/20 rounded-3xl p-12 gt-shadow-elegant">
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary to-gt-secondary px-4 py-2 rounded-full">
                  <Zap className="h-4 w-4 text-white" />
                  <span className="text-sm text-white font-bold">JOIN THE SUCCESS STORIES</span>
                </div>
                <h3 className="text-4xl font-bold text-gt-neutral-900">
                  Ready to Write Your Musical Success Story?
                </h3>
                <p className="text-xl text-gt-neutral-600 max-w-3xl mx-auto leading-relaxed">
                  Join hundreds of satisfied students who have transformed their musical dreams into reality. 
                  Your journey to musical excellence starts with a single step.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  onClick={() => scrollToSection('booking')}
                  className="bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold px-8 py-4 rounded-2xl gt-shadow-elegant transform hover:scale-105 transition-all duration-300"
                >
                  <Music className="h-5 w-5 mr-2" />
                  Start Your Journey Today
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  onClick={() => scrollToSection('contact')}
                  className="border-2 border-gt-primary text-gt-primary hover:bg-gt-primary hover:text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <Heart className="h-5 w-5 mr-2" />
                  Read More Reviews
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}