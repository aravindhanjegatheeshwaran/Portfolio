import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/Footer";
import { Hero } from "./components/sections/Hero";
import { About } from "./components/sections/About";
import { Skills } from "./components/sections/Skills";
import { EmbeddedSystems } from "./components/sections/EmbeddedSystems";
import { Projects } from "./components/sections/Projects";
import { Contact } from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-[#09090b] min-h-screen">
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

export default App;
