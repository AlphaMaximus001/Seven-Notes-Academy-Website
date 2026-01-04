import { useState, useRef, FormEvent } from "react"; // <--- Fixed: Added useRef here
import emailjs from '@emailjs/browser';
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Badge } from "./ui/badge";
import { 
  Calendar, Clock, User, Music, Star, Gift, 
  CheckCircle, ArrowRight, Zap, Loader2 
} from "lucide-react";

export function BookingForm() {
  // 1. State for Selections
  const [selectedInstrument, setSelectedInstrument] = useState("");
  const [selectedFormat, setSelectedFormat] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  
  // 2. State for Text Inputs
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    age: "",
    additionalInfo: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  
  // 3. Ref for the form element
  const formRef = useRef<HTMLFormElement>(null);

  // Helper to update text inputs
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // 🔴 VERIFY THESE KEYS ARE CORRECT
    const serviceID = 'service_nj2vbw9'; 
    const adminTemplateID = 'template_weyjohn';       
    const clientTemplateID = 'template_nzh9kbn'; // Master Client Auto Reply ID
    const publicKey = 'l5rGFfoHEs28xev4a'; 

    // Create the data package explicitly from State
    const templateParams = {
      // Data for Admin Email
      form_type: 'Free Trial Booking',
      fullName: formData.fullName,
      email: formData.email,       // Sends as {{email}}
      user_email: formData.email,  // Sends as {{user_email}} (For the Auto-Reply)
      phone: formData.phone,
      age: formData.age,
      selected_instrument: selectedInstrument,
      selected_format: selectedFormat,
      selected_time: selectedTime,
      additionalInfo: formData.additionalInfo,

      // Data for Client Auto-Reply
      reply_subject: "Booking Confirmed! 🎸 - Seven Notes Academy",
      reply_header: "Booking Received!",
      reply_message: "Thank you for booking a free trial class! We have received your request.",
      reply_details: `Instrument: ${selectedInstrument}, Time: ${selectedTime}, Format: ${selectedFormat}`,
    };

    // Send Admin Email
    emailjs.send(serviceID, adminTemplateID, templateParams, publicKey)
      .then(() => {
        // Send Client Email
        return emailjs.send(serviceID, clientTemplateID, templateParams, publicKey);
      })
      .then(
        () => {
          alert('🎉 Booking Request Sent! Check your email for confirmation.');
          setIsSubmitting(false);
          // Reset form
          setFormData({ fullName: "", email: "", phone: "", age: "", additionalInfo: "" });
          setSelectedInstrument("");
          setSelectedFormat("");
          setSelectedTime("");
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert('❌ FAILED... ' + error.text);
          setIsSubmitting(false);
        }
      );
  };

  const instruments = [
    { id: "guitar", name: "Guitar", icon: "🎸", popular: true },
    { id: "piano", name: "Piano/Keyboard", icon: "🎹", popular: true },
    { id: "drums", name: "Drums", icon: "🥁", popular: false },
    { id: "vocals", name: "Vocals", icon: "🎤", popular: true },
    { id: "ukulele", name: "Ukulele", icon: "🎵", popular: false },
    { id: "theory", name: "Music Theory", icon: "📚", popular: false }
  ];

  const classFormats = [
    { 
      id: "online", 
      name: "Online Classes", 
      icon: "💻", 
      description: "Learn from home with HD video",
      benefits: ["Convenient", "Flexible timing", "No travel needed"]
    },
    { 
      id: "studio", 
      name: "Studio Classes", 
      icon: "🏢", 
      description: "In-person at our professional studio",
      benefits: ["Professional instruments", "Face-to-face learning", "Studio environment"]
    }
  ];

  const timeSlots = [
    { id: "morning", label: "Morning", time: "9:00 AM - 12:00 PM", icon: "🌅" },
    { id: "afternoon", label: "Afternoon", time: "12:00 PM - 5:00 PM", icon: "☀️" },
    { id: "evening", label: "Evening", time: "5:00 PM - 8:00 PM", icon: "🌆" }
  ];

  const benefits = [
    "No payment required for trial class",
    "Meet your potential instructor",
    "Assess your current skill level", 
    "Get personalized learning plan",
    "Experience our teaching methodology",
    "Ask questions about courses"
  ];

  return (
    <section id="booking" className="py-24 bg-gt-neutral-900 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-gt-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-96 -left-96 w-[800px] h-[800px] bg-gt-secondary/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center space-y-6 mb-16">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary to-gt-secondary px-6 py-3 rounded-full">
            <Gift className="h-5 w-5 text-white" />
            <span className="text-sm text-white font-bold tracking-wide">FREE TRIAL CLASS</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-white leading-tight">
              Book Your{" "}
              <span className="text-transparent bg-gradient-to-r from-gt-primary to-gt-secondary bg-clip-text">
                Free Trial
              </span>
            </h2>
            <p className="text-xl text-gt-neutral-300 max-w-4xl mx-auto leading-relaxed">
              Take the first step towards musical mastery. Book a complimentary trial class 
              and discover why hundreds of students choose Seven Notes Academy.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
          {/* Booking form */}
          <div className="lg:col-span-2">
            <Card className="bg-gt-neutral-800/80 backdrop-blur-sm border border-gt-neutral-700/50 rounded-3xl gt-shadow-elegant">
              <CardHeader className="pb-6">
                <CardTitle className="text-3xl font-bold text-white flex items-center">
                  <Calendar className="h-8 w-8 text-gt-primary mr-3" />
                  Book Your Free Trial Class
                </CardTitle>
                <p className="text-gt-neutral-300 text-lg">Fill out the form below and we'll contact you within 24 hours to confirm your trial class.</p>
              </CardHeader>

              <CardContent className="space-y-8">
                <form onSubmit={sendEmail} className="space-y-8">
                  
                  {/* Personal Information */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <User className="h-5 w-5 text-gt-secondary mr-2" />
                      Personal Information
                    </h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input 
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        placeholder="Full name *" 
                        required
                        className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl h-12 bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400"
                      />
                      <Input 
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        placeholder="Email address *" 
                        type="email" 
                        required
                        className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl h-12 bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400"
                      />
                    </div>
                    <div className="grid md:grid-cols-2 gap-4">
                      <Input 
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Phone number (WhatsApp) *" 
                        type="tel" 
                        required
                        className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl h-12 bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400"
                      />
                      <Input 
                        name="age"
                        value={formData.age}
                        onChange={handleInputChange}
                        placeholder="Age (optional)" 
                        type="number" 
                        className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl h-12 bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400"
                      />
                    </div>
                  </div>

                  {/* Instrument Selection */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <Music className="h-5 w-5 text-gt-secondary mr-2" />
                      Choose Your Instrument *
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
                      {instruments.map((instrument) => (
                        <div
                          key={instrument.id}
                          onClick={() => setSelectedInstrument(instrument.id)}
                          className={`relative cursor-pointer p-3 sm:p-4 rounded-2xl border-2 transition-all duration-300 ${
                            selectedInstrument === instrument.id
                              ? 'border-gt-primary bg-gt-primary/10'
                              : 'border-gt-neutral-600 hover:border-gt-primary/50 bg-gt-neutral-700/30'
                          }`}
                        >
                          {instrument.popular && (
                            <Badge className="absolute -top-2 -right-2 bg-gt-secondary text-white text-xs px-2 py-1">
                              Popular
                            </Badge>
                          )}
                          <div className="text-center space-y-2">
                            <div className="text-xl sm:text-2xl">{instrument.icon}</div>
                            <span className="text-xs sm:text-sm font-medium text-white leading-tight">{instrument.name}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Class Format */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white flex items-center">
                      <Clock className="h-5 w-5 text-gt-secondary mr-2" />
                      Preferred Class Format *
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                      {classFormats.map((format) => (
                        <div
                          key={format.id}
                          onClick={() => setSelectedFormat(format.id)}
                          className={`cursor-pointer p-4 sm:p-6 rounded-2xl border-2 transition-all duration-300 ${
                            selectedFormat === format.id
                              ? 'border-gt-primary bg-gt-primary/10'
                              : 'border-gt-neutral-600 hover:border-gt-primary/50 bg-gt-neutral-700/30'
                          }`}
                        >
                          <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                              <span className="text-2xl">{format.icon}</span>
                              <div>
                                <h4 className="font-bold text-white">{format.name}</h4>
                                <p className="text-sm text-gt-neutral-300">{format.description}</p>
                              </div>
                            </div>
                            <div className="space-y-1">
                              {format.benefits.map((benefit, index) => (
                                <div key={index} className="flex items-center space-x-2">
                                  <CheckCircle className="h-3 w-3 text-green-400" />
                                  <span className="text-xs text-gt-neutral-400">{benefit}</span>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Time Preference */}
                  <div className="space-y-6">
                    <h3 className="text-xl font-bold text-white">Preferred Time Slot *</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                      {timeSlots.map((slot) => (
                        <div
                          key={slot.id}
                          onClick={() => setSelectedTime(slot.id)}
                          className={`cursor-pointer p-3 sm:p-4 rounded-2xl border-2 transition-all duration-300 text-center ${
                            selectedTime === slot.id
                              ? 'border-gt-primary bg-gt-primary/10'
                              : 'border-gt-neutral-600 hover:border-gt-primary/50 bg-gt-neutral-700/30'
                          }`}
                        >
                          <div className="space-y-2">
                            <div className="text-xl">{slot.icon}</div>
                            <div>
                              <h4 className="font-bold text-white text-sm">{slot.label}</h4>
                              <p className="text-xs text-gt-neutral-300">{slot.time}</p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Additional Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-white">Additional Information (Optional)</h3>
                    <Textarea 
                      name="additionalInfo"
                      value={formData.additionalInfo}
                      onChange={handleInputChange}
                      placeholder="Tell us about your musical background, goals, or any specific questions you have..."
                      className="border border-gt-neutral-600 focus:border-gt-primary rounded-xl bg-gt-neutral-700/50 text-white placeholder:text-gt-neutral-400 min-h-[100px] resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit"
                    disabled={!selectedInstrument || !selectedFormat || !selectedTime || isSubmitting}
                    className="w-full bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-bold py-4 text-lg rounded-2xl gt-shadow-elegant transform hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                        <>
                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                        Sending Request...
                        </>
                    ) : (
                        <>
                        <Zap className="h-5 w-5 mr-2" />
                        Book My Free Trial Class
                        <ArrowRight className="h-5 w-5 ml-2" />
                        </>
                    )}
                  </Button>

                  <p className="text-sm text-gt-neutral-400 text-center">
                    * Required fields. We'll contact you within 24 hours to confirm your trial class timing.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Benefits sidebar - UNCHANGED */}
          <div className="space-y-8">
            <Card className="bg-gradient-to-r from-gt-primary/10 via-gt-secondary/10 to-gt-primary/10 backdrop-blur-sm border border-gt-primary/20 rounded-3xl p-8">
              <div className="space-y-6">
                <div className="text-center">
                  <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary to-gt-secondary px-4 py-2 rounded-full mb-4">
                    <Star className="h-4 w-4 text-white" />
                    <span className="text-sm text-white font-bold">100% FREE</span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Trial Class Benefits</h3>
                  <p className="text-gt-neutral-300">What you'll get in your free session:</p>
                </div>
                
                <div className="space-y-3">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-400 mt-0.5 flex-shrink-0" />
                      <span className="text-gt-neutral-200 text-sm">{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="bg-gt-neutral-800/50 backdrop-blur-sm border border-gt-neutral-700/50 rounded-3xl p-6">
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white text-center">Why Students Choose Us</h3>
                <div className="space-y-4">
                  {[
                    { stat: "500+", label: "Happy Students", color: "text-gt-primary" },
                    { stat: "98%", label: "Satisfaction Rate", color: "text-green-400" },
                    { stat: "4.9/5", label: "Average Rating", color: "text-yellow-400" },
                    { stat: "24hrs", label: "Quick Response", color: "text-blue-400" }
                  ].map((item, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gt-neutral-700/30 rounded-xl">
                      <span className="text-gt-neutral-300 text-sm">{item.label}</span>
                      <span className={`font-bold ${item.color}`}>{item.stat}</span>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            <Card className="bg-gt-neutral-800/50 backdrop-blur-sm border border-gt-neutral-700/50 rounded-3xl p-6">
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white">Need Help?</h3>
                <div className="space-y-3 text-gt-neutral-300 text-sm">
                  <p>📞 Call/WhatsApp: +91 7827888988</p>
                  <p>📧 Email: info@sevennotesacademy.com</p>
                  <p>🕒 Response time: Within 24 hours</p>
                </div>
                <Button 
                  variant="outline" 
                  className="w-full border-gt-primary text-gt-primary hover:bg-gt-primary hover:text-white rounded-xl"
                >
                  Contact Support
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}