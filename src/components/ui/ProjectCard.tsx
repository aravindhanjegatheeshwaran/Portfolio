import { Badge } from "./Badge";
import type { Project, ProjectTag } from "../../data/projects";

type BadgeColor =
  | "blue"
  | "emerald"
  | "violet"
  | "orange"
  | "yellow"
  | "slate"
  | "cyan";

const tagColors: Record<ProjectTag, BadgeColor> = {
  Freelance: "emerald",
  Enterprise: "blue",
  SaaS: "violet",
  IoT: "orange",
  Embedded: "orange",
  GIS: "cyan",
  Automation: "yellow",
  Consulting: "slate",
  "Web App": "blue",
  "AI/ML": "violet",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="flex flex-col bg-[#111113] border border-[#222226] rounded-2xl p-6 hover:border-cyan-800/40 transition-all duration-300 group">
      {/* Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="min-w-0">
          <div className="flex flex-wrap gap-1.5 mb-2">
            {project.tags.map((tag) => (
              <Badge key={tag} variant={tagColors[tag]} size="sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-lg font-bold text-white group-hover:text-cyan-400 transition-colors truncate">
            {project.title}
          </h3>
          <p className="text-sm text-gray-500">{project.subtitle}</p>
        </div>
        <span
          className={`shrink-0 text-xs px-2 py-0.5 rounded-full border ${
            project.status === "delivered"
              ? "text-emerald-400 border-emerald-800/50 bg-emerald-950/40"
              : "text-yellow-400 border-yellow-800/50 bg-yellow-950/40"
          }`}
        >
          {project.status === "delivered" ? "Delivered" : "In Dev"}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-400 text-sm leading-relaxed mb-4 flex-1">
        {project.description}
      </p>

      {/* Hardware / protocol detail */}
      {project.embeddedDetail && (
        <div className="bg-orange-950/20 border border-orange-900/30 rounded-lg p-3 mb-4">
          <p className="text-xs font-semibold text-orange-400 mb-1">
            {project.embeddedDetail.protocol} — Frame Format
          </p>
          <p className="text-xs text-orange-300/80 font-mono leading-relaxed">
            {project.embeddedDetail.frameFormat}
          </p>
          {project.embeddedDetail.hardware && (
            <p className="text-xs text-orange-300/50 mt-1">
              {project.embeddedDetail.hardware}
            </p>
          )}
        </div>
      )}

      {/* Impact */}
      <div className="bg-gray-900/50 rounded-lg p-3 mb-4">
        <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1">
          Key Achievements
        </p>
        <p className="text-xs text-gray-300 leading-relaxed">
          {project.impact}
        </p>
      </div>

      {/* Stack */}
      <div className="flex flex-wrap gap-1.5">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="default" size="sm">
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  );
}
