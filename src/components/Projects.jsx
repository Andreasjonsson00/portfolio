import React from "react";
import ProjectsCard from "./ProjectsCard";

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
    description:
      "A simple todo app with add/remove functionality. Add your tasks.",
    tech: "JavaScript, HTML, Bootstrap",
    link: "https://todo-app-lemon-nu-ah2g7g90cr.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-16 mt-5">
      <h2 className="text-3xl font-bold text-center mb-8 underline">
        Projects
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto border-b border-[#2e303a] pb-20">
        {projects.map((project, index) => (
          <ProjectsCard
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
