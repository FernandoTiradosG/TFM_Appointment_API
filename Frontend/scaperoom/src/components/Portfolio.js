import React from "react";
import Experiment from "../assests/image/ExperimentoX-547.webp";
import Experiment2 from "../assests/image/ExperimentoX-547_2.webp";

const Portfolio = () => {
  return (
    <div name="Portfolio" className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">

      <div className="h-16 bg-gradient-to-b from-black via-black to-black"></div> {/* Space for header */}
      
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full">
        
        {/* Main Title */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-blue-500">Proyecto X-547</p>
        </div>
        
        {/* Text and Image Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center">
          
          <div className="w-full md:w-1/2 p-4">
            <p className="text-gray-500 py-4">
            ¡Atención, almas intrépidas y buscadores de lo desconocido!
            En lo más profundo de las sombras, donde la ciencia y el horror se entrelazan, buscamos valientes sujetos de prueba para un experimento revolucionario que podría cambiar el curso de la humanidad. 
            Este no es un simple llamado, sino una invitación a adentrarse en un mundo repleto de enigmas y secretos oscuros. 
            Una casa, contaminada con un virus mortal, se convierte en el escenario de tu desafío más grande.
            ¿Os atrevéis a aceptar este reto?
            Sumérgete en el proyecto más misterioso y enigmático jamás concebido. Aquí, los límites de la realidad se desvanecen y las respuestas se ocultan tras velos de misterio. 
            Cada habitación de esta casa guarda secretos siniestros, cada sombra esconde una pista crucial para tu supervivencia. 
            Para escapar de este entorno letal, deberás aguzar tus sentidos y emplear la lógica de maneras insospechadas.
            </p>
          </div>
          
          <div className="flex justify-center mb-8">
          <img src={Experiment} alt="Experimento X-547" className="" />
          </div>
          
        </div>

        {/* Image and Text Section */}
        <div className="w-full flex flex-col md:flex-row justify-between items-center mt-8">
          
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <div className="flex justify-center mb-8">
              <img src={Experiment2} alt="Experimento X-547" className="" />
            </div>
          </div>
          
          <div className="w-full md:w-1/2 p-4">
            <p className="text-gray-500 py-4">
            No pierdas detalle de todo lo que te rodea; cada objeto, cada sonido, cada indicio puede ser la clave para desentrañar el enigma y evitar la infección. 
            Piensa diferente, desafía tus percepciones y rompe con lo convencional. En este laberinto de ingenio, solo aquellos capaces de ver más allá de lo evidente tendrán alguna esperanza de éxito.
            Trabaja en equipo, confía en tus instintos y enfrenta lo desconocido con coraje. Tienes solo 60 minutos para descifrar el misterio, encontrar la cura y escapar con vida. El reloj ya ha comenzado a correr... 
            ¿Podrás superar el miedo, resolver el enigma y sobrevivir a la amenaza invisible que acecha en cada rincón?
            La cuenta atrás ha comenzado. ¿Te atreves a enfrentar lo imposible y salir de la casa antes de que sea demasiado tarde?
            </p>
          </div>
          
        </div>

      </div>
    </div>
  );
};

export default Portfolio;
