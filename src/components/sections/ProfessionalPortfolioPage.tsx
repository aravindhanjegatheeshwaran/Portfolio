import { interviewProfile } from "../../data/profile";
import { skillGroups } from "../../data/skills";
import { Badge } from "../ui/Badge";

const experience = [
  {
    company: "DANFISHEL DIGITAL SOFTWARE SOLUTIONS Ltd",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2024 – Present",
    role: "Senior Software Engineer – Full Stack Web Developer",
    summary:
      "Maintaining banking applications and backend APIs while developing log-analysis, retrieval, and Jira ticket workflows with LLMs.",
  },
  {
    company: "SOFTSQUARE SOLUTIONS Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2022 – July 2024",
    role: "Software Engineer – Full Stack Web Developer",
    summary:
      "Developed React, Django, and Node.js applications, designed REST and GraphQL APIs, and improved PostgreSQL query execution by 20–25% through indexing and query tuning.",
  },
  {
    company: "SELTAM TECHNOLOGIES SOLUTIONS Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    period: "May 2021 – May 2022",
    role: "Python Developer",
    summary:
      "Built Python applications, a bulk SMS platform handling thousands of messages per day, WebSocket features, and embedded-system integrations.",
  },
  {
    company: "ILIFE TECHNOLOGIES",
    location: "Trichy, Tamil Nadu",
    period: "Oct 2020 - April 2021",
    role: "Python Developer",
    summary:
      "Delivered Django applications, REST APIs, and Python automation tools, including end-to-end testing and cloud deployment.",
  },
];

const strengths = [
  {
    title: "Agentic AI & automation",
    description:
      "Developing agents that analyze production logs, retrieve relevant technical context, and support Jira ticket creation.",
  },
  {
    title: "System design",
    description:
      "Building backend APIs and full-stack applications with Python, FastAPI, React, and PostgreSQL.",
  },
  {
    title: "Product engineering",
    description:
      "Taking features from API and database design through frontend implementation and integration.",
  },
  {
    title: "Embedded & telemetry",
    description:
      "Connecting Python applications with embedded systems and real-time communication workflows.",
  },
];

