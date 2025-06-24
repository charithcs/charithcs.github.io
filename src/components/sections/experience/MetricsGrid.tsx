
import { TrendingUp, Target, Shield } from "lucide-react";
import { ExperienceItem } from "@/data/experience";

interface MetricsGridProps {
  impact: ExperienceItem['impact'];
}

const MetricsGrid = ({ impact }: MetricsGridProps) => {
  const getMetricIcon = (label: string) => {
    if (label.includes("Threat") || label.includes("Reduction")) return <TrendingUp className="h-4 w-4" />;
    if (label.includes("Coverage") || label.includes("Protection")) return <Shield className="h-4 w-4" />;
    return <Target className="h-4 w-4" />;
  };

  return (
    <div className="mb-6 md:mb-8">
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        <TrendingUp className="h-5 w-5 text-primary" />
        <h4 className="text-lg md:text-xl font-semibold text-white">{impact.title}</h4>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
        {impact.metrics.map((metric, i) => (
          <div key={i} className="bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 rounded-lg p-3 md:p-4 hover:border-primary/40 transition-colors">
            <div className="flex items-center gap-2 mb-2">
              {getMetricIcon(metric.label)}
              <div className="text-xl md:text-2xl font-bold text-primary">{metric.value}</div>
            </div>
            <div className="text-xs md:text-sm font-medium text-white mb-1">{metric.label}</div>
            <div className="text-xs text-white/60 leading-relaxed">{metric.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MetricsGrid;
