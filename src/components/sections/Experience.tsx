
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const experienceData = [
  {
    role: "Cyber Security Analyst",
    company: "Skillmine Technology (Deployed at Autodesk)",
    date: "May 2023 - Present",
    location: "Bengaluru",
    type: "Full-time",
    achievements: [
      "Led security monitoring and incident response across enterprise and M&A cloud environments, adhering to NIST 800-61 lifecycle",
      "Triaged and analyzed 100+ weekly alerts across endpoint, network, and cloud layers using Splunk, QRadar, SentinelOne, CrowdStrike, and FortiSOAR",
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
    <section id="experience" className="section-padding unified-section-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-none tracking-tight">
          Work Experience
        </h2>
        <div className="relative max-w-5xl mx-auto">
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 md:block z-0">
            <svg width="100%" height="100%" aria-hidden="true">
              <defs>
                <linearGradient id="experience-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#15ff67" />
                  <stop offset="50%" stopColor="white" stopOpacity="0.6" />
                  <stop offset="100%" stopColor="white" stopOpacity="0" />
                </linearGradient>
              </defs>
              <line
                x1="50%"
                y1="0"
                x2="50%"
                y2="100%"
                stroke="url(#experience-gradient)"
                strokeWidth="6"
                strokeDasharray="20 15"
                strokeLinecap="round"
              />
            </svg>
          </div>
          {experienceData.map((item, index) => {
            const isRight = index % 2 !== 0;

            const card = (
              <Card className={`unified-card transition-all duration-300 group hover:scale-[1.02] relative md:mb-16 shadow-xl ${isRight ? 'md:text-right' : 'md:text-left'} text-left z-10`}>
                <CardContent className="pt-6">
                  <div className="inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {item.date}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-white">{item.role}</h3>
                  <p className="text-lg text-primary font-medium mb-1">{item.company}</p>
                  <p className="text-sm text-white/60 mb-6">{item.location} • {item.type}</p>
                  <ul className={`space-y-3 text-sm mb-6 text-white/80 ${isRight ? 'md:list-inside md:ml-auto' : 'list-inside'} list-disc`}>
                    {item.achievements.map((ach, i) => (
                      <li key={i} className="leading-relaxed">
                        <span>{ach}</span>
                      </li>
                    ))}
                  </ul>
                  {/* Capsule Styling Change */}
                  <div className={`flex flex-wrap gap-2 ${isRight ? 'md:justify-end' : 'justify-start'}`}>
                    {item.technologies.map(tech => (
                      <span
                        key={tech}
                        className="inline-block border border-white bg-white text-black rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide transition-all shadow hover:bg-gray-100 mb-1"
                        style={{
                          letterSpacing: ".04em",
                          fontFamily: "Rajdhani, sans-serif",
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );

            return (
              <div key={index} className="mb-12 relative">
                <div className="absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full bg-[#10ff67] border-4 border-card z-10 shadow-lg" />
                <div className="grid md:grid-cols-2 gap-x-8">
                  {isRight ? <div className="hidden md:block" /> : card}
                  {isRight ? card : <div className="hidden md:block" />}
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
