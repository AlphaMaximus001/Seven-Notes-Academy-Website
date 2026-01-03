import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { Award, Users, Clock, Star, Music, BookOpen, Target } from "lucide-react";

export function About() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-red-100 px-4 py-2 rounded-full border border-red-200">
                <span className="text-2xl">🎵</span>
                <span className="text-sm text-red-700 font-medium">About Seven Notes Academy</span>
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Nurturing Musical Excellence in{" "}
                <span className="text-red-600">Lucknow</span>
              </h2>
              
              <p className="text-xl text-gray-600">
                Seven Notes Academy is Lucknow's premier music education destination, where passion meets professionalism. We combine international teaching standards with personalized attention to help every student discover their musical potential.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                onClick={() => scrollToSection('courses')}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Explore Our Courses
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                onClick={() => scrollToSection('contact')}
                className="border-2 border-red-600 text-red-600 hover:bg-red-50"
              >
                Schedule Visit
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Seven Notes Academy Music Studio"
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>

        {/* Mission & Vision */}
        <div className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Our Mission & Vision</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe music education should be accessible, enjoyable, and transformative for students of all ages and backgrounds.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-12">
            <Card className="p-8 bg-red-50 border-red-200 border-2">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-red-600 rounded-2xl">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Our Mission</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To provide world-class music education that nurtures creativity, builds confidence, and develops well-rounded musicians. We strive to make quality music education accessible to everyone in Lucknow and beyond.
                </p>
              </CardContent>
            </Card>
            
            <Card className="p-8 bg-orange-50 border-orange-200 border-2">
              <CardContent className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="p-4 bg-orange-600 rounded-2xl">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                  <h4 className="text-2xl font-bold text-gray-900">Our Vision</h4>
                </div>
                <p className="text-gray-700 leading-relaxed">
                  To become the leading music academy in North India, known for excellence in music education, innovative teaching methods, and producing confident, skilled musicians.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Why Choose Us */}
        <div>
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Seven Notes Academy?</h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're committed to providing the best music education experience in Lucknow with internationally recognized standards.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Award className="h-8 w-8" />,
                title: "Certified Instructors",
                description: "Learn from Rockschool London certified instructors with years of professional experience in music education and performance.",
                color: "bg-red-600"
              },
              {
                icon: <BookOpen className="h-8 w-8" />,
                title: "International Standards",
                description: "Our curriculum follows global music education standards with internationally recognized certifications and grading systems.",
                color: "bg-orange-600"
              },
              {
                icon: <Users className="h-8 w-8" />,
                title: "Flexible Learning",
                description: "Choose between individual lessons or small group classes, both online and offline options available to suit your schedule.",
                color: "bg-red-600"
              },
              {
                icon: <Music className="h-8 w-8" />,
                title: "Modern Facilities",
                description: "State-of-the-art music studios equipped with professional instruments and recording equipment for the best learning experience.",
                color: "bg-orange-600"
              },
              {
                icon: <Clock className="h-8 w-8" />,
                title: "Flexible Timings",
                description: "We offer flexible scheduling options including evening and weekend slots to accommodate students and working professionals.",
                color: "bg-red-600"
              },
              {
                icon: <Star className="h-8 w-8" />,
                title: "Proven Results",
                description: "Over 500+ successful students with high pass rates in international music examinations and many performing professionally.",
                color: "bg-orange-600"
              }
            ].map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow duration-300">
                <CardContent className="space-y-4">
                  <div className={`p-3 ${feature.color} rounded-xl w-fit`}>
                    <div className="text-white">{feature.icon}</div>
                  </div>
                  <h5 className="text-xl font-bold text-gray-900">{feature.title}</h5>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}