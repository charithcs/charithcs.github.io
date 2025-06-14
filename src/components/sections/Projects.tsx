
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
    <section id="projects" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Projects</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projectsData.map((project, index) => (
            <Card key={index} className="flex flex-col transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:scale-105">
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="mb-4 list-disc pl-5 text-muted-foreground space-y-2">
                  {project.bullets.map((bullet, idx) => (
                    <li key={idx}>{bullet}</li>
                  ))}
                </ul>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map(tag => (
                    <Badge key={tag} className="bg-muted/60 text-foreground font-medium px-3 py-1.5 rounded shadow">
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
