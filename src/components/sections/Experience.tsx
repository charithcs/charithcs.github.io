
import { Badge } from "@/components/ui/badge";

const experienceData = [
  {
    role: "Cyber Security Analyst",
    company: "Skillmine Technology (Deployed at Autodesk)",
    date: "May 2023 - Present",
    location: "Bengaluru",
    type: "Full-time",
    achievements: [
      "Led security monitoring and incident response across enterprise and M&A cloud environments, adhering to NIST 800-61 lifecycle",
      "Triage and analyzed 100+ weekly alerts across endpoint, network, and cloud layers using Splunk, QRadar, SentinelOne, CrowdStrike, and FortiSOAR",
      "Performed host forensics & malware analysis using Falcon Forensics and Belkasoft to uncover persistence techniques and infection vectors",
      "Automated SOAR playbooks in FortiSOAR, reducing credential alert remediation time by 40% through intelligent user notification and case routing",
      "Identified & remediated cloud misconfigurations in AWS and Azure environments using CloudTrail, Azure Logs, Wiz, and Orca",
      "Reduced false positives by 20% via correlation of Active Directory, proxy, firewall, and Windows logs—streamlining SOC analyst workflows",
      "Worked with Threat Intelligence & Threat Hunting teams to operationalize IOCs, detect APT behaviors, and secure 5,000+ endpoints globally"
    ],
    technologies: ["Splunk ES", "IBM QRadar", "CrowdStrike Falcon", "SentinelOne XDR", "FortiSOAR", "Microsoft Sentinel", "AWS CloudTrail", "Azure AD", "Wiz", "Orca Security"]
  },
  {
    role: "Information Security Consultant",
    company: "Tech Mahindra",
    date: "Sep 2021 - Apr 2023",
    location: "Hyderabad",
    type: "Full-time",
    achievements: [
      "Monitored and analyzed security events 24/7 across enterprise network using SIEM and EDR platforms, enhancing threat detection and response capabilities",
      "Investigated and remediated DLP and CASB alerts, successfully preventing data exfiltration attempts and maintaining data integrity",
      "Enhanced email security through O365 Defender and Proofpoint implementation, contributing to 20% reduction in email-borne threats",
      "Performed comprehensive log analysis across Windows Event Logs, firewall logs, and proxy logs for threat identification",
      "Collaborated with cross-functional teams to implement security controls and improve overall security posture"
    ],
    technologies: ["Microsoft Defender", "Rapid 7", "O365 Defender", "Proofpoint", "DLP Tools", "CASB Solutions"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="relative max-w-4xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
          {experienceData.map((item, index) => {
            const isRight = index % 2 !== 0;

            const card = (
              <div className={`p-6 rounded-lg border bg-card/50 text-card-foreground shadow-sm transition-all duration-300 hover:shadow-primary/20 hover:border-primary/30 hover:scale-[1.02] ${isRight ? 'text-right' : 'text-left'}`}>
                <p className="text-sm text-primary font-semibold">{item.date}</p>
                <h3 className="text-xl font-bold mt-1">{item.role}</h3>
                <p className="text-md text-muted-foreground">{item.company}</p>
                <p className="text-sm text-muted-foreground mb-4">{item.location} &middot; {item.type}</p>
                <ul className={`space-y-2 text-sm list-disc mb-4 text-muted-foreground ${isRight ? 'list-inside ml-auto' : 'list-inside'}`}>
                  {item.achievements.map((ach, i) => <li key={i}><span>{ach}</span></li>)}
                </ul>
                <div className={`flex flex-wrap gap-2 ${isRight ? 'justify-end' : 'justify-start'}`}>
                  {item.technologies.map(tech => <Badge key={tech} variant="secondary">{tech}</Badge>)}
                </div>
              </div>
            );

            return (
              <div key={index} className="mb-10 relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
                <div className="grid grid-cols-2 gap-x-8">
                  {isRight ? <div /> : card}
                  {isRight ? card : <div />}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
