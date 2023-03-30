import { connect } from "../../../utils/db";
import Contact from "../../../models/contact";

export default async function contactMe(req, res) {
  const { name, email, country, phone, subject, message } = req.body;

  await connect();
  try {
    const contact = new Contact({
      name,
      email,
      country,
      phone,
      subject,
      message,
    });
    await contact.save();
    res.status(201).json({
      name: contact.name,
      email: contact.email,
      country: contact.phone,
      phone: contact.github,
      subject: contact.demo,
      message: "contact added",
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
}
