import React from "react";
import BigImage from "../assets/BigImg4.jpg";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div
      name="home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 md:w-full"
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold  text-white">
            Hi, I'm a Full Stack Developer (MERN)
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            Welcome to my dynamic portfolio! I'm an aspiring MERN Stack
            Developer fuelled by boundless energy and a thirst for growth. With
            expertise in MongoDB, Express.js, React.js, and Node.js, I craft
            immersive digital experiences that push boundaries. Join me on this
            exciting journey where passion meets innovation, redefining the
            future of web development
          </p>

          <div>
            <Link to="projects" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
              Projects
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
        <div>
          <img
            // Put your own pic here
            src={BigImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
