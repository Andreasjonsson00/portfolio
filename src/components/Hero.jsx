import React from "react";
import profileImg from "../assets/profile-pic.jpeg";
import githubImg from "../assets/github-mark.svg";
import linkedinImg from "../assets/linkedin-mark.svg";
import emailImg from "../assets/email-mark.png";

const Hero = () => {
  return (
    /* Left side with profile image and social links */
    <section className="hero flex items-start justify-between p-10 mt-10">
      <div className="hero-left flex flex-col items-start w-100">
        <p className="text-left">Hi, I am</p>
        <h2 className="text-left">Andreas Jonsson Roslund</h2>

        <h1 className="text-left leading-none">FULLSTACK DEVELOPER</h1>
        <p className="description text-left">
          !Description! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Consequatur eveniet nostrum, sapiente facere possimus, expedita sunt
          delectus iste praesentium molestiae, beatae illo nam velit obcaecati
          culpa consectetur dignissimos reiciendis !Description!
        </p>
        <button className="bg-blue-800 text-white px-4 py-2 rounded mt-5 button-left">
          View my projects
        </button>
      </div>

      {/* Right side with profile image and social links */}
      <div className="hero-right flex flex-col items-center mt-3 mr-5">
        <img
          src={profileImg}
          className="w-50 rounded-full mb-2"
          alt="Andreas Jonsson Roslund"
        />
        <nav className="social-links flex gap-4">
          <a
            className="github-link flex flex-col items-center"
            href="https://github.com/Andreasjonsson00"
            target="_blank"
          >
            <img
              className="github-icon w-5"
              src={githubImg}
              alt="GitHub Icon"
            />
          </a>
          <a
            className="linkedin-link flex flex-col items-center"
            href="https://www.linkedin.com/in/andreas-jonsson-roslund"
            target="_blank"
          >
            <img
              className="linkedin-icon w-5"
              src={linkedinImg}
              alt="LinkedIn Icon"
            />
          </a>
          <a
            className="email-link flex flex-col items-center"
            href="mailto:andreasjonsson00@gmail.com"
          >
            <img className="email-icon w-5" src={emailImg} alt="Email Icon" />
          </a>
        </nav>
      </div>
    </section>
  );
};

export default Hero;
