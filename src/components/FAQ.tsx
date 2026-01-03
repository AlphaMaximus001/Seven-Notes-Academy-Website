import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { HelpCircle, MessageCircle, Phone, Mail, Clock, Zap, Music, Users } from "lucide-react";

export function FAQ() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const faqCategories = [
    {
      title: "Getting Started",
      icon: Music,
      gradient: "from-gt-primary to-gt-primary-light",
      faqs: [
        {
          question: "Do I need any prior musical experience to join?",
          answer: "Not at all! Seven Notes Academy welcomes complete beginners. Our instructors are experienced in teaching students from absolute zero to advanced levels. We'll start with the basics and gradually build your skills at a comfortable pace."
        },
        {
          question: "What age groups do you accept?",
          answer: "We welcome students of all ages, from children (5+) to senior citizens. Our instructors adapt their teaching methods to suit different age groups and learning styles. Music has no age limits, and it's never too late to start!"
        },
        {
          question: "How do I choose between online and studio classes?",
          answer: "Both options offer excellent learning experiences. Choose online classes if you prefer convenience, have a busy schedule, or want to learn from home. Choose studio classes if you prefer face-to-face interaction, want access to professional instruments, or enjoy the studio environment."
        }
      ]
    },
    {
      title: "Classes & Scheduling",
      icon: Clock,
      gradient: "from-blue-600 to-blue-400",
      faqs: [
        {
          question: "How flexible is the scheduling?",
          answer: "Very flexible! We understand everyone has different schedules. You can book classes at your convenience, and we offer morning, afternoon, and evening slots. For online classes, we can even accommodate different time zones if needed."
        },
        {
          question: "What happens if I miss a class?",
          answer: "If you notify us at least 24 hours in advance, we can reschedule your class without any charges. For emergency cancellations, we'll work with you to find a suitable makeup session. We want to ensure you don't lose any learning opportunities."
        },
        {
          question: "How long is each session?",
          answer: "Individual sessions are typically 45-60 minutes, while group sessions are 60-75 minutes. This duration allows for proper warm-up, lesson content, practice time, and Q&A. We believe this is the optimal length for effective learning without fatigue."
        }
      ]
    },
    {
      title: "Pricing & Payments",
      icon: Users,
      gradient: "from-green-600 to-green-400",
      faqs: [
        {
          question: "Are there any hidden costs apart from the mentioned fees?",
          answer: "Absolutely not! Our pricing is completely transparent. The only costs are the one-time registration fee (₹1000) and your chosen session rates. This includes all learning materials, digital resources, and ongoing support. No surprise charges ever."
        },
        {
          question: "Do you offer any discounts?",
          answer: "Yes! We offer family discounts for multiple enrollments, student discounts with valid ID, and special rates for quarterly packages. We also have seasonal promotions and early bird discounts for new programs. Contact us to learn about current offers."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major payment methods including UPI, bank transfers, debit/credit cards, and cash (for studio classes). You can pay per session or opt for monthly/quarterly packages for additional savings."
        }
      ]
    },
    {
      title: "Instruments & Equipment",
      icon: Zap,
      gradient: "from-purple-600 to-purple-400",
      faqs: [
        {
          question: "Do I need to buy an instrument immediately?",
          answer: "Not immediately! For your first few lessons, you can use basic instruments or even apps for some theory lessons. We'll guide you on when and what to purchase based on your progress and commitment. For studio classes, professional instruments are available."
        },
        {
          question: "What equipment do I need for online classes?",
          answer: "You'll need a device with a camera and microphone (laptop, tablet, or smartphone), stable internet connection, and your instrument. Good lighting and a quiet environment help too. We'll provide a detailed setup guide once you enroll."
        },
        {
          question: "Can you help me choose the right instrument?",
          answer: "Absolutely! Our instructors will help you choose the right instrument based on your budget, space, and learning goals. We can also recommend trusted music stores in Lucknow and help you avoid common beginner purchasing mistakes."
        }
      ]
    }
  ];

  const supportOptions = [
    {
      title: "WhatsApp Support",
      description: "Quick answers to your questions",
      icon: MessageCircle,
      action: "Chat with us",
      gradient: "from-green-600 to-green-400"
    },
    {
      title: "Phone Consultation",
      description: "Speak directly with our team",
      icon: Phone,
      action: "Call us now",
      gradient: "from-gt-primary to-gt-secondary"
    },
    {
      title: "Email Support",
      description: "Detailed responses within 24 hours",
      icon: Mail,
      action: "Send email",
      gradient: "from-blue-600 to-blue-400"
    }
  ];

  return (
    <section id="faq" className="py-24 bg-gradient-to-b from-white via-gt-neutral-50 to-white relative overflow-hidden">
      {/* Elegant background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-gt-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/3 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Premium header */}
        <div className="text-center space-y-6 mb-20">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary/10 to-purple-500/10 px-6 py-3 rounded-full border border-gt-primary/20">
            <HelpCircle className="h-5 w-5 text-gt-primary" />
            <span className="text-sm text-gt-primary font-bold tracking-wide">FREQUENTLY ASKED QUESTIONS</span>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold text-gt-neutral-900 leading-tight">
              Everything You{" "}
              <span className="text-transparent bg-gradient-to-r from-gt-primary via-purple-600 to-gt-secondary bg-clip-text">
                Need to Know
              </span>
            </h2>
            <p className="text-xl text-gt-neutral-600 max-w-4xl mx-auto leading-relaxed">
              Find answers to the most common questions about Seven Notes Academy. 
              Can't find what you're looking for? We're here to help with personalized support.
            </p>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-12 mb-16">
          {faqCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="space-y-6">
              {/* Category header */}
              <div className="flex items-center space-x-4">
                <div className={`p-3 bg-gradient-to-r ${category.gradient} rounded-2xl gt-shadow-md`}>
                  <category.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gt-neutral-900">{category.title}</h3>
              </div>

              {/* FAQ Accordion */}
              <Card className="border-0 gt-shadow-elegant rounded-3xl overflow-hidden bg-white">
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem 
                      key={faqIndex} 
                      value={`${categoryIndex}-${faqIndex}`}
                      className="border-b border-gt-neutral-200 last:border-b-0"
                    >
                      <AccordionTrigger className="px-8 py-6 text-left hover:no-underline hover:bg-gt-neutral-50 transition-colors text-gt-neutral-900 font-semibold text-lg">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="px-8 pb-6 text-gt-neutral-600 leading-relaxed">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </Card>
            </div>
          ))}
        </div>

        {/* Support options */}
        <div className="space-y-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold text-gt-neutral-900 mb-4">
              Still Have Questions?
            </h3>
            <p className="text-xl text-gt-neutral-600 max-w-3xl mx-auto">
              Our friendly support team is here to help you with any questions or concerns. 
              Choose your preferred way to get in touch.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {supportOptions.map((option, index) => (
              <Card key={index} className="group text-center border-0 gt-shadow-elegant hover:gt-shadow-intense transition-all duration-300 rounded-3xl p-8 bg-white hover:-translate-y-1">
                <div className="space-y-6">
                  <div className="flex items-center justify-center">
                    <div className={`p-4 bg-gradient-to-r ${option.gradient} rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                      <option.icon className="h-8 w-8 text-white" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-xl font-bold text-gt-neutral-900">{option.title}</h4>
                    <p className="text-gt-neutral-600">{option.description}</p>
                  </div>
                  <Button 
                    onClick={() => scrollToSection('contact')}
                    className={`w-full bg-gradient-to-r ${option.gradient} hover:scale-105 text-white font-semibold py-3 rounded-2xl transition-all duration-300`}
                  >
                    {option.action}
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Final CTA */}
        <div className="text-center mt-16">
          <Card className="bg-gradient-to-r from-gt-primary/5 via-gt-secondary/5 to-gt-primary/5 border border-gt-primary/20 rounded-3xl p-12 gt-shadow-elegant">
            <div className="space-y-6">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-gt-primary to-gt-secondary px-4 py-2 rounded-full">
                <Music className="h-4 w-4 text-white" />
                <span className="text-sm text-white font-bold">READY TO START?</span>
              </div>
              <h3 className="text-4xl font-bold text-gt-neutral-900">
                Your Musical Journey Awaits
              </h3>
              <p className="text-xl text-gt-neutral-600 max-w-3xl mx-auto">
                All questions answered? Perfect! Take the next step and book your free trial class. 
                No commitment required - just pure musical exploration.
              </p>
              <Button 
                size="lg" 
                onClick={() => scrollToSection('booking')}
                className="bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold px-8 py-4 rounded-2xl gt-shadow-elegant transform hover:scale-105 transition-all duration-300"
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