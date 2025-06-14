
import { useRef } from "react";
import SkillCard from "./SkillCard";
import { ChevronLeft, ChevronRight, Shield, Search, Cloud, Network } from "lucide-react";

const categories = [
  {
    category: "Security Operations & Incident Response",
    icon: <Shield />,
    color: {
      badge: "bg-blue-100 text-blue-800",
      text: "text-blue-700",
      border: "border-blue-600",
    },
    skills: [
      "SIEM Tools: Splunk ES, IBM QRadar",
      "SOAR: FortiSOAR, MS Sentinel",
      "EDR/XDR: CrowdStrike, SentinelOne",
      "Incident Response: Triage, RCA, recovery",
      "Log Analysis: Azure AD, Windows, Firewalls",
    ],
  },
  {
    category: "Threat Intelligence & Digital Forensics",
    icon: <Search />,
    color: {
      badge: "bg-purple-100 text-purple-800",
      text: "text-purple-700",
      border: "border-purple-600",
    },
    skills: [
      "Threat Intel: Recorded Future, VirusTotal",
      "Forensics: Falcon Collector, Belkasoft",
    ],
  },
  {
    category: "Network & Email Security",
    icon: <Network />,
    color: {
      badge: "bg-teal-100 text-teal-800",
      text: "text-teal-700",
      border: "border-teal-600",
    },
    skills: [
      "Network Tools: Wireshark",
      "Email Security: MS Defender O365, Proofpoint",
    ],
  },
  {
    category: "Cloud & SaaS Security",
    icon: <Cloud />,
    color: {
      badge: "bg-amber-100 text-amber-800",
      text: "text-amber-700",
      border: "border-amber-600",
    },
    skills: [
      "AWS: CloudTrail, GuardDuty",
      "Azure: Sentinel, AD",
      "SaaS Tools: Orca, Wiz, AppOmni",
    ],
  },
];

const Skills = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = window.innerWidth > 600 ? 340 : 220;
    scrollRef.current.scrollBy({ left: direction === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <section id="skills" className="section-padding bg-card/40 min-h-[510px]">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-7">
          <h2 className="text-3xl font-extrabold tracking-tight mb-2">Skills & Tools</h2>
          <p className="text-muted-foreground mb-2">What I bring to the table—at a glance. Explore core expertise & real tools used.</p>
        </div>
        <div className="relative flex items-center justify-center py-2">
          {/* Left Arrow */}
          <button
            onClick={() => scroll("left")}
            className="hidden md:flex absolute left-2 z-10 bg-card/80 hover:bg-card/100 border border-border/70 rounded-full p-2 shadow hover:scale-110 transition group"
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6 text-primary" />
          </button>
          {/* Scrollable cards */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory
              mx-1 md:mx-8 px-1 md:px-4 w-full
              scrollbar-thin scrollbar-thumb-muted/60 scrollbar-track-transparent"
            style={{ scrollBehavior: "smooth" }}
            tabIndex={0}
          >
            {categories.map((props) => (
              <div key={props.category} className="snap-start">
                <SkillCard {...props} />
              </div>
            ))}
          </div>
          {/* Right Arrow */}
          <button
            onClick={() => scroll("right")}
            className="hidden md:flex absolute right-2 z-10 bg-card/80 hover:bg-card/100 border border-border/70 rounded-full p-2 shadow hover:scale-110 transition group"
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6 text-primary" />
          </button>
        </div>
        {/* Dots/legend */}
        <div className="flex gap-3 justify-center mt-4">
          {categories.map((cat, idx) => (
            <span key={cat.category}
              className={`inline-block w-3 h-3 mt-1 rounded-full border-2
                ${cat.color.badge} ${cat.color.border}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
