
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center text-center overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
      <div className="container mx-auto relative z-10">
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-4 animate-fade-in-down">
          CHARITH.S
        </h1>
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
          className="text-lg md:text-xl text-primary mb-6 font-semibold animate-fade-in-up"
          repeat={Infinity}
        />
        <p className="max-w-3xl mx-auto text-muted-foreground mb-8 animate-fade-in-up animation-delay-300">
          Cybersecurity professional with 4+ years of experience in safeguarding digital infrastructures, analyzing threats, and leading incident response efforts.
        </p>
        <a href="#about">
          <Button variant="outline" size="lg" className="animate-fade-in-up animation-delay-600">
            Discover More <ArrowDown className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </div>
    </section>
  );
};

export default Hero;

