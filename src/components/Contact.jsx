import React from "react";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section
      id="contact"
      className="flex flex-col items-start md:items-center text-left md:text-center px-10"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Kontakta mig
      </h2>

      <p className="font-medium">
        Hör gärna av dig om du vill samarbeta, har en fråga eller bara vill ta
        kontakt.
      </p>

      <div className="flex flex-col max-w-md mt-2 mb-20 md:items-center">
        <a href="tel:+46768323427">+46 76 832 34 27</a>
        <a
          href="mailto:andreasjonsson00@gmail.com"
          className="text-blue-600 hover:underline mt-1 mb-3"
        >
          andreasjonsson00@gmail.com
        </a>
        <Socials />
      </div>
    </section>
  );
};

export default Contact;
