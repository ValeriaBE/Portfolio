import { Github, Linkedin } from 'lucide-react';
export default function Sidebar() {
    return (
        <aside className="lg:flex flex-col justify-between left-0 top-0 h-full bg-transparent border-gray-700 py-10 px-4">
        <div>
        <div className="flex justify-between items-center mb-6">
          <a href="#hero" className="text-teal-400 text-3xl lg:text-4xl font-bold">
            Valeria Berrocal
          </a>
        </div>
        <p className="text-white">Front end Engineer</p>
        <p className="text-sm text-gray-400 mt-4">
          I build accessible webs from design conception to completion.
        </p>
        <nav className="hidden mt-10 lg:flex flex-col gap-4 text-sm text-gray-400">
          <a
            href="#about"
            className="hover:text-teal-400 transition-transform duration-300 ease-in-out hover:translate-x-2"
          >
            About
          </a>
          <a
            href="#experience"
            className="hover:text-teal-400 transition-transform duration-300 ease-in-out hover:translate-x-2"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:text-teal-400 transition-transform duration-300 ease-in-out hover:translate-x-2"
          >
            Projects
          </a>
        </nav>
      </div>
  
      <div className="flex flex-row gap-4 text-gray-400 py-4">
        <a
          href="https://github.com/ValeriaBE"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <Github size={24} />
        </a>
        <a
          href="https://www.linkedin.com/in/valeria-b-egusquiza/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-teal-400 transition-transform duration-300 ease-in-out hover:scale-110"
        >
          <Linkedin size={24} />
        </a>
      </div>
      </aside>
    );
  }
  