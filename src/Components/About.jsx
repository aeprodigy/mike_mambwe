import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-[90vh] bg-black text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl fon font-bold inline border-b-4 border-[#8892b0] ">
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className="max-w-[1000px] w-full  grid sm:grid-cols-2 gap-8 px-4">
            <div>
              <p className="sm:text-right text-4xl font-bold">
                Hello. I'm Mike, nice to meet you. Please take a look around.
              </p>
            </div>
            <div>
                <p>I am so passionate about building excellent software that improves the lives of those around me. I specialize in creating
                software for clients ranging from individual and small-bussineses all the way to larger enterprise corporations. What would you if you had a software expert available at your fingertips?</p>
            </div>
          </div>
        
      </div>
    </div>
  );
};

export default About;
