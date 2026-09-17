import { useEffect, useState } from "react";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { EmbeddedSystems } from "./components/sections/EmbeddedSystems";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";
import { ProfessionalPortfolioPage } from "./components/sections/ProfessionalPortfolioPage";

function FreelanceHomepage() {
  return (
    <div className="min-h-screen bg-[#0b0d12] text-white">
      <div
        className="absolute inset-x-0 top-0 -z-10 h-[28rem] bg-[radial-gradient(circle_at_top,_rgba(125,211,252,0.12),transparent_55%)]"
        aria-hidden="true"
      />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <EmbeddedSystems />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function App() {
  const [path, setPath] = useState<string>("/");

  useEffect(() => {
    const updatePath = () => {
      const pathname = window.location.pathname || "/";
      const repoBase = "/Portfolio";
      const normalized = pathname.startsWith(repoBase)
        ? pathname.slice(repoBase.length) || "/"
        : pathname;

      setPath(normalized || "/");
    };

    updatePath();
    window.addEventListener("popstate", updatePath);
    return () => window.removeEventListener("popstate", updatePath);
  }, []);

  if (path === "/portfolio" || path === "/portolio") {
    return <ProfessionalPortfolioPage />;
  }

  return <FreelanceHomepage />;
}

export default App;
