import React from "react";
import project1 from "../assets/portfolio/zani-stores.png";
import project2 from "../assets/portfolio/aje-luxury.png";
import project3 from "../assets/portfolio/transl-x.png";
import project4 from "../assets/portfolio/crypto.png";
import project5 from "../assets/portfolio/gym.png";
import project6 from "../assets/portfolio/nodeaid.png";

// import { motion } from "framer-motion";
// import { fadeIn } from "../variants";

const Portfolio = () => {
  const portfolioItems = [
    {
      id: 1,
      src: project1,
      link: "https://m-zani.netlify.app"
    },
    {
      id: 2,
      src: project2,
      link: "https://aje-luxury.netlify.app"

    },
    {
      id: 3,
      src: project3,
      link: "https://transl-x.netlify.app"

    },
    {
      id: 4,
      src: project4,
      link: "https://satoshi-check.netlify.app"

    },
    {
      id: 5,
      src: project5,
      link: "https://m-zani.netlify.app"

    },
    {
      id: 6,
      src: project6,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-gray-800 to-black text-white h-full w-full "
    >
      <div
        className="max-w-screen-lg px-4 md:h-screen h-full mx-auto grid grid-cols-1 md:flex md:flex-col justify-center w-full"
        >
        <div className="pb-4">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">
            Here are some of the projects I have worked on.
          </p>
        </div>

        <div className="" >
          
        <div className="grid grid-cols-1 w-full gap-y-8 items md:grid-cols-3 gap-x-3">
          {portfolioItems.map(({ id, src, link }) => (
            <div key={id} className="shadow-md shadow-gray-400 rounded-lg">
              <img
                src={src}
                alt=""
                srcset=""
                className="rounded-md duration-200"
              />
              <div className="flex items-center justify-center">
                <a href={link}>
                <button className="w-1/2 px-4 py-1 m-2 duration-200">
                  Demo
                </button>
                </a>
                <button className="w-1/2 px-4 py-1 m-2 duration-200">
                  Code
                </button>
              </div>
            </div>
          ))}
        </div>
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
