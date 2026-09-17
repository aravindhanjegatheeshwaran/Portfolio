import { profile } from "../../data/profile";

const focusAreas = [
  "Web app product delivery",
  "Workflow automation",
  "Embedded + IoT systems",
  "Data-rich dashboards",
];

export function Hero() {
  return (
    <section
      id="hero"
      className="relative overflow-hidden pt-28 pb-20 sm:pt-32 sm:pb-24"
    >
      <div
        className="absolute inset-0 pointer-events-none hero-grid opacity-80"
        aria-hidden="true"
      />
      <div
        className="absolute inset-x-0 top-0 h-64 bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.18),transparent_58%)]"
        aria-hidden="true"
      />

      <div className="content-shell relative">
        <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_0.7fr]">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-sky-400/20 bg-sky-500/10 px-3.5 py-1.5 text-xs font-medium text-sky-200">
              <span
                className="h-2 w-2 rounded-full bg-sky-300"
                aria-hidden="true"
              />
              Available for freelance and product engineering work
            </div>

            <h1 className="text-4xl font-semibold tracking-[-0.06em] text-white sm:text-5xl lg:text-7xl">
              {profile.name}
            </h1>

            <p className="mt-4 text-xl font-medium text-slate-200 sm:text-2xl">
              {profile.title}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
              {profile.tagline}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-sky-400 px-5 py-3 text-sm font-semibold text-slate-950 shadow-[0_16px_40px_rgba(56,189,248,0.38)] hover:bg-sky-300"
              >
                Book a project call
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-sm font-semibold text-white hover:border-sky-300/40 hover:bg-sky-500/10 hover:text-sky-100"
              >
                View work
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-2 text-sm text-slate-300">
              {focusAreas.map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1.5"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <aside className="rounded-[28px] border border-white/10 bg-slate-950/70 p-5 shadow-[var(--shadow-lg)] backdrop-blur-sm">
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div>
                <p className="text-[11px] font-medium uppercase tracking-[0.22em] text-slate-400">
                  Delivery profile
                </p>
                <p className="mt-2 text-xl font-semibold text-white">
                  Custom digital systems
                </p>
              </div>
              <span className="rounded-full border border-emerald-400/20 bg-emerald-500/10 px-2.5 py-1 text-[11px] font-medium text-emerald-300">
                Available
              </span>
            </div>

            <div className="mt-5 space-y-4">
              {profile.stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex items-center justify-between rounded-2xl border border-white/8 bg-white/[0.025] px-3 py-3"
                >
                  <span className="text-sm text-slate-400">{stat.label}</span>
                  <span className="text-base font-semibold text-white">
                    {stat.value}
                  </span>
                </div>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
