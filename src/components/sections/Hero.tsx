import { Button } from "@/components/ui/button";
import { Shield, Zap, Eye, Target, ArrowRight, Download } from "lucide-react";
import { TypeAnimation } from "react-type-animation";
import { useState, useEffect } from "react";

const Hero = () => {
  const [currentMetricIndex, setCurrentMetricIndex] = useState(0);
  
  const metrics = [
    { icon: Shield, value: "2,847", label: "Threats Mitigated", color: "text-green-400" },
    { icon: Zap, value: "156", label: "Incidents Resolved", color: "text-blue-400" },
    { icon: Eye, value: "4+", label: "Years Experience", color: "text-purple-400" },
    { icon: Target, value: "12", label: "Enterprise SOCs", color: "text-orange-400" }
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

      <div className="container mx-auto relative z-10 px-6 text-center">
        {/* Main Title */}
        <div className="mb-8">
          <h1 className="hero-title text-6xl sm:text-7xl md:text-8xl font-extrabold mb-4 leading-tight bg-gradient-to-r from-white via-blue-100 to-green-100 bg-clip-text text-transparent">
            CHARITH.S
          </h1>
          
          {/* Typewriter Effect for Roles */}
          <div className="h-16 flex items-center justify-center">
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
              className="text-2xl md:text-3xl lg:text-4xl font-semibold text-blue-300 min-h-[3rem]"
              repeat={Infinity}
            />
          </div>
        </div>

        {/* Professional Metrics Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12 max-w-5xl mx-auto">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            const isActive = index === currentMetricIndex;
            
            return (
              <div
                key={index}
                className={`
                  relative p-6 rounded-xl border transition-all duration-500 transform
                  ${isActive 
                    ? 'border-green-400/50 bg-gradient-to-br from-green-400/10 to-blue-400/10 scale-105 shadow-lg shadow-green-400/20' 
                    : 'border-white/20 bg-black/30 hover:border-white/40'
                  }
                  backdrop-blur-sm hover:scale-102 group cursor-pointer
                `}
              >
                <div className="flex flex-col items-center space-y-3">
                  <Icon className={`w-8 h-8 ${isActive ? metric.color : 'text-white/70'} transition-colors duration-300`} />
                  <div className="text-center">
                    <div className={`text-2xl md:text-3xl font-bold ${isActive ? 'text-white' : 'text-white/90'} transition-colors duration-300`}>
                      {metric.value}
                    </div>
                    <div className={`text-sm ${isActive ? 'text-white/90' : 'text-white/60'} transition-colors duration-300`}>
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
        <div className="mb-12 max-w-4xl mx-auto">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            Securing enterprises through proactive threat hunting & rapid incident response
          </p>
          
          {/* Threat Level Indicator */}
          <div className="inline-flex items-center space-x-3 bg-red-500/20 border border-red-500/30 rounded-lg px-4 py-2 backdrop-blur-sm">
            <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-white/90 font-medium">Threat Level: </span>
            <span className="text-red-400 font-bold">HIGH</span>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
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

        {/* Secondary Actions */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://drive.google.com/file/d/1kQGyNZ3_qA3VV5vH78xic-B-EV0VliQQ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <Button
              variant="ghost"
              className="text-white/80 hover:text-white hover:bg-white/10 transition-all duration-300"
            >
              <Download className="mr-2 h-4 w-4 group-hover:animate-bounce" />
              Download Resume
            </Button>
          </a>
          
          <div className="flex space-x-4">
            <a
              href="https://github.com/Securedsoul99"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              aria-label="GitHub"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
              </svg>
            </a>
            
            <a
              href="https://www.linkedin.com/in/charith-sighakollu/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              aria-label="LinkedIn"
            >
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            
            <a
              href="mailto:charithsighakollu@gmail.com"
              className="w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all duration-300 hover:scale-110 backdrop-blur-sm border border-white/20"
              aria-label="Email"
            >
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;