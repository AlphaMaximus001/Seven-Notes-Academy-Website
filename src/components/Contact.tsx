import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send } from "lucide-react";

export function Contact() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gt-neutral-900 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-gt-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-gt-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Header */}
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gt-primary/10 backdrop-blur-sm px-6 py-3 rounded-full border border-gt-primary/20">
            <MessageCircle className="h-5 w-5 text-gt-primary" />
            <span className="text-sm text-gt-primary font-bold tracking-wide">GET IN TOUCH</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-4xl lg:text-5xl font-bold text-white leading-tight">
              Ready to Start Your{" "}
              <span className="text-transparent bg-gradient-to-r from-gt-primary to-gt-secondary bg-clip-text">
                Musical Journey?
              </span>
            </h2>
            <p className="text-lg text-gt-neutral-300 max-w-3xl mx-auto leading-relaxed">
              Contact us today for course guidance, scheduling, or to book your free trial class. 
              We're here to help you begin your musical adventure.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Contact information */}
          <div className="space-y-8">
            {/* Contact methods */}
            <div className="grid gap-6">
              <Card className="bg-gt-neutral-800/50 backdrop-blur-sm border border-gt-neutral-700/50 rounded-3xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-gt-primary to-gt-secondary rounded-2xl">
                    <MapPin className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Visit Our Studio</h3>
                    <p className="text-gt-neutral-300 text-sm">
                      Sector 7, Gomti Nagar Extension<br />
                      Lucknow, Uttar Pradesh 226010
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gt-neutral-800/50 backdrop-blur-sm border border-gt-neutral-700/50 rounded-3xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-green-600 to-green-400 rounded-2xl">
                    <Phone className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Call or WhatsApp</h3>
                    <p className="text-gt-neutral-300 text-sm">
                      +91 7827888988<br />
                      Available 9 AM - 8 PM (Mon-Sat)
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="bg-gt-neutral-800/50 backdrop-blur-sm border border-gt-neutral-700/50 rounded-3xl p-6">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-2xl">
                    <Mail className="h-6 w-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white mb-1">Email Support</h3>
                    <p className="text-gt-neutral-300 text-sm">
                      info@sevennotesacademy.com<br />
                      Response within 24 hours
                    </p>
                  </div>
                </div>
              </Card>
            </div>

            {/* Operating hours */}
            <Card className="bg-gt-neutral-800/50 backdrop-blur-sm border border-gt-neutral-700/50 rounded-3xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="h-5 w-5 text-gt-secondary" />
                <h3 className="font-bold text-white">Operating Hours</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gt-neutral-300">Monday - Friday</span>
                  <span className="text-green-400 font-medium">9:00 AM - 8:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gt-neutral-300">Saturday</span>
                  <span className="text-green-400 font-medium">9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gt-neutral-300">Sunday</span>
                  <span className="text-yellow-400 font-medium">10:00 AM - 4:00 PM</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Contact form */}
          <Card className="bg-gt-neutral-800/80 backdrop-blur-sm border border-gt-neutral-700/50 rounded-3xl">
            <CardContent className="p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Send Us a Message</h3>
                  <p className="text-gt-neutral-300">We'll get back to you within 24 hours.</p>
                </div>
                
                <form name="contact-form" method="POST" data-netlify="true" className="space-y-4">
                  <input type="hidden" name="form-name" value="contact-form" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      name="name"
                      placeholder="Your name" 
                      required
                      className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl h-12 bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400"
                    />
                    <Input 
                      name="email"
                      placeholder="Email address" 
                      type="email" 
                      required
                      className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl h-12 bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400"
                    />
                  </div>
                  <Input 
                    name="phone"
                    placeholder="Phone number" 
                    type="tel" 
                    required
                    className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl h-12 bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400"
                  />
                  <select name="interest" required className="w-full px-4 py-3 border border-gt-neutral-600 focus:border-gt-primary rounded-xl bg-gt-neutral-700/50 text-white h-12">
                    <option className="bg-gt-neutral-800" value="">I'm interested in...</option>
                    <option className="bg-gt-neutral-800" value="guitar">🎸 Guitar Classes</option>
                    <option className="bg-gt-neutral-800" value="piano">🎹 Piano Classes</option>
                    <option className="bg-gt-neutral-800" value="drums">🥁 Drum Classes</option>
                    <option className="bg-gt-neutral-800" value="vocals">🎤 Vocal Classes</option>
                    <option className="bg-gt-neutral-800" value="ukulele">🎵 Ukulele Classes</option>
                    <option className="bg-gt-neutral-800" value="theory">📚 Music Theory</option>
                  </select>
                  <Textarea 
                    name="message"
                    placeholder="Your message (optional)"
                    className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400 min-h-[100px] resize-none"
                  />
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold py-4 h-14 rounded-2xl gt-shadow-elegant transform hover:scale-105 transition-all duration-300"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>
                </form>
                
                <p className="text-xs text-gt-neutral-400 text-center">
                  Or skip the form and book your free trial class directly.
                </p>
                
                <Button 
                  variant="outline"
                  onClick={() => scrollToSection('booking')}
                  className="w-full border-2 border-gt-primary text-gt-primary hover:bg-gt-primary hover:text-white font-semibold py-3 h-12 rounded-2xl transition-all duration-300"
                >
                  Book Free Trial Class
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}