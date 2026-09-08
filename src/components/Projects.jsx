import React from "react";
import ProjectsCard from "./ProjectsCard";

const projects = [
  {
    title: "Pokémon App",
    description:
      "The app fetches and displays Pokémon along with their details using PokéAPI. You can add your favorite Pokémon and give them a nickname, saved with local storage and React state.",
    tech: "React • Vite • REST API • Tailwind",
    link: "https://pokemon-api-app-two.vercel.app/",
  },
  // {
  //   title: "Receptsamlingen",
  //   description:
  //   "Create and add your favorite recipes. View detailed information about the recipes and share them with your friends.",
  //   tech: "React • Node.js • Express • PostgreSQL",
  //   link: "https://receptsamlingen-app.vercel.app",
  // },
  {
    title: "Movie Database",
    description:
      "A web app that fetches and displays popular movies using The Movie Database API.",
    tech: "JavaScript • REST API • CSS",
    link: "https://movie-database-neon.vercel.app",
  },
  {
    title: "SmartMat",
    description:
      "Add your grocery items and the app will suggest recipes based on what you have.",
    tech: "JavaScript •  REST API • Supabase • Bootstrap",
    link: "https://kunskapskontroll2.vercel.app",
  },
  {
    title: "Todo App",
    description:
      "A simple todo app with add/remove functionality. Add your tasks.",
    tech: "JavaScript • HTML • Bootstrap",
    link: "https://todo-app-lemon-nu-ah2g7g90cr.vercel.app",
  },
   {
    title: "Företagssök",
    description:
      "A web application built with React and Express for searching Swedish companies through an external API, using a PFX certificate for secure API authentication.",
    tech: "React • Vite • Express • REST API • CSS",
    link: "https://company-search-project-5ne7.vercel.app",
  },
   {
    title: "Min e-handel",
    description:
      "Fullstack web application built with React and Express, backed by a PostgreSQL database. Users can browse products and add them to their cart after logging in. Admin users can add, edit, and delete products, as well as view all orders placed by users.",
    tech: "React • Vite • Node.js • Express • PostgreSQL • Aiven • REST API • CSS",
    link: "https://e-handel-proj-a8q5.vercel.app",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="px-6 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">
        Projects
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto border-b border-[#2e303a] pb-20">
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
