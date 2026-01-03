import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Music, Users, Clock, Star, Award, Play, Zap, TrendingUp } from "lucide-react";

export function Courses() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const courses = [
    {
      title: "Guitar Mastery",
      subtitle: "Acoustic & Electric",
      description: "Master both acoustic and electric guitar with comprehensive lessons covering technique, theory, and performance skills.",
      icon: "🎸",
      image: "https://images.unsplash.com/photo-1510915361894-db8b60106cb1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Chord progressions", "Fingerpicking", "Lead guitar", "Song performance"],
      level: "Beginner to Advanced",
      duration: "12 weeks",
      students: "150+",
      rating: 4.9,
      gradient: "from-gt-primary to-gt-primary-light",
      popular: true
    },
    {
      title: "Piano Excellence",
      subtitle: "Classical & Contemporary",
      description: "Develop your piano skills with lessons in classical technique, contemporary styles, and music theory fundamentals.",
      icon: "🎹",
      image: "https://images.unsplash.com/photo-1520523839897-bd0b52f945a0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Classical technique", "Jazz harmony", "Popular songs", "Sight reading"],
      level: "All Levels",
      duration: "16 weeks",
      students: "120+",
      rating: 4.8,
      gradient: "from-blue-600 to-blue-400"
    },
    {
      title: "Drum Dynamics",
      subtitle: "Rhythm & Percussion",
      description: "Build your rhythm foundation with comprehensive drum lessons covering all styles from rock to jazz.",
      icon: "🥁",
      image: "https://images.unsplash.com/photo-1571327073757-71d13c24de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Basic rhythms", "Fill techniques", "Genre styles", "Live performance"],
      level: "Beginner to Intermediate",
      duration: "10 weeks",
      students: "80+",
      rating: 4.7,
      gradient: "from-purple-600 to-purple-400"
    },
    {
      title: "Vocal Training",
      subtitle: "Western & Indian",
      description: "Develop your voice with professional vocal training in both Western contemporary and Indian classical styles.",
      icon: "🎤",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Breathing technique", "Pitch control", "Range extension", "Performance skills"],
      level: "All Levels",
      duration: "14 weeks",
      students: "100+",
      rating: 4.9,
      gradient: "from-gt-secondary to-gt-secondary-light"
    },
    {
      title: "Ukulele Fun",
      subtitle: "Easy & Enjoyable",
      description: "Learn the charming ukulele with fun, engaging lessons perfect for beginners and casual musicians.",
      icon: "🪕",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Basic chords", "Strumming patterns", "Popular songs", "Group playing"],
      level: "Beginner Friendly",
      duration: "8 weeks",
      students: "60+",
      rating: 4.8,
      gradient: "from-green-600 to-green-400"
    },
    {
      title: "Music Theory",
      subtitle: "Foundation & Advanced",
      description: "Build a strong theoretical foundation with comprehensive music theory lessons for all instruments.",
      icon: "📚",
      image: "https://images.unsplash.com/photo-1507838153414-b4b713384a76?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      features: ["Scale theory", "Harmony", "Composition", "Analysis"],
      level: "All Levels",
      duration: "12 weeks",
      students: "90+",
      rating: 4.6,
      gradient: "from-amber-600 to-amber-400"
    }
  ];

  return (
    <section id="courses" className="py-24 bg-gradient-to-b from-gt-neutral-50 to-white relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gt-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gt-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium header section */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary/10 to-gt-secondary/10 px-6 py-3 rounded-full border border-gt-primary/20">
            <Music className="h-5 w-5 text-gt-primary" />
            <span className="text-sm text-gt-primary font-bold tracking-wide">WORLD-CLASS MUSIC EDUCATION</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-gt-neutral-900 leading-tight">
              Master Your{" "}
              <span className="text-transparent bg-gradient-to-r from-gt-primary to-gt-secondary bg-clip-text">
                Favorite Instrument
              </span>
            </h2>
            <p className="text-xl text-gt-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Choose from our comprehensive range of music courses designed by professionals. 
              From beginner basics to advanced techniques, we've got the perfect path for your musical journey.
            </p>
          </div>

          {/* Stats row */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 pt-6">
            {[
              { number: "6", label: "Instruments", icon: Music },
              { number: "500+", label: "Students", icon: Users },
              { number: "4.8", label: "Rating", icon: Star },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-1">
                  <stat.icon className="h-4 w-4 text-gt-primary" />
                  <span className="text-xl sm:text-2xl font-bold text-gt-neutral-900">{stat.number}</span>
                </div>
                <span className="text-sm text-gt-neutral-600 font-medium">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Premium course grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {courses.map((course, index) => (
            <Card key={index} className="group relative overflow-hidden border-0 gt-shadow-elegant hover:gt-shadow-intense transition-all duration-500 transform hover:-translate-y-2 bg-white rounded-3xl">
              {course.popular && (
                <div className="absolute top-4 right-4 z-20">
                  <Badge className="bg-gradient-to-r from-gt-primary to-gt-secondary text-white font-bold px-3 py-1 rounded-full">
                    <TrendingUp className="h-3 w-3 mr-1" />
                    Popular
                  </Badge>
                </div>
              )}

              {/* Course image with gradient overlay */}
              <div className="relative h-48 overflow-hidden">
                <ImageWithFallback
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${course.gradient} opacity-80`}></div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                
                {/* Course icon */}
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center">
                    <span className="text-2xl">{course.icon}</span>
                  </div>
                </div>

                {/* Rating */}
                <div className="absolute bottom-4 left-4 flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1">
                  <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  <span className="text-xs text-white font-bold">{course.rating}</span>
                </div>
              </div>

              <CardContent className="p-6 space-y-4">
                {/* Course header */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gt-neutral-900 group-hover:text-gt-primary transition-colors">
                      {course.title}
                    </h3>
                    <Badge variant="outline" className="text-xs border-gt-neutral-300 text-gt-neutral-600">
                      {course.level}
                    </Badge>
                  </div>
                  <p className="text-sm font-medium text-gt-primary">{course.subtitle}</p>
                  <p className="text-sm text-gt-neutral-600 leading-relaxed">{course.description}</p>
                </div>

                {/* Course features */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {course.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-gt-primary rounded-full flex-shrink-0"></div>
                      <span className="text-xs text-gt-neutral-600 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Course meta */}
                <div className="flex items-center justify-between text-xs text-gt-neutral-500 pt-2 border-t border-gt-neutral-100">
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{course.duration}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users className="h-3 w-3" />
                    <span>{course.students} students</span>
                  </div>
                </div>

                {/* CTA Button */}
                <Button 
                  onClick={() => scrollToSection('booking')}
                  className="w-full bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold rounded-xl py-3 gt-shadow-elegant hover:gt-shadow-intense transform hover:scale-105 transition-all duration-300"
                >
                  <Play className="h-4 w-4 mr-2" />
                  Start Learning
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom CTA section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-gt-primary/5 to-gt-secondary/5 rounded-3xl p-8 border border-gt-primary/10">
            <h3 className="text-2xl font-bold text-gt-neutral-900 mb-4">
              Can't decide which course is right for you?
            </h3>
            <p className="text-gt-neutral-600 mb-6 max-w-2xl mx-auto">
              Our music consultants will help you choose the perfect instrument and learning path based on your goals and interests.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold px-8 py-4 rounded-2xl"
              >
                Get Free Consultation
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('booking')}
                className="border-2 border-gt-primary text-gt-primary hover:bg-gt-primary hover:text-white font-semibold px-8 py-4 rounded-2xl"
              >
                Book Trial Class
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}