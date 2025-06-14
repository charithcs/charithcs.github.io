
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
  <div className="flex flex-col items-start">
    <h3 className="text-lg font-extrabold text-white mb-4 tracking-wider text-left" style={{ letterSpacing: "0.01em" }}>
      {title}
    </h3>
    <div className="flex flex-col gap-4 w-full">
      {tools.map((group) => (
        <div
          key={group.label}
          className="w-full flex flex-col items-start"
        >
          <span className="font-semibold text-sm text-white/80 tracking-wide text-left mb-2" style={{ textTransform: "uppercase", letterSpacing: "0.01em" }}>
            {group.label}
          </span>
          <div className="flex flex-wrap gap-2 justify-start">
            {group.items.map((item) => (
              <Badge
                key={item}
                className="bg-transparent border border-white/60 text-white font-normal px-3 py-1 rounded-full shadow-sm transition-colors hover:bg-white/10 text-[13px] tracking-wide"
                style={{
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
