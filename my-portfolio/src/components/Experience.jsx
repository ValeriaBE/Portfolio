const experiences = [
  {
      title: "Front end Applications Developer - Optica",
      description: "I collaborate closely with marketing, design, and back-end teams to implement new features, content updates, and bug fixes using HTML, JavaScript, Vue, and CSS across the organization’s digital platforms. A strong advocate for accessibility, I conduct quarterly reviews of key content to ensure our systems are inclusive and user-friendly. My role centers on optimizing the front-end experience for both internal and external users while bringing expertise in UI/UX and interaction design to every project.",
      tech: ["Strapi", "Javascript", "Vue", "Scss", "Kentico", "ColdFusion"],
      link: "https://www.optica.org/",
      dates: "Jan 2023 - Present"
  },
  {
      title: "HTML/CSS Developer - Optimal",
      description: "I was responsible for translating designer mockups and wireframes into responsive, maintainable HTML and CSS. I supported ongoing content needs through a custom in-house CMS and worked with the content and design teams to deliver insightful blog posts and thought-leadership articles. I also contributed to building a reusable component system aimed at automating article publication, while regularly peer-reviewing code to uphold development standards.",
      tech: ["HTML", "Javascript", "CSS", "Jquery"],
      link: "https://www.onlineu.com/",
      dates: "July 2021 - Oct 2022"
  },
  {
    title: "Webmaster - Rimac Seguros y Reaseguros",
    description: "I managed updates and maintenance for the public-facing website using Adobe Experience Manager (AEM). My responsibilities included developing new components for product pages and working closely with the UX/UI team as part of the design workflow. I demonstrated agility by publishing urgent sales content within a 6-hour window and operated under SCRUM and AGILE methodologies with two-week sprint cycles.",
    tech: ["AEM", "Javascript", "CSS", "Jquery"],
    link: "https://www.rimac.com/",
    dates: "Nov 2019 - Jun 2021"
}
];
export default function Experience() {
    return (
      <section id="experience" className="bg-transparent text-white lg:py-24 py-10">
        <h2 className="lg:text-2xl text-xl font-bold mb-10 text-white">Experience</h2>
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
          href="/Portfolio/Resume.pdf"
          download="Resume.pdf"
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
  