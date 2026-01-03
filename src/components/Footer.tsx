import { Music, Mail, Phone, MapPin, Instagram, Facebook, Youtube, Twitter, Heart, Star, Users, Award } from "lucide-react";

export function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: "Home", id: "hero" },
    { name: "Courses", id: "courses" },
    { name: "Pricing", id: "pricing" },
    { name: "Students", id: "students" },
    { name: "FAQ", id: "faq" },
    { name: "Contact", id: "contact" }
  ];

  const courses = [
    { name: "Guitar Classes", icon: "🎸" },
    { name: "Piano/Keyboard", icon: "🎹" },
    { name: "Drum Classes", icon: "🥁" },
    { name: "Vocal Training", icon: "🎤" },
    { name: "Ukulele Classes", icon: "🎵" },
    { name: "Music Theory", icon: "📚" }
  ];

  const socialLinks = [
    { name: "Instagram", icon: Instagram, href: "#", color: "hover:text-pink-400" },
    { name: "Facebook", icon: Facebook, href: "#", color: "hover:text-blue-400" },
    { name: "YouTube", icon: Youtube, href: "#", color: "hover:text-red-400" },
    { name: "Twitter", icon: Twitter, href: "#", color: "hover:text-sky-400" }
  ];

  const stats = [
    { number: "500+", label: "Students", icon: Users },
    { number: "15+", label: "Years", icon: Award },
    { number: "4.9", label: "Rating", icon: Star },
    { number: "99%", label: "Success", icon: Heart }
  ];

  return (
    <footer className="bg-gt-neutral-900 relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gt-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gt-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative">
        {/* Main footer content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand section */}
            <div className="lg:col-span-1 space-y-6">
              <div className="flex items-center space-x-3">
                <div className="p-3 bg-gradient-to-r from-gt-primary to-gt-secondary rounded-2xl gt-shadow-md">
                  <Music className="h-8 w-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Seven Notes Academy</h3>
                  <p className="text-gt-neutral-400 text-sm">Music Education Excellence</p>
                </div>
              </div>
              
              <p className="text-gt-neutral-300 leading-relaxed">
                Lucknow's premier music academy offering world-class instruction in guitar, piano, drums, vocals, 
                ukulele, and music theory. Transform your musical dreams into reality.
              </p>

              {/* Quick stats */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center p-3 bg-gt-neutral-800/50 rounded-xl border border-gt-neutral-700/50">
                    <div className="flex items-center justify-center mb-1">
                      <stat.icon className="h-4 w-4 text-gt-primary mr-1" />
                      <span className="font-bold text-white">{stat.number}</span>
                    </div>
                    <span className="text-xs text-gt-neutral-400">{stat.label}</span>
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`p-3 bg-gt-neutral-800/50 rounded-xl border border-gt-neutral-700/50 text-gt-neutral-400 ${social.color} transition-all duration-300 hover:scale-110 gt-shadow-sm hover:gt-shadow-md`}
                    aria-label={social.name}
                  >
                    <social.icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick links */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-gt-primary to-gt-secondary rounded-full mr-3"></div>
                Quick Links
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="block text-gt-neutral-300 hover:text-gt-primary transition-colors duration-200 hover:translate-x-1 transform"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Courses */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-gt-primary to-gt-secondary rounded-full mr-3"></div>
                Our Courses
              </h4>
              <div className="space-y-3">
                {courses.map((course, index) => (
                  <button
                    key={index}
                    onClick={() => scrollToSection('courses')}
                    className="flex items-center space-x-3 text-gt-neutral-300 hover:text-gt-primary transition-colors duration-200 group"
                  >
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">{course.icon}</span>
                    <span className="group-hover:translate-x-1 transform transition-transform duration-200">{course.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact info */}
            <div className="space-y-6">
              <h4 className="text-xl font-bold text-white flex items-center">
                <div className="w-1 h-6 bg-gradient-to-b from-gt-primary to-gt-secondary rounded-full mr-3"></div>
                Contact Info
              </h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3 group">
                  <div className="p-2 bg-gt-neutral-800/50 rounded-lg group-hover:bg-gt-primary/20 transition-colors">
                    <MapPin className="h-4 w-4 text-gt-primary" />
                  </div>
                  <div>
                    <p className="text-gt-neutral-300 text-sm leading-relaxed">
                      Seven Notes Academy Music Studio<br />
                      Sector 7, Gomti Nagar Extension<br />
                      Lucknow, Uttar Pradesh 226010
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-gt-neutral-800/50 rounded-lg group-hover:bg-gt-primary/20 transition-colors">
                    <Phone className="h-4 w-4 text-gt-primary" />
                  </div>
                  <div>
                    <p className="text-gt-neutral-300 text-sm">+91 7827888988</p>
                    <p className="text-gt-neutral-500 text-xs">Available 9 AM - 8 PM</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3 group">
                  <div className="p-2 bg-gt-neutral-800/50 rounded-lg group-hover:bg-gt-primary/20 transition-colors">
                    <Mail className="h-4 w-4 text-gt-primary" />
                  </div>
                  <div>
                    <p className="text-gt-neutral-300 text-sm">info@sevennotesacademy.com</p>
                    <p className="text-gt-neutral-500 text-xs">Quick response guaranteed</p>
                  </div>
                </div>
              </div>

              {/* CTA button */}
              <button
                onClick={() => scrollToSection('booking')}
                className="w-full bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold py-3 px-6 rounded-2xl gt-shadow-elegant hover:gt-shadow-intense transform hover:scale-105 transition-all duration-300"
              >
                Book Free Trial Class
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gt-neutral-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-gt-neutral-400 text-sm">
                <span>© 2024 Seven Notes Academy. All rights reserved.</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Designed with ❤️ for music lovers</span>
              </div>
              
              <div className="flex items-center space-x-6 text-gt-neutral-400 text-sm">
                <button className="hover:text-gt-primary transition-colors">Privacy Policy</button>
                <button className="hover:text-gt-primary transition-colors">Terms of Service</button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-gt-primary transition-colors"
                >
                  Support
                </button>
              </div>
            </div>

            {/* Made with love message */}
            <div className="text-center mt-6 pt-6 border-t border-gt-neutral-800/50">
              <p className="text-gt-neutral-500 text-xs flex items-center justify-center">
                Empowering musical dreams in Lucknow since 2009 
                <Heart className="h-3 w-3 text-red-500 mx-2 animate-pulse" />
                Join our musical family today
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}