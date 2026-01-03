import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { Star, Users, Trophy, Award, Zap, TrendingUp } from "lucide-react";

export function StudentsShowcase() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const featuredStudents = [
    {
      name: "Arjun Sharma",
      instrument: "Guitar",
      achievement: "Grade 5 • City Music Festival Performer",
      progress: 92,
      gradient: "from-gt-primary to-gt-primary-light"
    },
    {
      name: "Priya Verma", 
      instrument: "Piano",
      achievement: "Grade 7 • Rockschool Certified",
      progress: 96,
      gradient: "from-blue-600 to-blue-400"
    },
    {
      name: "Rahul Singh",
      instrument: "Drums",
      achievement: "Grade 4 • School Band Leader",
      progress: 88,
      gradient: "from-purple-600 to-purple-400"
    },
    {
      name: "Ananya Gupta",
      instrument: "Vocals", 
      achievement: "Competition Winner • Rising Star",
      progress: 90,
      gradient: "from-green-600 to-green-400"
    }
  ];

  const stats = [
    { number: "500+", label: "Students", icon: Users, color: "text-gt-primary" },
    { number: "98%", label: "Success Rate", color: "text-green-400" },
    { number: "4.9/5", label: "Rating", icon: Star, color: "text-yellow-500" },
    { number: "15+", label: "Years", icon: Trophy, color: "text-gt-secondary" }
  ];

  return (
    <section id="students" className="py-20 bg-gt-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-gt-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-gt-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Compact header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gt-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-gt-primary/20">
            <TrendingUp className="h-5 w-5 text-gt-primary" />
            <span className="text-sm text-gt-primary font-bold tracking-wide">STUDENT SUCCESS</span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
            Our{" "}
            <span className="text-transparent bg-gradient-to-r from-gt-primary to-gt-secondary bg-clip-text">
              Musical Stars
            </span>
          </h2>
          <p className="text-lg text-gt-neutral-300 max-w-3xl mx-auto leading-relaxed">
            Meet some of our talented students who are mastering their instruments 
            and achieving remarkable milestones with Seven Notes Academy.
          </p>
        </div>

        {/* Compact stats */}
        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center bg-gt-neutral-800/50 backdrop-blur-sm border border-gt-neutral-700/50 hover:border-gt-primary/30 transition-all duration-300 rounded-3xl p-6 group hover:-translate-y-1 gt-shadow-elegant hover:gt-shadow-intense">
              <div className="space-y-3">
                {stat.icon && (
                  <div className="flex items-center justify-center">
                    <div className="p-3 bg-gt-neutral-700/50 rounded-2xl group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className={`h-6 w-6 ${stat.color}`} />
                    </div>
                  </div>
                )}
                <div className={`text-3xl font-bold ${stat.color} group-hover:scale-110 transition-transform duration-300`}>
                  {stat.number}
                </div>
                <p className="text-gt-neutral-300 font-semibold">{stat.label}</p>
              </div>
            </Card>
          ))}
        </div>

        {/* Compact student grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {featuredStudents.map((student, index) => (
            <Card key={index} className="group bg-gt-neutral-800/50 backdrop-blur-sm border border-gt-neutral-700/50 hover:border-gt-primary/30 hover:bg-gt-neutral-800/70 transition-all duration-500 transform hover:-translate-y-2 rounded-3xl overflow-hidden gt-shadow-elegant hover:gt-shadow-intense">
              {/* Gradient header */}
              <div className={`h-2 bg-gradient-to-r ${student.gradient}`}></div>
              
              <CardContent className="p-6 space-y-4">
                {/* Student info */}
                <div className="text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${student.gradient} rounded-2xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300`}>
                    <span className="text-white font-bold text-lg">
                      {student.name.split(' ').map(n => n[0]).join('')}
                    </span>
                  </div>
                  <h3 className="font-bold text-white group-hover:text-gt-primary transition-colors">
                    {student.name}
                  </h3>
                  <Badge className={`bg-gradient-to-r ${student.gradient} text-white font-semibold px-3 py-1 text-xs rounded-full mt-2`}>
                    {student.instrument}
                  </Badge>
                </div>
                
                {/* Achievement */}
                <div className="bg-gt-neutral-700/30 backdrop-blur-sm rounded-2xl p-4 border border-gt-neutral-600/30">
                  <div className="flex items-center space-x-2 mb-2">
                    <Award className="h-4 w-4 text-yellow-400" />
                    <span className="text-sm font-semibold text-white">Achievement</span>
                  </div>
                  <p className="text-xs text-gt-neutral-300">{student.achievement}</p>
                </div>
                
                {/* Progress */}
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-gt-neutral-400 font-medium">Progress</span>
                    <span className="text-gt-primary font-bold">{student.progress}%</span>
                  </div>
                  <div className="w-full bg-gt-neutral-700 rounded-full h-2">
                    <div 
                      className={`h-2 bg-gradient-to-r ${student.gradient} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${student.progress}%` }}
                    ></div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Compact CTA */}
        <div className="text-center">
          <Card className="bg-gradient-to-r from-gt-primary/10 via-gt-secondary/10 to-gt-primary/10 backdrop-blur-sm border border-gt-primary/20 rounded-3xl p-8 gt-shadow-elegant">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white">Join Our Success Stories</h3>
              <p className="text-lg text-gt-neutral-300 max-w-2xl mx-auto">
                Your musical journey starts here. Book your free trial and become our next success story.
              </p>
              
              <Button 
                size="lg" 
                onClick={() => scrollToSection('booking')}
                className="bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold px-8 py-4 h-14 rounded-2xl gt-shadow-elegant transform hover:scale-105 transition-all duration-300"
              >
                <Zap className="h-5 w-5 mr-2" />
                Start Your Journey
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}