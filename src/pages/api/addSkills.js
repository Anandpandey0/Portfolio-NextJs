import { connect } from "../../../utils/db";
import Skill from "../../../models/Skill";

export default async function addSkills(req, res) {
  const { img } = req.body;

  await connect();
  try {
    const skill = new Skill({
      img,
    });
    await skill.save();
    res.status(201).json({
      img: skill.img,
      message: "Skill added",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
