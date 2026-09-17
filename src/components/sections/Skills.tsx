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
    <section id="skills" className="py-24 bg-[#0c0c0f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Skills"
          title="The stack I build with"
          description="Grouped by domain — from browser to device to deployment."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map((group) => (
            <div
              key={group.id}
              className="bg-[#111113] border border-[#222226] rounded-2xl p-6"
            >
              <h3 className="text-xs font-bold text-white mb-4 uppercase tracking-widest">
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${badgeClasses[group.color]}`}
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
