
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"></div>
      <div className="container mx-auto relative z-10 px-6">
        <div className="animate-float">
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/90 to-primary/80 bg-clip-text text-transparent leading-tight">
            CHARITH.S
          </h1>
        </div>
        <TypeAnimation
          sequence={[
            "Incident Response Specialist",
            1500,
            "Blue Team Operations Expert",
            1500,
            "SOC Analyst Professional",
            1500,
          ]}
          wrapper="p"
          speed={50}
          className="text-xl md:text-2xl text-primary mb-8 font-medium animate-subtle-glow"
          repeat={Infinity}
        />
        <p className="max-w-4xl mx-auto text-muted-foreground mb-12 text-lg leading-relaxed">
          Cybersecurity professional with 4+ years of experience in safeguarding digital infrastructures, 
          analyzing threats, and leading incident response efforts across enterprise environments.
        </p>
        <a href="#about">
          <Button 
            variant="default" 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            Discover More <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
