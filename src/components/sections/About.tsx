import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, TrendingUp, Award, Zap, Eye } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const keyStats = [
    {
      icon: Shield,
      number: "5,000+",
      label: "Endpoints Secured",
      color: "text-green-400"
    },
    {
      icon: Zap,
      number: "40%",
      label: "Faster Response",
      color: "text-blue-400"
    },
    {
      icon: Target,
      number: "4+",
      label: "Years Experience",
      color: "text-purple-400"
    }
  ];

  const expertise = [
    "Blue Team Operations",
    "SOC Analysis", 
    "Cloud Security",
    "SIEM/SOAR",
    "Digital Forensics",
    "Threat Intelligence"
  ];

  const achievements = [
    { icon: Award, text: "Fortune 500 Enterprise Security" },
    { icon: Eye, text: "Advanced Threat Detection" },
    { icon: Shield, text: "Zero Data Breaches" }
  ];

  return (
    <section 
      id="about" 
      ref={elementRef}
      className="section-padding unified-section-bg relative overflow-hidden"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-32 h-32 bg-green-400/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-blue-400/10 rounded-full blur-xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Compact Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-3 text-white tracking-tight transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            About <span className="text-cyber-accent">Charith</span>
          </h2>
          <div className={`w-16 h-0.5 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-4 transition-all duration-700 delay-200 ${
            isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`} />
        </div>

        {/* Main Content - Glass Cards Layout */}
        <div className="max-w-6xl mx-auto">
          
          {/* Hero Statement Card */}
          <div className={`mb-8 transition-all duration-700 delay-300 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="border-0 bg-gradient-to-r from-black/40 via-gray-900/30 to-black/40 backdrop-blur-xl border border-white/10 shadow-2xl">
              <CardContent className="p-6 md:p-8 text-center">
                <p className="text-lg md:text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
                  <span className="text-green-400 font-semibold">Cybersecurity Analyst</span> with 4+ years protecting 
                  <span className="text-blue-400 font-semibold"> Fortune 500 enterprises</span> through advanced threat detection, 
                  incident response, and SOC operations across <span className="text-purple-400 font-semibold">5,000+ endpoints</span>.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Stats Grid */}
          <div className={`grid grid-cols-3 gap-4 md:gap-6 mb-8 transition-all duration-700 delay-400 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            {keyStats.map((stat, index) => (
              <Card 
                key={index} 
                className="group border-0 bg-gradient-to-br from-white/5 via-white/10 to-white/5 backdrop-blur-xl border border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105"
              >
                <CardContent className="p-4 md:p-6 text-center">
                  <div className="flex justify-center mb-3">
                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-white/10 to-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <stat.icon className={`h-6 w-6 md:h-7 md:w-7 ${stat.color}`} />
                    </div>
                  </div>
                  <div className={`text-2xl md:text-3xl font-bold ${stat.color} mb-1`}>
                    {stat.number}
                  </div>
                  <div className="text-white/80 text-sm md:text-base font-medium">
                    {stat.label}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-2 gap-6 md:gap-8">
            
            {/* Expertise Card */}
            <div className={`transition-all duration-700 delay-500 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Card className="h-full border-0 bg-gradient-to-br from-green-500/10 via-black/20 to-green-500/5 backdrop-blur-xl border border-green-400/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
                      <Target className="h-5 w-5 text-green-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Core Expertise</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    {expertise.map((skill, index) => (
                      <Badge 
                        key={index} 
                        variant="outline" 
                        className="bg-white/5 text-white/90 border-white/20 hover:bg-green-400/10 hover:border-green-400/30 transition-all text-xs justify-center py-2"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Achievements Card */}
            <div className={`transition-all duration-700 delay-600 ${
              isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}>
              <Card className="h-full border-0 bg-gradient-to-br from-blue-500/10 via-black/20 to-blue-500/5 backdrop-blur-xl border border-blue-400/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-blue-400/20 flex items-center justify-center">
                      <TrendingUp className="h-5 w-5 text-blue-400" />
                    </div>
                    <h3 className="text-xl font-bold text-white">Key Achievements</h3>
                  </div>
                  <div className="space-y-3">
                    {achievements.map((achievement, index) => (
                      <div key={index} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                        <achievement.icon className="h-5 w-5 text-blue-400 flex-shrink-0" />
                        <span className="text-white/90 text-sm font-medium">{achievement.text}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className={`text-center mt-8 transition-all duration-700 delay-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 backdrop-blur-xl border border-white/10">
              <Shield className="h-4 w-4 text-green-400" />
              <span className="text-white/90 font-medium text-sm">Securing Enterprise Infrastructure Since 2021</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;