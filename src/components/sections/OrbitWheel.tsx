
import React, { useEffect, useRef } from "react";
import { Shield, Network, User, CircleCheck, Mail, Server, Cloud, Globe } from "lucide-react";

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

type OrbitWheelProps = {
  label?: string;
};

const OrbitWheel: React.FC<OrbitWheelProps> = ({ label = "Security & Cloud Tools" }) => {
  const wheelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animationFrame: number;
    let degree = 0;
    const animate = () => {
      if (wheelRef.current) {
        degree = (degree + 0.15) % 360;
        wheelRef.current.style.transform = `translate(-50%, -50%) rotate(${degree}deg)`;
      }
      animationFrame = requestAnimationFrame(animate);
    };
    animate();
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
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
          const iconSize = 32;
          const orbitRadius = 95;
          const containerCenter = 115;
          const angle = (i / categoryIcons.length) * (2 * Math.PI);
          const x = containerCenter + orbitRadius * Math.cos(angle);
          const y = containerCenter + orbitRadius * Math.sin(angle);
          return (
            <div
              key={i}
              className="absolute flex items-center justify-center"
              style={{
                left: x - iconSize / 2,
                top: y - iconSize / 2,
                width: iconSize,
                height: iconSize,
                borderRadius: "50%",
                boxShadow: "0 0 12px 3px #fff6, 0 2px 8px #232325aa",
                background: "rgba(17,18,19,0.95)",
                border: "1.5px solid #232325",
              }}
            >
              <span
                className="flex items-center justify-center"
                style={{
                  color: "#fff",
                  fontSize: "1.2rem",
                  width: iconSize - 4,
                  height: iconSize - 4,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: 0
                }}
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
        {label}
      </div>
    </div>
  );
};

export default OrbitWheel;
