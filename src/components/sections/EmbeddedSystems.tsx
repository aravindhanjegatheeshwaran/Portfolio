import { projects } from "../../data/projects";
import { SectionHeader } from "../ui/SectionHeader";

const protocolBadges = [
  {
    label: "UART / Serial",
    cls: "text-orange-300 bg-orange-950/50 border-orange-800/40",
  },
  {
    label: "Arduino Integration",
    cls: "text-orange-300 bg-orange-950/50 border-orange-800/40",
  },
  {
    label: "PySerial",
    cls: "text-orange-300 bg-orange-950/50 border-orange-800/40",
  },
  {
    label: "Sensor Telemetry",
    cls: "text-orange-300 bg-orange-950/50 border-orange-800/40",
  },
  {
    label: "Fault Detection",
    cls: "text-red-300 bg-red-950/50 border-red-800/40",
  },
  {
    label: "Frame Parsing",
    cls: "text-red-300 bg-red-950/50 border-red-800/40",
  },
  {
    label: "Reconnect Handling",
    cls: "text-emerald-300 bg-emerald-950/50 border-emerald-800/40",
  },
  {
    label: "CSV Telemetry Logging",
    cls: "text-emerald-300 bg-emerald-950/50 border-emerald-800/40",
  },
  {
    label: "GSM Modem",
    cls: "text-yellow-300 bg-yellow-950/50 border-yellow-800/40",
  },
  {
    label: "AT Commands",
    cls: "text-yellow-300 bg-yellow-950/50 border-yellow-800/40",
  },
  {
    label: "GPS / IMU",
    cls: "text-cyan-300 bg-cyan-950/50 border-cyan-800/40",
  },
  {
    label: "Digital Twin",
    cls: "text-blue-300 bg-blue-950/50 border-blue-800/40",
  },
];

const embeddedProjects = projects.filter((p) => p.embeddedDetail);

export function EmbeddedSystems() {
  return (
    <section id="hardware" className="section-block">
      <div className="content-shell">
        <div className="grid items-start gap-12 lg:grid-cols-[1.05fr_1fr]">
          <div>
            <SectionHeader
              eyebrow="Embedded & IoT"
              title="Engineering software for physical systems and operational reality"
              description="I build interfaces, telemetry dashboards, and control logic that sit directly on real hardware and real-world workflows."
            />
            <div className="mt-8 space-y-4 text-base leading-7 text-slate-300">
              <p>
                Real-time digital twin dashboards that read structured UART
                frames, parse sensor data, evaluate multiple fault conditions,
                and expose live telemetry without external data sources.
              </p>
              <p>
                GSM modem workflows, GPS/IMU integrations, and railway
                inspection platforms that fuse geospatial positioning with
                operational events and media streams.
              </p>
            </div>

            <div className="mt-8">
              <p className="mb-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                Protocols & interfaces
              </p>
              <div className="flex flex-wrap gap-2">
                {protocolBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${badge.cls}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-5">
            {embeddedProjects.map((project) => (
              <div
                key={project.id}
                className="rounded-[28px] border border-white/10 bg-[#121821] p-6 shadow-[var(--shadow-md)]"
              >
                <div className="mb-4 flex items-start justify-between gap-3">
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-sm text-slate-400">
                      {project.subtitle}
                    </p>
                  </div>
                  <span className="shrink-0 rounded-full border border-orange-400/30 bg-orange-500/10 px-2.5 py-1 text-[11px] font-medium text-orange-200">
                    {project.embeddedDetail!.protocol}
                  </span>
                </div>

                <p className="text-sm leading-6 text-slate-300">
                  {project.description}
                </p>

                {project.embeddedDetail!.frameFormat && (
                  <div className="mt-4 rounded-2xl border border-white/8 bg-slate-950/80 p-3">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-slate-400">
                      Frame format
                    </p>
                    <code className="mt-2 block break-words font-mono text-xs text-orange-200">
                      {project.embeddedDetail!.frameFormat}
                    </code>
                  </div>
                )}

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full border border-white/10 bg-white/[0.025] px-2.5 py-1 text-[11px] font-medium text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
