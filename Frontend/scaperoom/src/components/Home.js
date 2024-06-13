import React from "react";
//import MyImage from "../assests/image/amazon.webp";
import NewImage from "../assests/image/Imagen1.webp";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="Home" className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800">
      
      <div className="h-16 bg-gradient-to-b from-black via-black to-gray-900"></div> {/* Space for header */}

      <div className="max-w-screen-lg mx-auto px-4 flex flex-col items-center justify-center h-full">
        
        {/* Main Image Section */}
        <div className="w-full h-2/3 flex items-center justify-center mb-4">
          <img src={NewImage} alt="ScapeRoom" className="rounded-2xl w-full h-full object-cover" />
        </div>
        
        {/* Text and Video Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl sm:text-4xl font-bold text-white">Escape Room Leganés: Descubre la sala más intrigante.</h2>
            <p className="text-gray-500 py-4">
              Disponéis de 60 minutos para resolver los enigmas trabajando en equipo y lograr salir...¿Lo conseguiréis?
            </p>
            <div>
              <Link to="Portfolio" smooth duration={500} className="group text-white w-fit px-6 py-3 my-2 flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <div className="w-3/4 h-48 bg-gray-700 rounded-lg flex justify-center items-center">
              <MdOutlineKeyboardArrowRight size={50} className="text-white" />
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
