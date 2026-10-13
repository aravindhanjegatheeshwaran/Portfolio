const baseAssetUrl = import.meta.env.BASE_URL;

// ─────────────────────────────────────────────────────────────────────────────
// Resume document lives in public/assets/Documents/Aravindhan.pdf and is served at
// the Vite base-aware URL for both local and production environments.
// ─────────────────────────────────────────────────────────────────────────────

export const freelanceProfile = {
  name: "Aravindhan J",
  title: "Software Engineer & Freelance Builder",
  tagline:
    "AI workflow automation · full-stack applications · practical system integrations",
  summary: [
    "I bring nearly six years of software development experience to custom projects, from banking applications and backend APIs to AI-assisted workflow automation.",
    "My current work includes a production log analysis and Jira ticket agent, retrieval workflows, and local development assistants. I also build full-stack applications and connect software with databases, APIs, and embedded systems.",
    "For freelance engagements, I focus on understanding the operational problem first, then delivering a useful, maintainable solution with clear scope and communication.",
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
    { label: "Experience", value: "Nearly 6 years" },
    { label: "Core work", value: "AI + full stack" },
    { label: "Engagements", value: "Custom projects" },
  ],
};

export const interviewProfile = {
  name: "Aravindhan J",
  title: "Senior Software Engineer · AI Agent Developer",
  tagline: "Building useful AI workflows on top of reliable software systems.",
  summary: [
    "Software engineer with nearly six years of experience across banking applications, full-stack products, backend APIs, and Python development.",
    "I work with Python, FastAPI, React, and PostgreSQL, and am currently developing LLM-powered agents for production log analysis, technical context retrieval, and Jira ticket creation.",
    "My current focus is making AI workflows useful in real engineering environments: grounding responses in relevant documentation and code context, and integrating assistants with the tools teams already use.",
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
    { label: "Experience", value: "Nearly 6 years" },
    { label: "Current focus", value: "AI agents + RAG" },
    { label: "Measured impact", value: "20–25% faster queries" },
  ],
};

export const profile = interviewProfile;
