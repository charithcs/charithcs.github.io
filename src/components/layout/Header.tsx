
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Blog", href: "#blog" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-effect border-b border-border/20">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <a 
          href="https://drive.google.com/file/d/1kQGyNZ3_qA3VV5vH78xic-B-EV0VliQQ/view?usp=sharing" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="text-lg font-bold font-heading"
        >
          <Button 
            variant="outline" 
            className="bg-gradient-to-r from-primary to-primary/80 text-white border-0 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300"
          >
            View Resume
          </Button>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.title} 
              href={link.href} 
              className="text-sm font-medium text-foreground/80 transition-all duration-300 hover:text-primary hover:scale-105 relative group"
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/80 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
          <a href="#connect">
            <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              Let's Connect
            </Button>
          </a>
        </nav>
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="hover:bg-primary/10"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden glass-effect border-t border-border/20">
          <nav className="flex flex-col items-center gap-6 py-6">
            {navLinks.map((link) => (
              <a 
                key={link.title} 
                href={link.href} 
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors duration-300" 
                onClick={() => setIsMenuOpen(false)}
              >
                {link.title}
              </a>
            ))}
            <a href="#connect" onClick={() => setIsMenuOpen(false)}>
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70">
                Let's Connect
              </Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
