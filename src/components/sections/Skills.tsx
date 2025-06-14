
import { useState } from "react";
import { icons } from "lucide-react";

const wheelIcons = [
  { label: "HTML5", icon: "html5" },
  { label: "CSS3", icon: "css3" },
  { label: "JavaScript", icon: "javascript" },
  { label: "React", icon: "react" },
  { label: "Node.js", icon: "nodejs" },
  { label: "Linux", icon: "linux" },
  { label: "Docker", icon: "docker" },
  { label: "GitHub", icon: "github" },
  { label: "Python", icon: "python" },
  { label: "TensorFlow", icon: "tensorflow" },
  { label: "Data Science", icon: "data-science" },
];

const skillCategories = [
  {
    name: "Web Development",
    tools: ["HTML5", "CSS3", "JavaScript", "React", "Node.js"],
  },
  {
    name: "Systems & DevOps",
    tools: ["Linux", "Docker", "GitHub", "Networking", "Node.js"],
  },
  {
    name: "Machine Learning",
    tools: ["Python", "TensorFlow", "Data Science"],
  },
];

const getIconComponent = (icon: string) => {
  const IconComp = icons[icon as keyof typeof icons];
  if (!IconComp) return null;
  return <IconComp className="w-5 h-5" />;
};

const wheelCount = wheelIcons.length;

const Skills = () => {
  const [angle, setAngle] = useState(0);

  // Simple animation
  useState(() => {
    const interval = setInterval(() => {
      setAngle(prev => prev + (360 / wheelCount) * 0.35);
    }, 100);
    return () => clearInterval(interval);
  });

  const size = 240;
  const radius = 95;

  return (
    <section id="skills" className="section-padding bg-[#111]/90 min-h-[530px] relative overflow-visible">
      <div className="container mx-auto">
        <div className="max-w-2xl mx-auto text-center mb-7">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-[#10ff67]">Technologies & Tools</h2>
          <span className="block mx-auto w-16 h-1 rounded-full bg-[#10ff67] mb-4" />
        </div>
        {/* Wheel */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-2 mb-14 relative z-10">
          <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <div
              className="absolute rounded-full border-2 border-dashed border-[#10ff67]/30 z-10"
              style={{ width: size, height: size }}
            />
            {/* Rotating icons */}
            {wheelIcons.map((icon, i) => {
              const a = ((360 / wheelCount) * i + angle) % 360;
              const rads = (a * Math.PI) / 180;
              const x = Math.round(radius * Math.cos(rads));
              const y = Math.round(radius * Math.sin(rads));
              return (
                <div
                  key={icon.label}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: size / 2 + x - 22,
                    top: size / 2 + y - 22,
                    transition: "left 0.4s, top 0.4s",
                  }}
                >
                  <div className="rounded-full bg-[#10ff67]/15 border border-[#10ff67]/35 w-11 h-11 flex items-center justify-center shadow-md">
                    {getIconComponent(icon.icon)}
                  </div>
                  <span className="mt-1 text-xs text-[#10ff67bf]">{icon.label}</span>
                </div>
              );
            })}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center text-center rounded-full bg-[#10ff67] shadow-lg w-[72px] h-[72px] text-black font-extrabold text-xl border-2 border-[#10ff6790] z-20">
              FOSS
            </div>
          </div>
          {/* Categories */}
          <div className="flex flex-col md:flex-row gap-7 md:gap-10 items-center justify-center mt-8 md:mt-0">
            {skillCategories.map((cat, idx) => (
              <div
                key={cat.name}
                className="bg-[#10ff67]/[.07] border border-[#10ff67]/30 rounded-[32px] px-8 py-6 min-w-[220px] max-w-xs shadow-2xl backdrop-blur-md flex flex-col items-center"
                style={{
                  transform: `perspective(800px) rotateY(${idx === 0 ? -12 : idx === 2 ? 12 : 0}deg)`,
                  boxShadow: "0 8px 40px #10ff6740",
                }}
              >
                <div className="text-xl font-extrabold text-[#10ff67] mb-3 tracking-wider">{cat.name}</div>
                <div className="flex flex-wrap gap-2 justify-center mt-2">
                  {cat.tools.map(tool => (
                    <span
                      key={tool}
                      className="bg-[#10ff67]/15 border border-[#10ff67]/40 rounded-full px-4 py-1 text-xs text-[#10ff67] font-semibold uppercase tracking-wider mb-1 flex items-center gap-1 shadow"
                      style={{ fontFamily: "Rajdhani, sans-serif" }}
                    >
                      {getIconComponent(tool.toLowerCase().replace(".", ""))} {tool}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
