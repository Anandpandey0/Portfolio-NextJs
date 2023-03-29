import { connect } from "../../../utils/db";

export default async function handler(req, res) {
  try {
    await connect();
    res.status(200).json({ message: "Connected to MongoDB" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error connecting to MongoDB" });
  }
}
