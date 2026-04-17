import React from "react";

const About = () => {
  return (
    <section className="px-6 py-16">
      <h2 className="mt-10 text-3xl font-bold text-center text-purple-400">About Me</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 mt-8 max-w-4xl mx-auto gap-8 text-gray-300 text-center md:text-left">
        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
          reiciendis ipsa repellat nemo veniam exercitationem veritatis nobis
          tempora odio! Reiciendis neque molestiae eveniet in sed ut similique
          ratione provident ipsam, odit suscipit commodi officia quam <br /> <br />
          praesentium distinctio autem, veniam dicta adipisci repudiandae!
          Perspiciatis dolor, distinctio in eius aliquam impedit illum.
        </p>

        <p className="leading-relaxed">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, numquam
          minus? Repellendus itaque consequatur alias nulla a iste amet
          reiciendis, possimus porro quasi necessitatibus, sit doloribus quidem. <br /> <br />
          Mollitia a est libero iste quos et in neque aperiam reprehenderit,
          ipsum nesciunt veritatis explicabo sapiente quia nemo. Velit quo
          incidunt neque libero.
        </p>
      </div>
    </section>
  );
};

export default About;
