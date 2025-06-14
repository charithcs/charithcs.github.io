
import Header from "@/components/layout/Header";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Projects from "@/components/sections/Projects";
import Skills from "@/components/sections/Skills";
import Blog from "@/components/sections/Blog";
import Contact from "@/components/sections/Contact";
import { Toaster } from "@/components/ui/sonner";

const Index = () => {
  return (
    <div className="relative min-h-screen">
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <footer className="py-8 text-center text-sm text-muted-foreground border-t border-border/20 glass-effect">
        <div className="container mx-auto px-6">
          © {new Date().getFullYear()} CHARITH S. All Rights Reserved.
        </div>
      </footer>
      <Toaster />
    </div>
  );
};

export default Index;
