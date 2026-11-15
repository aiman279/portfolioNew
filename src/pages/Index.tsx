import Navigation from "../components/Navigation";
import Hero from "../components/Hero";
import About from "../components/About";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import { Github, Linkedin, Instagram, Mail } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />

      <footer className="bg-[#141414] text-[#f4f1ea] py-10">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h2 className="font-serif-display text-2xl">
              Muhamad Aiman Asmu'i Bin Mohd Shuaimi
            </h2>
            <p className="text-sm text-[#f4f1ea]/60">
              © 2025 Aiman Asmu'i. All rights reserved.
            </p>
          </div>

          <div className="flex gap-5 text-[#f4f1ea]/70">
            <a href="https://github.com/aiman279" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="hover:text-[#ff4d2e] transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/aiman-asmui/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="hover:text-[#ff4d2e] transition-colors" />
            </a>
            <a href="https://www.instagram.com/asmuieee._/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Instagram className="hover:text-[#ff4d2e] transition-colors" />
            </a>
            <a href="mailto:aimanasmui332@gmail.com" aria-label="Email">
              <Mail className="hover:text-[#ff4d2e] transition-colors" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
