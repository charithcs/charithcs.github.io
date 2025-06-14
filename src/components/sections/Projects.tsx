
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { icons } from "lucide-react";

const iconLookup: Record<string, keyof typeof icons> = {
  "ELK Stack": "data-science",
  "Logstash": "data-science",
  "Kibana": "data-science",
  "AlienVault OTX": "data-science",
  "VirusTotal": "data-science",
  "AbuseIPDB": "data-science",
  "Tor": "networking",
  "OSINT": "networking",
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
  return (
    <section id="projects" className="section-padding unified-section-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-none tracking-tight">
          Featured Projects
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto">
          {projectsData.map((project, index) => (
            <Card key={index} className="unified-card flex flex-col group hover:scale-[1.012] border border-[#10ff67]/20 shadow-md transition-all duration-300">
              <CardHeader>
                <CardTitle className="text-2xl text-white group-hover:text-[#10ff67] transition-colors duration-300">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="mb-8 list-disc pl-6 text-white/80 space-y-4 leading-relaxed">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx} className="text-sm">{bullet}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(tag => {
                    const iconName = iconLookup[tag];
                    const Icon = iconName ? icons[iconName] : undefined;
                    return (
                      <Badge 
                        key={tag} 
                        className="bg-[#10ff67]/20 border border-[#10ff67]/30 flex items-center gap-2 text-[#10ff67] shadow-xl px-3 py-1 text-xs font-bold rounded-full transition-all duration-300 hover:bg-[#10ff67]/30 uppercase"
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
    </section>
  );
};

export default Projects;
