import React from "react";
import Fer from "../assests/image/Fernando.webp";
import Diego from "../assests/image/Diego.webp";
import Experiment from "../assests/image/ExperimentoX-547.webp";

const About = () => {
  return (
    <div name="Sobre Mi" className="w-full bg-gradient-to-b from-gray-800 to-black text-white">
      
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        
        {/* Main Text Section */}
        <div className="pb-8 mt-24 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">Proyecto X-547</p>
        </div>
        <div className="text-base mb-8 text-center">
          <p>¡Atención, almas intrépidas y buscadores de lo desconocido!</p>
          <p>En lo más profundo de las sombras, donde la ciencia y el horror se entrelazan, buscamos valientes sujetos de prueba para un experimento revolucionario que podría cambiar el curso de la humanidad. Este no es un simple llamado, sino una invitación a adentrarse en un mundo repleto de enigmas y secretos oscuros. Una casa, contaminada con un virus mortal, se convierte en el escenario de tu desafío más grande.</p>
          <p>¿Os atrevéis a aceptar este reto?</p>
          <p>Sumérgete en el proyecto más misterioso y enigmático jamás concebido. Aquí, los límites de la realidad se desvanecen y las respuestas se ocultan tras velos de misterio. Cada habitación de esta casa guarda secretos siniestros, cada sombra esconde una pista crucial para tu supervivencia. Para escapar de este entorno letal, deberás aguzar tus sentidos y emplear la lógica de maneras insospechadas.</p>
          <p>No pierdas detalle de todo lo que te rodea; cada objeto, cada sonido, cada indicio puede ser la clave para desentrañar el enigma y evitar la infección. Piensa diferente, desafía tus percepciones y rompe con lo convencional. En este laberinto de ingenio, solo aquellos capaces de ver más allá de lo evidente tendrán alguna esperanza de éxito.</p>
          <p>Trabaja en equipo, confía en tus instintos y enfrenta lo desconocido con coraje. Tienes solo 60 minutos para descifrar el misterio, encontrar la cura y escapar con vida. El reloj ya ha comenzado a correr... ¿Podrás superar el miedo, resolver el enigma y sobrevivir a la amenaza invisible que acecha en cada rincón?</p>
          <p>La cuenta atrás ha comenzado. ¿Te atreves a enfrentar lo imposible y salir de la casa antes de que sea demasiado tarde?</p>
        </div>
        {/* Existing Image Section */}
        <div className="flex justify-center mb-8">
          <img src={Experiment} alt="Experimento X-547" className="w-1/2" />
        </div>

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
