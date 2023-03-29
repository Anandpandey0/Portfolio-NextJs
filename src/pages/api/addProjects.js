import { connect } from "../../../utils/db";
import Project from "../../../models/Project";

export default async function addProjects(req, res) {
  const { name, img, desc, github, demo } = req.body;

  await connect();
  try {
    const project = new Project({
      name,
      img,
      desc,
      github,
      demo,
    });
    await project.save();
    res.status(201).json({
      name: project.name,
      img: project.email,
      desc: project.phone,
      github: project.github,
      demo: project.demo,
      message: "Project added",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
