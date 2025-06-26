
import { Button } from "@/components/ui/button";
import { Shield, Zap, Eye, Target, ArrowRight } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0);

  const metrics = [
    { icon: Eye, value: "4+", label: "Years Experience", color: "text-purple-400" },
    { icon: Zap, value: "100+", label: "Incidents Resolved", color: "text-blue-400" },
    { icon: Shield, value: "2,847", label: "Threats Mitigated", color: "text-green-400" },    
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
      className="unified-section-bg min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="w-full max-w-4xl mx-auto flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold mb-6 md:mb-9 leading-tight bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
          CHARITH.S
        </h1>

        <div className="h-8 sm:h-10 md:h-14 flex items-center justify-center mb-6 md:mb-8 w-full">
          <TypeAnimation
            sequence={[
              "Cybersecurity Analyst",
              2000,
              "Incident Response Specialist",
              2000,
              "Blue Team Operations Expert", 
              2000,
              "SOC Analyst Professional",
              2000,
            ]}
            wrapper="h2"
            speed={50}
            className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-blue-300 text-center px-2"
            repeat={Infinity}
          />
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-12 w-full max-w-4xl">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isActive = index === currentMetricIndex;
            return (
              <div
                key={index}
                className={`
                  unified-card relative p-3 sm:p-4 md:p-5 lg:p-6 rounded-xl transition-all duration-500 transform
                  ${isActive 
                    ? 'border-green-400/50 bg-gradient-to-br from-green-400/10 to-blue-400/10 scale-105 shadow-lg shadow-green-400/20' 
                    : 'hover:border-white/40'
                  }
                  hover:scale-102 group cursor-pointer
                `}
              >
                <div className="flex flex-col items-center space-y-1 md:space-y-2">
                  <Icon className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 lg:w-9 lg:h-9 ${isActive ? metric.color : 'text-white/70'} transition-colors duration-300`} />
                  <div className="text-center">
                    <div className={`text-lg sm:text-xl md:text-2xl font-bold ${isActive ? 'text-white' : 'text-white/90'} transition-colors duration-300`}>
                      {metric.value}
                    </div>
                    <div className={`text-xs sm:text-sm md:text-base ${isActive ? 'text-white/90' : 'text-white/60'} transition-colors duration-300 leading-tight`}>
                      {metric.label}
                    </div>
                  </div>
                </div>
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-blue-400/20 animate-pulse pointer-events-none"></div>
                )}
              </div>
            );
          })}
        </div>

        <div className="mb-8 md:mb-10 w-full flex justify-center px-2">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white/90 leading-relaxed text-center max-w-4xl">
            Securing enterprises through{" "}
            <span className="text-green-400 font-semibold">Rapid Incident Response</span>
            {" "}&{" "}
            <span className="text-blue-400 font-semibold">Robust Cyber Defense</span>.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 lg:gap-7 justify-center items-center w-full px-2">
          <Button
            onClick={() => scrollToSection('#skills')}
            size="lg"
            className="btn-unified group font-semibold px-6 sm:px-7 lg:px-9 py-3 sm:py-4 lg:py-5 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base lg:text-lg"
          >
            <Shield className="mr-2 sm:mr-3 lg:mr-4 h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 group-hover:rotate-12 transition-transform duration-300" />
            <span className="hidden sm:inline">🛡️ Explore My Security Arsenal</span>
            <span className="sm:hidden">🛡️ Security Arsenal</span>
            <ArrowRight className="ml-2 sm:ml-3 lg:ml-4 h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          <Button
            onClick={() => scrollToSection('#experience')}
            variant="outline"
            size="lg"
            className="btn-glass group font-semibold px-6 sm:px-7 lg:px-9 py-3 sm:py-4 lg:py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto text-sm sm:text-base lg:text-lg"
          >
            <Eye className="mr-2 sm:mr-3 lg:mr-4 h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 group-hover:scale-110 transition-transform duration-300" />
            <span className="hidden sm:inline">🔍 Investigate My Work</span>
            <span className="sm:hidden">🔍 My Work</span>
            <ArrowRight className="ml-2 sm:ml-3 lg:ml-4 h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
