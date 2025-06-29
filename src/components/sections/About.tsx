import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, ShieldCheck, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding unified-section-bg">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white drop-shadow-none tracking-tight">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-6 md:gap-8 text-center">
          <Card className="unified-card group">
            <CardHeader className="pb-4">
              <User className="mx-auto h-10 w-10 md:h-12 md:w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <CardTitle className="text-lg md:text-xl text-white">Who I Am</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                I'm Charith S, a dedicated cybersecurity analyst passionate about protecting 
                digital environments from evolving threats and ensuring organizational security.
              </p>
            </CardContent>
          </Card>
          <Card className="unified-card group">
            <CardHeader className="pb-4">
              <ShieldCheck className="mx-auto h-10 w-10 md:h-12 md:w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <CardTitle className="text-lg md:text-xl text-white">What I Do</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                I specialize in blue team operations, incident response, and cloud defense operations, 
                ensuring robust defense mechanisms and proactive threat mitigation.
              </p>
            </CardContent>
          </Card>
          <Card className="unified-card group">
            <CardHeader className="pb-4">
              <Briefcase className="mx-auto h-10 w-10 md:h-12 md:w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <CardTitle className="text-lg md:text-xl text-white">My Experience</CardTitle>
            </CardHeader>
            <CardContent className="pt-0">
              <p className="text-white/80 leading-relaxed text-sm md:text-base">
                With over 4 years in the field, I've honed my skills in threat detection, 
                analysis, and mitigation across various industries and enterprise environments.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;