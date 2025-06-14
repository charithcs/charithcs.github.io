
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
      <div className="container mx-auto relative z-10 px-6">
        <div className="animate-float">
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-primary via-primary/80 to-accent bg-clip-text text-transparent leading-tight">
            CHARITH.S
          </h1>
        </div>
        <TypeAnimation
          sequence={[
            "Incident Response",
            1500,
            "Blue Team Operations",
            1500,
            "SOC Analyst",
            1500,
          ]}
          wrapper="p"
          speed={50}
          className="text-xl md:text-2xl text-primary/90 mb-8 font-semibold animate-glow"
          repeat={Infinity}
        />
        <p className="max-w-4xl mx-auto text-muted-foreground mb-12 text-lg leading-relaxed">
          Cybersecurity professional with 4+ years of experience in safeguarding digital infrastructures, analyzing threats, and leading incident response efforts.
        </p>
        <a href="#about">
          <Button 
            variant="outline" 
            size="lg" 
            className="glass-effect hover:bg-primary hover:text-white transition-all duration-500 hover:scale-110 shadow-lg hover:shadow-2xl border-primary/20"
          >
            Discover More <ArrowDown className="ml-2 h-5 w-5" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
