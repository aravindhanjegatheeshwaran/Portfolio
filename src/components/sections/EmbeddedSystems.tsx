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
    <section id="hardware" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: context and protocols */}
          <div>
            <SectionHeader
              eyebrow="Embedded & IoT Systems"
              title="Hardware-integrated software engineering"
              description="Experience building software systems that interface directly with physical hardware — serial telemetry, sensor data, industrial monitoring, and device-to-dashboard pipelines."
            />
            <div className="mt-6 space-y-4">
              <p className="text-gray-400 text-sm leading-relaxed">
                I have built real-time digital twin dashboards that read
                structured UART frames from physical devices, parse sensor
                fields (temperature, humidity, current, voltage, soil moisture),
                evaluate multi-condition fault states, and visualise live
                telemetry without external data sources.
              </p>
              <p className="text-gray-400 text-sm leading-relaxed">
                Beyond digital twin work, I have studied GSM modem AT-command
                workflows and built management systems handling SIM, ICCID,
                IMEI, signal, SMS, and voice call operations. I have also built
                railway inspection platforms that integrate GPS/IMU data with
                360° video and geospatial synchronisation engines.
              </p>
            </div>

            <div className="mt-8">
              <p className="text-xs font-semibold text-gray-500 uppercase tracking-widest mb-3">
                Protocols &amp; Interfaces
              </p>
              <div className="flex flex-wrap gap-2">
                {protocolBadges.map((badge) => (
                  <span
                    key={badge.label}
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badge.cls}`}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: embedded project detail cards */}
          <div className="space-y-5">
            {embeddedProjects.map((project) => (
              <div
                key={project.id}
                className="bg-[#111113] border border-[#222226] rounded-2xl p-6 hover:border-orange-800/40 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div>
                    <h3 className="font-bold text-white">{project.title}</h3>
                    <p className="text-sm text-gray-500">{project.subtitle}</p>
                  </div>
                  <span className="shrink-0 text-xs text-orange-400 bg-orange-950/40 border border-orange-800/40 px-2.5 py-0.5 rounded-full">
                    {project.embeddedDetail!.protocol}
                  </span>
                </div>

                <p className="text-sm text-gray-400 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Frame format block */}
                {project.embeddedDetail!.frameFormat && (
                  <div className="bg-gray-900 rounded-lg px-3 py-2.5 mb-4">
                    <p className="text-xs text-gray-500 mb-1">
                      Serial Frame Format
                    </p>
                    <code className="text-xs text-orange-300 font-mono leading-relaxed">
                      {project.embeddedDetail!.frameFormat}
                    </code>
                  </div>
                )}

                <div className="flex flex-wrap gap-1.5">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium bg-gray-800 text-gray-400 border border-gray-700"
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
