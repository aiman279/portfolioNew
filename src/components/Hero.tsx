import { FileText } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-purple-50 pt-16"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          {/* Circular Profile Image */}
          <div className="w-52 h-52 mx-auto mb-8 rounded-full ring-4 ring-border shadow-xl overflow-hidden">
            <img
              src="/aiman_asmui.jpg"
              alt="Aiman Asmu'i"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Aiman Asmu'i
            </span>
          </h1>

          <h1 className="text-2xl sm:text-3xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            Software Engineering Student | Full Stack Developer
          </h1>
          <p className="text-xl sm:text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            {" "}
            I love creating clean, efficient code and turning complex ideas into
            intuitive user experiences.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* View My Work */}
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-200"
            >
              View My Work
            </button>

            {/* Get In Touch */}
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="px-8 py-4 border-2 border-border text-foreground rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-200"
            >
              Get In Touch
            </button>

            {/* Resume Button */}
            <a
              href="/resume-asmui.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download
              className="flex items-center gap-2 px-6 py-4 border-2 border-border text-foreground rounded-full font-semibold hover:border-blue-600 hover:text-blue-600 hover:shadow-md hover:scale-105 transition-all duration-200"
            >
              <FileText className="w-5 h-5" />
              View CV
            </a>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-16 animate-bounce">
          <div className="w-8 h-8 border-2 border-border rounded-full mx-auto flex items-center justify-center">
            <div className="w-2 h-2 bg-border rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
