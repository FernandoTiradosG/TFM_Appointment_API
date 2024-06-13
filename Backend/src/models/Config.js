import mongoose from "mongoose";

const { Schema, model } = mongoose;

const configSchema = new Schema({
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  availableHours: [{ type: String, required: true }], // Horas disponibles para este día
}, { timestamps: true });

export default model('Config', configSchema);
