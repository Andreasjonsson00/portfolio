import React from "react";
import featuredImg from "../assets/featured-img.png";

const Featured = () => {
  return (
    <section className="mt-30 px-4">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-bold mb-4 underline">
            Featured Project
          </h2>

          <h3 className="text-xl font-semibold mb-2 text-white">SmartMat</h3>

          <p className="text-gray-400 mb-4">
            SmartMat helps you reduce food waste by suggesting recipes based on
            the ingredients you already have at home.
          </p>

          <p className="text-sm text-purple-400">
            React • API • Bootstrap • Database
          </p>

          <div className="flex gap-4 mt-5 justify-center">
            <a
              href="https://kunskapskontroll2.vercel.app"
              className="bg-blue-900 px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Andreasjonsson00/SmartMat"
              className="border border-gray-600 px-4 py-2 rounded hover:border-blue-700 transition"
            >
              GitHub
            </a>
          </div>
        </div>

        <div className="flex-1">
          <div className="w-full h-60 bg-[#1a1a1a] rounded-xl flex items-center justify-center text-gray-500">
            <a
              href="https://kunskapskontroll2.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={featuredImg}
                alt="Featured Project"
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
