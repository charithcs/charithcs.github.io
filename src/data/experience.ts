export interface ExperienceMetric {
  label: string;
  value: string;
  description: string;
}

export interface ExperienceItem {
  role: string;
  company: string;
  deployment?: string;
  date: string;
  duration: string;
  location: string;
  type: string;
  level: string;
  impact: {
    title: string;
    metrics: ExperienceMetric[];
  };
  responsibilities: string[];
  technologies: string[];
  certifications?: string[];
  keyProjects?: string[];
}

export const experienceData: ExperienceItem[] = [
  {
    role: "Cyber Security Analyst",
    company: "Skillmine Technology",
    deployment: "Deployed at Autodesk",
    date: "May 2023 - Present",
    duration: "1.8+ years",
    location: "Bengaluru, India",
    type: "Full-time",
    level: "Mid-level",
    impact: {
      title: "Security Impact & Metrics",
      metrics: [
        { label: "Threat Detection Improvement", value: "40%", description: "Reduction in remediation time through SOAR automation" },
        { label: "False Positive Reduction", value: "25%", description: "Decrease via advanced log correlation techniques" },
        { label: "Weekly Alert Processing", value: "150+", description: "Alerts processed across 5,000+ endpoints" },
        { label: "Security Coverage", value: "5,000+", description: "Endpoints monitored across enterprise environments" }
      ]
    },
    responsibilities: [
      "Led enterprise security monitoring and incident response across cloud environments, strictly adhering to NIST 800-61 incident response lifecycle",
      "Orchestrated comprehensive threat detection and analysis for 150+ weekly security alerts across endpoint, network, and cloud infrastructure layers",
      "Performed advanced host forensics and malware analysis using CrowdStrike Falcon Forensics and Belkasoft to identify and analyze persistence techniques",
      "Architected and deployed automated SOAR playbooks in FortiSOAR, achieving 40% reduction in credential-based alert remediation time",
      "Identified and remediated critical cloud security misconfigurations across AWS and Azure multi-cloud environments",
      "Collaborated extensively with Threat Intelligence and Threat Hunting teams to operationalize IOCs and detect advanced persistent threat (APT) behaviors",
      "Conducted detailed security assessments and vulnerability analysis across enterprise M&A cloud infrastructure",
      "Mentored junior analysts on advanced threat detection methodologies and incident response procedures",
      "Implemented automated threat hunting queries resulting in 25% reduction in false positives"
    ],
    technologies: ["Splunk ES", "IBM QRadar", "CrowdStrike Falcon", "SentinelOne XDR", "FortiSOAR", "Microsoft Sentinel", "AWS CloudTrail", "Azure AD", "Wiz", "Orca Security"],
    certifications: ["Certified Cyber Criminologist (In Progress)", "Amazon Certified Cloud Practitioner", "ISC2 CC"],
    
  },
  {
    role: "Information Security Consultant", 
    company: "Tech Mahindra",
    deployment: undefined,
    date: "Sep 2021 - Apr 2023",
    duration: "1.7 years", 
    location: "Hyderabad, India",
    type: "Full-time",
    level: "Junior-to-Mid",
    impact: {
      title: "Security Impact & Metrics",
      metrics: [
        { label: "Email Threat Reduction", value: "30%", description: "Reduction in email-borne security threats" },
        { label: "Security Monitoring", value: "24/7", description: "Continuous enterprise security monitoring coverage" },
        { label: "Data Protection", value: "100%", description: "Success rate in preventing data exfiltration attempts" },
        { label: "Incident Response", value: "<25min", description: "Average response time to critical security alerts" }
      ]
    },
    responsibilities: [
      "Maintained continuous 24/7 security monitoring and rapid incident response across enterprise network infrastructure using integrated SIEM and EDR platforms",
      "Investigated and remediated complex DLP (Data Loss Prevention) and CASB (Cloud Access Security Broker) security alerts, successfully preventing multiple data exfiltration attempts",
      "Enhanced organizational email security posture through strategic implementation and optimization of Microsoft O365 Defender and Proofpoint email security solutions", 
      "Performed comprehensive security log analysis across Windows Event Logs, network firewall logs, and web proxy logs to identify threat patterns",
      "Collaborated with cross-functional IT and security teams to implement and maintain enterprise security controls and policies",
      "Conducted security awareness training sessions for end-users on phishing detection and security best practices",
      "Achieved 30% reduction in successful email-based attacks through enhanced filtering and user training"
    ],
    technologies: ["Microsoft Defender", "Rapid7", "O365 Defender", "Proofpoint", "DLP Tools", "CASB Solutions"],
    certifications: ["Google Cyber Security", "Microsoft Certified: Azure Fundamentals [AZ-900]"],
    
    ]
  }
];