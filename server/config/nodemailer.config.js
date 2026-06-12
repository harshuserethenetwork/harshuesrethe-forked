import nodemailer from "nodemailer";
import env from "./env.js";

const transporter = nodemailer.createTransport({
  host: env.smtp.host,
  port: env.smtp.port,
  secure: env.smtp.port === 465,   // true for 465, false for 587
  family: 4, // Force IPv4
  auth: {
    user: env.smtp.user,
    pass: env.smtp.pass,
  },
});

// Verify connection on startup
transporter.verify((err) => {
  if (err) console.error("❌ SMTP connection failed:", err.message);
  else console.log("✅ SMTP transporter ready");
});

export default transporter;
