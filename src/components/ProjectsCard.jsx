import React from "react";

const ProjectsCard = ({ title, description, tech, link }) => {
  return (
    <div className="bg-[#1a1a1a] p-6 rounded-xl shadow-md hover:scale-105 transition-transform duration-300">
      <h3 className="text-xl font-semibold text-white mb-2">
        {title}
      </h3>

      <p className="text-gray-400 mb-4">{description}</p>

      <div className="flex flex-col items-center justify-between mt-4">
        <p className="text-sm text-purple-700">{tech}</p>
        <a
          href={link}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-blue-600 hover:underline"
        >
          View Project →
        </a>
      </div>
    </div>
  );
};

export default ProjectsCard;