
import { HoverCard, HoverCardContent, HoverCardTrigger } from "@/components/ui/hover-card";

interface TechDetails {
  [key: string]: {
    category: string;
    description: string;
    expertise: "Beginner" | "Intermediate" | "Advanced" | "Expert";
  };
}

const techDetails: TechDetails = {
  "Splunk ES": {
    category: "SIEM Platform",
    description: "Enterprise security information and event management platform for threat detection and investigation",
    expertise: "Expert"
  },
  "IBM QRadar": {
    category: "SIEM Platform", 
    description: "AI-powered security intelligence platform for threat detection and response",
    expertise: "Advanced"
  },
  "CrowdStrike Falcon": {
    category: "EDR Platform",
    description: "Cloud-native endpoint detection and response platform with AI-powered threat hunting",
    expertise: "Expert"
  },
  "SentinelOne XDR": {
    category: "XDR Platform",
    description: "Extended detection and response platform with autonomous threat response capabilities",
    expertise: "Advanced"
  },
  "FortiSOAR": {
    category: "SOAR Platform",
    description: "Security orchestration, automation and response platform for incident management",
    expertise: "Advanced"
  },
  "Microsoft Sentinel": {
    category: "Cloud SIEM",
    description: "Cloud-native SIEM and SOAR solution built on Azure for scalable security operations",
    expertise: "Advanced"
  },
  "AWS CloudTrail": {
    category: "Cloud Security",
    description: "AWS service for logging and monitoring API calls and user activity",
    expertise: "Intermediate"
  },
  "Azure AD": {
    category: "Identity Management",
    description: "Microsoft's cloud-based identity and access management service",
    expertise: "Advanced"
  },
  "Wiz": {
    category: "Cloud Security",
    description: "Cloud security platform for comprehensive cloud infrastructure protection",
    expertise: "Intermediate"
  },
  "Orca Security": {
    category: "Cloud Security",
    description: "Agentless cloud security platform for vulnerability and compliance management",
    expertise: "Intermediate"
  },
  "Microsoft Defender": {
    category: "Endpoint Security",
    description: "Microsoft's comprehensive endpoint protection and threat detection platform",
    expertise: "Advanced"
  },
  "Rapid7": {
    category: "Vulnerability Management",
    description: "Security analytics platform for vulnerability management and incident detection",
    expertise: "Intermediate"
  },
  "O365 Defender": {
    category: "Email Security",
    description: "Microsoft's advanced threat protection for Office 365 applications",
    expertise: "Advanced"
  },
  "Proofpoint": {
    category: "Email Security",
    description: "Enterprise email security and threat protection platform",
    expertise: "Intermediate"
  },
  "DLP Tools": {
    category: "Data Protection",
    description: "Data loss prevention solutions for protecting sensitive information",
    expertise: "Intermediate"
  },
  "CASB Solutions": {
    category: "Cloud Security",
    description: "Cloud access security broker solutions for cloud application security",
    expertise: "Intermediate"
  }
};

interface TechHoverCardProps {
  tech: string;
  children: React.ReactNode;
}

const TechHoverCard = ({ tech, children }: TechHoverCardProps) => {
  const details = techDetails[tech];
  
  if (!details) {
    return <>{children}</>;
  }

  const getExpertiseColor = (level: string) => {
    switch (level) {
      case "Expert": return "text-green-400";
      case "Advanced": return "text-blue-400";
      case "Intermediate": return "text-yellow-400";
      case "Beginner": return "text-gray-400";
      default: return "text-white";
    }
  };

  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        {children}
      </HoverCardTrigger>
      <HoverCardContent className="w-80 p-4 bg-card border border-border/50 shadow-xl">
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-white">{tech}</h4>
            <span className={`text-xs font-medium px-2 py-1 rounded-full bg-white/10 ${getExpertiseColor(details.expertise)}`}>
              {details.expertise}
            </span>
          </div>
          <div className="text-xs text-primary font-medium uppercase tracking-wide">
            {details.category}
          </div>
          <p className="text-sm text-white/80 leading-relaxed">
            {details.description}
          </p>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
};

export default TechHoverCard;
