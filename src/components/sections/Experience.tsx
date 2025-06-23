
import { Card, CardContent } from "@/components/ui/card";

const experienceData = [
  {
    role: "Cyber Security Analyst",
    company: "Skillmine Technology (Deployed at Autodesk)",
    date: "May 2023 - Present",
    location: "Bengaluru",
    type: "Full-time",
    metrics: {
      title: "Key Impact Metrics",
      content: "• 40% reduction in remediation time through SOAR automation\n• 20% decrease in false positives via advanced log correlation\n• 100+ weekly alerts processed across 5,000+ endpoints"
    },
    achievements: [
      "Led security monitoring and incident response across enterprise and M&A cloud environments, adhering to NIST 800-61 lifecycle",
      "Triaged and analyzed 100+ weekly alerts across endpoint, network, and cloud layers using advanced security platforms",
      "Performed host forensics & malware analysis using Falcon Forensics and Belkasoft to uncover persistence techniques",
      "Automated SOAR playbooks in FortiSOAR, reducing credential alert remediation time by 40%",
      "Identified & remediated cloud misconfigurations in AWS and Azure environments",
      "Collaborated with Threat Intelligence & Threat Hunting teams to operationalize IOCs and detect APT behaviors"
    ],
    technologies: ["Splunk ES", "IBM QRadar", "CrowdStrike Falcon", "SentinelOne XDR", "FortiSOAR", "Microsoft Sentinel", "AWS CloudTrail", "Azure AD", "Wiz", "Orca Security"]
  },
  {
    role: "Information Security Consultant",
    company: "Tech Mahindra",
    date: "Sep 2021 - Apr 2023",
    location: "Hyderabad",
    type: "Full-time",
    metrics: {
      title: "Key Achievements",
      content: "• 20% reduction in email-borne threats through security enhancements\n• 24/7 enterprise security monitoring and incident response\n• Zero successful data exfiltration attempts prevented"
    },
    achievements: [
      "Monitored and analyzed security events 24/7 across enterprise network using SIEM and EDR platforms",
      "Investigated and remediated DLP and CASB alerts, preventing data exfiltration attempts",
      "Enhanced email security through O365 Defender and Proofpoint implementation",
      "Performed comprehensive log analysis across Windows Event Logs, firewall logs, and proxy logs",
      "Collaborated with cross-functional teams to implement security controls"
    ],
    technologies: ["Microsoft Defender", "Rapid7", "O365 Defender", "Proofpoint", "DLP Tools", "CASB Solutions"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding unified-section-bg">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white drop-shadow-none tracking-tight">
          Work Experience
        </h2>
        
        <div className="timeline relative max-w-5xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1.5 -translate-x-1/2 hidden md:block z-0">
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

          {experienceData.map((item, index) => (
            <div key={index} className="timeline-item relative mb-16 animate-on-scroll">
              {/* Timeline Marker */}
              <div className="timeline-marker absolute left-1/2 -translate-x-1/2 top-8 w-5 h-5 rounded-full bg-[#10ff67] border-4 border-card z-10 shadow-lg hidden md:block" />
              
              {/* Timeline Content */}
              <div className="timeline-content">
                <Card className="unified-card transition-all duration-300 group hover:scale-[1.02] relative shadow-xl z-10">
                  <CardContent className="pt-6">
                    {/* Company Badge */}
                    <div className="company-badge inline-block bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium mb-3">
                      {item.date}
                    </div>
                    
                    {/* Job Title */}
                    <h3 className="job-title text-2xl font-bold mb-2 text-white">{item.role}</h3>
                    
                    {/* Company Name */}
                    <div className="company-name text-lg text-primary font-medium mb-1">{item.company}</div>
                    
                    {/* Job Duration */}
                    <div className="job-duration text-sm text-white/60 mb-6">{item.location} • {item.type}</div>
                    
                    {/* Metrics Highlight */}
                    <div className="metrics-highlight bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-4 mb-6">
                      <div className="metrics-title text-primary font-semibold text-sm uppercase tracking-wide mb-2">
                        {item.metrics.title}
                      </div>
                      <p className="text-white/90 text-sm leading-relaxed whitespace-pre-line">
                        {item.metrics.content}
                      </p>
                    </div>

                    {/* Achievements List */}
                    <ul className="achievements-list space-y-3 text-sm mb-6 text-white/80">
                      {item.achievements.map((achievement, i) => (
                        <li key={i} className="achievement-item leading-relaxed list-disc list-inside">
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="tech-stack flex flex-wrap gap-2">
                      {item.technologies.map(tech => (
                        <span
                          key={tech}
                          className="tech-tag inline-block border border-white bg-white text-black rounded-full px-4 py-1 text-xs font-semibold uppercase tracking-wide transition-all shadow hover:bg-gray-100 mb-1"
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
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
