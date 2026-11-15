import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Github, Linkedin, Mail } from "lucide-react";

/* Vertical connector with a numbered node, like the reference template */
const Connector = ({ n }: { n: number }) => (
  <div className="flex flex-col items-center bg-[#16181b]" aria-hidden="true">
    <div className="w-px h-14 bg-gradient-to-b from-transparent to-[#2ee6b6]/60"></div>
    <div className="w-9 h-9 rounded-full border border-[#2ee6b6] text-teal text-sm flex items-center justify-center">
      {n}
    </div>
    <div className="w-px h-14 bg-gradient-to-t from-transparent to-[#2ee6b6]/60"></div>
  </div>
);

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Connector n={0} />
      <About />
      <Connector n={1} />
      <Projects />
      <Connector n={2} />
      <Contact />

      <footer className="border-t border-white/10 py-8 bg-[#16181b]">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-center md:text-left">
            <p className="text-white font-medium">
              <span className="font-mono-code text-teal">&lt;/&gt;</span> Aiman Asmu'i
            </p>
            <p className="text-sm text-zinc-500">
              © {new Date().getFullYear()} Aiman Asmu'i. All rights reserved.
            </p>
          </div>
          <div className="flex gap-5 text-zinc-400">
            <a href="https://github.com/aiman279" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="hover:text-teal transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/aiman-asmui/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="hover:text-teal transition-colors" />
            </a>
            <a href="mailto:aimanasmui332@gmail.com" aria-label="Email">
              <Mail className="hover:text-teal transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
