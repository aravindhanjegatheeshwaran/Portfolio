import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeader } from "../ui/SectionHeader";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-block bg-[#0d1117]">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Selected Work"
          title="Projects that solve operational and product problems"
          description="A mix of consulting work, platform builds, and deeply technical systems designed for real business constraints."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {others.length > 0 && (
          <>
            <h3 className="mt-16 mb-6 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
              Additional projects
            </h3>
            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {others.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
