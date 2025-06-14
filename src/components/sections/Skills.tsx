
import { useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

// Define unique color classes for each category
const categoryColors: Record<string, { badge: string; text: string; border: string }> = {
  "Security Operations & Incident Response": {
    badge: "bg-blue-100 text-blue-800",
    text: "text-blue-700",
    border: "border-blue-600",
  },
  "Threat Intelligence & Digital Forensics": {
    badge: "bg-purple-100 text-purple-800",
    text: "text-purple-700",
    border: "border-purple-600",
  },
  "Network & Email Security": {
    badge: "bg-teal-100 text-teal-800",
    text: "text-teal-700",
    border: "border-teal-600",
  },
  "Cloud & SaaS Security": {
    badge: "bg-amber-100 text-amber-800",
    text: "text-amber-700",
    border: "border-amber-600",
  },
  // fallback
  All: {
    badge: "bg-gray-100 text-gray-800",
    text: "text-gray-700",
    border: "border-gray-600",
  },
};

// Categories (rows)
const categories = [
  "Security Operations & Incident Response",
  "Threat Intelligence & Digital Forensics",
  "Network & Email Security",
  "Cloud & SaaS Security",
];

// These map closely to big-tech job ladder/specialization pillars (columns)
const faangPillars = [
  { key: "detection", label: "Detection Engineering" },
  { key: "incident_response", label: "Incident Response" },
  { key: "cloud_security", label: "Cloud Security" },
  { key: "email_network_security", label: "Email/Network Security" },
  { key: "threat_intel", label: "Threat Intel / Forensics" },
];

// Associate which category touches which pillar(s)
const categoryToPillars: Record<string, string[]> = {
  "Security Operations & Incident Response": ["detection", "incident_response"],
  "Threat Intelligence & Digital Forensics": ["detection", "threat_intel"],
  "Network & Email Security": ["email_network_security", "incident_response", "detection"],
  "Cloud & SaaS Security": ["cloud_security", "detection"],
};

// Skills/tools data, grouped as before
const skillsData: Record<string, string[]> = {
  "Security Operations & Incident Response": [
    "SIEM Tools: Splunk ES, IBM QRadar",
    "SOAR Platforms: FortiSOAR, Microsoft Sentinel",
    "EDR/XDR Platforms: CrowdStrike Falcon, SentinelOne XDR, Microsoft Defender for Endpoint",
    "Incident Response: Triage, containment, RCA, recovery (NIST 800-61)",
    "Log Analysis: Azure AD Logs, Windows Event Logs, Firewall Logs, Proxy Logs",
  ],
  "Threat Intelligence & Digital Forensics": [
    "Threat Intelligence Platforms: Recorded Future, VirusTotal Intelligence, AlienVault OTX",
    "Digital Forensics Tools: Falcon Forensics Collector, Belkasoft",
  ],
  "Network & Email Security": [
    "Network Security Tools: Wireshark",
    "Email Security Solutions: Microsoft Defender for Office 365, Proofpoint",
  ],
  "Cloud & SaaS Security": [
    "AWS Security: AWS CloudTrail, AWS GuardDuty",
    "Azure Security: Microsoft Sentinel, Azure AD",
    "SaaS Security Tools: Orca Security, Wiz, AppOmni",
  ],
};

// Build the matrix: For each [row, col], show intersecting skills (rest blank)
const matrixData = categories.map((cat) =>
  faangPillars.map(pillar => {
    // If this category is associated with the pillar
    const isActive = categoryToPillars[cat]?.includes(pillar.key);
    return isActive ? skillsData[cat] : [];
  })
);

const SkillsMatrixLegend = () => (
  <div className="flex flex-wrap gap-3 justify-center mt-4 pb-2">
    {categories.map((cat) => (
      <div key={cat} className="flex items-center space-x-2">
        <span className={`inline-block h-4 w-4 rounded ${categoryColors[cat].badge} border ${categoryColors[cat].border}`}></span>
        <span className={`text-xs md:text-sm ${categoryColors[cat].text}`}>{cat}</span>
      </div>
    ))}
  </div>
);

// Main Matrix Table component
const Skills = () => {
  return (
    <section id="skills" className="section-padding min-h-[560px]">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-7">
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">
            FAANG/Big-Tech Alignment Matrix
          </h2>
          <p className="text-muted-foreground mb-2">
            Every technical skill and tool mapped to the domains that matter to Big Tech/Silicon Valley roles.
          </p>
          <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto">
            Each matrix cell shows the exact skill/tool sets I&apos;ve applied to these core industry pillars. <span className="font-medium text-primary">Hover or tap</span> for clarity.
          </p>
        </div>
        <div className="overflow-x-auto animate-fade-in mx-auto max-w-full rounded-2xl bg-card/60 shadow-2xl backdrop-blur border border-border/30 py-4 px-1">
          <table className="min-w-[680px] w-full border-separate border-spacing-0 text-left">
            <thead>
              <tr>
                <th className="w-[210px] text-base md:text-lg px-3 py-3 bg-background/75 sticky left-0 z-10 rounded-tl-2xl border-b border-border/60 font-semibold text-primary backdrop-blur select-none">
                  Category
                </th>
                {faangPillars.map((pillar) => (
                  <th
                    key={pillar.key}
                    className="text-xs md:text-sm px-4 py-2 border-b border-border/60 font-semibold text-foreground bg-background/60 backdrop-blur"
                  >
                    {pillar.label}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {categories.map((cat, rowIdx) => (
                <tr key={cat} className="align-top group">
                  {/* Category label cell */}
                  <td
                    className={`
                      sticky left-0 z-[1] px-3 py-4 align-middle
                      font-bold text-sm md:text-base backdrop-blur
                      bg-background/90 whitespace-nowrap min-w-[180px]
                      rounded-l-2xl border-r border-border
                      ${categoryColors[cat].text}
                    `}
                    style={{ backgroundClip: "padding-box" }}
                  >
                    <div className="flex items-center">
                      <span className={`w-2 h-2 mr-2 rounded-full ${categoryColors[cat].badge}`}></span>
                      <span>{cat}</span>
                    </div>
                  </td>
                  {/* Skill/tool cells */}
                  {faangPillars.map((pillar, colIdx) => {
                    const isActive = matrixData[rowIdx][colIdx].length > 0;
                    return (
                      <td
                        key={pillar.key}
                        className={
                          `relative group/table-cell px-1 md:px-2 py-4
                          text-xs md:text-sm transition-[background] duration-150 ease-in
                          ${isActive
                            ? `${categoryColors[cat].badge} ${categoryColors[cat].border} border border-solid rounded-xl shadow-md`
                            : "bg-card/20 border-none text-muted-foreground"
                          }
                          min-w-[155px]`
                        }
                        tabIndex={isActive ? 0 : -1}
                      >
                        <div className="flex flex-col gap-2 justify-center items-start min-h-[64px] transition-opacity duration-300 select-text">
                          {isActive ? (
                            // All skills for this "row"/category, in this pillar cell
                            skillsData[cat].map(skill => (
                              <Badge
                                key={skill}
                                variant="secondary"
                                className={`
                                  w-fit lg:max-w-[190px] break-words text-left text-xs md:text-sm px-3 py-2 !rounded-lg font-medium shadow
                                  ${categoryColors[cat].badge} ${categoryColors[cat].text}
                                `}
                                tabIndex={0}
                                aria-label={skill}
                              >
                                {skill}
                              </Badge>
                            ))
                          ) : (
                            <span className="opacity-40 text-[10px] px-2 text-muted-foreground">—</span>
                          )}
                        </div>
                      </td>
                    );
                  })}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Legend */}
        <SkillsMatrixLegend />
      </div>
    </section>
  );
};

export default Skills;
