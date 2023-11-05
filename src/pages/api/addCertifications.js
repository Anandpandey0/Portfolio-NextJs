import { connect } from "../../../utils/db";
import Certifications from "../certifications";

export default async function addCertifications(req, res) {
  const { title, provider, link } = req.body;

  await connect();
  try {
    const certificate = new Certifications({
      title,
      provider,
      link,
    });
    await certificate.save();
    res.status(201).json({
      title: certificate.name,
      provider: certificate.provider,
      link: certificate.link,
      message: "Certificate added",
    });
  } catch (error) {
    console.error(error);
    res.status(400).json({ message: error.message });
  }
}
