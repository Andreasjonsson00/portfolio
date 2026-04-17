import React from "react";

const Header = () => {
  return (
    <header className="header flex items-center justify-between p-5 border-b border-[#2e303a]">
      <h2 className="ml-5">My Portfolio</h2>

      <nav className="">
        <ul className="flex gap-4">
          <li>
            <a href="#about" className="transition duration-200 hover:text-blue-700">About</a>
          </li>
          <li>
            <a href="#projects" className="transition duration-200 hover:text-blue-700">Projects</a>
          </li>
          <li>
            <a href="#contact" className="transition duration-200 hover:text-blue-700">Contact</a>
          </li>
          <li className="border border-[#2e303a] rounded px-2  transition duration-200 hover:border-blue-700">
            <a href="../../public/Andreas_Jonsson_Roslund_CV.pdf" className="transition duration-200 hover:text-blue-700">Download CV</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
