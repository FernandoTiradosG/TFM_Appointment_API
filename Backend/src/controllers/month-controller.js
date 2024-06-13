import { getMonths, checkReservations, getDayById, createReservation, updateReservation, deleteReservation } from '../services/mongo/days-db-services.js';
import mongoose from 'mongoose';

export async function getMonthsController(req, res) {
    try {
        const months = await getMonths();
        res.json(months);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

export async function checkReservationsController(req, res) {
    try {
      console.log('Request received to fetch reservations');
      const reservations = await checkReservations();
      
      if (!reservations || reservations.length === 0) {
        console.log('No reservations found');
        return res.status(200).json([]); // Devuelve un array vacío en lugar de un 404
      }
  
      console.log('Reservations fetched:', reservations);
      res.status(200).json(reservations);
    } catch (error) {
      console.error('Error fetching reservations:', error.message);
      res.status(500).json({ message: 'Error fetching reservations' });
    }
}

export async function getDayController(req, res) {
    try {
        const { dayId } = req.params;
        if (!mongoose.Types.ObjectId.isValid(dayId)) {
            return res.status(400).json({ message: 'El ID del día proporcionado no es válido' });
        }
        const reservation = await getDayById(dayId);
        if (!reservation) {
            return res.status(404).json({ message: 'Reserva no encontrada o no existe' });
        }
        res.json(reservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

export async function createReservationController(req, res) {
    try {
      const { year, month, day, hour, username, nombre, correo, telefono } = req.body;
      const reservation = await createReservation(year, month, day, hour, username);
      reservation.nombre = nombre;
      reservation.correo = correo;
      reservation.telefono = telefono;
      await reservation.save();
      res.status(201).json(reservation);
    } catch (error) {
      console.error('Error creating reservation:', error.message);
      res.status(500).json({ message: 'Error creating reservation: ' + error.message });
    }
}

export async function updateReservationController(req, res) {
    try {
        const { dayID } = req.params;
        const updateFields = req.body;

        const updatedReservation = await updateReservation(dayID, updateFields);

        res.json(updatedReservation);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}

export async function deleteReservationController(req, res) {
    try {
        const { dayID } = req.params;

        await deleteReservation(dayID);

        res.json({ message: 'Reserva eliminada exitosamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
}
