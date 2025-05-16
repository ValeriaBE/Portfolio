import { Github, Linkedin } from 'lucide-react';
export default function Sidebar() {
    return (
        <aside className="hidden lg:flex flex-col justify-between left-0 top-0 h-full bg-gray-900 border-gray-700 py-10 px-4">
        <div>
          <a href="#hero" className="text-teal-400 text-2xl font-bold">Valeria Berrocal</a>
          <p className="text-white">Front end Engineer</p>
          <p className="text-sm text-gray-400 mt-4">I build accessible webs from design conception to completion.</p>
          <nav className="mt-10 flex flex-col gap-4 text-sm text-gray-400">
            <a href="#about" className="hover:text-teal-400">About</a>
            <a href="#projects" className="hover:text-teal-400">Projects</a>
            <a href="#contact" className="hover:text-teal-400">Contact</a>
          </nav>
        </div>
  
        <div className="flex flex-row gap-4 text-gray-400">
          <a href="https://github.com/ValeriaBE" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition"><Github size={24} /></a>
          <a href="https://www.linkedin.com/in/valeria-b-egusquiza/" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition"><Linkedin size={24} /></a>
        </div>
      </aside>
    );
  }
  