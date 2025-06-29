import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent } from "@/components/ui/card";
import { Mail, Linkedin, Github } from "lucide-react";
import { useState } from "react";

const EMAIL = "charithsighakollu@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/charith-sighakollu/";
const GITHUB = "https://github.com/Securedsoul99";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Input sanitization function
  const sanitizeInput = (input: string): string => {
    return input
      .replace(/[<>]/g, '') // Remove potential HTML tags
      .replace(/javascript:/gi, '') // Remove javascript: protocol
      .replace(/on\w+=/gi, '') // Remove event handlers
      .trim();
  };

  // Email validation
  const isValidEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    const sanitizedValue = sanitizeInput(value);
    
    setFormData(prev => ({
      ...prev,
      [name]: sanitizedValue
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    // Validate inputs
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill in all fields');
      return;
    }

    if (!isValidEmail(formData.email)) {
      alert('Please enter a valid email address');
      return;
    }

    if (formData.message.length < 10) {
      alert('Message must be at least 10 characters long');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xrbkqvpz', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `Portfolio Contact from ${formData.name}`,
        }),
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      console.error('Error sending message:', error);
      alert('Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="connect" className="section-padding unified-section-bg">
      <div className="container mx-auto text-center px-4 md:px-6">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white drop-shadow-none tracking-tight">
          Initiate Contact Protocol
        </h2>
        <p className="text-white/80 max-w-3xl mx-auto mb-12 text-base md:text-lg leading-relaxed">
          Interested in cybersecurity collaboration, have a question, or want to discuss a project? 
          Reach out—I'm always happy to connect and explore new opportunities!
        </p>
        <div className="flex justify-center gap-4 md:gap-6 mb-12 md:mb-16 flex-wrap">
          <a
            href={`mailto:${EMAIL}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send email to Charith S"
          >
            <Button 
              variant="outline" 
              className="btn-unified shadow-md hover:shadow-lg text-sm md:text-base"
            >
              <Mail className="mr-2 h-4 w-4 md:h-5 md:w-5" /> Email
            </Button>
          </a>
          <a
            href={LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Charith S LinkedIn profile"
          >
            <Button 
              variant="outline" 
              className="btn-unified shadow-md hover:shadow-lg text-sm md:text-base"
            >
              <Linkedin className="mr-2 h-4 w-4 md:h-5 md:w-5" /> LinkedIn
            </Button>
          </a>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Charith S GitHub profile"
          >
            <Button 
              variant="outline" 
              className="btn-unified shadow-md hover:shadow-lg text-sm md:text-base"
            >
              <Github className="mr-2 h-4 w-4 md:h-5 md:w-5" /> GitHub
            </Button>
          </a>
        </div>
        <div className="max-w-2xl mx-auto">
          <Card className="unified-card border border-border/50 shadow-lg">
            <CardContent className="p-6 md:p-8">
              <form
                className="text-left space-y-4 md:space-y-6"
                onSubmit={handleSubmit}
                noValidate
              >
                <Input 
                  name="name" 
                  type="text"
                  placeholder="Your Name" 
                  value={formData.name}
                  onChange={handleInputChange}
                  required 
                  maxLength={100}
                  autoComplete="name"
                  className="bg-background/60 border-border focus:border-primary transition-all duration-300 text-white placeholder:text-white/70"
                />
                <Input 
                  name="email" 
                  type="email" 
                  placeholder="Your Email" 
                  value={formData.email}
                  onChange={handleInputChange}
                  required 
                  maxLength={254}
                  autoComplete="email"
                  className="bg-background/60 border-border focus:border-primary transition-all duration-300 text-white placeholder:text-white/70"
                />
                <Textarea 
                  name="message" 
                  placeholder="Your Message" 
                  value={formData.message}
                  onChange={handleInputChange}
                  required 
                  maxLength={1000}
                  minLength={10}
                  className="bg-background/60 border-border focus:border-primary transition-all duration-300 min-h-[120px] text-white placeholder:text-white/70"
                />
                {/* Honeypot field for bot protection */}
                <input 
                  type="text" 
                  name="_gotcha" 
                  style={{ display: "none" }} 
                  tabIndex={-1} 
                  autoComplete="off" 
                  aria-hidden="true"
                />
                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full btn-glass shadow-md hover:shadow-xl py-4 md:py-6 font-semibold text-white disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'Transmitting...' : 'Transmit Message'}
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