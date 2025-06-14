
const experienceData = [
  {
    date: "2022 - Present",
    role: "Sr. SOC Analyst",
    company: "CyberCorp Inc.",
    description: "Lead security incident investigations, mentor junior analysts, and develop new detection rules for the SIEM.",
  },
  {
    date: "2020 - 2022",
    role: "Incident Responder",
    company: "SecureNet Solutions",
    description: "Part of the Blue Team, focused on containing and eradicating threats, and performing forensic analysis.",
  },
  {
    date: "2019 - 2020",
    role: "Jr. Security Analyst",
    company: "DataProtect LLC",
    description: "Monitored security alerts, managed firewalls, and contributed to vulnerability assessment reports.",
  },
];

const Experience = () => {
  return (
    <section id="experience" className="section-padding">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Work Experience</h2>
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-0.5 bg-border"></div>
          
          {experienceData.map((item, index) => (
            <div key={index} className={`flex items-center w-full mb-8 ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
              <div className="w-1/2 px-4">
                <div className={`p-4 rounded-lg border bg-card text-card-foreground shadow-sm ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                  <p className="text-sm text-primary font-semibold">{item.date}</p>
                  <h3 className="text-lg font-bold mt-1">{item.role}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{item.company}</p>
                  <p className="text-sm">{item.description}</p>
                </div>
              </div>
              <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
