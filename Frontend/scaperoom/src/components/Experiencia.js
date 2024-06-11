import React from "react";
import Freelance from "../assests/image/Cine-Audiovisual.jpg";
import Amazon from "../assests/image/amazon.webp";
import Ryanair from "../assests/image/aeropuerto.webp";


const Experiencia = () => {

  const Experiencia = [
    { id: 1, src: Freelance, position: "Cine y televisión, Freelance", url: 'https://github.com/FernandoTiradosG/DAWEC/tree/main/T2/SPRINT%202/ejercicio4'},
    { id: 2, src: Ryanair, position: "Agente de pasaje", url: 'https://github.com/FernandoTiradosG/DAWEC/tree/main/T1/SPRINT%205'},
    { id: 3, src: Amazon, position: "mozo de almacen", url: 'https://github.com/FernandoTiradosG/DAWEC/tree/main/T1/SPRINT%204/Ejercicio4'},
  ]

  return (
    <div name="Experiencia" className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen" >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full" >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">Experiencia</p>
          <p className="py-6">Otras experiencias laborales que he tenido.</p>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {Experiencia.map (({id, src, position}) => (
              <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
                <img src={src} alt="" className=" rounded-md duration-200 hover:scale-105"/>

                <div className="flex items-center justify-center">
                  <p className="text-center w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 hover:text-green-500">{position}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
};

export default Experiencia;