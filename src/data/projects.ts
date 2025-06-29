export interface ProjectData {
  title: string;
  bullets: string[];
  tech: string[];
}

export const projectsData: ProjectData[] = [
  {
    title: "Enterprise SIEM for Advanced Threat Detection & Hunting",
    bullets: [
      "Engineered and deployed a scalable SIEM solution leveraging the ELK Stack and Security Onion, simulating enterprise-grade security monitoring across endpoints, network infrastructure, and authentication systems.",
      "Orchestrated comprehensive log ingestion and normalization from Windows and Linux environments via Logstash, enabling unified threat visibility and real-time security analytics across the enterprise.",
      "Developed interactive Kibana dashboards with advanced visualizations for user behavior analytics, network traffic anomaly detection, and threat source identification to support rapid incident response.",
      "Integrated threat intelligence feeds from AlienVault OTX, VirusTotal, and AbuseIPDB to enhance threat hunting capabilities and enable proactive detection of known malicious indicators and emerging threats.",
      "Implemented automated alerting mechanisms with custom correlation rules to reduce false positives by 30% and improve mean time to detection (MTTD) for critical security events."
    ],
    tech: [
      "ELK Stack",
      "Security Onion",
      "Logstash",
      "Kibana",
      "Elasticsearch",
      "AlienVault OTX",
      "VirusTotal API",
      "AbuseIPDB",
      "Suricata IDS",
      "Zeek Network Monitor"
    ],
  },
  {
    title: "Proactive Dark Web Threat Intelligence & Monitoring Platform",
    bullets: [
      "Built an automated threat intelligence system to cross-reference public Tor exit node lists with live threat feeds, identifying patterns in malicious activity including DDoS command & control infrastructure and botnet communications.",
      "Conducted advanced OSINT investigations across darknet forums and marketplaces, uncovering leaked credentials, zero-day exploits, and emerging adversary tools through ethical exploration of .onion services.",
      "Integrated dark web intelligence feeds into the ELK Stack to enable real-time trend analysis, anomaly detection, and automated alerting on suspicious activities related to organizational assets.",
      "Developed custom Python scripts for automated data collection and analysis of threat actor communications, resulting in early warning capabilities for targeted attacks against the organization.",
      "Created comprehensive threat intelligence reports with actionable IOCs and TTPs, contributing to proactive defense strategies and threat hunting operations."
    ],
    tech: [
      "ELK Stack",
      "Tor Network",
      "Python",
      "OSINT Tools",
      "Logstash",
      "Kibana",
      "Scrapy",
      "BeautifulSoup",
      "Selenium",
      "MISP Platform"
    ],
  },
];