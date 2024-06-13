import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Registro() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleRegistro = async (event) => {
    event.preventDefault();
  
    try {
      const response = await fetch('https://tfm-appointment-api.onrender.com/user', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Error en la solicitud de registro');
      }
  
      setSuccessMessage('¡Registro exitoso! Redirigiendo al inicio de sesión...');
      setTimeout(() => {
        navigate(`/login`);
      }, 2000);
    } catch (error) {
      setError(error.message);
    }
  };  

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-white mb-8">Registro</h2>
      <form className="flex flex-col w-full max-w-md" onSubmit={handleRegistro}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Correo electrónico"
          required
          className="p-2 bg-transparent border-2 rounded-md text-white mb-4 focus:outline-none"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Contraseña"
          required
          className="p-2 bg-transparent border-2 rounded-md text-white mb-4 focus:outline-none"
        />
        <button type="submit" className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 duration-300 mb-4">
          Registrarse
        </button>
      </form>
      <div className="flex space-x-4 mt-4">
        <Link to="/login">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 duration-300">
            Iniciar Sesión
          </button>
        </Link>
        <Link to="/">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 duration-300">
            Inicio
          </button>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
      {successMessage && <p className="text-green-500 mt-4">{successMessage}</p>}
    </div>
  );
  
}

export default Registro;
