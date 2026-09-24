import React from "react";
import featuredImg from "../assets/featured-img.webp";

const Featured = () => {
  return (
    <section id="featured" className="mt-15 px-4 scroll-mt-30">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10 border-b border-[#2e303a] pb-20">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Utvalt projekt
          </h2>

          <h3 className="text-xl font-semibold mb-2 text-white">Pokémon App</h3>

          <p className="text-gray-400 mb-4 px-3">
            Lägg till dina favorit-Pokémon, ge dem egna smeknamn och se
            detaljerad information om dem.
          </p>

          <p className="text-sm text-purple-700">React • VITE • REST API • Tailwind</p>

          <div className="flex gap-4 mt-5 justify-center">
            <a
              href="https://pokemon-api-app-two.vercel.app/"
              className="bg-blue-800 px-4 py-2 rounded hover:bg-blue-700 transition duration-200"
              target="_blank"
            >
              Se projektet
            </a>

            <a
              href="https://github.com/Andreasjonsson00/pokemon-api-app"
              className="border border-gray-600 px-4 py-2 rounded hover:border-purple-700 transition duration-200"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full h-60 bg-[#141720] rounded-xl flex items-center justify-center text-gray-500">
            <a
              href="https://pokemon-api-app-two.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={featuredImg}
                alt="Utvalt projekt"
                className="rounded-xl transition duration-300 hover:scale-102 hover:opacity-90"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
