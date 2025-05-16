const projects = [
    {
        title: "Front end Application Developer - OPG CMS",
        description: "Moved to strapi cms",
        tech: ["Strapi", "Jquery", "ColdFusion", "MVC"],
        link: "https://opg.optica.org/content/author/portal/item/author-guide",
        dates: "2024 - February 2025"
    },
    {
        title: "Software Engineer Student - Book Recommendation and Tracker",
        description: "",
        tech: ["React", "Firebase", "Polymorphism", "Java"],
        link: "https://brat-70268.web.app/",
        dates: "January 2025"
    },
    {
        title: "Front end Application Developer - Optica",
        description: "Search page",
        tech: ["Algolia", "Vue", "Vite", "Javascript"],
        link: "https://www.optica.org/search",
        dates: "April -  June 2024"
    },
    {
        title: "Front end Application Developer - OPG",
        description: "Upgrade bootstrap and remove legacy styles",
        tech: ["ColdFusion", "SCSS", "JQuery"],
        link: "https://opg.optica.org/",
        dates: "January - March 2023"
    },
    {
      title: "HTML/CSS Developer - Resources Hub",
      description: "Redesign of the resources hub and to dynamically pull in the guide articles.",
      tech: ["Javascript", "Grid System", "HTML", "SCSS", "A/B Testing", "Data Management"],
      link: "https://www.onlineu.com/resources",
      dates: "July - September 2022"
    },
    {
      title: "Webmaster - Life Insurance Hub Page",
      description: "Redesign of the entire hub page including product pricing and plan options. Added a cookies popup too.",
      tech: ["Cookies", "Cache", "Javascript", "AEM", "Component building"],
      link: "https://www.rimac.com/vida",
      dates: "October - December 2020"
    },
    {
        title: "Webmaster - Health Insurance FAQ and Plans",
        description: "The difficulty of this task was the design implementation and the slider. The design had a side fade that disappeared when the next arrow was clicked. To get the exact mesearument of how far the plan should move required precision, as well as, the highlighted second plan.",
        tech: ["Javascript", "JQuery", "AEM", "SCSS"],
        link: "https://www.rimac.com/salud/seguro-salud?rfid=publica:producto-salud-completo:menu-principal:link",
        dates: "November - December 2019"
    }
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="text-gray-900 py-12">
        <h2 className="text-3xl font-bold mb-10 text-white">Projects</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition bg-white mb-3">
              <p className="text-sm text-gray-600">{project.dates}</p>
              <h3 className="text-xl font-semibold text-teal-600 mb-2">{project.title}</h3>
              <p className="text-gray-700 mb-4">{project.description}</p>
              <ul className="flex flex-wrap text-sm text-gray-600 mb-4">
                {project.tech.map((t, i) => (
                  <li key={i} className="mr-2 bg-gray-100 px-2 py-1 rounded">{t}</li>
                ))}
              </ul>
              <a href={project.link} className="text-teal-500 underline hover:text-teal-700" target="_blank" rel="noopener noreferrer">
                View Project →
              </a>
            </div>
          ))}
        </div>
      </section>
    );
  }
  