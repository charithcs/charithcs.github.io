// Configuration constants for easy maintenance
export const SITE_CONFIG = {
  name: "CHARITH S",
  title: "CHARITH S | Cybersecurity Analyst - Expert in Incident Response & Blue Team Operations",
  description: "Cybersecurity professional with 4+ years of experience in incident response, blue team operations, SOC analysis, and threat detection. Specialized in SIEM, EDR, cloud security, and enterprise threat mitigation.",
  author: "CHARITH S",
  url: "https://charith-portfolio.netlify.app",
  ogImage: "https://charith-portfolio.netlify.app/og-image.jpg",
  keywords: [
    "cybersecurity analyst",
    "incident response specialist",
    "blue team operations",
    "SOC analyst",
    "threat detection",
    "security monitoring",
    "SIEM expert",
    "EDR specialist",
    "cloud security",
    "enterprise security",
    "threat hunting",
    "malware analysis",
    "security automation",
    "SOAR",
    "vulnerability assessment",
    "penetration testing",
    "cyber defense",
    "information security consultant",
    "security operations center",
    "cybersecurity professional"
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

// Security Configuration
export const SECURITY_CONFIG = {
  allowedDomains: [
    'charith-portfolio.netlify.app',
    'fonts.googleapis.com',
    'fonts.gstatic.com',
    'api.rss2json.com',
    'formspree.io',
    'medium.com'
  ],
  cspDirectives: {
    defaultSrc: ["'self'"],
    scriptSrc: ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
    styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com"],
    fontSrc: ["'self'", "https://fonts.gstatic.com"],
    imgSrc: ["'self'", "data:", "https:"],
    connectSrc: ["'self'", "https://api.rss2json.com", "https://formspree.io"],
    frameSrc: ["'none'"],
    objectSrc: ["'none'"],
    baseUri: ["'self'"]
  }
} as const;