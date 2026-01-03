import { useState } from "react";
import { Button } from "./ui/button";
import { Menu, X, Music, Zap } from "lucide-react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'Courses', id: 'courses' },
    { name: 'Pricing', id: 'pricing' },
    { name: 'Students', id: 'students' },
    { name: 'FAQ', id: 'faq' },
    { name: 'Contact', id: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-gt-neutral-900/95 backdrop-blur-md border-b border-gt-neutral-800/50 gt-shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Premium Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={() => scrollToSection('hero')}>
            <div className="p-3 bg-gradient-to-r from-gt-primary to-gt-secondary rounded-2xl gt-shadow-md group-hover:scale-110 transition-transform duration-300">
              <Music className="h-7 w-7 text-white" />
            </div>
            <div>
              <div className="text-xl font-bold text-white group-hover:text-gt-primary transition-colors">
                Seven Notes Academy
              </div>
              <div className="text-xs text-gt-neutral-400 -mt-1 font-medium">
                Music Education Excellence
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gt-neutral-300 hover:text-gt-primary font-semibold transition-colors duration-200 relative group py-2"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-gt-primary to-gt-secondary rounded-full group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}
          </nav>

          {/* Premium CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <Button 
              onClick={() => scrollToSection('booking')}
              className="bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold px-6 py-3 h-12 rounded-2xl gt-shadow-elegant hover:gt-shadow-intense transform hover:scale-105 transition-all duration-300"
            >
              <Zap className="h-4 w-4 mr-2" />
              Book Free Trial
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
              className="p-2 hover:bg-gt-neutral-800 rounded-2xl"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-gt-neutral-300" />
              ) : (
                <Menu className="h-6 w-6 text-gt-neutral-300" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gt-neutral-800/95 backdrop-blur-md border-t border-gt-neutral-700/50 rounded-b-3xl gt-shadow-lg">
            <div className="px-2 pt-4 pb-6 space-y-2">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-4 py-3 text-base font-semibold text-gt-neutral-300 hover:text-gt-primary hover:bg-gt-neutral-700/50 rounded-2xl transition-colors duration-200"
                >
                  {item.name}
                </button>
              ))}
              <div className="pt-4 border-t border-gt-neutral-700">
                <Button 
                  onClick={() => scrollToSection('booking')}
                  className="w-full bg-gradient-to-r from-gt-primary to-gt-secondary hover:from-gt-primary-dark hover:to-gt-secondary-dark text-white font-semibold py-3 h-12 rounded-2xl gt-shadow-elegant"
                >
                  <Zap className="h-4 w-4 mr-2" />
                  Book Free Trial
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}