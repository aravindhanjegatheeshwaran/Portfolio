import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-8">
      <div className="content-shell flex flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} {profile.name}
        </p>
        <div className="flex items-center gap-5 text-sm text-slate-300">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="hover:text-white"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
