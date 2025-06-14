
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Github } from "lucide-react";

const EMAIL = "your.email@example.com";
const LINKEDIN = "https://www.linkedin.com/in/charith/";
const GITHUB = "https://github.com/charithtest"; // Update as needed

const Contact = () => {
  return (
    <section id="connect" className="section-padding">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Interested in cybersecurity collaboration, have a question, or want to discuss a project? Reach out—I'm always happy to connect!
        </p>
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Email"
          >
            <Button variant="outline">
              <Mail className="mr-2 h-4 w-4" /> Email
            </Button>
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Button variant="outline">
              <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Button variant="outline">
              <Github className="mr-2 h-4 w-4" /> GitHub
            </Button>
          </a>
        </div>
        <form
          className="max-w-xl mx-auto text-left space-y-4"
          action="https://formspree.io/f/xrbkqvpz"
          method="POST"
        >
          <Input name="name" placeholder="Your Name" required />
          <Input type="email" name="email" placeholder="Your Email" required />
          <Textarea name="message" placeholder="Your Message" required />
          {/* anti-spam */}
          <input type="text" name="_gotcha" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />
          <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
