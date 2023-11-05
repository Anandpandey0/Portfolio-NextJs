import mongoose from "mongoose";
import { Schema } from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  img: { type: String },
  desc: { type: String, required: true },
  github: { type: String, required: true, unique: true },
  demo: { type: String, required: true },
});
mongoose.models = {};
const Project = mongoose.model("Project", ProjectSchema);

export default Project;
