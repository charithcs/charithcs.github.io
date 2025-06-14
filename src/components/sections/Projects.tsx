
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

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
    <section id="projects" className="section-padding bg-gradient-to-b from-muted/20 to-transparent">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent">
          Projects
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col group">
              <CardHeader>
                <CardTitle className="text-2xl">{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="mb-6 list-disc pl-6 text-muted-foreground space-y-3 leading-relaxed">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map(tag => (
                    <Badge 
                      key={tag} 
                      className="bg-gradient-to-r from-primary/10 to-primary/5 text-primary border-primary/20 hover:from-primary/20 hover:to-primary/10 transition-all duration-300 px-4 py-2 text-sm font-medium"
                    >
                      {tag}
                    </Badge>
                  ))}
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
