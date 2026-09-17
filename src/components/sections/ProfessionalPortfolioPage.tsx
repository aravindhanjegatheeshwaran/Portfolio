import { interviewProfile } from "../../data/profile";
import { Badge } from "../ui/Badge";

const experience = [
  {
    company: "DANFISHEL DIGITAL SOFTWARE SOLUTIONS Ltd",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2024 – Present",
    role: "Senior Software Engineer – Full Stack Web Developer",
    details: [
      "Developed and maintained scalable core banking applications and AI-driven automation solutions, improving operational efficiency.",
      "Led a cross-functional team of 5+ engineers to deliver end-to-end fintech solutions.",
      "Designed and developed embedded firmware integrated with backend banking systems for AI-driven automation workflows.",
      "Built high-performance FastAPI microservices and REST APIs, supporting 10K+ daily transactions.",
      "Developed responsive and optimized React.js interfaces, reducing page load time by ~30%.",
      "Designed and optimized PostgreSQL databases, improving query performance by 25–30%.",
      "Managed cloud deployments on AWS EKS using Docker and Kubernetes, ensuring 99.9% uptime and supporting CI/CD pipelines.",
      "Collaborated with stakeholders and product teams to define requirements and drive architecture and scalability decisions, improving system reliability through optimized cloud and container orchestration.",
    ],
  },
  {
    company: "SOFTSQUARE SOLUTIONS Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    period: "Aug 2022 – July 2024",
    role: "Software Engineer – Full Stack Web Developer",
    details: [
      "Developed and enhanced scalable full-stack applications, delivering new features and maintaining production systems.",
      "Built applications using React.js, Django, and Node.js, designing RESTful and GraphQL APIs with PostgreSQL.",
      "Designed REST and GraphQL APIs supporting multi-module application architecture.",
      "Optimized database performance through indexing and query tuning, reducing execution time by 20–25%.",
      "Participated in code reviews and contributed to improving code quality, maintainability, and development best practices.",
    ],
  },
  {
    company: "SELTAM TECHNOLOGIES SOLUTIONS Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    period: "May 2021 – May 2022",
    role: "Python Developer",
    details: [
      "Developed and delivered client-specific applications with end-to-end testing, ensuring high-quality releases.",
      "Built a bulk SMS platform capable of handling thousands of messages per day.",
      "Integrated Python applications with embedded systems for efficient processing.",
      "Implemented WebSocket-based real-time communication features.",
      "Deployed and maintained applications on AWS, achieving high system availability.",
    ],
  },
  {
    company: "ILIFE TECHNOLOGIES",
    location: "Trichy, Tamil Nadu",
    period: "Oct 2020 - April 2021",
    role: "Python Developer",
    details: [
      "Independently developed and managed a full-stack web application, improving usability and accessibility.",
      "Designed and developed responsive applications using Django and frontend technologies.",
      "Built REST APIs to enable system integration and communication.",
      "Developed Python automation tools, reducing manual effort in operations.",
      "Conducted end-to-end testing and deployed applications on cloud platforms ensuring scalability.",
    ],
  },
];

const technicalSkills = [
  "Python",
  "JavaScript",
  "GraphQL",
  "Kubernetes",
  "FastAPI",
  "React.js",
  "AWS",
  "Microservices",
  "Django",
  "PostgreSQL",
  "Docker",
  "Git",
];

const certifications = [
  "Programming in Advanced Python, C and Java | T4TEQ Software Solutions",
  "Front-End Web Development | Udemy",
  "MuleSoft Developer level 1 | MuleSoft",
];

const education = [
  "Master of Computer Application – Computer Application | Nehru Memorial College, Trichy, Tamil Nadu",
  "Bachelor of Science – Computer Science | Kurinji College of Arts and Science, Trichy, Tamil Nadu",
];

