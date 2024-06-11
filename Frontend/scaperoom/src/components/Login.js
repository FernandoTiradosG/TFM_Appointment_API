import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './CSS/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username: email, password }),
      });

      if (!response.ok) {
        const errorResponse = await response.json();
        throw new Error(errorResponse.message);
      }

      const data = await response.json();
      const { token, user } = data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));
      navigate('/reservas');  // Cambiado a navigate
    } catch (error) {
      setError(error.message);
    }
  };

  return (
    <div className="w-full h-screen bg-gradient-to-b from-black via-black to-gray-800 flex flex-col justify-center items-center">
      <h2 className="text-4xl font-bold text-white mb-8">Iniciar Sesión</h2>
      <form className="flex flex-col w-full max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
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
          Iniciar Sesión
        </button>
      </form>
      <div className="flex space-x-4 mt-4">
        <Link to="/registro">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 duration-300">
            Registrarse
          </button>
        </Link>
        <Link to="/">
          <button className="px-6 py-3 rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 text-white hover:scale-105 duration-300">
            Inicio
          </button>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
  
};

export default Login;
