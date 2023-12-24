import { connect } from "../../../utils/db";
import Project from "../../../models/Project";

export default async function addProjects(req, res) {
  if (req.method === "GET") {
    try {
      await connect();

      const projects = await Project.find();
      res.status(200).json(projects);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
