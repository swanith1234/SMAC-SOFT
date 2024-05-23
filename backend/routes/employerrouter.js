import express from "express";
import {
  employerregister,
  employerlogin,
  employerlogout,
  getOneEmployer,
} from "../controller/employerController.js";
import { isAuthorizedEmployer } from "../middllewares/auth.js";
import { sendEmail } from "../mail/mail.js";
const router = express.Router();
console.log("swanith");
router.post("/employers/register", employerregister);
router.post("/employers/login", employerlogin);
router.get("/employers/logout", isAuthorizedEmployer, employerlogout);
router.post("/employers/register/:id", sendEmail);
router.get("/employers/login/:id", getOneEmployer);
export default router;
