import React from "react";

const Skills = () => {
  return (
    <section className="px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-left md:text-center mb-8">Kompetenser</h2>

      <div className="max-w-6xl md:mx-auto flex flex-wrap justify-start md:justify-center gap-3 border-b border-[#2e303a] pb-20">
        {[
          "JavaScript",
          "React",
          "HTML",
          "CSS",
          "Tailwind",
          "Bootstrap",
          "Git",
          "GitHub",
          "REST API",
          "PostgreSQL",
          "Supabase",
          "Node.js",
          "Express",
          "Vite",
          "Vercel",
          "PHP",
          "MySQL",
          "Docker",
          "TypeScript",
          "Postman",
          "Aiven",
          "GitHub Actions",
          "Responsiv Design",
        ].map((skill) => (
          <span
            key={skill}
            className="bg-[#0b111c] text-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-purple-700 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
