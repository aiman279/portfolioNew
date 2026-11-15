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
    <section id="about" className="py-28 bg-[#141414] text-[#f4f1ea]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-[#ff4d2e] mb-10">
          01 — About
        </p>

        <div className="grid lg:grid-cols-12 gap-12">
          <h2 className="lg:col-span-5 font-serif-display text-5xl sm:text-6xl leading-[1.05]">
            Building things that feel <span className="italic text-[#ff4d2e]">simple</span> to use.
          </h2>

          <div className="lg:col-span-7 space-y-6">
            <p className="text-lg text-[#f4f1ea]/75 leading-relaxed">
              I’m a Software Engineering student at Universiti Kuala Lumpur MIIT
              with a strong focus on full-stack development and user-centered
              design. I enjoy creating digital solutions that are intuitive,
              efficient, and built with attention to detail.
            </p>
            <p className="text-lg text-[#f4f1ea]/75 leading-relaxed">
              My experience across academic projects has helped me develop
              skills in building responsive, high-performing applications. I’m
              passionate about turning ideas into impactful user experiences
              that solve real-world problems through clean and accessible code.
            </p>

            <div className="pt-8 border-t border-white/15">
              <h3 className="text-sm font-medium uppercase tracking-[0.2em] text-[#f4f1ea]/50 mb-5">
                Skills & Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-4 py-2 rounded-full border border-white/25 text-sm hover:bg-[#f4f1ea] hover:text-[#141414] transition-colors duration-200"
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
