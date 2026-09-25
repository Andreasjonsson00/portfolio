import React from "react";

const ProjectsCard = ({ title, description, tech, livedemo, github }) => {
  return (
    <div className="bg-[#141720] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300 flex h-full flex-col">
      <h3 className="text-xl font-semibold text-white mb-2">{title}</h3>

      <p className="text-gray-400 mb-4">{description}</p>

      <div className="mt-auto flex flex-col items-start md:items-center gap-2 pt-4">
        <p className="text-sm text-purple-700">{tech}</p>
        <a
          href={livedemo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          Live Demo →
        </a>
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          GitHub →
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;
