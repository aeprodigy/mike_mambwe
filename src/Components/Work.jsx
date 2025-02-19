import React from "react";
import img1 from '../Assets/img1.png';
import app1 from '../Assets/movie_app.png';
import app2 from "../Assets/netflix_clone.png";

const Work = () => {
  return (
    <div name="work" className="w-full  md:h-screen text-gray-300 bg-black">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-gray-400">
            Projects
          </p>
          <p className="py-6">Check out my Recent Work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          <div
            className="shadow-lg shadow-slate-400 group container round-md flex justify-center items-center mx-auto content-div"
            style={{
              backgroundImage: `url(${img1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/*Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Cat Adopt app
              </span>
              <div className="pt-8">
                <a href="https://catapp-silk.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/aeprodigy/catapp">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            className="shadow-lg shadow-slate-400 group container round-md flex justify-center items-center mx-auto content-div"
            style={{
              backgroundImage: `url(${app2})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/*Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                React Movie Application
              </span>
              <div className="pt-8">
                <a href="https://blumhouse.vercel.app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/aeprodigy/movie_app">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            className="shadow-lg shadow-slate-400 group container round-md flex justify-center items-center mx-auto content-div"
            style={{
              backgroundImage: `url(${app1})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {/*Hover effect */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider ">
                Ambient Flutter Application
              </span>
              <div className="pt-flex justify-center ">
                <a href="https://appetize.io/app/b_chefhpbfl5lqe5mhkxngxweame">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Work;
