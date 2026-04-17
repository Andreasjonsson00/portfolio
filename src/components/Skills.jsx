import React from "react";

const Skills = () => {
  return (
    <section className="mt-16 px-4">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
        Tech
      </h2>

      <div className="max-w-4xl mx-auto flex flex-wrap justify-center gap-3 mb-16">
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
        ].map((skill) => (
          <span
            key={skill}
            className="bg-[#1a1a1a] text-sm px-4 py-2 rounded-lg border border-gray-700 hover:border-blue-500 transition"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
};

export default Skills;
