import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from "react-router-dom";

const NavBar = () => {

  const [nav, setNav] = useState(false);

  const links = [
    { id: 1, link: "Home", url: "/"},
    { id: 2, link: "Nosotros", url: "/nosotros"},
    { id: 3, link: "Escaperoom", url: "/escape-room"},
    { id: 4, link: "Reserva", url: "/inicio"},
    { id: 5, link: "Contacto", url: "/contacto"},
  ];
  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-gradient-to-b from-black fixed">
      <div>
        <h1 className="text-5xl font-signature ml-2">FTG</h1>
      </div>

      <ul className="hidden md:flex text-decoration-line: none">
        {links.map(({id, link, url}) => (
          <li key={id} className="ml-4 cursor-pointer capitalize font-medium text-[#01CB17] hover:scale-105 duration-200"><Link to={url} smooth duration={500}>{link}</Link></li>
        ))}
      </ul>

      <div onClick={() => setNav(!nav)} className="cursor-pointer pr-4 z-10 text-[#01CB17] md:hidden">
        {nav? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-20 w-full h-screen bg-gradient-to-b from-black to-g[#01CB17] text-[#01CB17]">
          {links.map(({id, link, url}) => (
            <li key={id} className="ml-4 cursor-pointer capitalize font-medium text-[#01CB17] hover:scale-105 duration-200"><Link to={url} onClick={() => setNav(!nav)} smooth duration={500}>{link}</Link></li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default NavBar;
