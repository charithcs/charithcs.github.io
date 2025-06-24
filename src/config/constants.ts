// Configuration constants for easy maintenance
export const SITE_CONFIG = {
  name: "CHARITH S",
  title: "CHARITH S | Cybersecurity Analyst",
  description: "Cybersecurity professional with 4+ years of experience in safeguarding digital infrastructures, analyzing threats, and leading incident response efforts across enterprise environments.",
  author: "CHARITH S",
  url: "https://charith-portfolio.netlify.app",
  ogImage: "https://lovable.dev/opengraph-image-p98pqg.png",
  keywords: [
    "cybersecurity analyst",
    "incident response",
    "blue team operations",
    "SOC analyst",
    "threat detection",
    "security monitoring",
    "SIEM",
    "EDR",
    "cloud security"
  ]
} as const;

export const CONTACT_INFO = {
  email: "charithsighakollu@gmail.com",
  linkedin: "https://www.linkedin.com/in/charith-sighakollu/",
  github: "https://github.com/Securedsoul99",
  resume: "https://drive.google.com/file/d/1kQGyNZ3_qA3VV5vH78xic-B-EV0VliQQ/view?usp=sharing",
  medium: "@charithcs9"
} as const;

export const NAVIGATION_LINKS = [
  { title: "About", href: "#about" },
  { title: "Experience", href: "#experience" },
  { title: "Projects", href: "#projects" },
  { title: "Blog", href: "#blog" }
] as const;

export const ANIMATION_CONFIG = {
  duration: {
    fast: 150,
    normal: 300,
    slow: 500
  },
  easing: "cubic-bezier(0.4, 0, 0.2, 1)"
} as const;