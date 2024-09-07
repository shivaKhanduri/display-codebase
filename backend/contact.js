const express = require("express");
const router = express.Router();
const formData = require("form-data");
const Mailgun = require("mailgun.js");

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
 
});

const DOMAIN =
 

router.post("/sendMail", async (req, res) => {
  const { name, email, message } = req.body;

  const data = {
    from: `${name} <${email}>`,
    to: "abhinavchdhary@gmail.com",
    subject: "New Contact Form Submission",
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    const msg = await mg.messages.create(DOMAIN, data);
    console.log("Email sent:", msg);
    res.status(200).json({ body: msg });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: error.message, details: error });
  }
});

module.exports = router;
