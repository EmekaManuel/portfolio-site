import React from "react";
// import image from "../assets/hero.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll/modules";

import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div 
      name="home"
      className=" h-screen w-full bg-gradient-to-b from-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto w-full flex flex-col items-center justify-center h-screen px-4 md:flex-row">
        <div>
          <motion.p
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="text-gray-300 py-4 xs:mt-10 max-w-md"
          >
            Hello, my name is Onyewuchi Emeka{" "}
          </motion.p>

          <motion.span
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="text-3xl sm:text-5xl font-bold text-white"
          >
            I'm a <br />
            <TypeAnimation
              sequence={[" Frontend Developer", 2000, "Technical Writer", 2000]}
              speed={50}
              className="text-white text-2xl sm:text-5xl font-bold"
              wrapper="span"
              repeat={Infinity}
            />
          </motion.span>

          <motion.p
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="text-gray-300 py-4 max-w-md"
          >
            I am a Front-end developer with expertise using JavaScript
            technologies. I have 2 years of experience building and designing
            interactive and user-friendly web interfaces. Currently I love to
            work on web applications using technologies such as HTML. CSS.
            React, Next, Tailwind and NodeJS.
          </motion.p>

          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-col"
          >
            <div>
              <Link
                to="portfolio"
                smooth
                duration={600}
                className="group text-white w-fit px-4 py-2 my-2 flex items-center rounded-md 
                    bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 ">
                  <MdOutlineKeyboardArrowRight className="ml-1" />
                </span>
              </Link>
            </div>
            <div>
              <a href="https://docs.google.com/document/d/1v-C_gxBOnOC6__6iezYt494SFay8erOj_T-_HGeJ55U/edit?usp=sharing">

              <div
                smooth
                duration={600}
                className="group text-white w-fit px-4 py-2 my-2 flex items-center rounded-md 
                bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
                >
                View Resume
                <span className="group-hover:rotate-90 ">
                  <MdOutlineKeyboardArrowRight className="ml-1" />
                </span>
              </div>
                </a>
            </div>
          </motion.div>
        </div>

        {/* <motion.div    
         variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.4 }}
            className="flex flex-col">
          <img
            src={image}
            alt="my profile"
            className="rounded-2xl mx-auto hidden md:flex md:w-[300px] h-[400px] w-[700px] "
          />
        </motion.div> */}
      </div>
    </div>
  );
};

export default Home;
