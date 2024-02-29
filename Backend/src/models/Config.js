import mongoose from "mongoose";

const { Schema, model } = mongoose;

const configSchema = new Schema({
  weekdays: { type: Number, required: true },
  hours: [],
}, { timestamps: true });

const Config = model('Config', configSchema);
