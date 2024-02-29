import mongoose from 'mongoose';

const { Schema, model } = mongoose;

const userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  rol: { type: String, enum: ['admin', 'user'], default: 'user' },
}, { timestamps: true });

userSchema.set('toJSON', function (doc) {
  const { __v, _id, ...object } = doc;
  object.id = _id;
  return object;
});

export default model('User', userSchema);