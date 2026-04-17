import React from "react";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section id="contact" className="mt-30 flex flex-col items-center text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-8">Get in Touch</h2>

      <p className="">
        Feel free to reach out if you want to collaborate, have a question, or
        just want to connect.
      </p>

      <div className="flex flex-col items-center text-center max-w-md mt-2 mb-20">
        <a href="tel:+46768323427">+46 76 832 34 27</a>
        <a
          href="mailto:andreasjonsson00@gmail.com"
          className="text-purple-400 hover:underline mt-1 mb-3"
        >
          andreasjonsson00@gmail.com
        </a>
        <Socials />
      </div>
    </section>
  );
};

export default Contact;
