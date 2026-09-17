import { profile } from "../../data/profile";
import { SectionHeader } from "../ui/SectionHeader";

const highlights = [
  {
    icon: (
      <svg
        className="w-5 h-5 text-cyan-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"
        />
      </svg>
    ),
    title: "Full-Stack Engineering",
    desc: "React, Next.js, FastAPI, Django, Node.js — end-to-end platform delivery from browser to database, with clean separation of server and client state.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-orange-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z"
        />
      </svg>
    ),
    title: "Hardware & IoT Integration",
    desc: "Serial telemetry, Arduino sensor integration, UART frame parsing, GSM modem workflows, GPS/IMU data sync, and real-time digital twin dashboards.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-emerald-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
        />
      </svg>
    ),
    title: "Domain Expertise",
    desc: "Railway systems (GIS, inspection, procurement), e-commerce auditing, job-tech SaaS, and IoT monitoring — deep familiarity with complex operational domains.",
  },
  {
    icon: (
      <svg
        className="w-5 h-5 text-blue-400"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={1.5}
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
        />
      </svg>
    ),
    title: "Business-Oriented Delivery",
    desc: "I build for outcomes: reduced manual work, clear audit trails, and systems that solve real operational problems for clients and end users.",
  },
];

export function About() {
  return (
    <section id="about" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Text */}
          <div>
            <SectionHeader
              eyebrow="About Me"
              title="Bridging hardware and software to build complete systems"
            />
            <div className="mt-6 space-y-4">
              {profile.summary.map((para, i) => (
                <p key={i} className="text-gray-400 leading-relaxed">
                  {para}
                </p>
              ))}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((h) => (
              <div
                key={h.title}
                className="bg-[#111113] border border-[#222226] rounded-2xl p-5 hover:border-gray-700 transition-colors"
              >
                <span className="mb-3 block">{h.icon}</span>
                <h3 className="text-sm font-bold text-white mb-2">{h.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">
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
