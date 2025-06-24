
import { experienceData } from "@/data/experience";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ExperienceItem from "./experience/ExperienceItem";
import TimelineLine from "./experience/TimelineLine";

const Experience = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section 
      id="experience" 
      ref={elementRef}
      className="section-padding unified-section-bg"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white drop-shadow-none tracking-tight transition-all duration-700 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Professional Experience
          </h2>
          <p className={`text-base md:text-lg text-white/70 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
            isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            4+ years of hands-on cybersecurity experience protecting enterprise infrastructures, 
            leading incident response, and implementing security solutions across diverse environments.
          </p>
        </div>
        
        <div className="timeline relative max-w-6xl mx-auto">
          <TimelineLine />

          {experienceData.map((item, index) => (
            <ExperienceItem
              key={index}
              item={item}
              index={index}
              isIntersecting={isIntersecting}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
