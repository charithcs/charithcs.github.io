
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <a href="#" className="text-lg font-bold font-heading">
          <Button variant="outline">View Resume</Button>
        </a>
        <nav className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a key={link.title} href={link.href} className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              {link.title}
            </a>
          ))}
          <a href="#connect">
            <Button>Let's Connect</Button>
          </a>
        </nav>
        <div className="md:hidden">
          <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-background pb-4">
          <nav className="flex flex-col items-center gap-4">
            {navLinks.map((link) => (
              <a key={link.title} href={link.href} className="text-sm font-medium text-muted-foreground hover:text-primary" onClick={() => setIsMenuOpen(false)}>
                {link.title}
              </a>
            ))}
            <a href="#connect" onClick={() => setIsMenuOpen(false)}>
              <Button>Let's Connect</Button>
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
