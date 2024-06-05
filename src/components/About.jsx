import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b  from-gray-800 to-black text-white md:w-full"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-3">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-12">
          Greetings! I'm Raj Jadhav, a passionate MERN Stack Developer driven by
          an insatiable curiosity and commitment to excellence. With expertise
          in HTML, CSS, ReactJS, NodeJS, ExpressJS, MongoDB, and languages like
          C, C++, JavaScript, Java, and Python, I craft immersive digital
          experiences. My journey began with fascination, evolving into a
          relentless pursuit of mastery, thriving in collaborative environments
          to push boundaries.
        </p>

        <br />

        <p className="text-xl">
          Beyond coding, I thrive in collaborative environments where diverse
          perspectives fuel innovation. Throughout my career, I've been
          fortunate to engage in a myriad of projects, each presenting unique
          challenges that have sparked my creative thinking and drive to push
          boundaries. Join me as I continue to explore and redefine the future
          of web development.
        </p>
      </div>
    </div>
  );
};

export default About;
