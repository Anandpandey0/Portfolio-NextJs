import sgMail from "@sendgrid/mail";

export default async function sendEmail(req, res) {
  const { email, message, subject } = req.body;

  sgMail.setApiKey(
    "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"
  );

  const msg = {
    to: "anand.pandey1052@outlook.com", // Replace with your email address
    from: email,
    subject: subject,
    text: message,
  };

  try {
    await sgMail.send(msg);
    res.status(200).send("Email sent successfully");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error sending email");
  }
}
