
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Database, Shield, Globe, Search, Eye } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { projectsData } from "@/data/projects";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

// Map tech tags to actual Lucide icon components
const iconLookup: Record<string, React.ComponentType<any>> = {
  "ELK Stack": Database,
  "Logstash": Database,
  "Kibana": Database,
  "Security Onion": Shield,
  "AlienVault OTX": Shield,
  "VirusTotal": Shield,
  "AbuseIPDB": Shield,
  "Tor": Globe,
  "OSINT": Search,
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
      className="section-padding unified-section-bg relative overflow-hidden"
    >
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5 pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative">
        <div className="text-center mb-16 md:mb-20">
          <h2 className={`text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white tracking-tight transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Featured <span className="text-cyber-accent">Projects</span>
          </h2>
          <p className={`text-lg md:text-xl text-white/80 max-w-3xl mx-auto leading-relaxed transition-all duration-700 delay-200 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Explore my cybersecurity and threat intelligence projects showcasing advanced SIEM solutions, 
            dark web monitoring, and comprehensive security implementations.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-7xl mx-auto">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              className={cn(
                "group relative overflow-hidden border-0 bg-gradient-to-br from-black/60 via-gray-900/40 to-black/60 backdrop-blur-xl",
                "shadow-2xl hover:shadow-3xl transition-all duration-500 cursor-pointer",
                "hover:scale-[1.02] hover:-translate-y-2",
                "before:absolute before:inset-0 before:bg-gradient-to-br before:from-green-500/10 before:via-transparent before:to-blue-500/10 before:opacity-0 before:transition-opacity before:duration-500 hover:before:opacity-100",
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              )}
              style={{ transitionDelay: `${(index + 1) * 200}ms` }}
            >
              {/* Gradient border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-500/20 via-blue-500/20 to-purple-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm" />
              <div className="absolute inset-[1px] bg-gradient-to-br from-gray-900/90 to-black/90 rounded-xl" />
              
              <div className="relative z-10 h-full flex flex-col">
                <CardHeader className="pb-6">
                  <div className="flex items-start justify-between gap-4">
                    <CardTitle className="text-2xl md:text-3xl text-white leading-tight font-bold group-hover:text-green-400 transition-colors duration-300">
                      {project.title}
                    </CardTitle>
                    <Button
                      size="icon"
                      variant="ghost"
                      onClick={() => setSelectedProject(project)}
                      className="shrink-0 text-white/60 hover:text-green-400 hover:bg-green-400/10 transition-all duration-300"
                    >
                      <Eye className="w-5 h-5" />
                    </Button>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col pt-0 space-y-6">
                  {/* Project highlights */}
                  <div className="space-y-4 flex-grow">
                    {project.bullets.slice(0, 2).map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0" />
                        <p className="text-white/90 leading-relaxed text-sm md:text-base">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="space-y-3">
                    <h4 className="text-white/80 text-sm font-semibold uppercase tracking-wider">
                      Technologies Used
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map(tag => {
                        const IconComponent = iconLookup[tag];
                        return (
                          <Badge 
                            key={tag} 
                            className="bg-black/80 border border-green-400/40 
                                     text-green-400 hover:text-green-300 hover:border-green-400/70 hover:bg-black/90
                                     px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300 
                                     flex items-center gap-2 backdrop-blur-sm"
                          >
                            {IconComponent && <IconComponent className="w-3 h-3" />}
                            <span>{tag}</span>
                          </Badge>
                        );
                      })}
                    </div>
                  </div>

                  {/* View details button */}
                  <Button
                    onClick={() => setSelectedProject(project)}
                    className="btn-unified mt-4 w-full group-hover:bg-green-500/20 group-hover:border-green-400/50 
                             transition-all duration-300 backdrop-blur-sm"
                  >
                    <Eye className="w-4 h-4 mr-2" />
                    View Full Details
                  </Button>
                </CardContent>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Enhanced Dialog */}
      <Dialog open={!!selectedProject} onOpenChange={(isOpen) => { if (!isOpen) setSelectedProject(null); }}>
        <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto border-0 
                                 bg-gradient-to-br from-black/95 via-gray-900/90 to-black/95 
                                 backdrop-blur-xl shadow-2xl">
          {selectedProject && (
            <div className="space-y-6">
              <DialogHeader className="space-y-4">
                <DialogTitle className="text-2xl md:text-3xl text-white font-bold leading-tight">
                  {selectedProject.title}
                </DialogTitle>
                <div className="h-px bg-gradient-to-r from-transparent via-green-400/50 to-transparent" />
              </DialogHeader>

              <DialogDescription asChild>
                <div className="space-y-6">
                  {/* Project details */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white/90 flex items-center gap-2">
                      <Database className="w-5 h-5 text-green-400" />
                      Project Overview
                    </h3>
                    <ul className="space-y-4">
                      {selectedProject.bullets.map((bullet, idx) => (
                        <li key={idx} className="flex items-start gap-4">
                          <div className="w-2 h-2 rounded-full bg-green-400 mt-2 shrink-0" />
                          <p className="text-white/80 leading-relaxed text-sm md:text-base">
                            {bullet}
                          </p>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies section */}
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-white/90 flex items-center gap-2">
                      <Shield className="w-5 h-5 text-green-400" />
                      Technology Stack
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {selectedProject.tech.map(tag => {
                        const IconComponent = iconLookup[tag];
                        return (
                          <Badge 
                            key={tag} 
                            className="bg-black/80 border border-green-400/40 
                                     text-green-400 hover:text-green-300 hover:border-green-400/70 hover:bg-black/90
                                     px-4 py-2 text-sm font-semibold rounded-full transition-all duration-300 
                                     flex items-center justify-center gap-2 backdrop-blur-sm"
                          >
                            {IconComponent && <IconComponent className="w-4 h-4" />}
                            <span>{tag}</span>
                          </Badge>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </DialogDescription>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};

export default Projects;
