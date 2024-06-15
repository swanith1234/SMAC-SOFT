import { catchAsyncError } from "../middllewares/catchAsyncError.js";
import ErrorHandler from "../middllewares/error.js";
import { Application } from "../models/application.js";
import cloudinary from "cloudinary";
import { Job } from "../models/jobSchema.js";

export const employerGetAllApplications = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Job seeker") {
      return next(
        new ErrorHandler(
          "Job seeker is noallowed to access this resources",
          400
        )
      );
    }
    const { _id } = req.user;
    const applications = await Application.find({ "employerId.user": _id });
    console.log(applications);
    res.status(200).json({
      success: true,
      applications,
    });
  }
);
export const jobseekerGetAllApplications = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "employer") {
      return next(
        new ErrorHandler(
          "employer is not allowed to access this resources",
          400
        )
      );
    }
    const { _id } = req.user;
    const applications = await Application.find({ "applicantId.user": _id });
    res.status(200).json({
      success: true,
      applications,
    });
  }
);
export const jobseekerDeleteApplication = catchAsyncError(
  async (req, res, next) => {
    const { role } = req.user;
    if (role === "Employer") {
      return next(
        new ErrorHandler("Employer is not allowed to do this action", 400)
      );
      const { _id } = req.params;
      const application = await Application.findById(id);
      if (!application) {
        return next(new ErrorHandler("oops! Application not found", 404));
        await application.deleteOne();
        res.status(200).json({
          success: true,
          message: "Application deleted successfully",
        });
      }
    }
  }
);
export const postApplication = catchAsyncError(async (req, res, next) => {
  const { role } = req.user;
  if (role === "Employer") {
    return next(
      new ErrorHandler("employer is not allowed to access this resources")
    );
  }
  const resume = req.files.resume; // Extract the resume file from req.files
  console.log(resume);
  if (!resume || Object.keys(resume).length === 0) {
    return next(new ErrorHandler("Resume is required"));
  }

  const { mimetype, tempFilePath } = resume;

  const allowedFormats = ["image/png", "image/jpg", "image/webp"];

  if (!allowedFormats.includes(mimetype)) {
    return next(
      new ErrorHandler(
        "Invalid file type, please upload a png, jpg, or webp format",
        400
      )
    );
  }

  cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLIENT_NAME,
    api_key: process.env.CLOUDINARY_CLIENT_API,
    api_secret: process.env.CLOUDINARY_CLIENT_SECRET,
  });
  const cloudinaryResponse = await cloudinary.uploader.upload(
    resume.tempFilePath
  );
  console.log("app");
  console.log(cloudinaryResponse);
  if (!cloudinaryResponse || cloudinaryResponse.error) {
    console.error(
      "Cloudinary Error: " + cloudinaryResponse.error ||
        "Unknown cloudinary error"
    );
    return next(new ErrorHandler("Failed to upload resume", 500));
  }
  const { name, email, coverletter, phone, address, jobid } = req.body;
  console.log(req.body);
  const applicantId = {
    user: req.user._id,
    role: "Job seeker",
  };
  console.log("user" + applicantId.user);

  if (!jobid) {
    return next(new ErrorHandler("Job not found", 404));
  }
  console.log("jobid" + jobid);
  const jobdetails = await Job.findById(jobid);
  if (!jobdetails) {
    return next(new ErrorHandler("Job not found", 404));
  }
  const employerId = {
    user: jobdetails.postedBy,
    role: "employer",
  };
  if (
    !name ||
    !email ||
    !coverletter ||
    !phone ||
    !address ||
    !applicantId ||
    !employerId ||
    !jobid ||
    !resume
  ) {
    return next(new ErrorHandler('Please fill all details",400'));
  }
  const application = await Application.create({
    name,
    email,
    coverletter,
    phone,
    address,
    applicantId,
    employerId,
    jobid,
    resume: {
      public_id: cloudinaryResponse.public_id,
      url: cloudinaryResponse.secure_url,
    },
  });
  res.status(200).json({
    success: true,
    nessage: "Application submitted",
    application,
  });
});
