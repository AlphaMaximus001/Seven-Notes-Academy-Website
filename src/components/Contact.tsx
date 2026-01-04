import { useState, FormEvent } from "react";
import emailjs from '@emailjs/browser';
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock, MessageCircle, Send, Loader2 } from "lucide-react";

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  // 1. Use State to capture inputs reliably
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "",
    message: ""
  });

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Helper to update inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🔴 KEYS: Use the same ones as BookingForm.tsx
    const serviceID = 'service_nj2vbw9';
    const adminTemplateID = 'template_weyjohn';       // Master Admin ID
    const clientTemplateID = 'template_nzh9kbn';     // Master Client ID
    const publicKey = 'l5rGFfoHEs28xev4a';

    // 2. Prepare the data (The "Master System")
    const templateParams = {
        // -- Data for Admin --
        form_type: 'Contact Us Message',
        user_name: formData.name,      // Matches {{user_name}} in Admin Template
        user_email: formData.email,    // Target for Auto-Reply
        email: formData.email,         // For body text
        phone: formData.phone,
        interest: formData.interest,
        message: formData.message,

        // -- Data for Client Auto-Reply (Dynamic Text) --
        reply_subject: "We received your message! - Seven Notes Academy",
        reply_header: "Thanks for reaching out!",
        reply_message: "We have received your inquiry. Our team will review your message and get back to you shortly.",
        reply_details: `Interested in: ${formData.interest}\nMessage: "${formData.message}"`
    };

    console.log("Sending contact form for:", formData.email);

    // 3. Send Emails
    emailjs.send(serviceID, adminTemplateID, templateParams, publicKey)
      .then(() => {
        // Send Auto-Reply
        return emailjs.send(serviceID, clientTemplateID, templateParams, publicKey);
      })
      .then(
        () => {
          alert('🎉 Message sent successfully! Check your inbox for confirmation.');
          setIsSubmitting(false);
          // Reset form
          setFormData({ name: "", email: "", phone: "", interest: "", message: "" });
        },
        (error) => {
          console.error('FAILED...', error);
          alert('❌ Failed to send. ' + error.text);
          setIsSubmitting(false);
        }
      );
  };

  return (
    <section id="contact" className="py-20 bg-gt-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-60 -right-60 w-[600px] h-[600px] bg-gt-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-60 -left-60 w-[600px] h-[600px] bg-gt-secondary/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
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
          {/* Contact information - UNCHANGED */}
          <div className="space-y-8">
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
                
                <form onSubmit={sendEmail} className="space-y-4">
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input 
                      name="name" 
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Your name" 
                      required
                      className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl h-12 bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400"
                    />
                    <Input 
                      name="email" 
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="Email address" 
                      type="email" 
                      required
                      className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl h-12 bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400"
                    />
                  </div>
                  <Input 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    placeholder="Phone number" 
                    type="tel" 
                    required
                    className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl h-12 bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400"
                  />
                  <select 
                    name="interest" 
                    value={formData.interest}
                    onChange={handleInputChange}
                    required 
                    className="w-full px-4 py-3 border border-gt-neutral-600 focus:border-gt-primary rounded-xl bg-gt-neutral-700/50 text-white h-12"
                  >
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
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Your message (optional)"
                    className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400 min-h-[100px] resize-none"
                  />
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold py-4 h-14 rounded-2xl gt-shadow-elegant transform hover:scale-105 transition-all duration-300"
                  >
                     {isSubmitting ? (
                        <>
                        <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                        Sending...
                        </>
                    ) : (
                        <>
                        <Send className="h-4 w-4 mr-2" />
                        Send Message
                        </>
                    )}
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