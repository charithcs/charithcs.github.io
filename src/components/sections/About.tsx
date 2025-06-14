
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, ShieldCheck, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding unified-section-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-none tracking-tight">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <Card className="unified-card group">
            <CardHeader>
              <User className="mx-auto h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <CardTitle className="text-xl text-white">Who I Am</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 leading-relaxed">
                I'm Charith S, a dedicated cybersecurity analyst passionate about protecting 
                digital environments from evolving threats and ensuring organizational security.
              </p>
            </CardContent>
          </Card>
          <Card className="unified-card group">
            <CardHeader>
              <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <CardTitle className="text-xl text-white">What I Do</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 leading-relaxed">
                I specialize in blue team operations, incident response, and cloud defense operations, 
                ensuring robust defense mechanisms and proactive threat mitigation.
              </p>
            </CardContent>
          </Card>
          <Card className="unified-card group">
            <CardHeader>
              <Briefcase className="mx-auto h-12 w-12 text-primary mb-4 group-hover:scale-110 transition-transform duration-300" />
              <CardTitle className="text-xl text-white">My Experience</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-white/80 leading-relaxed">
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
