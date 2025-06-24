
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
      className="unified-section-bg relative min-h-screen flex items-center justify-center pt-20 pb-16 px-4 sm:px-6 lg:px-8"
    >
      <div className="container mx-auto relative z-10 text-center max-w-7xl">
        {/* Main Title Section */}
        <div className="mb-12 sm:mb-16 md:mb-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-extrabold mb-6 sm:mb-8 leading-[0.9] bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent text-center max-w-full">
            CHARITH.S
          </h1>
          
          {/* Typewriter Effect for Roles */}
          <div className="h-12 sm:h-14 md:h-16 flex items-center justify-center mb-8 sm:mb-10 md:mb-12 w-full">
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
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-blue-300 text-center px-4"
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Professional Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto px-2">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isActive = index === currentMetricIndex;
            
            return (
              <div
                key={index}
                className={`
                  unified-card relative p-3 sm:p-4 md:p-5 rounded-lg transition-all duration-500 transform
                  ${isActive 
                    ? 'border-green-400/50 bg-gradient-to-br from-green-400/10 to-blue-400/10 scale-105 shadow-lg shadow-green-400/20' 
                    : 'hover:border-white/40'
                  }
                  hover:scale-102 group cursor-pointer
                `}
              >
                <div className="flex flex-col items-center space-y-2 sm:space-y-3">
                  <Icon className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 ${isActive ? metric.color : 'text-white/70'} transition-colors duration-300`} />
                  <div className="text-center">
                    <div className={`text-base sm:text-lg md:text-xl font-bold ${isActive ? 'text-white' : 'text-white/90'} transition-colors duration-300`}>
                      {metric.value}
                    </div>
                    <div className={`text-xs sm:text-sm ${isActive ? 'text-white/90' : 'text-white/60'} transition-colors duration-300 leading-tight`}>
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
        <div className="mb-10 sm:mb-12 md:mb-16 max-w-4xl mx-auto px-4">
          <p className="text-base sm:text-lg md:text-xl text-white/90 leading-relaxed text-center">
            Securing enterprises through proactive threat hunting & rapid incident response
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center px-4">
          <Button
            onClick={() => scrollToSection('#skills')}
            size="lg"
            className="btn-unified group font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
          >
            <Shield className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden sm:inline">🛡️ Explore My Security Arsenal</span>
            <span className="sm:hidden">🛡️ Security Arsenal</span>
            <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button
            onClick={() => scrollToSection('#experience')}
            variant="outline"
            size="lg"
            className="btn-glass group font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base"
          >
            <Eye className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">🔍 Investigate My Work</span>
            <span className="sm:hidden">🔍 My Work</span>
            <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
