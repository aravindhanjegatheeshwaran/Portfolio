import { useState, useEffect } from "react";
import { profile } from "../../data/profile";

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#hardware", label: "IoT & Hardware" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "pt-3" : "pt-5"
      }`}
    >
      <div className="content-shell">
        <div
          className={`flex items-center justify-between rounded-full border px-3 py-2.5 backdrop-blur-xl transition-all duration-300 ${
            scrolled
              ? "border-white/10 bg-slate-950/80 shadow-[0_12px_40px_rgba(2,6,23,0.38)]"
              : "border-white/5 bg-slate-950/40 shadow-[0_12px_30px_rgba(2,6,23,0.18)]"
          }`}
        >
          <a
            href="/"
            className="inline-flex items-center gap-3 rounded-full px-2 py-1 text-sm font-semibold text-white hover:text-sky-300"
          >
            <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-sky-400/30 bg-sky-500/10 text-[11px] text-sky-300">
              AJ
            </span>
            {profile.name}
          </a>

          <div className="hidden items-center gap-6 md:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={profile.contact.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full border border-white/10 bg-white/5 p-2 text-slate-300 hover:border-sky-300/40 hover:bg-sky-500/10 hover:text-sky-300 sm:inline-flex"
              aria-label="GitHub Profile"
            >
              <svg
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
              </svg>
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-sky-400/30 bg-sky-500/10 px-3.5 py-2 text-sm font-medium text-sky-200 hover:border-sky-300/50 hover:bg-sky-500/15"
            >
              Start a project
            </a>
            <button
              className="rounded-full border border-white/10 p-2 text-slate-300 hover:border-sky-400/40 hover:text-white md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
            >
              <svg
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {menuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {menuOpen && (
          <div className="mt-3 rounded-2xl border border-white/10 bg-slate-950/90 p-3 shadow-[0_14px_40px_rgba(2,6,23,0.32)] md:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block rounded-xl px-3 py-2.5 text-sm text-slate-300 hover:bg-white/5 hover:text-white"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
