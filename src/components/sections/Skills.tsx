import { skillGroups } from "../../data/skills";
import type { SkillColor } from "../../data/skills";
import { SectionHeader } from "../ui/SectionHeader";

const badgeClasses: Record<SkillColor, string> = {
  blue: "bg-blue-950/50 text-blue-300 border-blue-800/40",
  emerald: "bg-emerald-950/50 text-emerald-300 border-emerald-800/40",
  violet: "bg-violet-950/50 text-violet-300 border-violet-800/40",
  orange: "bg-orange-950/50 text-orange-300 border-orange-800/40",
  yellow: "bg-yellow-950/50 text-yellow-300 border-yellow-800/40",
  slate: "bg-slate-800/50 text-slate-300 border-slate-700/40",
};

export function Skills() {
  return (
    <section id="skills" className="section-block bg-[#0d1117]">
      <div className="content-shell">
        <SectionHeader
          eyebrow="Technical Skills"
          title="The stack behind reliable, production-first delivery"
          description="From browser experiences and APIs to embedded interfaces and operational tooling, I build across the full delivery path."
        />

        <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="rounded-[28px] border border-white/10 bg-[#121821] p-6 shadow-[var(--shadow-md)]"
            >
              <h3 className="mb-4 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${badgeClasses[group.color]}`}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
