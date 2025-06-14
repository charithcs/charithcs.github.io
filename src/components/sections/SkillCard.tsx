
import { Badge } from "@/components/ui/badge";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

type SkillCardProps = {
  category: string;
  icon?: React.ReactNode;
  color: {
    badge: string;
    text: string;
    border: string;
  };
  skills: string[];
};

const SkillCard = ({ category, icon, color, skills }: SkillCardProps) => (
  <Card className={`min-w-[340px] max-w-xs mx-2 border-2 ${color.border} transition-shadow hover:shadow-2xl flex-shrink-0`}>
    <CardHeader className="flex flex-row items-center justify-between pb-1">
      <CardTitle className={`flex items-center gap-2 text-lg ${color.text}`}>
        {icon && <span className="text-2xl">{icon}</span>}
        {category}
      </CardTitle>
      <span className={`w-4 h-4 rounded-full hidden md:inline-block ${color.badge} border ${color.border}`} />
    </CardHeader>
    <CardContent>
      <div className="flex flex-col gap-2 py-2">
        {skills.map(skill => (
          <Badge key={skill} className={`w-fit ${color.badge} ${color.text} font-medium px-3 py-1.5 !rounded-md shadow-sm`}>
            {skill}
          </Badge>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default SkillCard;
