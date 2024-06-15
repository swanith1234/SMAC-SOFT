import ErrorHandler from "../middllewares/error.js";
import { Job } from "../models/jobSchema.js";
import { catchAsyncError } from "../middllewares/catchAsyncError.js";
import jwt from "jsonwebtoken";
export const getAllJobs = catchAsyncError(async (req, res, next) => {
  const jobs = await Job.find({ expired: false });
  res.status(200).json({
    success: true,
    jobs,
  });
});
export const postJob = catchAsyncError(async (req, res, next) => {
  console.log("job controller");
  let { role } = req.user;
  console.log(role);
  if (role === "Job seeker") {
    return next(new ErrorHandler("Job seeker is not allowed here", 400));
  }
  const {
    title,
    description,

    country,
    Working_location,

    fixedSalary,
    Job_type,
    Application_Deadline,
    number_of_openings,
    salaryFrom,
    salaryTo,
  } = req.body;
  console.log(req.body);
  if (!title) {
    return next(new ErrorHandler("Please provide full job details", 400));
  }
  if ((!salaryFrom || !salaryTo) && !fixedSalary) {
    return next(
      new ErrorHandler("Pleaseeither provide fixed salary or salary range", 400)
    );
  }
  if (salaryFrom && salaryTo && fixedSalary) {
    return next(
      new ErrorHandler(
        "cannot enter the salary range and fied salary together",
        400
      )
    );
  }
  let expired = false;
  if (Date.now() > Application_Deadline) {
    expired = true;
  } else {
    expired = false;
  }
  const postedBy = req.user._id;
  const job = await Job.create({
    title,
    description,

    country,

    number_of_openings,
    Working_location,
    Job_type,
    Application_Deadline,
    fixedSalary,
    salaryFrom,
    salaryTo,
    postedBy,
    expired,
  });
  res.status(200).json({
    success: true,
    message: "Job posted successfully",
    job,
  });
});
export const getEmployerJobs = async (req, res, next) => {
  const token = req.params.id;
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(decoded.id);
  const Jobs = await Job.find({ postedBy: decoded.id });
  console.log(Jobs);
  res.status(200).json({
    success: true,
    Jobs,
  });
};
