import { connect } from "../../../utils/db";
import Certifications from "../certifications";

export default async function addCertifications(req, res) {
  if (req.method === "GET") {
    try {
      await connect();

      const certificates = await Certifications.find();
      res.status(200).json(certificates);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
