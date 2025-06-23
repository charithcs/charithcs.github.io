
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ChevronDown, ChevronUp } from "lucide-react";

interface CollapsibleAchievementsProps {
  achievements: string[];
  maxVisible?: number;
}

const CollapsibleAchievements = ({ achievements, maxVisible = 3 }: CollapsibleAchievementsProps) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const visibleAchievements = achievements.slice(0, maxVisible);
  const hiddenAchievements = achievements.slice(maxVisible);
  
  if (achievements.length <= maxVisible) {
    return (
      <ul className="space-y-3 text-sm text-white/80">
        {achievements.map((achievement, i) => (
          <li key={i} className="leading-relaxed flex items-start">
            <span className="inline-block w-2 h-2 bg-[rgb(0,255,102)] rounded-full mt-2 mr-3 flex-shrink-0 animate-cyber-pulse" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
    );
  }

  return (
    <Collapsible open={isOpen} onOpenChange={setIsOpen}>
      <ul className="space-y-3 text-sm text-white/80">
        {visibleAchievements.map((achievement, i) => (
          <li key={i} className="leading-relaxed flex items-start">
            <span className="inline-block w-2 h-2 bg-[rgb(0,255,102)] rounded-full mt-2 mr-3 flex-shrink-0 animate-cyber-pulse" />
            <span>{achievement}</span>
          </li>
        ))}
      </ul>
      
      <CollapsibleContent>
        <ul className="space-y-3 text-sm text-white/80 mt-3">
          {hiddenAchievements.map((achievement, i) => (
            <li key={i + maxVisible} className="leading-relaxed flex items-start animate-fade-in">
              <span className="inline-block w-2 h-2 bg-[rgb(0,255,102)] rounded-full mt-2 mr-3 flex-shrink-0 animate-cyber-pulse" />
              <span>{achievement}</span>
            </li>
          ))}
        </ul>
      </CollapsibleContent>
      
      <CollapsibleTrigger className="flex items-center gap-2 text-[rgb(0,255,102)] hover:text-[rgb(0,200,80)] transition-colors mt-4 text-sm font-medium group">
        {isOpen ? (
          <>
            <ChevronUp className="h-4 w-4 group-hover:animate-bounce" />
            Show Less
          </>
        ) : (
          <>
            <ChevronDown className="h-4 w-4 group-hover:animate-bounce" />
            Show {hiddenAchievements.length} More Achievement{hiddenAchievements.length !== 1 ? 's' : ''}
          </>
        )}
      </CollapsibleTrigger>
    </Collapsible>
  );
};

export default CollapsibleAchievements;
