
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { NAVIGATION_LINKS, CONTACT_INFO } from "@/config/constants";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isMobile = useMediaQuery('(max-width: 768px)');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false);
    
    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <header 
      className={`header-glass fixed top-0 left-0 right-0 z-50 text-white transition-all duration-300 ${
        isScrolled ? 'backdrop-blur-md bg-black/80' : 'backdrop-blur-sm bg-black/60'
      }`}
    >
      <div className="container mx-auto flex h-16 md:h-20 items-center justify-between px-4 md:px-6">
        <a 
          href={CONTACT_INFO.resume}
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-lg font-bold"
          aria-label="View Resume"
        >
          <Button 
            variant="default" 
            className="btn-unified shadow-md text-sm md:text-base px-3 md:px-4 py-2"
          >
            View Resume
          </Button>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8">
          {NAVIGATION_LINKS.map((link) => (
            <button
              key={link.title}
              onClick={() => handleNavClick(link.href)}
              className="text-sm font-semibold text-white hover:text-primary hover:scale-105 relative group transition-all duration-300 cursor-pointer"
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full"></span>
            </button>
          ))}
          <span onClick={() => handleNavClick('#connect')}>
            <Button className="btn-unified shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm px-4 py-2">
              Let's Connect
            </Button>
          </span>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-muted text-white p-2"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 bg-black/98 backdrop-blur-xl z-40 border-t border-white/10">
          <nav className="flex flex-col items-center gap-6 py-8 px-6 bg-gradient-to-b from-black/95 to-black/90">
            {NAVIGATION_LINKS.map((link) => (
              <button
                key={link.title}
                onClick={() => handleNavClick(link.href)}
                className="text-lg font-semibold text-white hover:text-primary transition-colors duration-300 py-2 w-full text-center border-b border-white/10 hover:border-primary/30"
              >
                {link.title}
              </button>
            ))}
            <button onClick={() => handleNavClick('#connect')} className="mt-4">
              <Button className="btn-unified text-lg px-6 py-3">
                Let's Connect
              </Button>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
