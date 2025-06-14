import { Shield, Network, User, CircleCheck, Mail, Server, Cloud, Globe } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import React, { useRef, useEffect } from "react";

const mainCategories = [
  {
    title: "Security Operations & Incident Response",
    tools: [
      {
        label: "SIEM Tools",
        items: ["Splunk ES", "IBM QRadar"],
      },
      {
        label: "SOAR Platforms",
        items: ["FortiSOAR", "Microsoft Sentinel"],
      },
      {
        label: "EDR/XDR Platforms",
        items: [
          "CrowdStrike Falcon",
          "SentinelOne XDR",
          "Microsoft Defender for Endpoint",
        ],
      },
      {
        label: "Incident Response",
        items: [
          "Triage",
          "Containment",
          "RCA",
          "Recovery (NIST 800-61)",
        ],
      },
      {
        label: "Log Analysis",
        items: [
          "Azure AD Logs",
          "Windows Event Logs",
          "Firewall Logs",
          "Proxy Logs",
        ],
      },
    ],
  },
  {
    title: "Threat Intelligence & Digital Forensics",
    tools: [
      {
        label: "Threat Intelligence Platforms",
        items: [
          "Recorded Future",
          "Virus Total Intelligence",
          "Alien Valut OTX",
        ],
      },
      {
        label: "Digital Forensics Tools",
        items: [
          "Falcon Forensics Collector",
          "Belkasoft",
        ],
      },
    ],
  },
  {
    title: "Network & Email Security",
    tools: [
      {
        label: "Network Security Tools",
        items: ["Wireshark"],
      },
      {
        label: "Email Security Solutions",
        items: [
          "Microsoft Defender for Office 365",
          "Proofpoint",
        ],
      },
    ],
  },
  {
    title: "Cloud & SaaS Security",
    tools: [
      {
        label: "AWS Security",
        items: [
          "AWS CloudTrail",
          "AWS GuardDuty",
        ],
      },
      {
        label: "Azure Security",
        items: [
          "Microsoft Sentinel",
          "Azure AD",
        ],
      },
      {
        label: "SaaS Security Tools",
        items: [
          "Orca Security",
          "Wiz",
          "AppOmni",
        ],
      },
    ],
  },
];

// Chosen a set of relevant lucide-react icons for the orbit visualization:
const categoryIcons = [
  <User key="User" />,
  <CircleCheck key="CircleCheck" />,
  <Network key="Network" />,
  <Server key="Server" />,
  <Shield key="Shield" />,
  <Cloud key="Cloud" />,
  <Globe key="Globe" />,
  <Mail key="Mail" />,
];

const centralCircleColor = "#fff";

const Skills = () => {
  const wheelRef = useRef<HTMLDivElement>(null);

  // Animation: incremental rotation (uses a ref because React state would be overkill and not as smooth)
  useEffect(() => {
    let animationFrame: number;
    let degree = 0;
    const animate = () => {
      if (wheelRef.current) {
        degree = (degree + 0.15) % 360;
        wheelRef.current.style.transform = `rotate(${degree}deg)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <section
      id="skills"
      className="section-padding unified-section-bg min-h-[650px] relative text-white flex flex-col items-center"
      style={{ background: "linear-gradient(135deg, #151516 60%, #242427 100%)" }}
    >
      <div className="container mx-auto flex flex-col items-center">
        {/* Header */}
        <h2 className="font-extrabold text-3xl md:text-4xl mb-3 text-center" style={{ color: "#fff" }}>
          Tools Radar
        </h2>
        <span className="block mx-auto w-16 h-1 rounded-full bg-white mb-10" />

        {/* Center circle + orbit icons */}
        <div className="flex flex-col md:flex-row items-center justify-center w-full mb-12 gap-7">
          <div className="hidden md:block md:flex-1" />
          {/* Central Icon Wheel */}
          <div className="relative flex items-center justify-center min-h-[300px] min-w-[330px]">
            {/* Dashed border wheel */}
            <div
              className="absolute z-10"
              style={{
                width: 230,
                height: 230,
                borderRadius: "50%",
                border: "2.5px dashed #fff9",
                inset: 0,
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
                pointerEvents: "none",
              }}
            />
            {/* Orbiting Icons */}
            <div
              ref={wheelRef}
              className="absolute left-1/2 top-1/2"
              style={{
                width: 230,
                height: 230,
                transform: "translate(-50%, -50%)",
                willChange: "transform",
              }}
            >
              {categoryIcons.map((IconEl, i) => {
                // ICON SIZE = 34, padding ~4px, dashed border radius = 115
                // Use an orbit radius that positions icons right inside the dashed border:
                const orbitRadius = 92; // fits nicely within dashed border of 115
                const center = 115;
                const angle = (i / categoryIcons.length) * (2 * Math.PI);
                const x = center + orbitRadius * Math.cos(angle);
                const y = center + orbitRadius * Math.sin(angle);
                return (
                  <div
                    key={i}
                    className="absolute flex items-center justify-center"
                    style={{
                      left: x - 20,
                      top: y - 20,
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      background: "#151516",
                      boxShadow: "0 2px 18px #fff2",
                      border: "1.5px solid #232325",
                    }}
                  >
                    <span
                      className="text-[1.42rem]"
                      style={{ color: "#fff", display: "flex", alignItems: "center", justifyContent: "center" }}
                    >
                      {IconEl}
                    </span>
                  </div>
                );
              })}
            </div>
            {/* Central circle */}
            <div
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center rounded-full shadow-lg font-extrabold"
              style={{
                width: 80,
                height: 80,
                background: "#fff",
                color: "#151516",
                fontSize: "1.13rem",
                letterSpacing: "0.01em",
                border: "3px solid #fff",
                zIndex: 20,
                boxShadow: "0 0 10px #fff6",
                padding: "0 8px",
                textWrap: "balance",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                lineHeight: "1.14"
              }}
            >
              Security & Cloud Tools
            </div>
          </div>
          <div className="hidden md:block md:flex-1" />
        </div>

        {/* Three/four category cards - in a flex wrap, centered */}
        <div className="flex flex-wrap justify-center gap-7 mt-2 w-full max-w-6xl">
          {mainCategories.map((cat) => (
            <div
              key={cat.title}
              className="bg-white/[.06] border border-white/25 rounded-[32px] px-7 py-6 min-w-[270px] max-w-xs shadow-2xl backdrop-blur-md flex flex-col items-center"
              style={{
                boxShadow: "0 8px 40px #fff0",
              }}
            >
              <div className="text-lg font-extrabold text-white mb-3 tracking-wider text-center" style={{letterSpacing: "0.02em"}}>
                {cat.title}
              </div>
              <div className="flex flex-col gap-2 w-full">
                {cat.tools.map((group) => (
                  <div key={group.label} className="mb-2 w-full flex flex-col items-center">
                    <span className="font-bold text-[.96em] text-white tracking-wide text-center mb-1">{group.label}</span>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {group.items.map((item) => (
                        <Badge
                          key={item}
                          className="bg-transparent border border-white/60 text-white font-semibold px-3 py-1 rounded-full shadow transition-colors hover:bg-white/10 text-xs uppercase"
                          style={{
                            letterSpacing: "0.01em",
                            fontFamily: "Rajdhani, sans-serif",
                          }}
                        >
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
