export interface ProjectData {
  title: string;
  bullets: string[];
  tech: string[];
}

export const projectsData: ProjectData[] = [
  {
    title: "AI-Powered Email Threat Investigator",
    description : "A lightweight, AI-augmented tool for offline investigation of suspicious emails — designed for SOC teams, threat analysts, and incident responders.",
  
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
    title: "AI-Powered Malware Static Analysis Tool ",
    description : "A custom-built, command-line malware analysis framework designed for security professionals to perform fast and effective static analysis on .exe and .apk files",
    bullets: [
      "Developed a CLI-based static malware analysis tool purpose-built for cybersecurity analysts to triage suspicious .exe and .apk files in air-gapped or forensic lab environments.",
      "Extracts actionable Indicators of Compromise (IOCs) such as hardcoded IPs, URLs, domains, registry keys, and suspicious Windows APIs—empowering threat hunting and malware triage without dynamic execution.",
      "Implements multi-hash fingerprinting (MD5, SHA1, SHA256) to support hash-based reputation checks and enrich IOC correlation across threat intelligence platforms.",
      "Integrates AI-powered natural language threat summaries using OpenAI API (optional module), translating raw analysis into human readble reports for rapid decision-making.",
      "Supports string extraction and artifact detection, enhancing analyst visibility into embedded payload behaviors and obfuscation techniques."
    ],
    tech: [
      "Python",
      "OpenAI API",
      "PEfile",
    ],
  },
];
