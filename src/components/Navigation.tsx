import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { id: "about", label: "About" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-[#f4f1ea]/90 backdrop-blur border-b border-black/10" : ""
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("home")}
          className="font-serif-display text-2xl"
        >
          Aiman<span className="accent">.</span>
        </button>

        <div className="hidden md:flex items-center gap-10">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="link-underline text-sm font-medium"
            >
              {label}
            </button>
          ))}
          <a
            href="/resume-aiman.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-medium px-5 py-2 rounded-full bg-[#141414] text-[#f4f1ea] hover:bg-[#ff4d2e] transition-colors duration-200"
          >
            Résumé
          </a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#f4f1ea] border-t border-black/10 px-6 py-4 space-y-4">
          {links.map(({ id, label }) => (
            <button
              key={id}
              onClick={() => scrollToSection(id)}
              className="block font-serif-display text-3xl"
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
