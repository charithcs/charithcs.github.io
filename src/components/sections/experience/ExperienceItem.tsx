
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Calendar, MapPin, TrendingUp, Target, Shield } from "lucide-react";
import CollapsibleAchievements from "../CollapsibleAchievements";
import { ExperienceItem as ExperienceItemType } from "@/data/experience";
import MetricsGrid from "./MetricsGrid";

interface ExperienceItemProps {
  item: ExperienceItemType;
  index: number;
  isIntersecting: boolean;
}

const ExperienceItem = ({ item, index, isIntersecting }: ExperienceItemProps) => {
  return (
    <div 
      className={`timeline-item relative mb-16 md:mb-20 transition-all duration-700 ${
        isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      }`}
      style={{ transitionDelay: `${(index + 1) * 300}ms` }}
    >
      {/* Enhanced Timeline Marker */}
      <div className="timeline-marker absolute left-1/2 -translate-x-1/2 top-8 w-6 h-6 rounded-full bg-gradient-to-r from-[#10ff67] to-[#00ff85] border-4 border-card z-10 shadow-lg hidden md:block animate-pulse" />
      
      {/* Timeline Content */}
      <div className="timeline-content">
        <Card className="unified-card transition-all duration-300 group hover:scale-[1.02] relative shadow-xl z-10">
          <CardContent className="pt-6 md:pt-8 pb-6 md:pb-8 px-4 md:px-6">
            {/* Header Section */}
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 md:gap-6 mb-6 md:mb-8">
              <div className="flex-1">
                {/* Job Title with Level Badge */}
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-3">
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white">{item.role}</h3>
                  <Badge variant="outline" className="bg-primary/10 text-primary border-primary/30 w-fit text-xs md:text-sm">
                    {item.level}
                  </Badge>
                </div>
                
                {/* Company and Deployment */}
                <div className="space-y-2">
                  <div className="text-base md:text-lg font-medium text-primary">
                    {item.company}
                    {item.deployment && (
                      <span className="text-white/60 font-normal"> • {item.deployment}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Date and Location Info */}
              <div className="flex flex-col sm:flex-row lg:flex-col gap-4 lg:text-right">
                <div className="flex items-center gap-2 text-white/80">
                  <Calendar className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium">{item.date}</div>
                    <div className="text-sm text-white/60">({item.duration})</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <MapPin className="h-4 w-4 text-primary flex-shrink-0" />
                  <div>
                    <div className="font-medium text-sm md:text-base">{item.location}</div>
                    <div className="text-xs md:text-sm text-white/60">{item.type}</div>
                  </div>
                </div>
              </div>
            </div>

            <Separator className="my-6 md:my-8 bg-white/10" />

            {/* Impact Metrics Section */}
            <MetricsGrid impact={item.impact} />

            <Separator className="my-6 md:my-8 bg-white/10" />

            {/* Responsibilities Section with Collapsible */}
            <div className="mb-6 md:mb-8">
              <h4 className="text-lg md:text-xl font-semibold text-white mb-4 flex items-center gap-2">
                <Target className="h-5 w-5 text-primary" />
                Key Responsibilities & Achievements
              </h4>
              <CollapsibleAchievements achievements={item.responsibilities} maxVisible={4} />
            </div>

            <Separator className="my-6 md:my-8 bg-white/10" />

            {/* Technology Stack */}
            <div className="mb-6">
              <h4 className="text-base md:text-lg font-semibold text-white mb-4 flex items-center gap-2">
                <Shield className="h-5 w-5 text-primary" />
                Security Technologies & Platforms
              </h4>
              <div className="flex flex-wrap gap-2">
                {item.technologies.map(tech => (
                  <span
                    key={tech}
                    className="tech-tag inline-block border border-white bg-white text-black rounded-full px-3 md:px-4 py-1.5 md:py-2 text-xs font-semibold uppercase tracking-wide transition-all shadow hover:bg-gray-100 hover:scale-105 cursor-pointer"
                    style={{
                      letterSpacing: ".04em",
                      fontFamily: "Rajdhani, sans-serif",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Additional Information */}
            {(item.certifications || item.keyProjects) && (
              <>
                <Separator className="my-6 bg-white/10" />
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {item.certifications && (
                    <div>
                      <h5 className="font-semibold text-white mb-2 text-sm md:text-base">Certifications</h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        {item.certifications.map((cert, i) => (
                          <li key={i} className="flex items-center gap-2">
                            <Badge variant="outline" className="bg-primary/5 text-primary border-primary/30 text-xs">
                              {cert}
                            </Badge>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {item.keyProjects && (
                    <div>
                      <h5 className="font-semibold text-white mb-2 text-sm md:text-base">Key Projects</h5>
                      <ul className="text-sm text-white/80 space-y-1">
                        {item.keyProjects.map((project, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="inline-block w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                            <span>{project}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ExperienceItem;
