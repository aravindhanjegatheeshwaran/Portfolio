import { projects } from "../../data/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeader } from "../ui/SectionHeader";

export function Projects() {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 bg-[#0c0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Work"
          title="Projects & Case Studies"
          description="A cross-domain portfolio spanning freelance delivery, enterprise systems, SaaS products, and IoT engineering."
        />

        {/* Featured grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Secondary projects */}
        {others.length > 0 && (
          <>
            <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-widest mt-16 mb-6">
              Additional Projects
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
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
