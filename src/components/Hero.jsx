import React from "react";
import profileImg from "../assets/profile-pic.webp";
import Socials from "./Socials";

const Hero = () => {
  return (
    /* Left side with profile image and social links */
    <section className="flex flex-col-reverse md:flex-row items-start justify-center md:gap-40 p-10 mt-10 border-b border-[#2e303a] pb-20">
      <div className="flex flex-col items-start w-100">
        <p className="text-left ml-0.5">Hi, I am</p>
        <h2 className="text-left">Andreas Jonsson Roslund</h2>

        <h1 className="text-left leading-none">FULLSTACK DEVELOPER</h1>
        <p className="text-left">
          I’m a{" "}
          <span className="text-purple-700 font-medium">
            fullstack developer
          </span>{" "}
          focused on building clean, responsive, and user-friendly web
          applications. I enjoy{" "}
          <span className="italic">turning ideas into real products</span> using
          modern technologies.
        </p>
        <a
          href="#projects"
          className="bg-blue-900 px-4 py-2 rounded mt-5 inline-block hover:bg-blue-700 transition"
        >
          View my projects
        </a>
      </div>

      {/* Right side with profile image and social links */}
      <div className="flex flex-col items-center mx-auto md:mx-0 md:mr-5 mb-10 md:mb-0">
        <div className="p-1 rounded-full bg-linear-to-r  from-purple-800 to-blue-800">
          <img
            src={profileImg}
            className="w-48 rounded-full"
            alt="Andreas Jonsson Roslund"
          />
        </div>
        <Socials />
      </div>
    </section>
  );
};

export default Hero;
