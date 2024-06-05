import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b  from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About Me
          </p>
        </div>

        <p className="text-xl mt-10">
          Greetings! I'm Raj Jadhav, an ardent MERN Stack Developer driven by an
          insatiable curiosity and unwavering commitment to excellence in web
          development. My journey into the realm of coding began with a spark of
          fascination, evolving into a rentless pursuit of mastery. With
          proficiency in HTML, CSS, ReactJS, NodeJS, ExpressJS, MongoDB and
          programming languages like C, C++, JavaScript and Basics of Java and
          Python. I specialize in crafting immersive digital experiences that
          captivate audiences. Beyond coding, I thrive in collaborative
          environments where the synergy of diverse perspectives fuels
          innovation.
        </p>

        <br />

        <p className="text-xl">
          Throughout my career, I've been fortunate to engage with a myriad of
          projects, each presenting unique challenges that have fueled my
          creative thinking and drive to push boundaries. From architecting
          dynamic e-learning visualizations like DSA Vizualizer to engineering
          robust web applications, every endeavor has served as a platform for
          continuous growth and learning. My methodology is a fusion of
          technical prowess, strategic acumen, and meticulous attention to
          detail, ensuring that every project I embark upon not only meets but
          surpasses expectations, yielding tangible and impactful results.
        </p>
      </div>
    </div>
  );
};

export default About;
