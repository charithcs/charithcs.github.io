
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2 } from "lucide-react";

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

const Skills = () => {
  return (
    <section id="skills" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Technical Skills</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {skillsData.map((categoryData) => (
            <Card key={categoryData.category} className="bg-card/50">
              <CardHeader>
                <CardTitle>{categoryData.category}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {categoryData.skills.map((skill) => (
                    <li key={skill} className="flex items-start">
                      <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-0.5 shrink-0" />
                      <span className="text-muted-foreground">{skill}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
