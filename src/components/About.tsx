const About = () => {
  const skills = [
    "React",
    "TypeScript",
    "Python",
    "JavaScript",
    "HTML/CSS",
    "Tailwind CSS",
    "Firebase",
    "Github",
    "SQL",
    "PHP",
  ];

  return (
    <section id="about" className="relative py-24 bg-[#07070b]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-semibold tracking-widest text-violet-400 uppercase mb-3">
            Who am I
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white">
            About <span className="text-gradient">Me</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="relative w-80 h-80 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-violet-500/30 to-cyan-400/30 rounded-3xl blur-2xl"></div>
              <div className="relative w-full h-full glass rounded-3xl flex items-center justify-center">
                <div className="text-7xl">👨‍💻</div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <p className="text-lg text-zinc-400 leading-relaxed">
              I’m a Software Engineering student at Universiti Kuala Lumpur MIIT
              with a strong focus on full-stack development and user-centered
              design. I enjoy creating digital solutions that are intuitive,
              efficient, and built with attention to detail.
            </p>

            <p className="text-lg text-zinc-400 leading-relaxed">
              My experience across academic projects has helped me develop
              skills in building responsive, high-performing applications. I’m
              passionate about turning ideas into impactful user experiences
              that solve real-world problems through clean and accessible code.
            </p>

            <div className="pt-6">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 glass text-zinc-200 rounded-full text-sm font-medium hover:border-violet-400/50 hover:text-white transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
