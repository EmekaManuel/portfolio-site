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
      name: "M-zani",
      description: "hello world hello world",
      id: 1,
      image: project1,
      demoLink: "https://m-zani.netlify.app",
      github: "https://github.com/EmekaManuel/zani-store"
    },
    {
      name: "Aje Luxury",
      description: "hello world hello world",
      id: 2,
      image: project2,
      demoLink: "https://aje-luxury.netlify.app",
      github: "https://github.com/EmekaManuel/aje-luxury"

    },
    {
      name: "Transl-x",
      description: "hello world hello world",
      id: 3,
      image: project3,
      demoLink: "https://transl-x.netlify.app",
      github: "https://github.com/EmekaManuel/transl-x"

    },
    {
      name: "Satoshi-Check",
      description: "hello world hello world",
      id: 4,
      image: project4,
      demoLink: "https://satoshi-check.netlify.app",
      github: "https://github.com/EmekaManuel/satoshi-check"

    },
    {
      name: "Watch It",
      description: "hello world hello world",
      id: 5,
      image: project5,
      demoLink: "https://m-zani.netlify.app",
      github: "hello world hello world"

    },
    {
      name: "hello world hello world",
      description: "hello world hello world",
      id: 6,
      image: project6,
      demoLink: "hello world hello world",
      github: "hello world hello world"
    },
  ];

  return (
    <div className="bg-gradient-to-b sm:px-5 from-gray-800 to-black text-white md:min-h-screen py-12">
    <div className="max-w-screen-lg px-4 mx-auto">
      <div className="pb-4">
        <h2 className="text-4xl font-bold mb-4">Portfolio</h2>
        <p className="text-lg">Here are some of the projects I have worked on.</p>
      </div>
      
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {portfolioItems.map(({ id, name, description, image, demoLink, github }) => (
        <div key={id}>
          <div className="relative
           overflow-hidden">
            <img src={image} alt={name} className="w-full" />
            <div className="absolute inset-0 bg-black bg-opacity-20 hover:bg-black hover:bg-opacity-50 p-2 flex flex-col justify-end">
              <div className="text-[16px] w-fit py-[5px] px-[5px] rounded-md text-black bg-slate-100 font-normal mb-1">{name}</div>
            </div>
          </div>
          <div className="flex bg-slate-900 justify-center p-2 rounded-b-md ">
                  <a href={demoLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                    <button className="w-full h-full py-2 text-white rounded-lg transition-colors duration-300 hover:bg-blue-700 focus:outline-none">
                      Demo
                    </button>
                  </a>
                  <a href={github} target="_blank" rel="noopener noreferrer" className="flex-1 ml-2">
                    <button className="w-full py-2 px-4 text-white rounded-lg transition-colors duration-300 hover:bg-slate-600 focus:outline-none">
                      Code
                    </button>
                  </a>
                </div>
            
        </div>
        ))}
      </div>
    </div>
  </div>
  );
};

export default Portfolio;
