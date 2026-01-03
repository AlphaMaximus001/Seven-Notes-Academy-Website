import { useState } from "react";
import { MessageCircle, X, Send, Clock, Star } from "lucide-react";

export function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);

  const quickMessages = [
    {
      text: "I want to book a free trial class",
      icon: "🎵"
    },
    {
      text: "What courses do you offer?",
      icon: "📚"
    },
    {
      text: "What are your class timings?",
      icon: "⏰"
    },
    {
      text: "I need help choosing an instrument",
      icon: "🎸"
    }
  ];

  const handleWhatsAppClick = (message?: string) => {
    const phoneNumber = "917827888988";
    const defaultMessage = "Hello! I'm interested in learning music at Seven Notes Academy. Can you help me get started?";
    const finalMessage = message || defaultMessage;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(finalMessage)}`;
    window.open(whatsappUrl, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat popup */}
      {isOpen && (
        <div className="mb-4 bg-white rounded-3xl gt-shadow-intense border border-gt-neutral-200 w-80 overflow-hidden animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="bg-gradient-to-r from-green-600 to-green-500 p-4 text-white">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <MessageCircle className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-bold">Seven Notes Academy</h3>
                  <p className="text-xs opacity-90 flex items-center">
                    <div className="w-2 h-2 bg-green-300 rounded-full mr-2 animate-pulse"></div>
                    Online • Quick Response
                  </p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 hover:bg-white/20 rounded-full transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="p-4 space-y-4">
            {/* Welcome message */}
            <div className="bg-gt-neutral-50 rounded-2xl p-4 space-y-2">
              <div className="flex items-center space-x-2">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="font-semibold text-gt-neutral-900 text-sm">Welcome to Seven Notes Academy!</span>
              </div>
              <p className="text-gt-neutral-600 text-sm leading-relaxed">
                Hi there! 👋 Ready to start your musical journey? Choose a quick message below or send us your own.
              </p>
              <div className="flex items-center space-x-2 text-xs text-gt-neutral-500">
                <Clock className="h-3 w-3" />
                <span>Usually responds within minutes</span>
              </div>
            </div>

            {/* Quick messages */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-gt-neutral-600 uppercase tracking-wide">Quick Messages:</p>
              {quickMessages.map((msg, index) => (
                <button
                  key={index}
                  onClick={() => handleWhatsAppClick(msg.text)}
                  className="w-full text-left p-3 bg-gt-neutral-50 hover:bg-green-50 rounded-xl border border-gt-neutral-200 hover:border-green-300 transition-all duration-200 group"
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-lg group-hover:scale-110 transition-transform duration-200">
                      {msg.icon}
                    </span>
                    <span className="text-sm text-gt-neutral-700 group-hover:text-green-700 font-medium">
                      {msg.text}
                    </span>
                  </div>
                </button>
              ))}
            </div>

            {/* Custom message button */}
            <button
              onClick={() => handleWhatsAppClick()}
              className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white font-semibold py-3 px-4 rounded-2xl transition-all duration-300 transform hover:scale-105 gt-shadow-md hover:gt-shadow-lg flex items-center justify-center space-x-2"
            >
              <Send className="h-4 w-4" />
              <span>Start Conversation</span>
            </button>

            {/* Trust indicators */}
            <div className="text-center space-y-2">
              <div className="flex items-center justify-center space-x-4 text-xs text-gt-neutral-500">
                <div className="flex items-center space-x-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span>500+ Happy Students</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span>4.9/5 Rating</span>
                </div>
              </div>
              <p className="text-xs text-gt-neutral-500">
                🔒 Your privacy is protected. We respond within 24 hours.
              </p>
            </div>
          </div>
        </div>
      )}

      {/* Main WhatsApp button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group relative bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white p-4 rounded-full gt-shadow-lg hover:gt-shadow-xl transition-all duration-300 transform hover:scale-110"
        aria-label="Chat with us on WhatsApp"
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6 group-hover:scale-110 transition-transform duration-300" />
        )}
        
        {/* Pulse animation */}
        {!isOpen && (
          <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        )}
        
        {/* Notification badge */}
        {!isOpen && (
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-xs font-bold text-white">1</span>
          </div>
        )}
        
        {/* Tooltip */}
        <div className="absolute bottom-full right-0 mb-2 px-3 py-2 bg-gt-neutral-900 text-white text-sm rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap gt-shadow-lg">
          Chat with us on WhatsApp
          <div className="absolute top-full right-4 w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-gt-neutral-900"></div>
        </div>
      </button>
    </div>
  );
}