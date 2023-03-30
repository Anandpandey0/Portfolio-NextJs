import { connect } from "../../../utils/db";
import Skill from "../../../models/Skill";

export default async function addSkills(req, res) {
  if (req.method === "GET") {
    try {
      await connect();

      //   const item = await Cart.find({ userEmail: email });
      // const cart = await db.collection("carts").findOne({ userEmail });
      const skills = await Skill.find();
      res.status(200).json(skills);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  }
}
