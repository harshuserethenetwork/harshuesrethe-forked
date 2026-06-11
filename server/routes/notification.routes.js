import { Router } from "express";
import {
  contactConfirmation,
  smartContactConfirmation,
  smartContactOwnerAlert,
  caualContactOwnerAlert,
} from "../controllers/notification.controller.js";

const router = Router();

router.post("/casual-contact-client", contactConfirmation);
router.post("/casual-contact-owner", caualContactOwnerAlert);
router.post("/smart-contact-client", smartContactConfirmation);
router.post("/smart-contact-owner", smartContactOwnerAlert);

export default router;
