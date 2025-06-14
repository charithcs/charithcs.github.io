
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
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
        <Tabs defaultValue={skillsData[0].category} className="w-full max-w-4xl mx-auto">
          <TabsList className="flex flex-wrap h-auto justify-center gap-2 md:gap-4 bg-transparent p-0 mb-8">
            {skillsData.map((categoryData) => (
              <TabsTrigger
                key={categoryData.category}
                value={categoryData.category}
                className="text-sm md:text-base px-4 py-2 rounded-lg border border-transparent hover:bg-accent hover:text-accent-foreground data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:border-primary transition-all duration-300"
              >
                {categoryData.category}
              </TabsTrigger>
            ))}
          </TabsList>

          {skillsData.map((categoryData) => (
            <TabsContent key={categoryData.category} value={categoryData.category} className="mt-8">
              <Card className="bg-card/50 backdrop-blur-lg border-border/30 animate-fade-in">
                <CardContent className="p-6 md:p-8">
                  <ul className="space-y-4 grid sm:grid-cols-2 gap-x-8 gap-y-4">
                    {categoryData.skills.map((skill) => (
                      <li key={skill} className="flex items-start">
                        <CheckCircle2 className="h-5 w-5 text-primary mr-3 mt-1 shrink-0" />
                        <span className="text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default Skills;
