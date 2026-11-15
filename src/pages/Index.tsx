
import Navigation from '../components/Navigation';
import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import { Github, Linkedin, Instagram, Mail } from "lucide-react"; 

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Contact />
      
      {/* Footer */}
    <footer className="bg-[#050509] border-t border-white/10 text-white py-8">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
      {/* Left: Name + Role */}
      <div className="text-center md:text-left">
        <h2 className="text-xl font-bold">Muhamad Aiman Asmu'i Bin Mohd Shuaimi</h2>
        <p className="text-gray-400">Full Stack Developer</p>
      </div>

      {/* Right: Social Icons */}
      <div className="flex space-x-4 text-gray-400">
        <a href="https://github.com/aiman279" target="_blank" rel="noopener noreferrer">
          <Github className="hover:text-white" />
        </a>
        <a href="https://www.linkedin.com/in/aiman-asmui/" target="_blank" rel="noopener noreferrer">
          <Linkedin className="hover:text-white" />
        </a>
        <a href="https://www.instagram.com/asmuieee._/" target="_blank" rel="noopener noreferrer">
          <Instagram className="hover:text-white" />
        </a>
        <a href="mailto:aimanasmui332@gmail.com">
          <Mail className="hover:text-white" />
        </a>
      </div>
    </div>

    <hr className="my-6 border-white/10" />

    <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
      <p>© 2025 Aiman Asmu'i. All rights reserved.</p>

      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#about" className="hover:text-white">About</a>
        <a href="#projects" className="hover:text-white">Projects</a>
        <a href="#contact" className="hover:text-white">Contact</a>
      </div>
    </div>
  </div>
</footer>
    </div>
  );
};

export default Index;
