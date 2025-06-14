
import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section
      id="hero"
      className="hero-bg-gradient hero-section relative min-h-screen flex items-center justify-center text-center overflow-hidden transition-colors"
      tabIndex={-1}
    >
      <div className="container mx-auto relative z-10 px-6 flex flex-col items-center justify-center h-full">
        <div className="flex-1" />
        <div>
          <div className="animate-float">
            <h1
              className="hero-title text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight cursor-pointer outline-none"
              tabIndex={0}
              aria-label="CHARITH.S"
              style={{ marginTop: "5vh" }}
            >
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
            className="hero-subtitle text-xl md:text-2xl font-semibold mb-8 animate-subtle-glow"
            repeat={Infinity}
          />
          <p className="max-w-4xl mx-auto text-white/90 mb-12 text-lg leading-relaxed transition-all duration-300">
            Cybersecurity professional with 4+ years of experience in safeguarding digital infrastructures, 
            analyzing threats, and leading incident response efforts across enterprise environments.
          </p>
          <a href="#about">
            <Button 
              variant="default" 
              size="lg" 
              className="btn-glass font-semibold"
            >
              Discover More <ArrowDown className="ml-2 h-5 w-5" />
            </Button>
          </a>
        </div>
        <div className="flex-1" />
      </div>
    </section>
  );
};

export default Hero;
