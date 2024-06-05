import React from "react";
import TodoListsApp from "../assets/projects/todoListsApp.png";
import installNode from "../assets/projects/installNode.jpg";
import navbar from "../assets/projects/navbar.jpg";
import Flixxit from "../assets/projects/Flixxit.png";
import reactSmooth from "../assets/projects/reactSmooth.jpg";
import reactWeather from "../assets/projects/reactWeather.jpg";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: Flixxit,
      githubRepo: "https://github.com/rajjadhav20/Flixxit",
      deployLink: "https://flixxit-i4on.onrender.com/",
    },
    {
      id: 2,
      src: TodoListsApp,
      githubRepo:"https://github.com/rajjadhav20/Todo",
      deployLink:"https://todo-seven-henna.vercel.app/",
      
    },
    {
      id: 3,
      src: reactWeather,
      // githubRepo: ,
      // deployLink:,
    },
    // {
    //   id: 4,
    //   src: navbar,
    //   // githubRepo: ,
    //   // deployLink:,
    // },
    // {
    //   id: 5,
    //   src: reactSmooth,
    //   // githubRepo: ,
    //   // deployLink:,
    // },
    // {
    //   id: 6,
    //   src: installNode,
    //   // githubRepo: ,
    //   // deployLink:,
    // },
  ];

  return (
    <div
      name="projects"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Projects
          </p>
          <p className="py-6">Chech out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {projects.map(({ id, src, githubRepo, deployLink }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={deployLink} target="_blank" rel="noopener noreferrer">Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={githubRepo} target="_blank" rel="noopener noreferrer">Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;