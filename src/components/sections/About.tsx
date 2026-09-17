import { profile } from "../../data/profile";
import { SectionHeader } from "../ui/SectionHeader";

const highlights = [
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-sky-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.25 7.5h7.5m-7.5 9h7.5M5.25 4.5h13.5a1.5 1.5 0 011.5 1.5v12a1.5 1.5 0 01-1.5 1.5H5.25A1.5 1.5 0 013.75 18V6a1.5 1.5 0 011.5-1.5z"
        />
      </svg>
    ),
    title: "Full-stack delivery",
    desc: "Frontend, backend, and integration work built around business outcomes rather than isolated tools.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-violet-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7.5 8.25V6.75A4.5 4.5 0 0112 2.25a4.5 4.5 0 014.5 4.5v1.5m-9 0h9A1.5 1.5 0 0118 9.75v8.25a1.5 1.5 0 01-1.5 1.5h-9A1.5 1.5 0 016 18V9.75A1.5 1.5 0 017.5 8.25z"
        />
      </svg>
    ),
    title: "Systems thinking",
    desc: "From procurement workflows to field-sensor data, I design software that fits the real operational workflow.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-emerald-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 4.5v15m7.5-7.5h-15M6 7.5h12a1.5 1.5 0 011.5 1.5v6A1.5 1.5 0 0118 16.5H6A1.5 1.5 0 014.5 15V9A1.5 1.5 0 016 7.5z"
        />
      </svg>
    ),
    title: "Hardware & IoT",
    desc: "Serial telemetry, embedded integrations, real-time dashboards, and data pipelines built for physical systems.",
  },
  {
    icon: (
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5 text-amber-300"
        fill="none"
        stroke="currentColor"
        strokeWidth={1.6}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 3.75v7.5M7.5 12h9M6 18h12a1.5 1.5 0 001.5-1.5v-4.5A1.5 1.5 0 0018 10.5H6A1.5 1.5 0 004.5 12v4.5A1.5 1.5 0 006 18z"
        />
      </svg>
    ),
    title: "Business value",
    desc: "I focus on the outcomes clients care about: automation, visibility, accuracy, and faster operational decisions.",
  },
];

export function About() {
  return (
    <section id="about" className="section-block">
      <div className="content-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="About"
              title="Product-minded engineering for business-critical software"
            />
            <div className="mt-8 space-y-5">
              {profile.summary.map((para, i) => (
                <p key={i} className="text-base leading-7 text-slate-300">
                  {para}
                </p>
              ))}
            </div>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="rounded-3xl border border-white/10 bg-[rgba(17,24,39,0.72)] p-5 shadow-[var(--shadow-md)]"
              >
                <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-2xl border border-sky-400/20 bg-sky-500/10">
                  {h.icon}
                </span>
                <h3 className="text-base font-semibold text-white">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-400">
                  {h.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
