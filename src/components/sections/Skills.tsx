import React from "react";
import OrbitWheel from "./OrbitWheel";
import SkillCategoryCard from "./SkillCategoryCard";
import { skillsData } from "@/data/skills";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const Skills = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section
      id="skills"
      ref={elementRef}
      className="section-padding unified-section-bg min-h-[650px] relative text-white flex flex-col items-center"
      style={{ background: "linear-gradient(135deg, #151516 60%, #242427 100%)" }}
    >
      <div className="container mx-auto flex flex-col items-center px-4 md:px-6">
        {/* Header */}
        <h2 className={`font-extrabold text-2xl md:text-3xl lg:text-4xl mb-3 text-center transition-all duration-700 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`} style={{ color: "#fff" }}>
          Tools Radar
        </h2>
        <span className={`block mx-auto w-16 h-1 rounded-full bg-white mb-8 md:mb-10 transition-all duration-700 delay-200 ${
          isIntersecting ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
        }`} />

        {/* Center circle + orbit icons */}
        <div className={`flex flex-col md:flex-row items-center justify-center w-full mb-8 md:mb-12 gap-7 transition-all duration-700 delay-400 ${
          isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        }`}>
          <div className="hidden md:block md:flex-1" />
          <div className="flex justify-center">
            <OrbitWheel label="Tools" />
          </div>
          <div className="hidden md:block md:flex-1" />
        </div>

        {/* Skill category groups */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-10 mt-2 w-full max-w-6xl">
          {skillsData.map((cat, index) => (
            <div
              key={cat.title}
              className={`transition-all duration-700 ${
                isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${600 + (index * 200)}ms` }}
            >
              <SkillCategoryCard title={cat.title} tools={cat.tools} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;