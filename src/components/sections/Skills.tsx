
import { useState, useMemo } from "react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

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

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredSkills = useMemo(() => {
    if (selectedCategory === 'All') {
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
          Here's a showcase of my technical skills. Use the filters to explore different areas of my expertise.
        </p>

        <div className="flex justify-center flex-wrap gap-2 mb-12 animate-fade-in">
          {allCategories.map(category => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'secondary'}
              onClick={() => setSelectedCategory(category)}
              className="transition-all duration-300 rounded-full"
            >
              {category}
            </Button>
          ))}
        </div>

        <div key={selectedCategory} className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <Badge
              key={skill}
              variant="secondary"
              className="text-center justify-center px-4 py-3 text-sm font-medium cursor-pointer transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105 animate-fade-in whitespace-normal h-auto"
              style={{ animationDelay: `${index * 30}ms`, animationFillMode: 'backwards' }}
            >
              {skill}
            </Badge>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
