import { useState, useEffect } from "react";
import { Menu, X, Github, Linkedin } from "lucide-react";

const links = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
      let current = "home";
      for (const { id } of links) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top <= 120) current = id;
      }
      setActive(current);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#16181b]/90 backdrop-blur border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => go("home")}
          className="flex items-center gap-2 text-lg font-semibold text-white"
        >
          <span className="font-mono-code text-teal">&lt;/&gt;</span> Aiman
        </button>

        <div className="hidden md:flex items-center gap-8">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`text-sm font-medium transition-colors ${
                active === id ? "text-teal" : "text-zinc-300 hover:text-white"
              }`}
            >
              {label}
            </button>
          ))}
          <div className="flex items-center gap-3 pl-4 border-l border-white/15 text-zinc-300">
            <a href="https://github.com/aiman279" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github size={18} className="hover:text-teal transition-colors" />
            </a>
            <a href="https://www.linkedin.com/in/aiman-asmui/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin size={18} className="hover:text-teal transition-colors" />
            </a>
          </div>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-zinc-200"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#16181b]/95 backdrop-blur border-t border-white/10 px-6 py-4 space-y-1">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => go(id)}
              className={`block w-full text-left py-3 text-lg ${
                active === id ? "text-teal" : "text-zinc-300"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navigation;
