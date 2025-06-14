
import React from "react";
import OrbitWheel from "./OrbitWheel";
import SkillCategoryCard from "./SkillCategoryCard";

const mainCategories = [
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
        label: "Incident Response",
        items: [
          "Triage",
          "Containment",
          "RCA",
          "Recovery (NIST 800-61)",
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
        ],
      },
    ],
  },
  {
    title: "Network & Email Security",
    tools: [
      {
        label: "Network Security Tools",
        items: ["Wireshark"],
      },
      {
        label: "Email Security Solutions",
        items: [
          "Microsoft Defender for Office 365",
          "Proofpoint",
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

const Skills = () => (
  <section
    id="skills"
    className="section-padding unified-section-bg min-h-[650px] relative text-white flex flex-col items-center"
    style={{ background: "linear-gradient(135deg, #151516 60%, #242427 100%)" }}
  >
    <div className="container mx-auto flex flex-col items-center">
      {/* Header */}
      <h2 className="font-extrabold text-3xl md:text-4xl mb-3 text-center" style={{ color: "#fff" }}>
        Tools Radar
      </h2>
      <span className="block mx-auto w-16 h-1 rounded-full bg-white mb-10" />

      {/* Center circle + orbit icons */}
      <div className="flex flex-col md:flex-row items-center justify-center w-full mb-12 gap-7">
        <div className="hidden md:block md:flex-1" />
        <OrbitWheel label="Security & Cloud Tools" />
        <div className="hidden md:block md:flex-1" />
      </div>

      {/* Skill category cards */}
      <div className="flex flex-wrap justify-center gap-7 mt-2 w-full max-w-6xl">
        {mainCategories.map((cat) => (
          <SkillCategoryCard key={cat.title} title={cat.title} tools={cat.tools} />
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
