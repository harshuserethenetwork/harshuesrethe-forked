import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import transporter from "../config/nodemailer.config.js";
import env from "../config/env.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Load an HTML template and replace {{placeholders}}
function loadTemplate(templateName, replacements = {}) {
  // __dirname points to `server/services`, so templates are in `server/templates`
  const filePath = path.resolve(__dirname, "..", "templates", templateName);
  let html = fs.readFileSync(filePath, "utf-8");
  for (const [key, val] of Object.entries(replacements)) {
    html = html.replaceAll(`{{${key}}}`, val);
  }
  return html;
}

export async function sendEmail({ to, subject, html, text, type }) {
  return transporter.sendMail({
    from: type === 'client' ? env.email.from_for_client : env.email.from_for_owner,
    to,
    subject,
    html,
    text,
  });
}

export async function sendContactConfirmation(formData) {
  const html = loadTemplate("contact-confirmation.html", {
    your_name: "Harsh Userethe", // your name
    client_name: formData.name,
    client_email: formData.email,
    subject: formData.description || "General Inquiry",
    sent_date: new Date().toLocaleDateString("en-IN", {
      day: "numeric",
      month: "long",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    portfolio_url: "https://harshuserethe.in", // your URL
  });

  return sendEmail({
    to: formData.email,
    subject: "Got your message — I'll be in touch soon!",
    html,
    text: `Hi ${formData.name}, thanks for reaching out! I'll get back to you within 24–48 hours.`,
    type:'client',
  });
}

export async function sendSmartContactConfirmation(formData = {}) {
  const {
    name = "",
    email = "",
    project_title = "",
    project_desc = "",
    project_type = "",
    service_category = "",
    timeline = "",
    budget = "",
    portfolio_url = "https://harshuserethe.in",
  } = formData;

  const sent_date = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const html = loadTemplate("smart-contact-client.html", {
    your_name: "Harsh Userethe",
    client_name: name,
    client_email: email,
    project_title,
    project_desc,
    project_type,
    service_category,
    timeline,
    budget,
    sent_date,
    portfolio_url,
  });

  return sendEmail({
    to: email,
    subject: "Got your smart inquiry — I'll be in touch soon!",
    html,
    text: `Hi ${name}, thanks for reaching out with your inquiry. I'll get back to you shortly.`,
    type:'client'
  });
}

// Email to the portfolio owner when smart contact form is submitted
export async function sendSmartContactOwnerConfirmation(formData = {}) {
  const {
    name = "",
    email = "",
    project_title = "",
    project_desc = "",
    project_type = "",
    service_category = "",
    timeline = "",
    budget = "",
  } = formData;

  const sent_date = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const html = loadTemplate("smart-contact-owner.html", {
    your_name: "Harsh Userethe",
    client_name: name,
    client_email: email,
    project_title,
    project_desc,
    project_type,
    service_category,
    timeline,
    budget,
    sent_date,
  });

  return sendEmail({
    to: env.smtp.site_owner,
    subject: "New project inquiry received",
    html,
    text: `New project inquiry received from ${name} (${email}).`,
    type:'owner',
  });
}

// Email to the portfolio owner when regular contact form is submitted
export async function sendContactOwnerConfirmation(formData = {}) {
  const {
    name = "",
    email = "",
    description = "",
    subject = "General Inquiry",
  } = formData;

  const sent_date = new Date().toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const html = loadTemplate("contact-confirmation-owner.html", {
    your_name: "Harsh Userethe",
    client_name: name,
    client_email: email,
    description,
    subject,
    sent_date,
  });

  // Fix: env.smtp.to was undefined => nodemailer throws "No recipients defined"
  const to = env.smtp.site_owner;

  return sendEmail({
    to,
    subject: `New message received: ${subject}`,
    html,
    text: `New message received from ${name} (${email}). Description: ${description}`,
    type:'owner',
  });
}
