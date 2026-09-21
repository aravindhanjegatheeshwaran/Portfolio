import { interviewProfile } from "../../data/profile";
import { projects } from "../../data/projects";
import { skillGroups } from "../../data/skills";
import { Badge } from "../ui/Badge";

const experience = [
  {
    company: "DANFISHEL DIGITAL SOFTWARE SOLUTIONS Ltd",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2024 – Present",
    role: "Senior Software Engineer – Full Stack Web Developer",
    details: [
      "Developed and maintained scalable core banking applications and AI-driven automation solutions focused on operational efficiency.",
      "Led a cross-functional engineering team to deliver end-to-end fintech systems, product improvements, and platform reliability upgrades.",
      "Built backend services and responsive interfaces for high-volume transaction workflows and real-time operational systems.",
      "Designed embedded telemetry and platform integrations to support AI-driven automation and operational intelligence.",
      "Managed AWS EKS deployments with Docker and Kubernetes to support production delivery and CI/CD workflows.",
    ],
  },
  {
    company: "SOFTSQUARE SOLUTIONS Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2022 – July 2024",
    role: "Software Engineer – Full Stack Web Developer",
    details: [
      "Built and improved full-stack applications across multi-module product landscapes using React, Django, and Node.js.",
      "Designed REST and GraphQL APIs, optimized PostgreSQL performance, and created maintainable service patterns.",
      "Collaborated with product and engineering teams to improve delivery quality, scalability, and maintainability.",
    ],
  },
  {
    company: "SELTAM TECHNOLOGIES SOLUTIONS Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    period: "May 2021 – May 2022",
    role: "Python Developer",
    details: [
      "Delivered client-specific applications with production-ready testing and deployment across real-world workflows.",
      "Built messaging and integration features capable of handling high-throughput communication events.",
      "Connected Python applications with embedded systems and communication layers for operational automation.",
    ],
  },
  {
    company: "ILIFE TECHNOLOGIES",
    location: "Trichy, Tamil Nadu",
    period: "Oct 2020 - April 2021",
    role: "Python Developer",
    details: [
      "Independently delivered full-stack web applications with a strong emphasis on usability and maintainability.",
      "Developed backend integrations, automation tools, and cloud-deployed product features for operational workflows.",
    ],
  },
];

const strengths = [
  {
    title: "Agentic AI & automation",
    description:
      "Designing workflows that combine reasoning, reliability, and operational context into business-ready systems.",
  },
  {
    title: "System design",
    description:
      "Architecting scalable applications, APIs, and platform services across cloud-native and data-intensive environments.",
  },
  {
    title: "Product engineering",
    description:
      "Turning product requirements into clean digital experiences and dependable systems across the stack.",
  },
  {
    title: "Embedded & telemetry",
    description:
      "Connecting hardware telemetry, serial protocols, and monitoring data into actionable engineering insights.",
  },
];

const highlights = [
  "Nearly 6 years building product systems, APIs, and platform engineering solutions.",
  "Designed services handling 10K+ daily transactions with availability-focused reliability patterns.",
  "Delivered work across frontend, backend, infrastructure, and embedded integrations end-to-end.",
  "Built AI-enabled automation and intelligent workflows in fintech and operational technology environments.",
];

const education = [
  "Master of Computer Application – Computer Application | Nehru Memorial College, Trichy, Tamil Nadu",
  "Bachelor of Science – Computer Science | Kurinji College of Arts and Science, Trichy, Tamil Nadu",
];

