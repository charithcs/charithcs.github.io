
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

// Define unique color classes for each category
const categoryColors: Record<string, { button: string; badge: string; text: string }> = {
  "Security Operations & Incident Response": {
    button: "bg-blue-600 hover:bg-blue-700 text-white",
    badge: "bg-blue-100 text-blue-800",
    text: "text-blue-700",
  },
  "Threat Intelligence & Digital Forensics": {
    button: "bg-purple-600 hover:bg-purple-700 text-white",
    badge: "bg-purple-100 text-purple-800",
    text: "text-purple-700",
  },
  "Network & Email Security": {
    button: "bg-teal-600 hover:bg-teal-700 text-white",
    badge: "bg-teal-100 text-teal-800",
    text: "text-teal-700",
  },
  "Cloud & SaaS Security": {
    button: "bg-amber-600 hover:bg-amber-700 text-white",
    badge: "bg-amber-100 text-amber-800",
    text: "text-amber-700",
  },
  // Fallback for 'All' or unknown
  "All": {
    button: "bg-gray-800 hover:bg-gray-700 text-white",
    badge: "bg-gray-100 text-gray-800",
    text: "text-gray-700",
  }
};

const skillsData = [
  {
    category: 'Security Operations & Incident Response',
    skills: [
      'SIEM Tools: Splunk ES, IBM QRadar',
      'SOAR Platforms: FortiSOAR, Microsoft Sentinel',
      'EDR/XDR Platforms: CrowdStrike Falcon, SentinelOne XDR, Microsoft Defender for Endpoint',
      'Incident Response: Triage, containment, RCA, recovery (NIST 800-61)',
      'Log Analysis: Azure AD Logs, Windows Event Logs, Firewall Logs, Proxy Logs',
    ],
  },
  {
    category: 'Threat Intelligence & Digital Forensics',
    skills: [
      'Threat Intelligence Platforms: Recorded Future, VirusTotal Intelligence, AlienVault OTX',
      'Digital Forensics Tools: Falcon Forensics Collector, Belkasoft',
    ],
  },
  {
    category: 'Network & Email Security',
    skills: [
      'Network Security Tools: Wireshark',
      'Email Security Solutions: Microsoft Defender for Office 365, Proofpoint',
    ],
  },
  {
    category: 'Cloud & SaaS Security',
    skills: [
      'AWS Security: AWS CloudTrail, AWS GuardDuty',
      'Azure Security: Microsoft Sentinel, Azure AD',
      'SaaS Security Tools: Orca Security, Wiz, AppOmni',
    ],
  },
];

const allCategories = ['All', ...skillsData.map(data => data.category)];

// Helper: Map each skill to its category for coloring
const skillToCategory: Record<string, string> = {};
skillsData.forEach(({ category, skills }) => {
  skills.forEach((skill) => {
    skillToCategory[skill] = category;
  });
});

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All') {
      // Flat map all skills (no duplicates)
      const uniqueSkills = new Set(skillsData.flatMap(category => category.skills));
      return Array.from(uniqueSkills);
    }
    return skillsData.find(cat => cat.category === selectedCategory)?.skills || [];
  }, [selectedCategory]);

  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-8">Technical Skills</h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here's a showcase of my technical skills. Use the color-coded filters to explore different areas of expertise. Each category is visually distinguished for quick scanning.
        </p>

        {/* Category filter buttons */}
        <div className="flex justify-center flex-wrap gap-3 mb-10 animate-fade-in">
          {allCategories.map(category => (
            <button
              key={category}
              className={
                `rounded-full px-7 py-2 font-semibold transition-all duration-200 text-base shadow-sm border border-transparent outline-none focus-visible:ring-2 focus-visible:ring-primary/60
                ${selectedCategory === category
                  ? categoryColors[category]?.button || categoryColors.All.button
                  : 'bg-background text-foreground border-muted hover:shadow-md ' + (categoryColors[category]?.text || categoryColors.All.text)}`
              }
              style={{ minWidth: 160 }}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Skills grid */}
        <div
          key={selectedCategory}
          className="
            grid
            xs:grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            gap-x-8 gap-y-6
            max-w-5xl
            mx-auto
            pb-2
          ">
          {filteredSkills.map((skill, index) => {
            // Choose color class for the badge
            const cat =
              selectedCategory === 'All'
                ? skillToCategory[skill] || "All"
                : selectedCategory;

            const badgeColor = categoryColors[cat]?.badge || categoryColors.All.badge;
            const badgeText = categoryColors[cat]?.text || categoryColors.All.text;
            return (
              <div
                className="w-full flex"
                key={skill}
                style={{
                  animationDelay: `${index * 25}ms`,
                  animationFillMode: "backwards",
                }}
              >
                <Badge
                  variant="secondary"
                  className={`
                    w-full !rounded-xl flex items-center px-6 py-4 
                    text-base font-semibold whitespace-normal leading-snug
                    transition-all duration-300 cursor-default animate-fade-in
                    shadow-md border-0 ${badgeColor} ${badgeText}
                  `}
                  style={{
                    minHeight: 56,
                    // For smooth fade/group animation
                    animationDelay: `${index * 25}ms`,
                    animationFillMode: "backwards",
                  }}
                  tabIndex={0}
                  aria-label={skill}
                >
                  {skill}
                </Badge>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
