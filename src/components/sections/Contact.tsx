
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

const EMAIL = "charithcs9@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/charith/";
const GITHUB = "https://github.com/charithtest";

const Contact = () => {
  return (
    <section id="connect" className="section-padding section-alt">
      <div className="container mx-auto text-center px-6">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
          Let's Connect
        </h2>
        <p className="text-muted-foreground max-w-3xl mx-auto mb-12 text-lg leading-relaxed">
          Interested in cybersecurity collaboration, have a question, or want to discuss a project? 
          Reach out—I'm always happy to connect and explore new opportunities!
        </p>
        <div className="flex justify-center gap-6 mb-16 flex-wrap">
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Button 
              variant="outline" 
              className="bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md border-border"
            >
              <Mail className="mr-2 h-5 w-5" /> Email
            </Button>
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Button 
              variant="outline" 
              className="bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md border-border"
            >
              <Linkedin className="mr-2 h-5 w-5" /> LinkedIn
            </Button>
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Button 
              variant="outline" 
              className="bg-card hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105 shadow-md border-border"
            >
              <Github className="mr-2 h-5 w-5" /> GitHub
            </Button>
          </a>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="bg-card border-border shadow-lg">
            <CardContent className="p-8">
              <form
                className="text-left space-y-6"
                action="https://formspree.io/f/xrbkqvpz"
                method="POST"
              >
                <Input 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                  className="bg-background border-border focus:border-primary transition-all duration-300"
                />
                <Input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                  className="bg-background border-border focus:border-primary transition-all duration-300"
                />
                <Textarea 
                  name="message" 
                  placeholder="Your Message" 
                  required 
                  className="bg-background border-border focus:border-primary transition-all duration-300 min-h-[120px]"
                />
                <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] py-6"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;
