import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MicIcon as icons } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import { projectsData } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Use valid lucide-react icon names only (capitalize!)
const iconLookup: Record<string, keyof typeof icons> = {
  "ELK Stack": "Database",
  "Logstash": "Database",
  "Kibana": "Database",
  "Security Onion": "Shield",
  "AlienVault OTX": "Shield",
  "VirusTotal": "Shield",
  "AbuseIPDB": "Shield",
  "Tor": "Globe",
  "OSINT": "Search",
};

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null);
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="projects" 
      ref={elementRef}
      className="section-padding unified-section-bg"
    >
      <div className="container mx-auto px-4 md:px-6">
        <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-12 md:mb-16 text-white drop-shadow-none tracking-tight transition-all duration-700 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className={cn(
                "unified-card flex flex-col group border border-white/20 shadow-md transition-all duration-500 cursor-pointer",
                !selectedProject && "hover:scale-[1.012]",
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${(index + 1) * 300}ms` }}
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl md:text-2xl text-white leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col pt-0">
                <ul className="mb-6 md:mb-8 list-disc pl-6 text-white/80 space-y-3 md:space-y-4 leading-relaxed flex-grow">
                  {project.bullets.slice(0, 2).map((bullet, idx) => (
                    <li key={idx} className="text-sm md:text-base">{bullet}</li>
                  ))}
                  {project.bullets.length > 2 && (
                    <li className="text-sm md:text-base text-white/60 list-none pl-0 pt-2 underline">... Click to read more</li>
                  )}
                </ul>
                <div className="flex flex-wrap gap-2 md:gap-3 mt-auto">
                  {project.tech.map(tag => {
                    const iconName = iconLookup[tag];
                    const Icon = iconName ? icons[iconName] : undefined;
                    return (
                      <Badge 
                        key={tag} 
                        className="bg-white/10 border border-white/20 flex items-center gap-2 text-white shadow-xl px-2 md:px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 hover:bg-white/20 uppercase"
                      >
                        {Icon && <Icon className="w-3 h-3 md:w-4 md:h-4" />}
                        <span className="text-xs">{tag}</span>
                      </Badge>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => { if (!isOpen) setSelectedProject(null); }}>
        <DialogContent className="unified-card border-white/20 sm:max-w-3xl max-h-[80vh] overflow-y-auto">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-xl md:text-2xl text-white mb-4">{selectedProject.title}</DialogTitle>
                <DialogDescription asChild>
                  <ul className="list-disc pl-5 text-white/80 space-y-3 leading-relaxed pr-4">
                    {selectedProject.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm md:text-base">{bullet}</li>
                    ))}
                  </ul>
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-2 md:gap-3 mt-6">
                {selectedProject.tech.map(tag => {
                  const iconName = iconLookup[tag];
                  const Icon = iconName ? icons[iconName] : undefined;
                  return (
                    <Badge 
                      key={tag} 
                      className="bg-white/10 border border-white/20 flex items-center gap-2 text-white shadow-xl px-2 md:px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 hover:bg-white/20 uppercase"
                    >
                      {Icon && <Icon className="w-3 h-3 md:w-4 md:h-4" />}
                      <span className="text-xs">{tag}</span>
                    </Badge>
                  );
                })}
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
