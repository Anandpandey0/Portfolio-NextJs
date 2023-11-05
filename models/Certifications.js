import mongoose from "mongoose";

const CertificationsSchema = new mongoose.Schema({
  title: { type: String, required: true },
  provider: { type: String, required: true },
  link: { type: String, required: true },
});
mongoose.models = {};
const Project = mongoose.model("Certifications", CertificationsSchema);

export default Project;
