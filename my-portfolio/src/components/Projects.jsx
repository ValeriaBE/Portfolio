const projects = [
    {
        title: "Event Search Page",
        description: "Applied a mini search using algolia and vue",
        tech: ["Vue", "Algolia", "ColdFusion", "MVC"],
        link: "https://www.optica.org/events/",
        dates: "2024 - February 2025",
        image: "/images/event-search.png"
    },
    {
        title: "Mini Search",
        description: "Applied a mini search using algolia and vue",
        tech: ["Vue", "Algolia", "ColdFusion", "MVC"],
        link: "https://opg.optica.org/content/author",
        dates: "2024 - February 2025",
        image: "/images/opg-mini-search.png"
    },
    {
        title: "Transition to strapi cms of content",
        description: "Moved to strapi cms",
        tech: ["Strapi", "Jquery", "ColdFusion", "MVC", "Crawler"],
        link: "https://opg.optica.org/content/author/portal/item/author-guide",
        dates: "2024 - February 2025",
        image: "/images/opg-strapi.png"
    },
    {
        title: "Book Recommendation and Tracker App",
        description: "Capstone project",
        tech: ["React", "Firebase", "Polymorphism", "Java"],
        link: "https://brat-70268.web.app/",
        dates: "January 2025",
        image: "/images/brat.png"
    },
    {
        title: "Search Page",
        description: "Search page with Algolia and Vue",
        tech: ["Algolia", "Vue", "Vite", "Javascript"],
        link: "https://www.optica.org/search",
        dates: "April -  June 2024",
        image: "/images/search-optica.png"
    },
    {
      title: "Resources Hub Redesign",
      description: "Redesign of the resources hub and to dynamically pull in the guide articles.",
      tech: ["Javascript", "Grid System", "HTML", "SCSS", "A/B Testing", "Data Management"],
      link: "https://www.onlineu.com/resources",
      dates: "July - September 2022",
      image: "/images/fad.png"
    },
    {
      title: "Cookies on Hub Page",
      description: "Redesign of the entire hub page including product pricing and plan options. Added a cookies popup too.",
      tech: ["Cookies", "Cache", "Javascript", "AEM", "Component building"],
      link: "https://www.rimac.com/vida",
      dates: "October - December 2020",
      image: "/images/cookies.png"
    },
    {
        title: "Health Insurance Plan Slider",
        description: "The difficulty of this task was the design implementation and the slider. The design had a side fade that disappeared when the next arrow was clicked. To get the exact mesearument of how far the plan should move required precision, as well as, the highlighted second plan.",
        tech: ["Javascript", "AEM", "SCSS", "OwlCaroussel"],
        link: "https://www.rimac.com/salud/seguro-salud?rfid=publica:producto-salud-completo:menu-principal:link",
        dates: "November - December 2019",
        image: "/images/health-insurance-plans.png"
    }
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="text-gray-900 py-12">
        <h2 className="lg:text-3xl text-xl font-bold mb-10 text-white">Projects</h2>
        <div>
          {projects.map((project, index) => (
            <div key={index} className="pb-6 hover:shadow-lg gap-6 transition mb-3 lg:flex items-center">
                <div className="lg:w-[30%] w-[70%] border rounded"><img src={project.image} alt={project.title} className="mr-4" loading="lazy"/></div>
              <div className="lg:w-[70%]">
              <h3 className="lg:text-xl text-md font-semibold text-white mb-2 mt-4"><a href={project.link} className="text-white transition-all duration-300 ease-in-out inline-block hover:translate-x-1 hover:text-teal-400" target="_blank" rel="noopener noreferrer">{project.title} →</a></h3>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }
  