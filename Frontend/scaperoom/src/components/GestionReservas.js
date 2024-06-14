import React, { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import './CSS/GestionReservas.css';
import ModalDatosUsuario from './ModalDatosUsuario';
import ModalPago from './ModalPago';
import ModificarModal from './ModificarModal';
import { useNavigate } from 'react-router-dom';

const GestionReservas = () => {
  const navigate = useNavigate();
  const [reservasPorDia, setReservasPorDia] = useState(() => {
    const storedReservas = localStorage.getItem('reservasPorDia');
    return storedReservas ? JSON.parse(storedReservas) : {};
  });
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [showReservaModal, setShowReservaModal] = useState(false);
  const [showPagoModal, setShowPagoModal] = useState(false);
  const [selectedTime, setSelectedTime] = useState('');
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedReservationData, setSelectedReservationData] = useState(null);
  const [showModificarReservaModal, setShowModificarReservaModal] = useState(false);
  const [reservaSeleccionada, setReservaSeleccionada] = useState(null);
  const [horasAnuladasPorDia, setHorasAnuladasPorDia] = useState(() => {
    const storedHorasAnuladas = localStorage.getItem('horasAnuladasPorDia');
    return storedHorasAnuladas ? JSON.parse(storedHorasAnuladas) : {};
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');  // Cambiado a navigate
    }

    const userString = localStorage.getItem('user');
    if (userString) {
      try {
        const user = JSON.parse(userString);
        if (user && user.rol === 'admin') {
          setIsAdmin(true);
        }
      } catch (error) {
        console.error('Error parsing user from localStorage:', error);
      }
    }
  }, [navigate]);

  useEffect(() => {
    const fetchReservas = async () => {
      try {
        const token = localStorage.getItem('token');
        if (!token) {
          throw new Error('No token found');
        }

        const response = await fetch('https://tfm-appointment-api.onrender.com/date/days', {
          headers: {
            'Authorization': `Bearer ${token}`,
          },
        });
        if (!response.ok) {
          throw new Error('Error al obtener las reservas');
        }

        const data = await response.json();
        const reservasPorDia = {};
        data.forEach(reserva => {
          const dateKey = new Date(reserva.year, reserva.month - 1, reserva.day).toDateString();
          if (!reservasPorDia[dateKey]) {
            reservasPorDia[dateKey] = [];
          }
          reservasPorDia[dateKey].push(reserva);
        });
        setReservasPorDia(reservasPorDia);
        localStorage.setItem('reservasPorDia', JSON.stringify(reservasPorDia));
      } catch (error) {
        console.error('Error al obtener las reservas:', error);
      }
    };

    fetchReservas();
  }, [selectedDate]);

  useEffect(() => {
    localStorage.setItem('reservasPorDia', JSON.stringify(reservasPorDia));
  }, [reservasPorDia]);

  const hacerReserva = (time) => {
    setSelectedTime(time);
    setShowReservaModal(true);
  };

  const handleReservaConfirmada = async (nombre, correo, telefono) => {
    try {
      const token = localStorage.getItem('token');
      const userString = localStorage.getItem('user');
      if (!userString) {
        throw new Error('Usuario no autenticado');
      }
      const user = JSON.parse(userString);
      const username = user.username;

      const response = await fetch('https://tfm-appointment-api.onrender.com/date', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify({
          year: selectedDate.getFullYear(),
          month: selectedDate.getMonth() + 1,
          day: selectedDate.getDate(),
          hour: selectedTime,
          username,
          nombre,
          correo,
          telefono,
        }),
      });

      if (!response.ok) {
        const errorResponse = await response.text();
        console.error('Error response text:', errorResponse);
        throw new Error(errorResponse || 'Error desconocido');
      }

      const data = await response.json();
      const dateKey = selectedDate.toDateString();
      const nuevasReservas = {
        ...reservasPorDia,
        [dateKey]: [
          ...(reservasPorDia[dateKey] || []),
          data,
        ],
      };

      setReservasPorDia(nuevasReservas);
      setSelectedReservationData(data);
      setShowReservaModal(false);
      setShowPagoModal(true);
    } catch (error) {
      console.error('Error al confirmar la reserva:', error.message);
    }
  };

  const handleCancelarReserva = () => {
    setShowReservaModal(false);
    setSelectedTime('');
    liberarHoraSeleccionada(selectedTime);
  };

  const liberarHoraSeleccionada = async (time) => {
    if (isAdmin) {
      const dateKey = selectedDate.toDateString();
      const reservationToDelete = reservasPorDia[dateKey]?.find(reserva => reserva.hour === time);
      if (reservationToDelete) {
        try {
          const token = localStorage.getItem('token');
          const response = await fetch(`https://tfm-appointment-api.onrender.com/date/days/${reservationToDelete._id}`, {
            method: 'DELETE',
            headers: {
              'Authorization': `Bearer ${token}`,
            },
          });

          if (!response.ok) {
            throw new Error('Error al eliminar la reserva');
          }

          const nuevasReservasPorDia = {
            ...reservasPorDia,
            [dateKey]: reservasPorDia[dateKey].filter(reserva => reserva._id !== reservationToDelete._id),
          };
          setReservasPorDia(nuevasReservasPorDia);
        } catch (error) {
          console.error('Error al eliminar la reserva:', error);
        }
      }
    }
  };

  const handlePagoConfirmado = async () => {
    setShowPagoModal(false);
  };

  const handleCancelarPago = () => {
    setShowPagoModal(false);
    setSelectedTime('');
    liberarHoraSeleccionada(selectedTime);
  };

  const esHoraValida = (time) => {
    const now = new Date();
    const selectedDateTime = new Date(selectedDate);
    selectedDateTime.setHours(parseInt(time.split(':')[0]), parseInt(time.split(':')[1]));
    return selectedDateTime >= now && selectedDateTime - now >= 5400000;
  };

  const reservasParaDiaSeleccionado = reservasPorDia[selectedDate.toDateString()] || [];

  const obtenerDatosReserva = (reservas, hora) => {
    const reserva = reservas.find(reserva => reserva.hour === hora);
    const { nombre = '', correo = '', telefono = '' } = reserva || {};
    return `${nombre} - ${correo} - ${telefono}`;
  };

  const horariosDisponibles = [
    { time: '11:00', available: !reservasParaDiaSeleccionado.some(reserva => reserva.hour === '11:00'), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '11:00') },
    { time: '13:00', available: !reservasParaDiaSeleccionado.some(reserva => reserva.hour === '13:00'), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '13:00') },
    { time: '16:00', available: !reservasParaDiaSeleccionado.some(reserva => reserva.hour === '16:00'), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '16:00') },
    { time: '18:00', available: !reservasParaDiaSeleccionado.some(reserva => reserva.hour === '18:00'), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '18:00') },
    { time: '20:00', available: !reservasParaDiaSeleccionado.some(reserva => reserva.hour === '20:00'), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '20:00') },
    { time: '21:45', available: !reservasParaDiaSeleccionado.some(reserva => reserva.hour === '21:45'), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '21:45') },
    { time: '23:30', available: !reservasParaDiaSeleccionado.some(reserva => reserva.hour === '23:30'), reservationData: obtenerDatosReserva(reservasParaDiaSeleccionado, '23:30') },
  ];

  const handleOpenModificar = (time) => {
    const dateKey = selectedDate.toDateString();
    const reserva = reservasPorDia[dateKey]?.find(reserva => reserva.hour === time);
    if (reserva) {
      setReservaSeleccionada(reserva);
      setShowModificarReservaModal(true);
    }
  };

  const handleModificarReserva = async (nuevosDatos) => {
    if (!reservaSeleccionada) {
      console.error('No se ha seleccionado ninguna reserva para modificar.');
      return;
    }

    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`https://tfm-appointment-api.onrender.com/date/days/${reservaSeleccionada._id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(nuevosDatos),
      });

      if (!response.ok) {
        throw new Error('Error al modificar la reserva');
      }

      const data = await response.json();
      const dateKey = selectedDate.toDateString();
      const nuevasReservasPorDia = {
        ...reservasPorDia,
        [dateKey]: reservasPorDia[dateKey].map(reserva => {
          if (reserva._id === data._id) {
            return data;
          }
          return reserva;
        }),
      };

      setReservasPorDia(nuevasReservasPorDia);
      setShowModificarReservaModal(false);
      console.log('Reserva modificada correctamente:', data);
    } catch (error) {
      console.error('Error al modificar la reserva:', error);
    }
  };

  const handleAnularHora = (time) => {
    const selectedDateKey = selectedDate.toDateString();
    const horasAnuladasParaFecha = horasAnuladasPorDia[selectedDateKey] || [];

    if (horasAnuladasParaFecha.includes(time)) {
      const updatedHorasAnuladas = horasAnuladasParaFecha.filter(hora => hora !== time);
      setHorasAnuladasPorDia({ ...horasAnuladasPorDia, [selectedDateKey]: updatedHorasAnuladas });
    } else {
      const updatedHorasAnuladas = [...horasAnuladasParaFecha, time];
      setHorasAnuladasPorDia({ ...horasAnuladasPorDia, [selectedDateKey]: updatedHorasAnuladas });
    }
  };

  useEffect(() => {
    localStorage.setItem('horasAnuladasPorDia', JSON.stringify(horasAnuladasPorDia));
  }, [horasAnuladasPorDia]);

  const esHoraCancelada = (time) => {
    const selectedDateKey = selectedDate.toDateString();
    const horasAnuladasParaFecha = horasAnuladasPorDia[selectedDateKey] || [];
    return horasAnuladasParaFecha.includes(time);
  };

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    localStorage.removeItem('reservasPorDia'); // Borra las reservas guardadas en localStorage
    navigate('/login');  // Cambiado a navigate
  };

  return (
    <div className="calendar-container w-full h-screen mt-28 bg-gradient-to-b from-black via-black to-gray-800 text-white flex flex-col items-center p-4">
      <div className="calendario w-full max-w-4xl mb-8 text-center">
        <h2 className="text-4xl font-bold text-white">Calendario de Reservas</h2>
        <div className="bg-gray-700 p-4 rounded-lg mt-4">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            minDate={new Date()}
            className="rounded-md"
          />
        </div>
      </div>
      <div className="time-slots mt-8">
        <h3 className="text-2xl font-bold text-white mb-4">Horarios Disponibles para {selectedDate.toDateString()}</h3>
        <ul className="space-y-4">
          {horariosDisponibles.map(horario => (
            <li key={horario.time} className="flex flex-col items-start">
              <span
                className={`time-slot cursor-pointer p-2 rounded-md ${
                  horario.available
                    ? esHoraValida(horario.time) && !esHoraCancelada(horario.time)
                      ? 'bg-green-500 hover:bg-green-600'
                      : 'bg-yellow-500 hover:bg-yellow-600'
                    : 'bg-red-500'
                }`}
                onClick={() => {
                  if (horario.available && esHoraValida(horario.time)) {
                    hacerReserva(horario.time);
                  } else if (!horario.available) {
                    liberarHoraSeleccionada(horario.time);
                  }
                }}
              >
                {horario.time}
                {isAdmin && horario.reservationData && (
                  <span className="ml-2 text-sm text-gray-200">/{horario.reservationData}</span>
                )}
              </span>
              {isAdmin && horario.reservationData && esHoraValida(horario.time) && (
                <div className="flex space-x-2 mt-2">
                  <button
                    onClick={() => handleOpenModificar(horario.time)}
                    className="px-4 py-2 bg-blue-500 rounded-md hover:bg-blue-600"
                  >
                    Modificar
                  </button>
                  <button
                    onClick={() => handleAnularHora(horario.time)}
                    className="px-4 py-2 bg-red-500 rounded-md hover:bg-red-600"
                  >
                    {!esHoraCancelada(horario.time) ? 'Anular Hora' : 'Restaurar Hora'}
                  </button>
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
      <button className="logout mt-8 px-6 py-3 bg-yellow-400 text-gray-900 rounded-md hover:bg-yellow-300" onClick={handleLogout}>Cerrar sesión</button>
      <ModalDatosUsuario 
        show={showReservaModal} 
        handleClose={handleCancelarReserva} 
        handleConfirm={handleReservaConfirmada} 
        reservationData={selectedReservationData} 
      />
      <ModalPago show={showPagoModal} handleClose={handleCancelarPago} handleConfirm={handlePagoConfirmado} />
      <ModificarModal
        show={showModificarReservaModal}
        handleClose={() => setShowModificarReservaModal(false)}
        reservaSeleccionada={reservaSeleccionada}
        handleModificarReserva={handleModificarReserva}
      />
    </div>
  );
};

export default GestionReservas;
