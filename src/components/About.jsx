import React from "react";
// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const About = () => {
  return (
    <div
      name="about"
      className="py-[50px] h-screen w-full bg-gradient-to-b from-gray-800 to-black text-white "
    >
      <div
   
        className="max-w-screen-lg px-4 h-screen mx-auto flex flex-col justify-center w-full"
      >
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-sm md:text-lg mt-3 text-gray-100">
          {" "}
          My name is Emeka Manuel. I am a Front-end (React) Developer and
          Technical Writer.{" "}
        </p>
        <p className="text-sm md:text-lg text-gray-100">
          My skills are mainly focused on front-end web technologies which
          include HTML, CSS, JavaScript, React, Next, Redux, Node and Express Js.
          <p className="text-sm md:text-lg mt-3 text-gray-100">
            I also possess good technical writing proficiency which I use as a
            tool to convey my thoughts to the developers community. You can
            check out some of my{" "}
            <a href="#m" className="border-b-2 border-blue-300">
              articles here
            </a>
            .
          </p>
          <p className="mt-3 text-sm md:text-lg text-gray-100">
            Additionally, I have a solid experience with Version-Control -
            Git/Github, SSR, Scrum / Agile methodologies, SEO optimization, CI /
            CD as a plus.
          </p>
          <p className="mt-3 text-sm md:text-lg text-gray-100">
            I also possess good team-work characteristics as well as competitive
            leadership skills, public speaking skills and good communication
            skills. When I'm not coding, I am either reading, surfing twitter or
            watching movies.
          </p>
        </p>
      </div>
    </div>
  );
};

export default About;
