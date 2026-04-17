import React from "react";
import profileImg from "../assets/profile-pic.jpeg";
import Socials from "./Socials";

const Hero = () => {
  return (
    /* Left side with profile image and social links */
    <section className="hero flex flex-col-reverse md:flex-row items-start justify-between p-10 mt-10 border-b border-[#2e303a] pb-20">
      <div className="hero-left flex flex-col items-start w-100">
        <p className="text-left ml-0.5">Hi, I am</p>
        <h2 className="text-left">Andreas Jonsson Roslund</h2>

        <h1 className="text-left leading-none">FULLSTACK DEVELOPER</h1>
        <p className="description text-left">
          !Description! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur eveniet nostrum, sapiente facere possimus, expedita sunt
          delectus iste praesentium molestiae, beatae illo nam velit obcaecati
          culpa consectetur dignissimos reiciendis !Description!
        </p>
        <a
          href="#projects"
          className="bg-blue-900 px-4 py-2 rounded mt-5 button-left inline-block hover:bg-blue-700 transition"
        >
          View my projects
        </a>
      </div>

      {/* Right side with profile image and social links */}
      <div className="hero-right flex flex-col items-center mt-3 mx-auto md:mx-0 md:mr-5 mb-10 md:mb-0">
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
