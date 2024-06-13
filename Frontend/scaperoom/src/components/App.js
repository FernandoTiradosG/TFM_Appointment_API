import './CSS/App.css';
import GestionReservas from './GestionReservas.js';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Register from './Registro';
import Inicio from './Inicio';
import PrivateRoute from './PrivateRoute.js';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
        <PrivateRoute path="/reservas" element={<GestionReservas isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
    </Router>
  );
};

export default App;