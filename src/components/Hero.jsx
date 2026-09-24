import React from "react";
import profileImg from "../assets/profile-pic.webp";
import Socials from "./Socials";

const Hero = () => {
  return (
    /* Left side with profile image and social links */
    <section
      id="home"
      className="flex flex-col-reverse md:flex-row items-start justify-center md:gap-40 p-10 mt-20 border-b border-[#2e303a] pb-20 scroll-mt-24"
    >
      <div className="flex flex-col items-start w-100">
        <p className="text-left ml-0.5">Hej, jag heter</p>
        <h2 className="text-left">Andreas Jonsson Roslund</h2>

        <h1 className="text-left leading-none">FULLSTACK-UTVECKLARE</h1>
        <p className="text-left">
          Jag studerar till{" "}
          <span className="text-purple-700 font-medium">
            fullstack-utvecklare
          </span>{" "}
          och brinner för att skapa rena, responsiva och användarvänliga
          webbapplikationer. Jag tycker om att{" "}
          <span className="italic">förverkliga idéer</span> med moderna
          tekniker.
        </p>
        <p className="text-left mt-3">
          Jag söker  <span className="text-purple-700 font-medium">praktik</span> under två LIA-perioder: {<br />} LIA 1: 4 januari – 12 mars
          2027 och{<br />} LIA 2: 26 april – 11 juni 2027.
        </p>
        <a
          href="#featured"
          className="bg-blue-800 px-4 py-2 rounded mt-5 inline-block hover:bg-blue-700 transition duration-200"
        >
          Se mina projekt
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
