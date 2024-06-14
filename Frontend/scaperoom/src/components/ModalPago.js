// ModalPago.js
import React, { useState } from 'react';
import './CSS/Modal.css';

const ModalPago = ({ show, handleClose, handleConfirm }) => {
  const [numeroTarjeta, setNumeroTarjeta] = useState('');

  const handleConfirmarPago = () => {
    // Realiza las validaciones antes de confirmar el pago
    if (numeroTarjeta.match(/^\d{4}-\d{4}-\d{4}$/)) {
      handleConfirm(numeroTarjeta);
    } else {
      alert('Por favor, introduce un número de tarjeta válido (xxxx-xxxx-xxxx).');
    }
  };

  return (
    <div className={show ? "modal display-block" : "modal display-none"}>
      <section className="modal-main payment-modal text-black">
        <h2>Pago</h2>
        <form>
          <label>
            Número de Tarjeta:
            <input type="text" value={numeroTarjeta} onChange={(e) => setNumeroTarjeta(e.target.value)} required />
          </label>
        </form>
        <button onClick={handleConfirmarPago}>Confirmar</button>
        <button onClick={handleClose}>Cancelar</button>
      </section>
    </div>
  );
};

export default ModalPago;
