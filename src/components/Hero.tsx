import { FileText, ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="relative overflow-hidden min-h-screen flex items-center justify-center bg-[#07070b] pt-16"
    >
      {/* Grid + neon glows */}
      <div className="absolute inset-0 bg-grid [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"></div>
      <div className="absolute -top-32 left-1/4 w-[28rem] h-[28rem] bg-violet-600/25 rounded-full blur-[120px]"></div>
      <div className="absolute -bottom-32 right-1/4 w-[28rem] h-[28rem] bg-cyan-500/20 rounded-full blur-[120px]"></div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Profile image with glowing ring */}
          <div className="w-44 h-44 mx-auto mb-8 rounded-full p-[3px] bg-gradient-to-br from-violet-400 to-cyan-300 shadow-[0_0_60px_-10px_rgba(139,92,246,0.7)]">
            <img
              src="/aiman_asmui.jpg"
              alt="Aiman Asmu'i"
              className="w-full h-full object-cover rounded-full border-4 border-[#07070b]"
            />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 rounded-full glass text-sm text-zinc-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
            Software Engineering Student
          </div>

          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white mb-6">
            Hi, I'm <span className="text-gradient">Aiman Asmu'i</span>
          </h1>

          <p className="text-xl sm:text-2xl text-zinc-400 mb-3 font-medium">
            Full Stack Developer
          </p>
          <p className="text-lg text-zinc-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            I love creating clean, efficient code and turning complex ideas into
            intuitive user experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {["React", "TypeScript", "Next.js", "Flutter", "Firebase", "PostgreSQL"].map(
              (t) => (
                <span
                  key={t}
                  className="px-3 py-1 text-sm font-medium rounded-full glass text-zinc-300"
                >
                  {t}
                </span>
              )
            )}
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={() => scrollTo("projects")}
              className="px-8 py-4 bg-gradient-to-r from-violet-500 to-cyan-400 text-[#07070b] rounded-full font-bold hover:shadow-[0_0_40px_-5px_rgba(139,92,246,0.8)] hover:scale-105 transition-all duration-200"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="px-8 py-4 glass text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-200"
            >
              Get In Touch
            </button>
            <a
              href="/resume-aiman.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 px-6 py-4 glass text-white rounded-full font-semibold hover:bg-white/10 transition-all duration-200"
            >
              <FileText className="w-5 h-5" />
              View CV
            </a>
          </div>
        </div>

        <button
          onClick={() => scrollTo("about")}
          className="mt-16 text-zinc-500 hover:text-white animate-bounce transition-colors"
          aria-label="Scroll to about"
        >
          <ArrowDown className="mx-auto" />
        </button>
      </div>
    </section>
  );
};

export default Hero;
