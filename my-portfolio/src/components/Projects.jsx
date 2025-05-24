const projects = [
    {
      title: "Event Search Page",
      description:
        "Developed a dynamic search experience for event listings using Vue and Algolia, integrated within a ColdFusion MVC framework to ensure high performance and intuitive UX.",
      tech: ["Vue", "Algolia", "ColdFusion", "MVC"],
      link: "https://www.optica.org/events/",
      dates: "2024 - February 2025",
      image: "/Portfolio/images/event-search.png"
    },
    {
      title: "Mini Search",
      description:
        "Implemented a lightweight, real-time search feature on the author portal using Vue and Algolia. Leveraged ColdFusion and MVC architecture for seamless data handling and scalability.",
      tech: ["Vue", "Algolia", "ColdFusion", "MVC"],
      link: "https://opg.optica.org/content/author",
      dates: "2024 - February 2025",
      image: "/Portfolio/images/opg-mini-search.png"
    },
    {
      title: "Transition to Strapi CMS",
      description:
        "Led the migration of key content from legacy systems to Strapi CMS. Combined jQuery and ColdFusion with crawler tools to ensure accurate content parsing and seamless UI integration.",
      tech: ["Strapi", "Jquery", "ColdFusion", "MVC", "Crawler"],
      link: "https://opg.optica.org/content/author/portal/item/author-guide",
      dates: "2024 - February 2025",
      image: "/Portfolio/images/opg-strapi.png"
    },
    {
      title: "Book Recommendation and Tracker App",
      description:
        "Capstone project built with React and Firebase that allows users to discover, track, and review books. Emphasized clean design, real-time data syncing, and scalable architecture using Java backend principles and polymorphism.",
      tech: ["React", "Firebase", "Polymorphism", "Java"],
      link: "https://brat-70268.web.app/",
      dates: "January 2025",
      image: "/Portfolio/images/brat.png"
    },
    {
      title: "Search Page",
      description:
        "Designed and implemented a responsive global search page using Vue and Algolia. Enhanced search performance and user interaction with optimized JavaScript and Vite for fast builds.",
      tech: ["Algolia", "Vue", "Vite", "Javascript"],
      link: "https://www.optica.org/search",
      dates: "April -  June 2024",
      image: "/Portfolio/images/search-optica.png"
    },
    {
      title: "Resources Hub Redesign",
      description:
        "Redesigned the Resources Hub to improve navigation and dynamically load guide articles. Used a flexible grid layout, modular SCSS, and JavaScript enhancements, with A/B testing to drive UX decisions.",
      tech: ["Javascript", "Grid System", "HTML", "SCSS", "A/B Testing", "Data Management"],
      link: "https://www.onlineu.com/resources",
      dates: "July - September 2022",
      image: "/Portfolio/images/fad.png"
    },
    {
      title: "Cookies on Hub Page",
      description:
        "Rebuilt the full Hub page to include product details and pricing, while implementing a GDPR-compliant cookies popup. Utilized AEM for component development and improved caching behavior.",
      tech: ["Cookies", "Cache", "Javascript", "AEM", "Component building"],
      link: "https://www.rimac.com/vida",
      dates: "October - December 2020",
      image: "/Portfolio/images/cookies.png"
    },
    {
      title: "Health Insurance Plan Slider",
      description:
        "Engineered a custom slider component for comparing health insurance plans. Meticulously tuned spacing and fade effects using OwlCarousel, JavaScript, and SCSS to match intricate design specifications.",
      tech: ["Javascript", "AEM", "SCSS", "OwlCaroussel"],
      link: "https://www.rimac.com/salud/seguro-salud?rfid=publica:producto-salud-completo:menu-principal:link",
      dates: "November - December 2019",
      image: "/Portfolio/images/health-insurance-plans.png"
    }
  ];
  
  export default function Projects() {
    return (
      <section id="projects" className="text-gray-900 py-12">
        <h2 className="lg:text-2xl text-xl font-bold mb-10 text-white">Projects</h2>
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
  