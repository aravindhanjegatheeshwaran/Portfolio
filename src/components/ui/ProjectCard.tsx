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
    <article className="group flex h-full flex-col rounded-[28px] border border-white/10 bg-[#121821] p-6 shadow-[var(--shadow-md)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-sky-400/30">
      <div className="mb-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="mb-3 flex flex-wrap gap-1.5">
            {project.tags.map((tag) => (
              <Badge key={tag} variant={tagColors[tag]} size="sm">
                {tag}
              </Badge>
            ))}
          </div>
          <h3 className="text-xl font-semibold text-white">{project.title}</h3>
          <p className="mt-1 text-sm text-slate-400">{project.subtitle}</p>
        </div>
        <span
          className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-medium uppercase tracking-[0.16em] ${
            project.status === "delivered"
              ? "border-emerald-400/30 bg-emerald-500/10 text-emerald-300"
              : "border-amber-400/30 bg-amber-500/10 text-amber-200"
          }`}
        >
          {project.status === "delivered" ? "Delivered" : "In dev"}
        </span>
      </div>

      <p className="flex-1 text-sm leading-6 text-slate-300">
        {project.description}
      </p>

      {project.embeddedDetail && (
        <div className="mt-4 rounded-2xl border border-orange-500/20 bg-orange-500/5 p-3">
          <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-orange-200">
            {project.embeddedDetail.protocol} — Frame format
          </p>
          <p className="mt-2 font-mono text-xs leading-5 text-orange-100/80">
            {project.embeddedDetail.frameFormat}
          </p>
          {project.embeddedDetail.hardware && (
            <p className="mt-2 text-xs text-orange-100/60">
              {project.embeddedDetail.hardware}
            </p>
          )}
        </div>
      )}

      <div className="mt-4 rounded-2xl border border-white/8 bg-slate-950/80 p-3">
        <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          Key impact
        </p>
        <p className="mt-2 text-sm leading-6 text-slate-300">
          {project.impact}
        </p>
      </div>

      <div className="mt-5 flex flex-wrap gap-2">
        {project.stack.map((tech) => (
          <Badge key={tech} variant="default" size="sm">
            {tech}
          </Badge>
        ))}
      </div>
    </article>
  );
}
