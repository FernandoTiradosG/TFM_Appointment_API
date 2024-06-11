import React, { useState } from 'react';
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import SobreMi from "./components/About";
import Portfolio from "./components/Portfolio";
import Contacto from "./components/Contacto";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Registro';
import Inicio from './components/Inicio';
import GestionReservas from './components/GestionReservas.js';
import Footer from './components/Footer.js';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/nosotros" element={<SobreMi />} />
          <Route path="/escape-room" element={<Portfolio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/reservas" element={<GestionReservas isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />} />
          <Route path="/contacto" element={<Contacto />} />
        </Routes>
        <SocialLinks />
        <Footer />
    </Router>
    </div>
  );
}

export default App;
