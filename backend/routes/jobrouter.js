import express from "express";
import { getAllJobs, postJob } from "../controller/jobController.js";
import { isAuthorizedEmployer } from "../middllewares/auth.js";
import { getEmployerJobs } from "../controller/jobController.js";
const router = express.Router();
router.post("/employers/post", isAuthorizedEmployer, postJob);
router.get("/employers/:id", getEmployerJobs);
router.get("/users/jobs", getAllJobs);
export default router;
