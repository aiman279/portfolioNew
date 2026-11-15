const skills = [
  { name: "React", abbr: "Re", color: "bg-sky-500" },
  { name: "TypeScript", abbr: "TS", color: "bg-blue-600" },
  { name: "Python", abbr: "Py", color: "bg-yellow-500" },
  { name: "JavaScript", abbr: "JS", color: "bg-amber-400" },
  { name: "HTML/CSS", abbr: "H5", color: "bg-orange-500" },
  { name: "Tailwind CSS", abbr: "TW", color: "bg-cyan-500" },
  { name: "Firebase", abbr: "Fb", color: "bg-orange-400" },
  { name: "Github", abbr: "GH", color: "bg-zinc-600" },
  { name: "SQL", abbr: "SQL", color: "bg-emerald-600" },
  { name: "PHP", abbr: "PHP", color: "bg-indigo-500" },
];

const About = () => {
  return (
    <>
      {/* About */}
      <section id="about" className="py-24 bg-[#16181b]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-center text-4xl sm:text-5xl font-light text-white mb-14">
            About <span className="text-teal">Me</span>
          </h2>

          <div className="grid lg:grid-cols-2 gap-10 items-center">
            {/* Code window */}
            <div className="teal-card overflow-hidden">
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/10 bg-black/20">
                <span className="w-3 h-3 rounded-full bg-red-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-yellow-400/80"></span>
                <span className="w-3 h-3 rounded-full bg-green-400/80"></span>
                <span className="ml-3 text-xs text-zinc-400 font-mono-code">
                  about.ts
                </span>
              </div>
              <div className="p-6 font-mono-code text-[13px] leading-7 text-zinc-300">
                <p>
                  <span className="text-teal">const</span>{" "}
                  <span className="text-sky-300">aiman</span> = {"{"}
                </p>
                <p className="pl-5">
                  <span className="text-zinc-500">role:</span>{" "}
                  <span className="text-amber-300">"Full-Stack Developer"</span>,
                </p>
                <p className="pl-5">
                  <span className="text-zinc-500">studying:</span>{" "}
                  <span className="text-amber-300">"Software Engineering @ UniKL MIIT"</span>,
                </p>
                <p className="pl-5">
                  <span className="text-zinc-500">focus:</span>{" "}
                  <span className="text-amber-300">"user-centered design"</span>,
                </p>
                <p>{"}"}</p>
                <p className="mt-4 font-sans text-[15px] leading-relaxed text-zinc-400">
                  I’m a Software Engineering student at Universiti Kuala Lumpur
                  MIIT with a strong focus on full-stack development and
                  user-centered design. I enjoy creating digital solutions that
                  are intuitive, efficient, and built with attention to detail.
                </p>
                <p className="mt-3 font-sans text-[15px] leading-relaxed text-zinc-400">
                  My experience across academic projects has helped me develop
                  skills in building responsive, high-performing applications.
                  I’m passionate about turning ideas into impactful user
                  experiences that solve real-world problems through clean and
                  accessible code.
                </p>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="absolute -inset-3 rounded-3xl border border-[#2ee6b6]/40"></div>
                <img
                  src="/avatar.svg"
                  alt="Aiman Asmu'i"
                  className="relative w-72 h-80 sm:w-80 sm:h-96 object-cover object-center rounded-2xl bg-[#14403a]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="py-24 bg-topo">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <div className="font-mono-code text-6xl text-teal mb-4 drop-shadow-[0_0_25px_rgba(46,230,182,0.6)]">
            &lt;/&gt;
          </div>
          <h2 className="text-4xl sm:text-5xl font-light text-white mb-3">
            My <span className="text-teal">Skills</span>
          </h2>
          <p className="text-zinc-400 mb-14">
            Languages and tools I use to build things.
          </p>

          <div className="flex flex-wrap justify-center gap-x-8 gap-y-10">
            {skills.map((s) => (
              <div key={s.name} className="flex flex-col items-center gap-3 w-24">
                <div
                  className={`w-16 h-16 rounded-full ${s.color} flex items-center justify-center text-white text-xs font-semibold shadow-lg ring-4 ring-white/10`}
                >
                  {s.abbr}
                </div>
                <span className="text-sm text-zinc-300">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
