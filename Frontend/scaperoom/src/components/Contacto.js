import React from "react";

const Contact = () => {
  return (
    <div name="Contacto" className="w-full bg-gradient-to-b from-black via-black to-gray-800 text-white">
      
      <div className="h-16 bg-gradient-to-b from-black via-black to-gray-800"></div> {/* Space for header */}

      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center h-full">
        
        {/* Main Title */}
        <div className="pb-8 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#01CB17]">Contactos</p>
        </div>
        
        {/* Text and Image Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          
        </div>

        {/* Contact Form Section */}
        <div className="mt-8 flex justify-center items-center">
          <form action="https://getform.io/f/rb238AdW" method="POST" className="flex flex-col w-full md:w-1/2">
            <label className="text-white">Déjanos un mensaje:</label>
            <input type="text" name="name" placeholder="Nombre *" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type="email" name="email" placeholder="Email *" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <input type="text" name="subject" placeholder="Asunto *" className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none" />
            <textarea name="message" rows={5} placeholder="Mensaje *" className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"></textarea>

            <button className="text-white bg-gradient-to-b from-[#00901A] to-[#01CB17] px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">Enviar</button>
          </form>
        </div>

        {/* Additional Information Section */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
          <div className="w-full md:w-1/2 p-4">
            <h2 className="text-2xl font-bold">También puedes encontrarnos aquí:</h2>
            <p className="text-gray-500 py-2">Tel: 691 924 199</p>
            <p className="text-gray-500 py-2">Email: curiouscatescaperoom@gmail.com</p>
            <h2 className="text-2xl font-bold mt-4">Localización</h2>
            <p className="text-gray-500 py-2">
              Av. Rey Juan Carlos, 92<br />
              Oficina 13B, 4ª planta<br />
              Leganés, Madrid<br />
              Metro: El Carrascal, L12<br />
              Renfe: Zarzaquemada
            </p>
          </div>
          <div className="w-full md:w-1/2 p-4 flex justify-center items-center">
            <div className="w-full h-64">
              <iframe
                className="w-full h-full"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3057.686155442166!2d-3.7615634846012473!3d40.33107397937727!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4229877eaa322f%3A0xc328e0e2e5afc3b!2sCurious%20Cat%20-%20Escape%20Room!5e0!3m2!1sen!2ses!4v1625414415785!5m2!1sen!2ses"
                allowFullScreen=""
                loading="lazy"
                title="Google Maps"
              ></iframe>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Contact;
