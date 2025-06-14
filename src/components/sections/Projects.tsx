import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { icons } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

// Use valid lucide-react icon names only (capitalize!)
// See https://lucide.dev/icons and lucide-react docs
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

const projectsData = [
  {
    title: "Advanced SIEM for Threat Detection & Hunting",
    bullets: [
      "Engineered and deployed a scalable SIEM solution leveraging the ELK Stack and Security Onion, simulating robust, enterprise-grade security monitoring across endpoints, network, and authentication systems.",
      "Orchestrated ingestion and normalization of logs from both Windows and Linux environments via Logstash, enabling a unified and insightful data pipeline for comprehensive threat visibility.",
      "Developed interactive Kibana dashboards to visualize user login anomalies, identify network traffic spikes, and highlight potential threat sources for swift incident response.",
      "Enriched alerts with threat intelligence from AlienVault OTX, VirusTotal, and AbuseIPDB, enhancing threat hunting capabilities and supporting the proactive discovery of known malicious indicators."
    ],
    tech: [
      "ELK Stack",
      "Security Onion",
      "Logstash",
      "Kibana",
      "AlienVault OTX",
      "VirusTotal",
      "AbuseIPDB"
    ],
  },
  {
    title: "Proactive Dark Web Threat Intelligence & Monitoring with ELK Stack",
    bullets: [
      "Built an automated system to cross-reference public Tor exit node lists with live threat intelligence data, surfacing patterns in malicious activity such as DDoS origins and C2 infrastructure.",
      "Performed advanced OSINT investigations on darknet forums, uncovering leaked credentials, emerging exploits, and new adversary tools by ethically exploring .onion services.",
      "Integrated dark web intelligence feeds into the ELK Stack to enable real-time trend analysis, anomaly detection, and automated alerting on suspicious activity."
    ],
    tech: [
      "ELK Stack",
      "Tor",
      "OSINT",
      "Logstash",
      "Kibana"
    ],
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<(typeof projectsData)[0] | null>(null);

  return (
    <section id="projects" className="section-padding unified-section-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-none tracking-tight">
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <Card 
              key={index} 
              onClick={() => setSelectedProject(project)}
              className="unified-card flex flex-col group hover:scale-[1.012] border border-white/20 shadow-md transition-all duration-300 cursor-pointer"
            >
              <CardHeader>
                <CardTitle className="text-2xl text-white">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <ul className="mb-8 list-disc pl-6 text-white/80 space-y-4 leading-relaxed flex-grow">
                  {project.bullets.slice(0, 2).map((bullet, idx) => (
                    <li key={idx} className="text-sm">{bullet}</li>
                  ))}
                  {project.bullets.length > 2 && (
                    <li className="text-sm text-white/60 list-none pl-0 pt-2">... Click to read more</li>
                  )}
                </ul>
                <div className="flex flex-wrap gap-3 mt-auto">
                  {project.tech.map(tag => {
                    const iconName = iconLookup[tag];
                    const Icon = iconName ? icons[iconName] : undefined;
                    return (
                      <Badge 
                        key={tag} 
                        className="bg-white/10 border border-white/20 flex items-center gap-2 text-white shadow-xl px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 hover:bg-white/20 uppercase"
                      >
                        {Icon && <Icon className="w-4 h-4" />}
                        {tag}
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
        <DialogContent className="unified-card border-white/20 sm:max-w-3xl">
          {selectedProject && (
            <>
              <DialogHeader>
                <DialogTitle className="text-2xl text-white mb-4">{selectedProject.title}</DialogTitle>
                <DialogDescription asChild>
                  <ul className="list-disc pl-5 text-white/80 space-y-3 leading-relaxed max-h-[60vh] overflow-y-auto pr-4">
                    {selectedProject.bullets.map((bullet, idx) => (
                      <li key={idx} className="text-sm">{bullet}</li>
                    ))}
                  </ul>
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-wrap gap-3 mt-6">
                {selectedProject.tech.map(tag => {
                  const iconName = iconLookup[tag];
                  const Icon = iconName ? icons[iconName] : undefined;
                  return (
                    <Badge 
                      key={tag} 
                      className="bg-white/10 border border-white/20 flex items-center gap-2 text-white shadow-xl px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 hover:bg-white/20 uppercase"
                    >
                      {Icon && <Icon className="w-4 h-4" />}
                      {tag}
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
