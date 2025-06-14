
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, ShieldCheck, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding bg-gradient-to-b from-transparent to-muted/20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          About Me
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="group">
                <CardHeader>
                    <User className="mx-auto h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-xl">Who I Am</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">I'm Charith S, a dedicated cybersecurity analyst passionate about protecting digital environments from evolving threats.</p>
                </CardContent>
            </Card>
            <Card className="group">
                <CardHeader>
                    <ShieldCheck className="mx-auto h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-xl">What I Do</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">I specialize in blue team operations, incident response, and security operations, ensuring robust defense mechanisms.</p>
                </CardContent>
            </Card>
            <Card className="group">
                <CardHeader>
                    <Briefcase className="mx-auto h-12 w-12 text-primary mb-6 group-hover:scale-110 transition-transform duration-300" />
                    <CardTitle className="text-xl">My Experience</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground leading-relaxed">With over 4 years in the field, I've honed my skills in threat detection, analysis, and mitigation across various industries.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
