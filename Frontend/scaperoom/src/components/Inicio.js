import React from 'react';
import { Link } from 'react-router-dom';

function Inicio() {
  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-white mb-8">Bienvenido a nuestra aplicación</h2>
      <div className="flex space-x-4">
        <Link to="/registro">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-[#00901A] to-[#01CB17] text-white hover:scale-105 duration-300">
            Registrarse
          </button>
        </Link>
        <Link to="/login">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-[#00901A] to-[#01CB17] text-white hover:scale-105 duration-300">
            Iniciar Sesión
          </button>
        </Link>
      </div>
    </div>
  );
  
}

export default Inicio;
