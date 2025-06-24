
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
      className="hero-bg-gradient hero-section relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
        <div className="absolute top-40 right-20 w-3 h-3 bg-green-400 rounded-full animate-pulse opacity-40 delay-1000"></div>
        <div className="absolute bottom-32 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-50 delay-2000"></div>
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-orange-400 rounded-full animate-pulse opacity-60 delay-3000"></div>
        
        {/* Floating geometric shapes */}
        <div className="absolute top-1/4 left-1/4 w-16 h-16 border border-green-400/20 rotate-45 animate-float opacity-30"></div>
        <div className="absolute bottom-1/4 right-1/4 w-12 h-12 border border-blue-400/20 rotate-12 animate-float opacity-20 delay-1000"></div>
      </div>

      <div className="container mx-auto relative z-10 px-6 text-center max-w-5xl">
        {/* Main Title - Centered */}
        <div className="mb-12">
          <h1 className="hero-title text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-extrabold mb-6 leading-tight bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
            CHARITH.S
          </h1>
          
          {/* Typewriter Effect for Roles */}
          <div className="h-16 flex items-center justify-center mb-8">
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
              className="text-xl md:text-2xl lg:text-3xl font-semibold text-blue-300 min-h-[3rem]"
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Professional Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 max-w-4xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isActive = index === currentMetricIndex;
            
            return (
              <div
                key={index}
                className={`
                  relative p-6 md:p-8 rounded-xl border transition-all duration-500 transform
                  ${isActive 
                    ? 'border-green-400/50 bg-gradient-to-br from-green-400/10 to-blue-400/10 scale-105 shadow-lg shadow-green-400/20' 
                    : 'border-white/20 bg-black/30 hover:border-white/40'
                  }
                  backdrop-blur-sm hover:scale-102 group cursor-pointer
                `}
              >
                <div className="flex flex-col items-center space-y-4">
                  <Icon className={`w-8 h-8 md:w-10 md:h-10 ${isActive ? metric.color : 'text-white/70'} transition-colors duration-300`} />
                  <div className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold ${isActive ? 'text-white' : 'text-white/90'} transition-colors duration-300`}>
                      {metric.value}
                    </div>
                    <div className={`text-sm md:text-base ${isActive ? 'text-white/90' : 'text-white/60'} transition-colors duration-300`}>
                      {metric.label}
                    </div>
                  </div>
                </div>
                
                {/* Active indicator */}
                {isActive && (
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-green-400/20 to-blue-400/20 animate-pulse"></div>
                )}
              </div>
            );
          })}
        </div>

        {/* Value Proposition */}
        <div className="mb-16 max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed">
            Securing enterprises through proactive threat hunting & rapid incident response
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
          <Button
            onClick={() => scrollToSection('#skills')}
            size="lg"
            className="group bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border-0"
          >
            <Shield className="mr-3 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
            🛡️ Explore My Security Arsenal
            <ArrowRight className="ml-3 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
          
          <Button
            onClick={() => scrollToSection('#experience')}
            variant="outline"
            size="lg"
            className="group bg-black/30 border-2 border-blue-400/50 text-white hover:bg-blue-400/10 hover:border-blue-400 font-semibold px-8 py-4 rounded-xl backdrop-blur-sm transition-all duration-300 transform hover:scale-105"
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
