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
      "Collaborated with stakeholders and product teams to define requirements and architecture decisions for reliability and scalability.",
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
      "Participated in code reviews and improved code quality, maintainability, and development practices.",
    ],
  },
  {
    company: "SELTAM TECHNOLOGIES SOLUTIONS Pvt Ltd",
    location: "Chennai, Tamil Nadu",
    period: "May 2021 – May 2022",
    role: "Python Developer",
    details: [
      "Developed client-specific applications with end-to-end testing and quality-focused release practices.",
      "Built a bulk SMS platform capable of handling thousands of messages per day.",
      "Integrated Python applications with embedded systems for efficient processing.",
      "Implemented WebSocket-based real-time communication features.",
      "Deployed and maintained applications on AWS with strong availability practices.",
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
  const profileImage = `${import.meta.env.BASE_URL}assets/images/AravindhanJ.jpg`;

  return (
    <div className="min-h-screen bg-[#f6f1ea] text-[#1e1b1a]">
      <main className="mx-auto max-w-6xl px-4 py-8 sm:px-6 lg:px-8 lg:py-12">
        <section className="grid gap-8 overflow-hidden rounded-[32px] border border-[#e8dccf] bg-[#fffaf5] p-6 shadow-[0_20px_50px_rgba(30,22,17,0.08)] sm:p-8 lg:grid-cols-[1.15fr_0.85fr] lg:p-10">
          <div className="flex flex-col justify-center">
            <p className="mb-4 inline-flex w-fit rounded-full border border-[#d7b7a7] bg-[#f3e3d7] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7a4835]">
              Professional Portfolio
            </p>
            <h1 className="text-4xl font-semibold tracking-[-0.06em] text-[#1d1714] sm:text-5xl lg:text-6xl">
              {interviewProfile.name}
            </h1>
            <p className="mt-4 text-xl font-medium text-[#8a4d35] sm:text-2xl">
              {interviewProfile.title}
            </p>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#473f3b] sm:text-lg">
              {interviewProfile.tagline}
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href={interviewProfile.resume}
                download="Aravindhan.pdf"
                className="inline-flex items-center justify-center rounded-full bg-[#1f1a17] px-5 py-3 text-sm font-semibold text-[#f8f3ee] transition hover:bg-[#2b2421]"
              >
                Download Resume
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 text-sm text-[#5d514d]">
              <span>📍 {interviewProfile.location}</span>
              <span>📱 8695704181</span>
              <a
                href={`mailto:${interviewProfile.contact.email}`}
                className="hover:text-[#8a4d35]"
              >
                {interviewProfile.contact.email}
              </a>
              <a
                href={interviewProfile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#8a4d35]"
              >
                LinkedIn
              </a>
            </div>
          </div>

          <div className="flex items-center justify-center">
            <div className="w-full max-w-sm overflow-hidden rounded-[28px] border border-[#e8dccf] bg-[#f2eae2] p-3 shadow-[0_18px_38px_rgba(42,31,24,0.1)]">
              <img
                src={profileImage}
                alt={interviewProfile.name}
                className="h-[420px] w-full rounded-[22px] object-cover object-center"
              />
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-4">
          {interviewProfile.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[24px] border border-[#e1d5c9] bg-[#fffaf5] p-5 text-left shadow-[0_12px_30px_rgba(30,22,17,0.04)]"
            >
              <div className="text-2xl font-semibold tracking-[-0.05em] text-[#1e1b1a]">
                {stat.value}
              </div>
              <div className="mt-2 text-[11px] font-medium uppercase tracking-[0.22em] text-[#6d5d57]">
                {stat.label}
              </div>
            </div>
          ))}
        </section>

        <section
          id="about"
          className="mt-12 rounded-[30px] border border-[#e1d5c9] bg-[#fffaf5] p-6 sm:p-8"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a4d35]">
            About
          </p>
          <div className="mt-5 grid gap-5 lg:grid-cols-[1.2fr_0.8fr]">
            <div className="space-y-4 text-base leading-7 text-[#4c433f]">
              {interviewProfile.summary.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <div className="rounded-[24px] border border-[#eadfce] bg-[#f7efe8] p-5">
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#7d655d]">
                Focus
              </p>
              <ul className="mt-4 space-y-3 text-sm leading-6 text-[#3d3734]">
                <li>• Full-stack product engineering</li>
                <li>• System design and scalable backend architecture</li>
                <li>• Embedded and IoT integrations</li>
                <li>• Operational automation and data-driven platforms</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="experience" className="mt-12">
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a4d35]">
            Experience
          </p>
          <div className="mt-6 space-y-5">
            {experience.map((item) => (
              <article
                key={item.company}
                className="rounded-[28px] border border-[#e1d5c9] bg-[#fffaf5] p-6 shadow-[0_12px_28px_rgba(30,22,17,0.04)]"
              >
                <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
                  <div>
                    <h2 className="text-2xl font-semibold text-[#1d1714]">
                      {item.company}
                    </h2>
                    <p className="mt-1 text-sm text-[#6f5d57]">
                      {item.location}
                    </p>
                  </div>
                  <div className="text-sm font-medium text-[#8a4d35] md:text-right">
                    {item.period}
                  </div>
                </div>
                <p className="mt-4 text-lg font-medium text-[#2d2724]">
                  {item.role}
                </p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-[#504742]">
                  {item.details.map((detail) => (
                    <li key={detail}>{detail}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section
          id="skills"
          className="mt-12 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]"
        >
          <div className="rounded-[28px] border border-[#e1d5c9] bg-[#fffaf5] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a4d35]">
              Technical Expertise
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {technicalSkills.map((skill) => (
                <Badge key={skill} variant="cyan" size="md">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div className="rounded-[28px] border border-[#e1d5c9] bg-[#fffaf5] p-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a4d35]">
              Education
            </p>
            <div className="mt-5 space-y-4 text-sm leading-7 text-[#4c433f]">
              {education.map((item) => (
                <div key={item}>{item}</div>
              ))}
            </div>
          </div>
        </section>

        <section
          id="resume"
          className="mt-12 rounded-[30px] border border-[#e1d5c9] bg-[#fffaf5] p-6 sm:p-8"
        >
          <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#8a4d35]">
                Resume
              </p>
              <h3 className="mt-3 text-2xl font-semibold text-[#1d1714]">
                Professional background and work history
              </h3>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={interviewProfile.resume}
                download
                className="inline-flex items-center justify-center rounded-full border border-[#ccb4a5] bg-[#f7efe8] px-5 py-3 text-sm font-semibold text-[#1f1a17] transition hover:border-[#a97057] hover:bg-[#f0e3d9]"
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="mt-6 rounded-[22px] border border-[#e8dccf] bg-[#f5efe8] p-5">
            <p className="text-sm leading-7 text-[#4c433f]">
              The resume document is included in the project assets and is
              available for direct viewing or download using the actions above.
            </p>
          </div>
        </section>

        <section
          id="contact"
          className="mt-12 rounded-[30px] border border-[#e1d5c9] bg-[#1f1a17] p-6 text-[#f8f3ee] sm:p-8"
        >
          <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#d9b9a8]">
            Contact
          </p>
          <div className="mt-5 flex flex-col gap-5 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h3 className="text-2xl font-semibold">
                Let’s build something meaningful.
              </h3>
              <p className="mt-3 max-w-xl text-sm leading-7 text-[#d8ccc4]">
                Open to product engineering, scalable application work, and
                custom development engagements across software, automation, and
                embedded systems.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <a
                href={`mailto:${interviewProfile.contact.email}`}
                className="inline-flex items-center justify-center rounded-full border border-[#3d3632] bg-[#2a2320] px-5 py-3 text-sm font-semibold text-[#f7f0e9] transition hover:border-[#d9b9a8] hover:text-[#fef4ee]"
              >
                Email Me
              </a>
              <a
                href={interviewProfile.contact.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-[#f3e3d7] px-5 py-3 text-sm font-semibold text-[#1f1a17] transition hover:bg-[#f0d5c3]"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
