import React from "react";
import CSS from '../assests/image/CSS3.png';
import HTML from '../assests/image/HTML.png';
import REACT from '../assests/image/REACT.png';
import FIGMA from '../assests/image/FIGMA.png';
import JAVASCRIPT from '../assests/image/JS.png';
import NODEJS from '../assests/image/NODEJS.png';
import GITHUB from '../assests/image/GITHUB.png';
import MONGO from '../assests/image/MONGO.png';
import TW from '../assests/image/TW.png';


const Habilidades = () => {

  const habilidades = [
    { id: 1, src: CSS, title: 'CSS', style: 'shadow-blue-500'},
    { id: 2, src: HTML, title: 'HTML', style: 'shadow-orange-500'},
    { id: 3, src: REACT, title: 'REACT', style: 'shadow-cyan-500'},
    { id: 4, src: FIGMA, title: 'FIGMA', style: 'shadow-purple-500'},
    { id: 5, src: JAVASCRIPT, title: 'JAVASCRIPT', style: 'shadow-yellow-500'},
    { id: 6, src: NODEJS, title: 'NODEJS', style: 'shadow-green-500'},
    { id: 7, src: GITHUB, title: 'GITHUB', style: 'shadow-gray-500'},
    { id: 8, src: MONGO, title: 'MONGO-DB', style: 'shadow-green-500'},
    { id: 9, src: TW, title: 'TAILWIND-CSS', style: 'shadow-cyan-500'},
  ]

  return (
    <div name="Habilidades" className="bg-gradient-to-b from-gray-800 w-full to-black text-white md:h-screen" >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">Habilidades</p>
          <p className="py-6">Estas son las tecnologias con las que he trabajado.</p>
        </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0 ">
            {habilidades.map (({id, src, title, style}) => (
              <div key={id} className={`shadow-md hover:animate-bounce animate-infinite animate-duration-300 animate-ease-linear py-2 rounded-lg ${style}`}>
                <img src={src} alt="" className="w-20 mx-auto"/>
                <p className="mt-4"></p>
                <div className="flex items-center justify-center">
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">{title}</button>
                </div>
              </div>
            ))}
          </div>
      </div>
    </div>
  )
};

export default Habilidades;