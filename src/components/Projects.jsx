import React from "react";
import ProjectsCard from "./ProjectsCard";

const projects = [
  {
    title: "Codeunified - Pågående gruppuppgift",
    description:
      "En fullstack-webbapplikation byggd med React och Express, med PostgreSQL-databas. Användare kan registrera sig, logga in, prenumerera för att låsa upp olika programmeringskurser med lektioner och quiz. Administratörer kan lägga till och ta bort kurser samt lektioner.",
    tech: "TypeScript • Express • PostgreSQL • REST API",
    livedemo: "https://github.com/DanielPallin/group-assignment",
    github: "https://github.com/DanielPallin/group-assignment",
  },
  {
    title: "Pokémon App",
    description:
      "Appen hämtar och visar Pokémon med detaljer från PokéAPI. Du kan lägga till dina favoriter, ge dem smeknamn och spara dem med local storage och React state.",
    tech: "React • Vite • REST API • Tailwind",
    livedemo: "https://pokemon-api-app-two.vercel.app/",
    github: "https://github.com/Andreasjonsson00/pokemon-api-app",
  },
  {
    title: "Min e-handel",
    description:
      "En fullstack-webbapplikation byggd med React och Express, med PostgreSQL-databas. Användare kan bläddra bland produkter och lägga dem i varukorgen efter inloggning. Administratörer kan lägga till, redigera och ta bort produkter samt se alla beställningar.",
    tech: "React • Express • PostgreSQL • REST API",
    livedemo: "https://e-handel-proj-a8q5.vercel.app",
    github: "https://github.com/Andreasjonsson00/e-handel-proj",
  },
  {
    title: "Community Forum",
    description:
      "A community forum where users can create groups, join discussions, and interact with other members. Built with PHP and MySQL, with user authentication and group management.",
    tech: "PHP • MySQL • HTML • CSS",
    livedemo: "http://community-forum.gamer.gd/",
    github: "https://github.com/Andreasjonsson00/community-forum-php",
  },
  {
    title: "SmartMat - Gruppuppgift",
    description:
      "Lägg till dina matvaror så föreslår appen recept utifrån det du har hemma. (Gruppuppgift)",
    tech: "JavaScript •  REST API • Supabase • Bootstrap",
    livedemo: "https://kunskapskontroll2.vercel.app",
    github: "https://github.com/Andreasjonsson00/SmartMat",
  },
  {
    title: "Företagssök",
    description:
      "En webbapplikation byggd med React och Express för att söka svenska företag via ett externt API, med PFX-certifikat för säker API-autentisering.",
    tech: "React • Vite • Express • REST API • CSS",
    livedemo: "https://company-search-project-5ne7.vercel.app",
    github: "https://github.com/Andreasjonsson00/company-search-project",
  },
  {
    title: "Filmdatabas",
    description:
      "En webbapplikation som hämtar och visar populära filmer med The Movie Database API.",
    tech: "JavaScript • REST API • CSS",
    livedemo: "https://movie-database-neon.vercel.app",
    github: "https://github.com/Andreasjonsson00/movie-database",
  },
  {
    title: "Todo App",
    description:
      "En enkel att göra-app där du kan lägga till och ta bort uppgifter.",
    tech: "JavaScript • HTML • Bootstrap",
    livedemo: "https://todo-app-lemon-nu-ah2g7g90cr.vercel.app",
    github: "https://github.com/Andreasjonsson00/todo-app",
  },
  // {
  //   title: "Receptsamlingen",
  //   description:
  //   "Create and add your favorite recipes. View detailed information about the recipes and share them with your friends.",
  //   tech: "React • Node.js • Express • PostgreSQL",
  //   livedemo: "https://receptsamlingen-app.vercel.app",
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
            livedemo={project.livedemo}
            github={project.github}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
