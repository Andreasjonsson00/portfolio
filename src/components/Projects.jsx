import React from "react";

const projects = [
  {
    title: "Movie Database",
    description:
      "A web app that fetches and displays popular movies using an external API.",
    tech: "JavaScript, API, CSS",
    link: "https://movie-database-neon.vercel.app",
  },
  {
    title: "SmartMat",
    description:
      "Add your grocery items and the app will suggest recipes based on what you have.",
    tech: "Bootstrap, API, Database",
    link: "https://kunskapskontroll2.vercel.app",
  },
  {
    title: "Todo App",
    description: "A simple todo app with add/remove functionality. Add your tasks.",
    tech: "JavaScript, HTML, Bootstrap",
    link: "https://todo-app-lemon-nu-ah2g7g90cr.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-16 mt-30">
      <h2 className="text-3xl font-bold text-center mb-8 underline">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-white mb-2">
              {project.title}
            </h3>

            <p className="text-gray-400 mb-4">{project.description}</p>

            <div className="flex flex-col items-center justify-between mt-4">
              <p className="text-sm text-purple-400">{project.tech}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-blue-400 hover:underline"
              >
                View Project →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
