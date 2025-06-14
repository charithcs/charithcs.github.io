
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Book } from "lucide-react";

const Contact = () => {
  return (
    <section id="connect" className="section-padding">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Let's Connect</h2>
        <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
          Have a question or want to work together? Feel free to reach out.
        </p>
        <div className="flex justify-center gap-4 mb-12">
            <Button variant="outline">
                <Linkedin className="mr-2 h-4 w-4" /> LinkedIn
            </Button>
            <Button variant="outline">
                <Book className="mr-2 h-4 w-4" /> Tech Blog
            </Button>
        </div>
        
        <form className="max-w-xl mx-auto text-left space-y-4">
            <Input placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message" />
            <Button type="submit" className="w-full">Send Message</Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
