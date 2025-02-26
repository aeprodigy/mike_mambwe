import React from "react";
import Javascript from "../Assets/javascript.png";
import Css from "../Assets/css.png";
import Github from "../Assets/github.png";
import HTML from "../Assets/html.png";
import REACT from "../Assets/react.png";
import Android from "../Assets/android.png";
import java from "../Assets/java.png";
import php from "../Assets/php.png";
import flutter from "../Assets/flutter.png";
import laravel from "../Assets/laravel.png";

// imports on top of this line
const Skills = () => {
  return (
    <div
      name="skills"
      className="w-full h-screen mb-4 bg-black text-gray-300 font-bold"
    >
      {/*Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl inline font-bold border-b-4 border-[#8892b0]">
            Skills
          </p>
          <p className="py-4">These are the Technonologies I've worked with.</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#9e9e9e3a] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={HTML} alt="html icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#9e9e9e3a] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Css} alt="html icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#9e9e9e3a] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Javascript} alt="html icon" />
            <p className="my-4">JavaScript</p>
          </div>
          <div className="shadow-md shadow-[#9e9e9e3a] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={REACT} alt="html icon" />
            <p className="my-4">React</p>
          </div>
          <div className="shadow-md shadow-[#9e9e9e3a] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Github} alt="html icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#9e9e9e3a] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={Android} alt="html icon" />
            <p className="my-4">Android</p>
          </div>
          <div className="shadow-md shadow-[#9e9e9e3a] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 mx-auto" src={java} alt="html icon" />
            <p className="my-4">Java</p>
          </div>
          <div className="shadow-md shadow-[#9e9e9e3a] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20 h-20 mx-auto" src={flutter} alt="html icon" />
            <p className="my-4">Flutter</p>
          </div>
          <div className="shadow-md shadow-[#9e9e9e3a] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20  mx-auto" src={php} alt="html icon" />
            <p className="my-4">PHP</p>
          </div>
          <div className="shadow-md shadow-[#9e9e9e3a] hover:scale-110 duration-500 cursor-pointer">
            <img className="w-20  mx-auto" src={laravel} alt="html icon" />
            <p className="my-4">Laravel</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
