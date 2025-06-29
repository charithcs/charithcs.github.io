import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Target, TrendingUp, Award, Users, Globe, Clock, CheckCircle } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  const highlights = [
    {
      icon: Shield,
      title: "Enterprise Security Expert",
      description: "4+ years protecting Fortune 500 companies with advanced threat detection and incident response across 5,000+ endpoints.",
      metrics: "5,000+ Endpoints Secured"
    },
    {
      icon: Target,
      title: "Incident Response Leader",
      description: "Led critical security incidents with 40% faster resolution times through automated SOAR playbooks and advanced forensics.",
      metrics: "40% Faster Response"
    },
    {
      icon: TrendingUp,
      title: "Threat Hunter & Analyst",
      description: "Reduced false positives by 20% through advanced log correlation and threat intelligence integration across multi-cloud environments.",
      metrics: "20% False Positive Reduction"
    }
  ];

  const certifications = [
    "CompTIA Security+ (In Progress)",
    "NIST Cybersecurity Framework",
    "Cloud Security Specialist"
  ];

  const specializations = [
    "Blue Team Operations",
    "SOC Analysis & Monitoring", 
    "Cloud Security (AWS/Azure)",
    "SIEM/SOAR Implementation",
    "Digital Forensics",
    "Threat Intelligence",
    "Incident Response",
    "Vulnerability Assessment"
  ];

  const achievements = [
    { icon: Award, text: "Successfully prevented multiple data exfiltration attempts" },
    { icon: Users, text: "Mentored junior analysts on advanced threat detection" },
    { icon: Globe, text: "Secured multi-cloud enterprise M&A infrastructure" },
    { icon: Clock, text: "Maintained 24/7 security monitoring coverage" }
  ];

  return (
    <section 
      id="about" 
      ref={elementRef}
      className="section-padding unified-section-bg relative overflow-hidden"
    >
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white tracking-tight transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            About <span className="text-cyber-accent">Charith</span>
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-green-400 to-blue-400 mx-auto mb-6 transition-all duration-700 delay-200 ${
            isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
          }`} />
          <p className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-300 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Cybersecurity professional dedicated to protecting enterprise digital infrastructures through 
            <span className="text-green-400 font-semibold"> proactive threat hunting</span> and 
            <span className="text-blue-400 font-semibold"> rapid incident response</span>.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8 md:gap-12 mb-12 md:mb-16">
          
          {/* Professional Summary Card */}
          <div className={`lg:col-span-2 transition-all duration-700 delay-400 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            <Card className="unified-card h-full border-0 bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-xl">
              <CardHeader className="pb-4">
                <CardTitle className="text-2xl md:text-3xl text-white flex items-center gap-3">
                  <Shield className="h-8 w-8 text-green-400" />
                  Professional Summary
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-white/90 leading-relaxed text-base md:text-lg">
                  As a <strong className="text-green-400">Cybersecurity Analyst</strong> with over 4 years of hands-on experience, 
                  I specialize in safeguarding enterprise environments through advanced threat detection, incident response, 
                  and security operations center (SOC) management.
                </p>
                
                <p className="text-white/90 leading-relaxed text-base md:text-lg">
                  Currently deployed at <strong className="text-blue-400">Autodesk</strong> through Skillmine Technology, 
                  I lead security monitoring across 5,000+ endpoints, architect SOAR automation solutions, and conduct 
                  advanced digital forensics investigations using cutting-edge tools like CrowdStrike Falcon and Belkasoft.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex flex-col items-center text-center p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors">
                      <achievement.icon className="h-6 w-6 text-green-400 mb-2" />
                      <span className="text-xs text-white/80 leading-tight">{achievement.text}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Stats & Certifications */}
          <div className={`space-y-6 transition-all duration-700 delay-500 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            
            {/* Certifications Card */}
            <Card className="unified-card border-0 bg-gradient-to-br from-green-500/10 via-transparent to-green-500/5 backdrop-blur-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Award className="h-5 w-5 text-green-400" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {certifications.map((cert, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="h-4 w-4 text-green-400 flex-shrink-0" />
                    <span className="text-white/90 text-sm">{cert}</span>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Specializations Card */}
            <Card className="unified-card border-0 bg-gradient-to-br from-blue-500/10 via-transparent to-blue-500/5 backdrop-blur-xl">
              <CardHeader className="pb-3">
                <CardTitle className="text-lg text-white flex items-center gap-2">
                  <Target className="h-5 w-5 text-blue-400" />
                  Core Specializations
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {specializations.map((spec, index) => (
                    <Badge 
                      key={index} 
                      variant="outline" 
                      className="bg-white/5 text-white/90 border-white/20 hover:bg-white/10 hover:border-white/30 transition-all text-xs"
                    >
                      {spec}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Key Highlights Grid */}
        <div className="grid md:grid-cols-3 gap-6 md:gap-8">
          {highlights.map((highlight, index) => (
            <Card 
              key={index} 
              className={`unified-card group border-0 bg-gradient-to-br from-gray-900/60 via-gray-800/40 to-gray-900/60 backdrop-blur-xl hover:scale-105 transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + (index * 150)}ms` }}
            >
              <CardHeader className="text-center pb-4">
                <div className="mx-auto w-16 h-16 rounded-full bg-gradient-to-br from-green-400/20 to-blue-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="h-8 w-8 text-green-400" />
                </div>
                <CardTitle className="text-xl text-white group-hover:text-green-400 transition-colors duration-300">
                  {highlight.title}
                </CardTitle>
                <div className="text-2xl font-bold text-green-400 mt-2">
                  {highlight.metrics}
                </div>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-white/80 leading-relaxed text-sm">
                  {highlight.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-700 delay-1000 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-green-500/20 to-blue-500/20 border border-green-400/30">
            <Shield className="h-5 w-5 text-green-400" />
            <span className="text-white font-medium">Ready to secure your enterprise infrastructure</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;