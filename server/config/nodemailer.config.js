import nodemailer from "nodemailer";
import env from "./env.js";

console.log("SMTP Host:", env.smtp.host);
console.log("SMTP Port:", env.smtp.port);
console.log("SMTP User:", env.smtp.user);

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
  if (err) console.error("❌ SMTP connection failed:", err);
  else console.log("✅ SMTP transporter ready");
});

export default transporter;
