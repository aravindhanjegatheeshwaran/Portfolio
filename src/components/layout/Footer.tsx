import { profile } from "../../data/profile";

export function Footer() {
  return (
    <footer className="border-t border-[#222226] py-8 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-gray-500 text-sm">
          © {new Date().getFullYear()} {profile.name}. Built with React, Vite
          &amp; Tailwind CSS.
        </p>
        <div className="flex items-center gap-6">
          <a
            href={profile.contact.github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white text-sm transition-colors"
          >
            GitHub
          </a>
          <a
            href={profile.contact.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-500 hover:text-white text-sm transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={`mailto:${profile.contact.email}`}
            className="text-gray-500 hover:text-white text-sm transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  );
}
