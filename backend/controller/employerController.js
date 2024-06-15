import { catchAsyncError } from "../middllewares/catchAsyncError.js";
import ErrorHandler from "../middllewares/error.js";
import { Employer } from "../models/employer.js";
import { sendTokenemployer } from "../utils/jwttoken.js";
export const employerregister = catchAsyncError(async (req, res, next) => {
  const {
    name,
    email,
    phone,
    role,
    password,
    institution,
    HR,
    number_of_employees,
    description,
    location,
    domain,
  } = req.body;

  console.log(name, email, phone, role, password, "swan");
  if (!name || !email || !phone || !role || !password) {
    return next(new ErrorHandler("please fill full registration form"));
  }

  const isEmail = await Employer.findOne({ email });
  if (isEmail) {
    return next(new ErrorHandler("Email already in use"));
  }
  console.log("enployerswa");
  const employer = await Employer.create({
    name,
    email,
    phone,
    role,
    password,
    institution,
    HR,
    number_of_employees,
    description,
    location,
    domain,
  });

  sendTokenemployer(employer, 200, res, "success");
});
export const employerlogin = catchAsyncError(async (req, res, next) => {
  const { email, password, role } = req.body;
  console.log("swanith");
  if (!email || !password || !role) {
    return next(new ErrorHandler("Please provide full login details", 400));
  }
  const employer = await Employer.findOne({ email }).select("+password");
  if (!employer) {
    return next(new ErrorHandler("Invalid email or password", 400));
  }
  const isPasswordMatched = await employer.comparepassword(password);
  if (!isPasswordMatched) {
    return next(new ErrorHandler("invalid email or password swanith", 400));
  }
  if (employer.role !== role) {
    return next(new ErrorHandler("Employer with this role no found", 400));
  }
  sendTokenemployer(employer, 200, res, "Employer logged in successfully");
});

export const employerlogout = catchAsyncError(async (req, res, next) => {
  res
    .status(201)
    .cookie("token", "", {
      httpOnly: true,
      expires: new Date(Date.now()),
    })
    .json({
      sucess: true,
      message: "Employer loggedout successfully",
    });
});
export const getOneEmployer = async (req, res) => {
  const employer = await Employer.findOne({ email: req.params.id });
  console.log(req.params.id);
  console.log(employer);
  res.send(employer);
};
