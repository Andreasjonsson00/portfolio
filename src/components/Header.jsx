import React from "react";

const Header = () => {
  return (
    <div className="header flex items-center justify-between p-5 border-b border-[#2e303a]">
      <h2 className="ml-5">My Portfolio</h2>

      <nav className="">
        <ul className="flex gap-4">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#contact">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li className="border border-[#2e303a] rounded px-3 py-1">
            <a href="#contact">Download CV</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
