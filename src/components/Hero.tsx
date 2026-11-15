import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-24 pb-16 bg-[#f4f1ea]"
    >
      <div className="max-w-6xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 animate-fade-in">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-black/60 mb-8">
            Full Stack Developer — Software Engineering Student
          </p>

          <h1 className="font-serif-display text-[clamp(3.5rem,10vw,8rem)] leading-[0.95] mb-8">
            Aiman
            <br />
            <span className="italic accent">Asmu'i</span>
          </h1>

          <p className="text-lg sm:text-xl text-black/70 max-w-xl leading-relaxed mb-10">
            I love creating clean, efficient code and turning complex ideas into
            intuitive user experiences.
          </p>

          <div className="flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo("projects")}
              className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[#141414] text-[#f4f1ea] font-medium hover:bg-[#ff4d2e] transition-colors duration-200"
            >
              See my work
              <ArrowUpRight
                size={18}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <button
              onClick={() => scrollTo("contact")}
              className="link-underline font-medium py-2"
            >
              Get in touch
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end animate-fade-in">
          <div className="relative">
            <div className="absolute -bottom-4 -right-4 w-full h-full rounded-t-[999px] rounded-b-3xl bg-[#ff4d2e]"></div>
            <img
              src="/aiman_asmui.jpg"
              alt="Aiman Asmu'i"
              className="relative w-72 h-96 sm:w-80 sm:h-[28rem] object-cover rounded-t-[999px] rounded-b-3xl border-2 border-[#141414] bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
