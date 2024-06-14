import React, { useState } from 'react';
import './CSS/Modal.css';

const ModificarModal = ({ show, handleClose, reservaSeleccionada, handleModificarReserva }) => {
  const [nuevosDatos, setNuevosDatos] = useState({
    nombre: reservaSeleccionada && reservaSeleccionada.user ? reservaSeleccionada.user.nombre : '',
    email: reservaSeleccionada && reservaSeleccionada.user ? reservaSeleccionada.user.email : '',
    telefono: reservaSeleccionada && reservaSeleccionada.user ? reservaSeleccionada.user.telefono : ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNuevosDatos(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleModificarReserva(nuevosDatos);
    handleClose();
  };

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main modify-modal text-black">
        <h2>Modificar Reserva</h2>
        <form onSubmit={handleSubmit}>
          <label>
            Nombre:
            <input type="text" name="nombre" value={nuevosDatos.nombre} onChange={handleChange} />
          </label>
          <label>
            Email:
            <input type="email" name="correo" value={nuevosDatos.correo} onChange={handleChange} />
          </label>
          <label>
            Teléfono:
            <input type="tel" name="telefono" value={nuevosDatos.telefono} onChange={handleChange} />
          </label>
          <button type="submit">Guardar Cambios</button>
        </form>
        <button onClick={handleClose}>Cancelar</button>
      </section>
    </div>
  );
};

export default ModificarModal;
