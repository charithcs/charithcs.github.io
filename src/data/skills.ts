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
        label: "SIEM Tools",
        items: ["Splunk ES", "IBM QRadar"],
      },
      {
        label: "SOAR Platforms",
        items: ["FortiSOAR", "Microsoft Sentinel"],
      },
      {
        label: "EDR/XDR Platforms",
        items: [
          "CrowdStrike Falcon",
          "SentinelOne XDR",
          "Microsoft Defender for Endpoint",
        ],
      },
      {
        label: "Log Analysis",
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
        label: "Threat Intelligence Platforms",
        items: [
          "Recorded Future",
          "Virus Total Intelligence",
          "Alien Valut OTX",
        ],
      },
      {
        label: "Digital Forensics Tools",
        items: [
          "Falcon Forensics Collector",
          "Belkasoft",
          "Autopsy",
        ],
      },
    ],
  },
  {
    title: " Email Security",
    tools: [
      {
        label: "Email Security Solutions",
        items: [
          "Microsoft Defender for Office 365",
          "Proofpoint",
          "Abnormal AI"
        ],
      },
    ],
  },
  {
    title: "Cloud & SaaS Security",
    tools: [
      {
        label: "AWS Security",
        items: [
          "AWS CloudTrail",
          "AWS GuardDuty",
        ],
      },
      {
        label: "Azure Security",
        items: [
          "Microsoft Sentinel",
          "Azure AD",
        ],
      },
      {
        label: "SaaS Security Tools",
        items: [
          "Orca Security",
          "Wiz",
          "AppOmni",
        ],
      },
    ],
  },
];