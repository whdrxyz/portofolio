import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b border-border animate-slide-in-top">
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl font-bold gradient-text animate-bounce-in">Whdrxyz</div>
            <div className="hidden md:flex space-x-8">
              <button 
                onClick={() => scrollToSection('home')} 
                className="nav-link text-foreground"
                style={{ animationDelay: '0.1s' }}
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('projects')} 
                className="nav-link text-foreground"
                style={{ animationDelay: '0.2s' }}
              >
                Projects
              </button>
              <button 
                onClick={() => scrollToSection('skills')} 
                className="nav-link text-foreground"
                style={{ animationDelay: '0.3s' }}
              >
                Skills
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className="nav-link text-foreground"
                style={{ animationDelay: '0.4s' }}
              >
                Contact
              </button>
            </div>
            <button 
              className="md:hidden text-foreground animate-pulse-hover transition-transform duration-300 hover:scale-110"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-lg pt-20 animate-fade-in">
          <div className="flex flex-col items-center space-y-8 pt-8">
            <button 
              onClick={() => scrollToSection('home')} 
              className="mobile-menu-item text-2xl text-foreground hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:translate-x-2"
              style={{ animationDelay: '0.1s' }}
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('projects')} 
              className="mobile-menu-item text-2xl text-foreground hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:translate-x-2"
              style={{ animationDelay: '0.2s' }}
            >
              Projects
            </button>
            <button 
              onClick={() => scrollToSection('skills')} 
              className="mobile-menu-item text-2xl text-foreground hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:translate-x-2"
              style={{ animationDelay: '0.3s' }}
            >
              Skills
            </button>
            <button 
              onClick={() => scrollToSection('contact')} 
              className="mobile-menu-item text-2xl text-foreground hover:text-blue-400 transition-all duration-300 hover:scale-110 hover:translate-x-2"
              style={{ animationDelay: '0.4s' }}
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </>
  );
}
