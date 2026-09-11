import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 py-16 scroll-mt-10">
      <h2 className="mt-5 text-3xl font-bold text-center">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 max-w-4xl mx-auto gap-8 text-center md:text-left border-b border-[#2e303a] pb-20">
        <p className="leading-relaxed">
          I enjoy building web applications from both the{" "}
          <span className="text-purple-700 font-medium">
            frontend and backend
          </span>{" "}
          and I’m especially interested in how different parts of an application
          work together. I like taking an idea and turning it into something
          functional, while making sure the application is easy to use and
          understand.
          <br />
          <br />
          I’ve worked with technologies such as{" "}
          <span className="text-purple-700 font-medium">
            React, TypeScript, Node.js, PHP
          </span>{" "}
          and <span className="text-purple-700 font-medium">SQL</span>. Through
          different projects, I’ve gained experience working with APIs,
          databases, user interfaces, and backend functionality. These projects
          have helped me understand how the different layers of a web
          application connect and communicate with each other.
        </p>

        <p className="leading-relaxed">
          My focus is on writing{" "}
          <span className="text-purple-700 font-medium">
            clean and maintainable code
          </span>{" "}
          while creating responsive designs that work well across different
          devices. I enjoy solving problems and figuring out why something isn’t
          working, whether it’s a frontend issue, a backend problem, or
          something involving data. I also enjoy learning new technologies and
          finding better ways to approach the projects I work on.
          <br />
          <br />
          Right now, I’m looking to{" "}
          <span className="text-purple-700 font-medium">
            grow as a developer
          </span>{" "}
          and gain experience working in a professional development team. I’m
          motivated to learn from more experienced developers and contribute to
          real projects.
        </p>
      </div>
    </section>
  );
};

export default About;
