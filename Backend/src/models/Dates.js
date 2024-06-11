import mongoose from "mongoose";

const { Schema, model } = mongoose;

const dateSchema = new Schema({
  year: { type: Number, required: true },
  month: { type: Number, required: true },
  day: { type: Number, required: true },
  hour: { type: String, required: true },
  user: { type: Schema.Types.ObjectId, ref: 'User' , required: true },
  nombre: { type:String },
  correo: { type:String },
  telefono: { type:String }
}, { timestamps: true });

export default model('Dates', dateSchema);

