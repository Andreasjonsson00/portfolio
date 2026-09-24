import React from "react";
import ProjectsCard from "./ProjectsCard";

const projects = [
  {
    title: "Pokémon App",
    description:
      "Appen hämtar och visar Pokémon med detaljer från PokéAPI. Du kan lägga till dina favoriter, ge dem smeknamn och spara dem med local storage och React state.",
    tech: "React • Vite • REST API • Tailwind",
    link: "https://pokemon-api-app-two.vercel.app/",
  },
  {
    title: "Min e-handel",
    description:
      "En fullstack-webbapplikation byggd med React och Express, med PostgreSQL-databas. Användare kan bläddra bland produkter och lägga dem i varukorgen efter inloggning. Administratörer kan lägga till, redigera och ta bort produkter samt se alla beställningar.",
    tech: "React • Express • PostgreSQL • REST API",
    link: "https://e-handel-proj-a8q5.vercel.app",
  },
  {
    title: "SmartMat",
    description:
      "Gruppuppgift: Lägg till dina matvaror så föreslår appen recept utifrån det du har hemma.",
    tech: "JavaScript •  REST API • Supabase • Bootstrap",
    link: "https://kunskapskontroll2.vercel.app",
  },
  {
    title: "Företagssök",
    description:
    "En webbapplikation byggd med React och Express för att söka svenska företag via ett externt API, med PFX-certifikat för säker API-autentisering.",
    tech: "React • Vite • Express • REST API • CSS",
    link: "https://company-search-project-5ne7.vercel.app",
  },
  {
    title: "Filmdatabas",
    description:
    "En webbapplikation som hämtar och visar populära filmer med The Movie Database API.",
    tech: "JavaScript • REST API • CSS",
    link: "https://movie-database-neon.vercel.app",
  },
  {
    title: "Todo App",
    description:
    "En enkel att göra-app där du kan lägga till och ta bort uppgifter.",
    tech: "JavaScript • HTML • Bootstrap",
    link: "https://todo-app-lemon-nu-ah2g7g90cr.vercel.app",
  },
  // {
  //   title: "Receptsamlingen",
  //   description:
  //   "Create and add your favorite recipes. View detailed information about the recipes and share them with your friends.",
  //   tech: "React • Node.js • Express • PostgreSQL",
  //   link: "https://receptsamlingen-app.vercel.app",
  // },
];

const Projects = () => {
  return (
    <section id="projects" className="px-10 py-16">
      <h2 className="text-3xl font-bold text-left md:text-center mb-8">
        Projekt
      </h2>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl md:mx-auto border-b border-[#2e303a] pb-20">
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
