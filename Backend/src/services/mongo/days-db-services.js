import { Dates, Config, User } from '../../models/index.js';
import mongoose from 'mongoose';

export async function getMonths() {
    try {
        return await Config.find({}, { year: 1, month: 1, day: 1, availableHours: 1 });
    } catch (error) {
        throw new Error('Error fetching months from database');
    }
}

export async function checkReservations() {
    try {
        return await Dates.find();
    } catch (error) {
        throw new Error('Error fetching reservations from database');
    }
}

export async function getDayById(dayId) {
    try {
        if (!mongoose.Types.ObjectId.isValid(dayId)) {
            throw new Error('Invalid day ID');
        }
        
        const reservation = await Dates.findById(dayId);
        console.log(reservation);
        if (reservation === null) {
            return null;
        }

        return reservation;
    } catch (error) {
        throw new Error('Error fetching day from database');
    }
}

export async function createReservation(year, month, day, hour, username) {
    try {
        const config = await Config.findOne({ year, month, day });
        if (!config) {
            throw new Error('Day not configured');
        }

        const user = await User.findOne({ username });
        if (!user || (user.rol !== 'admin' && user.rol !== 'user')) {
            throw new Error('Insufficient permissions to perform this action');
        }

        const availableHours = config.availableHours;
        if (!availableHours.includes(hour)) {
            throw new Error('Specified hour is not available');
        }

        config.hours = availableHours.filter(h => h !== hour);
        await config.save();

        const newReservation = new Dates({
            year,
            month,
            day,
            hour,
            user: user._id,
        });

        await newReservation.save();

        return newReservation;
    } catch (error) {
        throw new Error('Error creating reservation');
    }
}

export async function updateReservation(dayID, updateFields) {
    try {
        const updatedReservation = await Dates.findByIdAndUpdate(
            dayID,
            updateFields,
            { new: true }
        );

        if (!updatedReservation) {
            throw new Error('Reservation not found');
        }

        return updatedReservation;
    } catch (error) {
        throw new Error('Error updating reservation');
    }
}

export async function deleteReservation(dayID) {
    try {
        const reservation = await Dates.findById(dayID);
        if (!reservation) {
            throw new Error('Reservation not found');
        }

        await Dates.findByIdAndDelete(dayID);

        return { message: 'Reservation deleted successfully' };
    } catch (error) {
        throw new Error('Error deleting reservation');
    }
}
