import mongoose from "mongoose";
import { Dates } from ".";

const { Schema, model } = mongoose;

const dateSchema = new Schema({
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  hour: { type: Number, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' },
  available: { type: Boolean, default: true },
}, { timestamps: true });

const Month = model('Dates', monthSchema);
