export default {
  port: process.env.PORT || 3000,
  smtp: {
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT) || 587,
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
    from: process.env.MAIL_FROM,
    site_owner: process.env.SITE_OWNER,
  },
  email: {
    from_for_client: "Got Your Message - HU",
    from_for_owner: "Portfolio Notification"
  }
};