export function ProfessionalPortfolioPage() {
  return (
    <div className="min-h-screen bg-[#050816] text-slate-100">
      <header className="sticky top-0 z-40 border-b border-slate-800/80 bg-[#050816]/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <a
            href="/"
            className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300"
          >
            Freelance
          </a>

          <div className="flex items-center gap-3">
            <a
              href={interviewProfile.resume}
              download
              className="hidden rounded-full border border-cyan-500/40 bg-cyan-500/10 px-4 py-2 text-sm font-medium text-cyan-300 transition hover:border-cyan-400 hover:bg-cyan-500/20 sm:inline-flex"
            >
              Resume PDF
            </a>
            <a
              href={`mailto:${interviewProfile.contact.email}`}
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-cyan-300"
            >
              Contact Me
            </a>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 lg:px-8 lg:py-16">
        <section className="grid gap-10 pb-10 lg:grid-cols-[1.2fr_0.8fr] lg:pb-16">
          <div>
            <p className="mb-4 inline-flex rounded-full border border-cyan-500/30 bg-cyan-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Professional Portfolio
            </p>
            <h1 className="text-4xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
              {interviewProfile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-cyan-300 sm:text-2xl">
              {interviewProfile.title}
            </p>
            <p className="mt-5 max-w-2xl text-base leading-8 text-slate-300">
              {interviewProfile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-sm text-slate-400">
              <span>📍 {interviewProfile.location}</span>
              <a
                href={`mailto:${interviewProfile.contact.email}`}
                className="hover:text-cyan-300 transition-colors"
              >
                {interviewProfile.contact.email}
              </a>
              <span>|</span>
              <span>
                {interviewProfile.contact.linkedin.replace("https://www.", "")}
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={interviewProfile.resume}
                download
                className="inline-flex items-center rounded-full bg-cyan-400 px-5 py-3 text-sm font-semibold text-slate-950 transition hover:bg-cyan-300"
              >
                Download Resume
              </a>
              <a
                href={interviewProfile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center rounded-full border border-slate-700 bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:border-cyan-500/50 hover:text-cyan-300"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 p-6 shadow-2xl shadow-cyan-950/20">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">
              Snapshot
            </p>
            <div className="grid grid-cols-2 gap-4">
              {interviewProfile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-slate-800 bg-slate-950/60 p-4"
                >
                  <div className="text-2xl font-black text-white">
                    {stat.value}
                  </div>
                  <div className="mt-1 text-xs uppercase tracking-widest text-slate-400">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 lg:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Professional Summary
          </p>
          <div className="mt-5 rounded-3xl border border-slate-800 bg-slate-900/60 p-7">
            {interviewProfile.summary.map((paragraph, index) => (
              <p
                key={index}
                className="mt-4 text-base leading-8 text-slate-300 first:mt-0"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        <section className="py-8 lg:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Professional Experience
          </p>
          <div className="mt-6 space-y-6">
            {experience.map((item) => (
              <article
                key={item.company}
                className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-white">
                      {item.company}
                    </h2>
                    <p className="mt-1 text-sm text-slate-400">
                      {item.location}
                    </p>
                  </div>
                  <div className="text-sm text-cyan-300 md:text-right">
                    {item.period}
                  </div>
                </div>
                <p className="mt-4 text-lg font-semibold text-slate-200">
                  {item.role}
                </p>
                <ul className="mt-4 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-300">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="grid gap-8 py-8 lg:grid-cols-2 lg:py-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Education
            </p>
            <div className="mt-5 space-y-4">
              {education.map((item) => (
                <div key={item} className="text-sm leading-7 text-slate-300">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Technical Skills
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <Badge key={skill} variant="cyan" size="md">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        <section className="grid gap-8 py-8 lg:grid-cols-2 lg:py-12">
          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Certifications
            </p>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-slate-300">
              {certifications.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/60 p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Contact
            </p>
            <div className="mt-5 space-y-3 text-sm text-slate-300">
              <p>
                Email:{" "}
                <a
                  href={`mailto:${interviewProfile.contact.email}`}
                  className="text-cyan-300"
                >
                  {interviewProfile.contact.email}
                </a>
              </p>
              <p>Phone: 8695704181</p>
              <p>
                LinkedIn:{" "}
                <a
                  href={interviewProfile.contact.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300"
                >
                  {interviewProfile.contact.linkedin}
                </a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
