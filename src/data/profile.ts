const baseAssetUrl = import.meta.env.BASE_URL;

// ─────────────────────────────────────────────────────────────────────────────
// Resume document lives in public/assets/Documents/Aravindhan.pdf and is served at
// the Vite base-aware URL for both local and production environments.
// ─────────────────────────────────────────────────────────────────────────────

export const freelanceProfile = {
  name: "Aravindhan J",
  title: "Software Engineer & Freelance Builder",
  tagline:
    "Custom web apps · workflow automation · IoT dashboards · business systems",
  summary: [
    "I build practical digital systems that help businesses automate workflows, improve operations, and turn complex processes into reliable software.",
    "My work spans web applications, backend systems, hardware integrations, and operational dashboards for clients who need functional, production-ready solutions.",
    "I focus on clear communication, business value, and dependable delivery for custom projects and technical consulting work.",
  ],
  location: "India",
  resume: `${baseAssetUrl}assets/Documents/Aravindhan.pdf`,
  contact: {
    email: "aravindhanjegatheeshwaran@gmail.com",
    phone: "8695704181",
    github: "https://github.com/aravindhanjegatheeshwaran",
    linkedin: "https://www.linkedin.com/in/aravindhan-jegatheeshwaran/",
  },
  stats: [
    { label: "Technical Domains", value: "6+" },
    { label: "Client Work", value: "Freelance" },
    { label: "Delivery", value: "Custom" },
  ],
};

export const interviewProfile = {
  name: "Aravindhan J",
  title: "Senior Software Engineer",
  tagline:
    "Agentic AI · Full-Stack Engineering · Scalable Platforms · Embedded Intelligence",
  summary: [
    "Senior Software Engineer with nearly 6 years of experience building scalable web applications, fintech platform systems, and production-grade automation workflows.",
    "I work across product engineering, system design, backend architecture, and AI-enabled workflows—bringing together frontend clarity, backend reliability, and real-world operational context to deliver high-impact software.",
    "Currently focused on agentic AI, automation, and intelligent systems that improve decision-making, streamline workflows, and extend software beyond conventional application boundaries.",
  ],
  location: "India",
  resume: `${baseAssetUrl}assets/Documents/Aravindhan.pdf`,
  contact: {
    email: "aravindhanjegatheeshwaran@gmail.com",
    phone: "8695704181",
    github: "https://github.com/aravindhanjegatheeshwaran",
    linkedin: "https://www.linkedin.com/in/aravindhan-jegatheeshwaran/",
  },
  stats: [
    { label: "Current Focus", value: "Agentic AI" },
    { label: "Transactions", value: "10K+/day" },
    { label: "Reliability", value: "99.9%" },
  ],
};

export const profile = interviewProfile;
