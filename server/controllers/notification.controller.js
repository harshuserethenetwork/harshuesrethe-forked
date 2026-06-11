import { notification } from "../services/notifications/index.js";

export async function contactConfirmation(req, res, next) {
  try {
    const { name, email, description } = req.body;

    // client confirmation
    await notification.email.sendContactConfirmation({
      name,
      email,
      description,
    });

    res.json({ success: true, message: "Confirmation emails sent." });
  } catch (err) {
    next(err);
  }
}

export async function smartContactConfirmation(req, res, next) {
  try {
    // client confirmation
    await notification.email.sendSmartContactConfirmation(req.body);

    res.json({ success: true, message: "Smart confirmation emails sent." });
  } catch (err) {
    next(err);
  }
}

export async function smartContactOwnerAlert(req, res, next) {
  try {
    // Owner alert
    await notification.email.sendSmartContactOwnerConfirmation(req.body);

    res.json({ success: true, message: "Alert notification sent!" });
  } catch (err) {
    next(err);
  }
}

export async function caualContactOwnerAlert(req, res, next) {
  try {
    const { name, email, description, subject } = req.body;

    // owner alert
    await notification.email.sendContactOwnerConfirmation({
      name,
      email,
      description,
      subject,
    });

    res.json({ success: true, message: "Confirmation emails sent." });
  } catch (err) {
    next(err);
  }
}
