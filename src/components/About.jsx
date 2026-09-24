import React from "react";

const About = () => {
  return (
    <section id="about" className="px-6 py-16 scroll-mt-10">
      <h2 className="mt-5 text-3xl font-bold text-left md:text-center">Om mig</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 max-w-4xl mx-auto gap-8 text-left border-b border-[#2e303a] pb-20">
        <p className="leading-relaxed">
          Jag tycker om att bygga webbapplikationer med både{" "}
          <span className="text-purple-700 font-medium">
            frontend och backend
          </span>{" "}
          och är särskilt intresserad av hur en applikations olika delar
          samspelar. Jag gillar att ta en idé och göra den till något
          fungerande, samtidigt som applikationen är enkel att använda och
          förstå.
          <br />
          <br />
          Jag har arbetat med tekniker som{" "}
          <span className="text-purple-700 font-medium">
            React, TypeScript, Node.js, PHP
          </span>{" "}
          och <span className="text-purple-700 font-medium">SQL</span>. Genom
          olika projekt har jag fått erfarenhet av API:er, databaser,
          användargränssnitt och backendfunktionalitet. Projekten har gett mig
          en förståelse för hur en webbapplikations olika lager kopplas samman
          och kommunicerar med varandra.
        </p>

        <p className="leading-relaxed">
          Mitt fokus är att skriva{" "}
          <span className="text-purple-700 font-medium">
            ren och underhållbar kod
          </span>{" "}
          och samtidigt skapa responsiva designer som fungerar väl på olika
          enheter. Jag gillar att lösa problem och ta reda på varför något inte
          fungerar, oavsett om det gäller frontend, backend eller data. Jag
          tycker också om att lära mig nya tekniker och hitta bättre sätt att
          arbeta med mina projekt.
          <br />
          <br />
          Just nu söker jag{" "}
          <span className="text-purple-700 font-medium">LIA-praktik</span> under
          två perioder:{<br />}{" "}
          <em>
            LIA 1: 4 januari – 12 mars 2027 och LIA 2: 26 april – 11 juni 2027.
          </em>{" "}
          Där hoppas jag kunna utvecklas som utvecklare och lära av mer erfarna
          utvecklare och bidra i riktiga projekt.
        </p>
      </div>
    </section>
  );
};

export default About;
