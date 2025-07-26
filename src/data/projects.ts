export interface ProjectData {
  title: string;
  bullets: string[];
  tech: string[];
}

export const projectsData: ProjectData[] = [
  {
    title: "AI-Powered Email Threat Investigator",
    bullets: [
      "Developed an AI-driven tool for analyzing suspicious `.eml` and `.msg` emails, used in SOC triage and forensic investigations.",
      "Performed deep inspection of email headers with SPF, DKIM, and DMARC validation to detect spoofing and domain impersonation attacks.",
      "Integrated VirusTotal, AbuseIPDB, and urlscan.io APIs for real-time analysis of sender IPs, embedded URLs, and attachments via SHA256 hashing.",
      "Implemented an NLP-based phishing detection engine to assess urgency, manipulation, and social engineering tone — reducing manual triage time by 80%.",
      "Generated comprehensive PDF/JSON reports with IOC highlights and threat verdicts for IR escalation and compliance documentation.",
      "Architected the project for secure offline operation with a modular Python codebase and GUI (Tkinter) for analyst-friendly interaction."
    ],
    tech: [
      "Python 3.11",
      "Tkinter (GUI)",
      "VirusTotal API",
      "urlscan.io API",
      "AbuseIPDB",
      "NLP (LLMs)",
      "SPF/DKIM/DMARC",
      "Email Parser",
      "PDFKit"
     
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
