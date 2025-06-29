export interface ToolGroup {
  label: string;
  items: string[];
}

export interface SkillCategory {
  title: string;
  tools: ToolGroup[];
}

export const skillsData: SkillCategory[] = [
  {
    title: "Security Operations & Incident Response",
    tools: [
      {
        label: "SIEM Platforms",
        items: ["Splunk ES", "IBM QRadar", "Microsoft Sentinel"],
      },
      {
        label: "SOAR Automation",
        items: ["FortiSOAR", "Phantom", "Demisto"],
      },
      {
        label: "EDR/XDR Solutions",
        items: [
          "CrowdStrike Falcon",
          "SentinelOne XDR",
          "Microsoft Defender for Endpoint",
        ],
      },
      {
        label: "Log Analysis & Monitoring",
        items: [
          "Azure AD Logs",
          "Windows Event Logs",
          "Firewall Logs",
          "Proxy Logs",
        ],
      },
    ],
  },
  {
    title: "Threat Intelligence & Digital Forensics",
    tools: [
      {
        label: "Threat Intelligence",
        items: [
          "Recorded Future",
          "VirusTotal Intelligence",
          "AlienVault OTX",
          "MISP",
        ],
      },
      {
        label: "Digital Forensics",
        items: [
          "CrowdStrike Falcon Forensics",
          "Belkasoft Evidence Center",
          "Autopsy",
          "Volatility",
        ],
      },
      {
        label: "Malware Analysis",
        items: [
          "IDA Pro",
          "Ghidra",
          "Wireshark",
          "YARA Rules",
        ],
      },
    ],
  },
  {
    title: "Email & Web Security",
    tools: [
      {
        label: "Email Security",
        items: [
          "Microsoft Defender for Office 365",
          "Proofpoint",
          "Abnormal Security",
          "Mimecast",
        ],
      },
      {
        label: "Web Security",
        items: [
          "Zscaler",
          "Cloudflare",
          "Palo Alto Prisma",
          "Symantec Web Security",
        ],
      },
    ],
  },
  {
    title: "Cloud & Infrastructure Security",
    tools: [
      {
        label: "AWS Security",
        items: [
          "AWS CloudTrail",
          "AWS GuardDuty",
          "AWS Security Hub",
          "AWS Config",
        ],
      },
      {
        label: "Azure Security",
        items: [
          "Microsoft Sentinel",
          "Azure Security Center",
          "Azure AD",
          "Azure Monitor",
        ],
      },
      {
        label: "Cloud Security Platforms",
        items: [
          "Orca Security",
          "Wiz",
          "Prisma Cloud",
          "AppOmni",
        ],
      },
    ],
  },
];