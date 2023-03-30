import mongoose from "mongoose";
import { Schema } from "mongoose";

const ContactSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  country: { type: String, required: true },
  phone: { type: Number, required: true },
  subject: { type: String },
  message: { type: String, required: true },
});
mongoose.models = {};
const Contact = mongoose.model("Contact", ContactSchema);

export default Contact;
