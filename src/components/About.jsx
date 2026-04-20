import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 py-16 scroll-mt-10">
      <h2 className="mt-5 text-3xl font-bold text-center">
        About Me
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 max-w-4xl mx-auto gap-8 text-center md:text-left border-b border-[#2e303a] pb-20">
        <p className="leading-relaxed">
          I'm a{" "}
          <span className="text-purple-700 font-medium">
            fullstack developer student
          </span>{" "}
          with a strong interest in building modern, user-friendly web
          applications. I enjoy working with both frontend and backend and
          turning ideas into real, functional products.
          <br />
          <br />
          My focus is on writing clean, maintainable code and creating
          responsive designs that work well on all devices.
        </p>

        <p className="leading-relaxed">
          I've worked on projects involving APIs, databases, and interactive
          user interfaces, which has given me a solid foundation in web
          development. I enjoy{" "}
          <span className="italic">
            solving problems and continuously improving my skills
          </span>
          .
          <br />
          <br />
          Right now, I'm looking to{" "}
          <span className="text-purple-700 font-medium">
            grow as a developer
          </span>{" "}
          and take on new challenges in a professional development team.
        </p>
      </div>
    </section>
  );
};

export default About;
