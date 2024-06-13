import React, { useState, useEffect } from 'react';
import { auth } from '../utils/firebase';
import './CSS/Modal.css';

const ModalDatosUsuario = ({ show, handleClose, handleConfirm, reservationData }) => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');

  useEffect(() => {
    console.log("Datos de reserva recibidos:", reservationData);
    if (reservationData) {
      // Si hay datos de reserva disponibles, los establecemos en los campos del formulario
      setNombre(reservationData.nombre || '');
      setCorreo(reservationData.correo || '');
      setTelefono(reservationData.telefono || '');
    }

    // Obtener el usuario autenticado
    const user = auth.currentUser;
    if (user) {
      // Establecer el correo electrónico del usuario autenticado en el campo correspondiente
      setCorreo(user.email || '');
    }
  }, [reservationData]);

  const handleConfirmarDatos = () => {
    // Realiza las validaciones antes de confirmar los datos
    if (nombre && correo.match(/^\S+@\S+\.\S+$/) && telefono.match(/^\d{9}$/)) {
      handleConfirm(nombre, correo, telefono);
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  };

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main user-data-modal">
        <h2>Datos del Usuario</h2>
        <form>
          <label>
            Nombre:
            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
          </label>
          <label>
            Correo:
            <input type="email" placeholder='Ejemplo@abc.de' value={correo} onChange={(e) => setCorreo(e.target.value)} required />
          </label>
          <label>
            Teléfono:
            <input type="tel" value={telefono} placeholder='999888777' onChange={(e) => setTelefono(e.target.value)} required />
          </label>
        </form>
        <button onClick={handleConfirmarDatos}>Confirmar</button>
        <button onClick={handleClose}>Cancelar</button>
      </section>
    </div>
  );
};

export default ModalDatosUsuario;
