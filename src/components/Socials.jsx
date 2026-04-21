import React from "react";
import githubImg from "../assets/github-mark.png";
import linkedinImg from "../assets/linkedin-mark.png";
import emailImg from "../assets/email-mark.png";

const Socials = () => {
  return (
    <nav className="social-links flex gap-4 mt-3">
      <a
        className="flex flex-col items-center transition duration-200 ease-out hover:scale-[1.3] hover:opacity-80"
        href="https://github.com/Andreasjonsson00"
        target="_blank"
      >
        <img className="github-icon w-6 mt-0.5" 
        src={githubImg} 
        alt="GitHub Icon" />
      </a>
      <a
        className="flex flex-col items-center transition duration-200 ease-out hover:scale-[1.3] hover:opacity-80"
        href="https://www.linkedin.com/in/andreas-jonsson-roslund"
        target="_blank"
      >
        <img
          className="linkedin-icon w-6 mt-1"
          src={linkedinImg}
          alt="LinkedIn Icon"
        />
      </a>
      <a
        className="flex flex-col items-center transition duration-200 ease-out hover:scale-[1.3] hover:opacity-80"
        href="mailto:andreasjonsson00@gmail.com"
      >
        <img className="email-icon w-6 mt-1.5" 
        src={emailImg} 
        alt="Email Icon" />
      </a>
    </nav>
  );
};

export default Socials;
