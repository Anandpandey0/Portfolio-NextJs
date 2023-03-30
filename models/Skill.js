import mongoose from "mongoose";
import { Schema } from "mongoose";

const SkillSchema = new mongoose.Schema({
  img: { type: String, required: true },
});
mongoose.models = {};
const Skill = mongoose.model("Skills", SkillSchema);

export default Skill;
