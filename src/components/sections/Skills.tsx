
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";

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
        <div className="w-full max-w-4xl mx-auto">
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue={skillsData[0].category}
          >
            {skillsData.map((categoryData) => (
              <AccordionItem
                value={categoryData.category}
                key={categoryData.category}
                className="border-b-0 rounded-lg bg-card/50 backdrop-blur-lg border border-border/30 px-6 transition-all duration-300 hover:border-primary/30 data-[state=open]:border-primary/50"
              >
                <AccordionTrigger className="py-6 text-lg font-semibold hover:no-underline [&[data-state=open]>svg]:text-primary">
                  {categoryData.category}
                </AccordionTrigger>
                <AccordionContent>
                  <div className="flex flex-wrap gap-3 pt-2 pb-2">
                    {categoryData.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="secondary"
                        className="px-4 py-2 text-base font-medium cursor-default transition-colors hover:bg-primary hover:text-primary-foreground"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Skills;
