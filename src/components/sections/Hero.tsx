
import { Button } from "@/components/ui/button";
import { Shield, Zap, Eye, Target, ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0);
  
  const metrics = [
    { icon: Shield, value: "2,847", label: "Threats Mitigated", color: "text-green-400" },
    { icon: Zap, value: "156", label: "Incidents Resolved", color: "text-blue-400" },
    { icon: Eye, value: "4+", label: "Years Experience", color: "text-purple-400" },
    { icon: Target, value: "99.8%", label: "Uptime Achieved", color: "text-orange-400" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentMetricIndex((prev) => (prev + 1) % metrics.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="unified-section-bg relative min-h-screen flex items-center justify-center section-padding"
    >
      <div className="container mx-auto relative z-10 px-6 text-center max-w-6xl">
        {/* Centered Main Title */}
        <div className="mb-16 flex flex-col items-center justify-center">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold mb-8 leading-tight bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent text-center">
            CHARITH.S
          </h1>
          
          {/* Typewriter Effect for Roles */}
          <div className="h-16 flex items-center justify-center mb-12">
            <TypeAnimation
              sequence={[
                "Incident Response Specialist",
                2000,
                "Blue Team Operations Expert", 
                2000,
                "SOC Analyst Professional",
                2000,
                "Threat Detection Engineer",
                2000,
                "Cybersecurity Analyst",
                2000,
              ]}
              wrapper="h2"
              speed={50}
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-300 min-h-[3rem] text-center"
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Smaller Professional Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-3xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isActive = index === currentMetricIndex;
            
            return (
              <div
                key={index}
                className={`
                  unified-card relative p-4 md:p-5 rounded-lg transition-all duration-500 transform
                  ${isActive 
                    ? 'border-green-400/50 bg-gradient-to-br from-green-400/10 to-blue-400/10 scale-105 shadow-lg shadow-green-400/20' 
                    : 'hover:border-white/40'
                  }
                  hover:scale-102 group cursor-pointer
                `}
              >
                <div className="flex flex-col items-center space-y-3">
                  <Icon className={`w-6 h-6 md:w-7 md:h-7 ${isActive ? metric.color : 'text-white/70'} transition-colors duration-300`} />
                  <div className="text-center">
                    <div className={`text-lg md:text-xl font-bold ${isActive ? 'text-white' : 'text-white/90'} transition-colors duration-300`}>
                      {metric.value}
                    </div>
                    <div className={`text-xs md:text-sm ${isActive ? 'text-white/90' : 'text-white/60'} transition-colors duration-300`}>
                      {metric.label}
                    </div>
                  </div>
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-green-400/20 to-blue-400/20 animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="mb-12 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed text-center">
            Securing enterprises through proactive threat hunting & rapid incident response
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={() => scrollToSection('#skills')}
            size="lg"
            className="btn-unified group font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
          >
            <Shield className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            🛡️ Explore My Security Arsenal
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button
            onClick={() => scrollToSection('#experience')}
            variant="outline"
            size="lg"
            className="btn-glass group font-semibold px-8 py-4 rounded-xl transition-all duration-300 transform hover:scale-105"
          >
            <Eye className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
            🔍 Investigate My Work
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
