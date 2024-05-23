import express from "express";
import {
  employerGetAllApplications,
  jobseekerDeleteApplication,
  jobseekerGetAllApplications,
  postApplication,
} from "../controller/applicationController.js";
import { sendEmailSelect } from "../mail/mail.js";
import {
  isAuthorizedEmployer,
  isAuthorizedUser,
} from "../middllewares/auth.js";

const router = express.Router();
router.get("/user/getall", isAuthorizedUser, jobseekerGetAllApplications);
router.get(
  "/employer/getall",
  isAuthorizedEmployer,
  employerGetAllApplications
);
router.post("/post", isAuthorizedUser, postApplication);
router.post("/employer/mail/:id", sendEmailSelect);
router.delete("/delete/:id", isAuthorizedUser, jobseekerDeleteApplication);

export default router;
