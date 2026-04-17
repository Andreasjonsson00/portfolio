import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="flex items-center justify-between p-5 border-b border-[#2e303a]">
      <h2 className="ml-5">Portfolio</h2>

      <nav>
        <button
          className="md:hidden text-xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          ☰
        </button>

        <ul
          className={`${
            isOpen ? "flex" : "hidden"
          } flex-col absolute top-16 right-5 bg-[#1a1a1a] p-4 rounded gap-4 md:flex md:flex-row md:static md:bg-transparent md:p-0`}
        >
          <li>
            <a
              href="#about"
              className="transition duration-200 hover:text-blue-700"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#featured"
              className="transition duration-200 hover:text-blue-700"
            >
              Projects
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="transition duration-200 hover:text-blue-700"
            >
              Contact
            </a>
          </li>
          <li className="border border-[#2e303a] rounded px-2 transition duration-200 hover:border-blue-700">
            <a
              href="/cv.pdf"
              download
              className="transition duration-200 hover:text-blue-700"
            >
              Download CV
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
