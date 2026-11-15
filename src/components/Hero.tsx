import { Github, Linkedin, Mail, FileText } from "lucide-react";

const stats = [
  { n: "6", label: "Projects built" },
  { n: "10", label: "Core technologies" },
  { n: "2", label: "Live apps" },
];

const Hero = () => {
  const go = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-topo pt-24 pb-16"
    >
      <div className="max-w-6xl mx-auto px-6 w-full animate-fade-in">
        <h1 className="text-center text-[clamp(3.5rem,11vw,8rem)] font-light leading-none tracking-tight text-white mb-14">
          <span className="text-teal font-mono-code font-normal">&lt;</span>
          Developer
          <span className="text-teal font-mono-code font-normal">/&gt;</span>
        </h1>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Profile card */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="teal-card p-5 w-72">
              <div className="rounded-xl overflow-hidden bg-white aspect-square mb-4">
                <img
                  src="/aiman_asmui.jpg"
                  alt="Aiman Asmu'i"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <h3 className="text-lg font-semibold text-white">Aiman Asmu'i</h3>
              <p className="text-sm text-zinc-400 mb-4">
                Software Engineering Student
              </p>
              <div className="flex gap-2">
                <a href="https://github.com/aiman279" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="p-2 rounded-lg border border-white/15 hover:border-[#2ee6b6] hover:text-teal transition-colors">
                  <Github size={16} />
                </a>
                <a href="https://www.linkedin.com/in/aiman-asmui/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg border border-white/15 hover:border-[#2ee6b6] hover:text-teal transition-colors">
                  <Linkedin size={16} />
                </a>
                <a href="mailto:aimanasmui332@gmail.com" aria-label="Email" className="p-2 rounded-lg border border-white/15 hover:border-[#2ee6b6] hover:text-teal transition-colors">
                  <Mail size={16} />
                </a>
              </div>
            </div>
          </div>

          {/* Intro */}
          <div className="lg:col-span-5 text-center lg:text-left">
            <p className="text-3xl sm:text-4xl font-semibold text-white leading-snug mb-4">
              Hey, I'm <span className="text-teal">Aiman</span>,
              <br />
              Full-Stack Developer
            </p>
            <p className="text-zinc-400 leading-relaxed mb-8">
              I love creating clean, efficient code and turning complex ideas
              into intuitive user experiences.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-3">
              <button onClick={() => go("contact")} className="btn-teal">
                Let's Talk
              </button>
              <a
                href="/resume-aiman.pdf"
                target="_blank"
                rel="noopener noreferrer"
                download
                className="inline-flex items-center gap-2 px-6 py-[0.7rem] rounded-full border border-white/20 text-zinc-200 hover:border-white/50 transition-colors"
              >
                <FileText size={16} /> View CV
              </a>
            </div>
          </div>

          {/* Stats */}
          <div className="lg:col-span-3 grid grid-cols-3 lg:grid-cols-1 gap-4">
            {stats.map((s) => (
              <div key={s.label} className="teal-card px-5 py-4 flex items-center gap-4">
                <span className="text-3xl font-semibold text-teal">{s.n}</span>
                <span className="text-xs sm:text-sm text-zinc-300 leading-tight">
                  {s.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
