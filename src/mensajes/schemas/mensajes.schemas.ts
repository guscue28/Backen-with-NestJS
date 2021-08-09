import { Schema } from 'mongoose';

export const Mensaje = new Schema({
  fullName: String,
  email: String,
  text: String,
});
