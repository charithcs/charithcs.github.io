import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, ShieldCheck, Briefcase } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
            <Card className="transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:scale-105">
                <CardHeader>
                    <User className="mx-auto h-10 w-10 text-primary mb-4" />
                    <CardTitle>Who I Am</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">I'm Charith S, a dedicated cybersecurity analyst passionate about protecting digital environments from evolving threats.</p>
                </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:scale-105">
                <CardHeader>
                    <ShieldCheck className="mx-auto h-10 w-10 text-primary mb-4" />
                    <CardTitle>What I Do</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">I specialize in blue team operations, incident response, and security operations, ensuring robust defense mechanisms.</p>
                </CardContent>
            </Card>
            <Card className="transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:scale-105">
                <CardHeader>
                    <Briefcase className="mx-auto h-10 w-10 text-primary mb-4" />
                    <CardTitle>My Experience</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">With over 4 years in the field, I've honed my skills in threat detection, analysis, and mitigation across various industries.</p>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
};

export default About;
