import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary">Theosaas</h1>
              <p className="text-xs text-neutral-500 -mt-1">CONSULTING</p>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <button
                onClick={() => scrollToSection("services")}
                className="text-neutral-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="text-neutral-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="text-neutral-600 hover:text-primary px-3 py-2 text-sm font-medium transition-colors"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Get Started
              </button>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-neutral-600 hover:text-primary"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <button
                onClick={() => scrollToSection("services")}
                className="block px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary w-full text-left"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("team")}
                className="block px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary w-full text-left"
              >
                Team
              </button>
              <button
                onClick={() => scrollToSection("process")}
                className="block px-3 py-2 text-sm font-medium text-neutral-600 hover:text-primary w-full text-left"
              >
                Process
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-sm font-medium bg-primary text-white rounded-lg mx-3 text-center"
              >
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
