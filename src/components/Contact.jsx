import React from "react";
import Socials from "./Socials";

const Contact = () => {
  return (
    <section
      id="contact"
      className="mt-5 flex flex-col items-center text-center"
    >
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        Kontakta mig
      </h2>

      <p className="font-medium">
        Hör gärna av dig om du vill samarbeta, har en fråga eller bara vill ta
        kontakt.
      </p>

      <div className="flex flex-col items-center max-w-md mt-2 mb-20">
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
