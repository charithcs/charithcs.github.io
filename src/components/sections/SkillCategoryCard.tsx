
import React from "react";
import { Badge } from "@/components/ui/badge";

type ToolGroupType = {
  label: string;
  items: string[];
};

type SkillCategoryCardProps = {
  title: string;
  tools: ToolGroupType[];
};

const SkillCategoryCard: React.FC<SkillCategoryCardProps> = ({ title, tools }) => (
  <div
    className="bg-white/[.06] border border-white/25 rounded-[32px] px-5 py-5 min-w-[260px] max-w-xs shadow-2xl backdrop-blur-md flex flex-col items-center"
    style={{
      boxShadow: "0 8px 40px #fff0",
      minHeight: 295,
      justifyContent: "flex-start"
    }}
  >
    <div className="text-base font-extrabold text-white mb-2 tracking-wider text-center" style={{ letterSpacing: "0.01em", minHeight: 44, display: "flex", alignItems: "center", justifyContent: "center" }}>
      {title}
    </div>
    <div className="flex flex-col gap-1 w-full">
      {tools.map((group, idx) => (
        <div
          key={group.label}
          className={`w-full flex flex-col items-center mb-1 ${idx === tools.length - 1 ? "pb-1" : ""}`}
        >
          <span className="font-semibold text-xs text-white/90 tracking-wide text-center mb-1" style={{ textTransform: "uppercase", letterSpacing: "0.01em" }}>
            {group.label}
          </span>
          <div className="flex flex-wrap gap-1 justify-center">
            {group.items.map((item) => (
              <Badge
                key={item}
                className="bg-transparent border border-white/70 text-white font-medium px-2.5 py-1 rounded-full shadow transition-colors hover:bg-white/10 text-[0.80em] tracking-wider"
                style={{
                  letterSpacing: "0.03em",
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
);

export default SkillCategoryCard;