export function ProfessionalPortfolioPage() {
  const profileImage = `${import.meta.env.BASE_URL}assets/images/AravindhanJ.jpg`;
  const featuredProjects = projects
    .filter(
      (project) =>
        project.featured &&
        !project.tags.includes("Freelance") &&
        project.id !== "motor-dt",
    )
    .slice(0, 3);

  const snapshot = [
    { label: "Experience", value: "Nearly 6 years" },
    { label: "Current focus", value: "Agentic AI" },
    { label: "Platform scale", value: "10K+ tx/day" },
    { label: "Strength", value: "Full-stack engineering" },
  ];

  return (
    <div className="min-h-screen bg-[#060b10] text-slate-100">
      <div
        className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(94,234,212,0.08),transparent_28%),radial-gradient(circle_at_right,_rgba(96,165,250,0.08),transparent_24%)]"
        aria-hidden="true"
      />

      <a
        href={interviewProfile.resume}
        target="_blank"
        rel="noreferrer"
        className="fixed bottom-5 right-5 z-50 inline-flex items-center justify-center rounded-full bg-[#dfe8f5] px-4 py-2.5 text-sm font-semibold text-[#070b10] shadow-[0_20px_40px_rgba(147,197,253,0.18)] transition hover:-translate-y-0.5 hover:bg-white"
      >
        View Resume
      </a>

      <main className="relative mx-auto max-w-7xl px-4 pb-16 pt-6 sm:px-6 lg:px-8 lg:pb-20">
        <header className="sticky top-0 z-40 mb-8 rounded-full border border-white/10 bg-[#0d1117]/75 px-4 py-3 shadow-[0_10px_30px_rgba(2,6,23,0.28)] backdrop-blur-xl">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
            <div className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]">
              {interviewProfile.name}
            </div>
            <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a href="#snapshot" className="hover:text-white">
                Snapshot
              </a>
              <a href="#experience" className="hover:text-white">
                Experience
              </a>
              <a href="#skills" className="hover:text-white">
                Skills
              </a>
              <a href="#resume" className="hover:text-white">
                Resume
              </a>
            </nav>
            <a
              href={interviewProfile.resume}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center justify-center rounded-full border border-[#1f2937] bg-[#111827] px-3 py-2 text-sm font-medium text-slate-100 transition hover:border-sky-400/40 hover:text-sky-200"
            >
              Resume
            </a>
          </div>
        </header>

        <section
          id="top"
          className="reveal-panel relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0b1220] shadow-[0_30px_90px_rgba(2,6,23,0.55)]"
        >
          <div
            className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(34,211,238,0.18),transparent_32%),radial-gradient(circle_at_bottom_right,_rgba(168,85,247,0.12),transparent_28%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.08)_1px,transparent_1px)] [background-size:42px_42px]"
            aria-hidden="true"
          />

          <div className="relative grid gap-10 p-6 sm:p-8 lg:grid-cols-[1.12fr_0.88fr] lg:p-12">
            <div className="flex flex-col justify-center">
              <div className="mb-6 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-sky-400/30 bg-sky-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-sky-200">
                  Agentic AI Engineer
                </span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-200">
                  Available for senior roles
                </span>
              </div>

              <h1 className="max-w-xl text-4xl font-semibold tracking-[-0.08em] text-white sm:text-5xl lg:text-6xl">
                {interviewProfile.name}
              </h1>

              <p className="mt-4 text-xl font-medium text-sky-200 sm:text-2xl">
                {interviewProfile.title}
              </p>

              <p className="mt-5 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
                {interviewProfile.tagline}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={interviewProfile.resume}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#dfe8f5] px-5 py-3 text-sm font-semibold text-[#070b10] shadow-[0_20px_40px_rgba(147,197,253,0.2)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  View Resume
                </a>
                <a
                  href={`mailto:${interviewProfile.contact.email}`}
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10"
                >
                  Email Me
                </a>
              </div>

              <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-slate-300">
                <span>📍 {interviewProfile.location}</span>
                <a
                  href={`mailto:${interviewProfile.contact.email}`}
                  className="text-sky-200 hover:text-sky-100"
                >
                  {interviewProfile.contact.email}
                </a>
                <a
                  href={`tel:${interviewProfile.contact.phone}`}
                  className="text-sky-200 hover:text-sky-100"
                >
                  {interviewProfile.contact.phone}
                </a>
                <a
                  href={interviewProfile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-200 hover:text-sky-100"
                >
                  LinkedIn
                </a>
                <a
                  href={interviewProfile.contact.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-sky-200 hover:text-sky-100"
                >
                  GitHub
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative w-full max-w-[460px]">
                <div
                  className="absolute inset-0 rounded-[30px] bg-gradient-to-br from-sky-500/20 via-cyan-400/10 to-violet-500/20 blur-2xl"
                  aria-hidden="true"
                />
                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0e1725] p-3 shadow-[0_24px_70px_rgba(2,6,23,0.6)]">
                  <img
                    src={profileImage}
                    alt={interviewProfile.name}
                    className="h-[440px] w-full rounded-[24px] object-cover object-center"
                  />
                </div>
                <div className="absolute -bottom-6 left-6 right-6 grid grid-cols-3 gap-3 rounded-2xl border border-white/10 bg-[#0e1725]/90 p-3 backdrop-blur-sm">
                  {snapshot.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-slate-800 bg-slate-950/80 px-2 py-3 text-center"
                    >
                      <div className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                        {item.label}
                      </div>
                      <div className="mt-2 text-sm font-semibold text-white">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="snapshot"
          className="reveal-panel mt-12 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div className="rounded-[30px] border border-white/10 bg-[#0d141d] p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
              Core strengths
            </p>
            <div className="mt-6 space-y-4">
              {strengths.map((strength) => (
                <div
                  key={strength.title}
                  className="rounded-2xl border border-slate-800 bg-[#101923] p-4"
                >
                  <div className="text-base font-semibold text-white">
                    {strength.title}
                  </div>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {strength.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          id="experience"
          className="reveal-panel mt-14 rounded-[32px] border border-white/10 bg-[#0d141d] p-6 sm:p-8"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
            Experience
          </p>
          <div className="mt-6 space-y-6">
            {experience.map((item) => (
              <article
                key={item.company}
                className="relative rounded-[28px] border border-slate-800 bg-[#101923] p-5 pl-6 sm:p-6"
              >
                <div
                  className="absolute left-0 top-6 h-16 w-0.5 rounded-full bg-gradient-to-b from-sky-400 to-violet-500"
                  aria-hidden="true"
                />
                <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">
                      {item.company}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {item.location}
                    </p>
                  </div>
                  <div className="text-sm font-medium text-sky-200">
                    {item.period}
                  </div>
                </div>
                <p className="mt-4 text-lg font-medium text-slate-100">
                  {item.role}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section id="skills" className="reveal-panel mt-14">
          <div className="mb-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
              Technical expertise
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white">
              Engineering depth across product, platform, and systems
            </h2>
          </div>

          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {skillGroups.map((group) => (
              <div
                key={group.id}
                className="rounded-[28px] border border-white/10 bg-[#0d141d] p-5"
              >
                <div className="mb-4 flex items-center justify-between">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
                    {group.label}
                  </p>
                  <span
                    className="h-2.5 w-2.5 rounded-full bg-sky-400"
                    aria-hidden="true"
                  />
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((skill) => (
                    <Badge key={skill} variant="cyan" size="sm">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="reveal-panel mt-14 grid gap-5 lg:grid-cols-2">
          <div className="rounded-[30px] border border-white/10 bg-[#0d141d] p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
              Highlights
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {highlights.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-sky-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-[#0d141d] p-6 sm:p-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
              Education
            </p>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              {education.map((item) => (
                <li key={item} className="flex gap-3">
                  <span
                    className="mt-2 h-2 w-2 rounded-full bg-violet-400"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          id="resume"
          className="reveal-panel mt-14 rounded-[32px] border border-white/10 bg-[#0b1220] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
                Resume
              </p>
              <h3 className="mt-3 text-3xl font-semibold tracking-[-0.06em] text-white">
                Full background and work history
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={interviewProfile.resume}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#dfe8f5] px-5 py-3 text-sm font-semibold text-[#070b10] transition hover:-translate-y-0.5 hover:bg-white"
              >
                View Resume
              </a>
              <a
                href={interviewProfile.resume}
                download="Aravindhan.pdf"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/60 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        <section
          id="contact"
          className="reveal-panel mt-14 rounded-[32px] border border-white/10 bg-[#0b1220] p-6 sm:p-8"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
            Contact
          </p>
          <div className="mt-6 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="text-3xl font-semibold tracking-[-0.06em] text-white">
                Let’s build something meaningful.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-300">
                Open to opportunities where product thinking, engineering depth,
                and system-level execution can create meaningful outcomes.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${interviewProfile.contact.email}`}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10"
              >
                Email Me
              </a>
              <a
                href={`tel:${interviewProfile.contact.phone}`}
                className="inline-flex items-center justify-center rounded-full bg-[#dfe8f5] px-5 py-3 text-sm font-semibold text-[#070b10] transition hover:-translate-y-0.5 hover:bg-white"
              >
                Call Me
              </a>
              <a
                href={interviewProfile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/60 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10"
              >
                LinkedIn
              </a>
              <a
                href={interviewProfile.contact.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-slate-950/60 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10"
              >
                GitHub
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
