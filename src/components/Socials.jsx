import React from "react";
import githubImg from "../assets/github-mark.svg";
import linkedinImg from "../assets/linkedin-mark.svg";
import emailImg from "../assets/email-mark.png";

const Socials = () => {
  return (
    <nav className="social-links flex gap-4">
      <a
        className="github-link flex flex-col items-center"
        href="https://github.com/Andreasjonsson00"
        target="_blank"
      >
        <img className="github-icon w-6" src={githubImg} alt="GitHub Icon" />
      </a>
      <a
        className="email-link flex flex-col items-center"
        href="mailto:andreasjonsson00@gmail.com"
      >
        <img
          className="email-icon w-6 mt-0.5"
          src={emailImg}
          alt="Email Icon"
        />
      </a>
      <a
        className="linkedin-link flex flex-col items-center"
        href="https://www.linkedin.com/in/andreas-jonsson-roslund"
        target="_blank"
      >
        <img
          className="linkedin-icon w-6"
          src={linkedinImg}
          alt="LinkedIn Icon"
        />
      </a>
    </nav>
  );
};

export default Socials;
