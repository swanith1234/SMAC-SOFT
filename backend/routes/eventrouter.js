import express from "express";
import {
  isAuthorizedEmployer,
  isAuthorizedUser,
} from "../middllewares/auth.js";
import {
  getTopThree,
  getUserPrevContests,
  getUserResults,
  getUserUpComingContests,
  registerEvent,
} from "../controller/eventController.js";
import { sendEmailSelect } from "../mail/eventregistermail.js";
const router = express.Router();
router.post("/post/:id", isAuthorizedUser, registerEvent);
router.get("/get/userresults/:name/:id", isAuthorizedUser, getUserResults);
router.get("/get/topthree/:name/:date", getTopThree);
router.get("/get/pastevents/:id", getUserPrevContests);
router.get("/get/upcoming/:id", getUserUpComingContests);
router.post("/register/:id", sendEmailSelect);
export default router;
