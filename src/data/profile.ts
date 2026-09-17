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
    github: "https://github.com/aravindhanjegatheeshwaran",
    linkedin: "https://www.linkedin.com/in/aravindhan-jegatheeshwaran/",
  },
  stats: [
    { label: "Projects Delivered", value: "8+" },
    { label: "Technical Domains", value: "6+" },
    { label: "Client Work", value: "Freelance" },
    { label: "Delivery", value: "Custom" },
  ],
};

export const interviewProfile = {
  name: "Aravindhan J",
  title: "Senior Software Engineer",
  tagline:
    "Full-Stack Web Developer · Fintech Systems · Microservices · Cloud Platforms · Embedded Integration",
  summary: [
    "Senior Software Engineer and Technical Lead with 5.5+ years of experience building scalable web applications and fintech banking systems. Expertise in architecting microservices, real-time systems, and cloud-native platforms using Python, FastAPI, Django, React.js, REST APIs, GraphQL, Docker, and AWS (EKS).",
    "Proven track record of leading cross-functional teams, optimizing system performance, and delivering high-availability platforms supporting real-time transactions and AI-driven automation at scale. Skilled in integrating embedded systems with backend services to power real-time banking and monitoring dashboards, with a strong focus on scalable system architecture design.",
  ],
  location: "India",
  resume: `${baseAssetUrl}assets/Documents/Aravindhan.pdf`,
  contact: {
    email: "aravindhanjegatheeshwaran@gmail.com",
    github: "https://github.com/aravindhanjegatheeshwaran",
    linkedin: "https://www.linkedin.com/in/aravindhan-jegatheeshwaran/",
  },
  stats: [
    { label: "Experience", value: "5.5+ yrs" },
    { label: "System Design", value: "Microservices" },
    { label: "Transactions", value: "10K+/day" },
    { label: "Reliability", value: "99.9%" },
  ],
};

export const profile = freelanceProfile;