const caseStudies = [
  {
    stage: "In development",
    title: "From production logs to Jira-ready context",
    context:
      "Production logs contain useful signals, but investigation also depends on finding the right technical context.",
    approach:
      "Developing an agent workflow to analyze logs, retrieve related information, and support Jira ticket creation.",
    tools: "LLM agents · RAG · semantic search · metadata filtering",
  },
  {
    stage: "Exploration",
    title: "Retrieval and local development assistants",
    context:
      "Engineering assistants are only useful when their suggestions are grounded in relevant code and documentation.",
    approach:
      "Working with embeddings, semantic and metadata-based retrieval, and graph indexing; exploring local agents for code generation and review.",
    tools: "LangChain · LangGraph · embeddings · graph indexing",
  },
  {
    stage: "Delivered",
    title: "Faster PostgreSQL query execution",
    context:
      "A full-stack application needed better database performance as its data and usage grew.",
    approach:
      "Used PostgreSQL indexing and query tuning while developing React, Django, and Node.js product features.",
    tools: "PostgreSQL · indexing · query analysis",
    result: "Execution time reduced by 20–25%",
  },
  {
    stage: "Delivered",
    title: "Bulk messaging and live communication",
    context:
      "Client applications needed to send high volumes of messages and deliver real-time updates.",
    approach:
      "Built a bulk SMS platform and added WebSocket-based communication, alongside Python integrations with embedded systems.",
    tools: "Python · WebSockets · embedded integrations",
    result: "Platform handled thousands of messages per day",
  },
];
export function ProfessionalPortfolioPage() {
  const profileImage = `${import.meta.env.BASE_URL}assets/images/AravindhanJ.jpg`;

  const snapshot = [
    { label: "Experience", value: "Nearly 6 years" },
    { label: "Current work", value: "AI agents" },
    { label: "Core stack", value: "Python · React · PostgreSQL" },
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
            <a
              href="/"
              className="text-sm font-semibold uppercase tracking-[0.22em] text-[#7dd3fc]"
            >
              {interviewProfile.name}
            </a>
            <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
              <a href="#work" className="hover:text-white">
                Selected work
              </a>
              <a href="#experience" className="hover:text-white">
                Career
              </a>
              <a href="#skills" className="hover:text-white">
                Expertise
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
                  Software Engineer
                </span>
                <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.24em] text-emerald-200">
                  AI agent development
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
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-400">
                {interviewProfile.summary[0]}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href="#work"
                  className="inline-flex items-center justify-center rounded-full bg-[#dfe8f5] px-5 py-3 text-sm font-semibold text-[#070b10] shadow-[0_20px_40px_rgba(147,197,253,0.2)] transition hover:-translate-y-0.5 hover:bg-white"
                >
                  Explore selected work
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-slate-100 transition hover:-translate-y-0.5 hover:border-sky-400/40 hover:bg-sky-500/10"
                >
                  Contact
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
          className="reveal-panel mt-16 grid gap-10 border-y border-white/10 py-10 lg:grid-cols-[1.1fr_0.9fr]"
        >
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
              The through-line
            </p>
            <div className="mt-5 max-w-2xl space-y-4">
              {interviewProfile.summary.slice(1).map((paragraph) => (
                <p key={paragraph} className="text-sm leading-7 text-slate-300">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
              Where I contribute
            </p>
            <div className="mt-4">
              {strengths.map((strength) => (
                <div
                  key={strength.title}
                  className="border-b border-white/10 py-3 first:pt-0 last:border-0"
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

        <section id="work" className="reveal-panel mt-16 scroll-mt-28">
          <div className="mb-7 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
                Selected work
              </p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
                Engineering problems, approaches, and evidence.
              </h2>
            </div>
            <p className="max-w-sm text-sm leading-6 text-slate-400">
              A mix of work in progress and delivered outcomes from my recent
              roles.
            </p>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            {caseStudies.map((study, index) => (
              <article
                key={study.title}
                className="flex min-h-full flex-col border-t border-white/15 bg-white/[0.02] p-5 sm:p-6"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="font-mono text-xs text-slate-500">
                    0{index + 1}
                  </span>
                  <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-emerald-200">
                    {study.stage}
                  </span>
                </div>
                <h3 className="mt-5 text-xl font-semibold text-white">
                  {study.title}
                </h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">
                  {study.context}
                </p>
                <p className="mt-3 text-sm leading-6 text-slate-200">
                  {study.approach}
                </p>
                {study.result && (
                  <p className="mt-4 text-sm font-semibold text-sky-200">
                    {study.result}
                  </p>
                )}
                <p className="mt-auto pt-5 font-mono text-xs text-slate-500">
                  {study.tools}
                </p>
              </article>
            ))}
          </div>
        </section>

        <section id="experience" className="reveal-panel mt-16 scroll-mt-28">
          <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-sky-200">
            Career path
          </p>
          <div className="mt-5 border-t border-white/10">
            {experience.map((item) => (
              <article
                key={item.company}
                className="grid gap-2 border-b border-white/10 py-5 md:grid-cols-[1fr_auto] md:gap-8"
              >
                <div>
                  <h3 className="text-lg font-semibold text-white">
                    {item.role}
                  </h3>
                  <p className="mt-1 text-sm text-slate-300">{item.company}</p>
                  <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-400">
                    {item.summary}
                  </p>
                </div>
                <div className="text-sm text-slate-500 md:text-right">
                  <p>{item.period}</p>
                  <p className="mt-1">{item.location}</p>
                </div>
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

        <section className="mt-12 border-t border-white/10 py-6">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-500">
            Education
          </p>
          <p className="mt-2 text-sm leading-6 text-slate-300">
            Master of Computer Application, Nehru Memorial College · B.Sc.
            Computer Science, Kurinji College of Arts and Science
          </p>
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
                The full chronology and details
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
                I’m interested in engineering teams building useful products,
                reliable backend systems, and grounded AI workflows.
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
