import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 p-4 mt-auto">
      <div className="flex justify-between">
        <div>
          <p className="text-white">Copyright y normas</p>
        </div>
        <div className="flex space-x-4">
          <p className="text-white">Información</p>
          <p className="text-white">Colaboradores</p>
          <p className="text-white">Contactos</p>
          <p className="text-white">Dirección</p>
          <p className="text-white">Mapa</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
