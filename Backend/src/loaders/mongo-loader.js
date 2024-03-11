import mongoose from "mongoose";
import config from "../config.js";

export default async function() {
  try {
    await mongoose.connect(config.mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database connected");
  } catch (error) {
    console.error('Error to conect MongoDB', error.message);
    process.exit(1);
  }
}