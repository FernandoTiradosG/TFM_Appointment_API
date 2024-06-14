import React from "react";
import Fer from "../assests/image/Fernando.webp";
import Diego from "../assests/image/Diego.webp";

const About = () => {
  return (
    <div name="Sobre Mi" className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        
        {/* Main Text Section */}
        <div className="pb-8 mt-24 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">Nosotros</p>
        </div>
        
        {/* Image and Additional Content Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          
          <div className="w-full md:w-1/2 p-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-bold">Fernando</h2>
            <p className="text-gray-500 py-4">
              Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. 
              You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. 
            </p>
          </div>
          
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <img src={Fer} alt="Fernando" className="w-1/2" />
          </div>
          
        </div>

        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8">
          
        <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <img src={Diego} alt="Diego" className="w-1/2" />
          </div>

          <div className="w-full md:w-1/2 p-4 text-center md:text-left">
            <h2 className="text-2xl sm:text-4xl font-bold">Diego</h2>
            <p className="text-gray-500 py-4">
              Your bones don't break, mine do. That's clear. Your cells react to bacteria and viruses differently than mine. 
              You don't get sick, I do. That's also clear. But for some reason, you and I react the exact same way to water. 
            </p>
          </div>          
        </div>
      </div>
    </div>
  )
};

export default About;
