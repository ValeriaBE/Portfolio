const experiences = [
  {
      title: "Front end Applications Developer - Optica",
      description: "Partnered with marketing, design, and back-end teams to implement new features and content and fixes using HTML, Javascript, Vue, and CSS within the organization’s digital properties.",
      tech: ["Strapi", "Javascript", "Vue", "Scss", "Kentico", "ColdFusion"],
      link: "https://www.optica.org/",
      dates: "Jan 2023 - Present"
  },
  {
      title: "HTML/CSS Developer - Optimal",
      description: "Translated mock-up designs into front-end code. Worked alongside content writers and a UI designer. Built web pages in an in-house CMS editor. Created and maintained a component system for article posts.",
      tech: ["HTML", "Javascript", "CSS", "Jquery"],
      link: "https://www.onlineu.com/",
      dates: "July 2021 - Oct 2022"
  },
  {
    title: "Webmaster - Rimac Seguros y Reaseguros",
    description: "Translated mock-up designs into front-end code. Worked alongside content writers and a UI designer. Built web pages in an in-house CMS editor. Created and maintained a component system for article posts.",
    tech: ["AEM", "Javascript", "CSS", "Jquery"],
    link: "https://www.rimac.com/",
    dates: "Nov 2019 - Jun 2021"
}
];
export default function Experience() {
    return (
      <section id="experience" className="bg-transparent text-white lg:py-24 py-10">
        <h2 className="lg:text-3xl text-xl font-bold mb-10 text-white">Experience</h2>
        <div>
          {experiences.map((project, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-md hover:shadow-lg transition bg-white mb-3">
              <p className="text-sm text-gray-600">{project.dates}</p>
              <h3 className="text-xl font-semibold text-teal-600 mb-2"><a href={project.link} className="text-teal-500 hover:text-teal-700" target="_blank" rel="noopener noreferrer">
              {project.title}
              </a></h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              <ul className="flex flex-wrap text-sm text-gray-600 mb-4">
                {project.tech.map((t, i) => (
                  <li key={i} className="mr-2 bg-gray-100 px-2 py-1 rounded">{t}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <a
          href="/Valeria-Berrocal-Resume.pdf"
          download="Valeria_Berrocal_Resume.pdf"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="View Full Resume (opens in a new tab)"
          className="hover:text-teal-400 transition-all duration-300 ease-in-out inline-block hover:translate-x-1"
        >
          View Full Resume →
        </a>
      </section>
    );
  }
  