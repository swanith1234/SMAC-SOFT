import express from "express";
import {
  isAuthorizedEmployer,
  isAuthorizedUser,
} from "../middllewares/auth.js";
import { getPOTD, postPOTD } from "../controller/potdController.js";
import {
  checkAttempts,
  checkUserAttempts,
  getallwithId,
  postuserPOTD,
  potdcount,
} from "../controller/userpotdcontroller.js";
import { sendEmail } from "../mail/potdmail.js";
const router = express.Router();
router.get("/potd/get", getPOTD);
router.post("/potd/post", postPOTD);
router.post("/potd/user/post", postuserPOTD);
router.post("/potd/user/post/check", checkAttempts);
router.post("/potd/user/post/checkuser", checkUserAttempts);
router.post("/potd/user/post/count", potdcount);
router.post("/potd/user/post/getall", getallwithId);
router.post("/potd/user/post/:id", sendEmail);
export default router;
