import { catchAsyncError } from "./catchAsyncError.js";
import { User } from "../models/user.js";
import { Employer } from "../models/employer.js";
import ErrorHandler from "../middllewares/error.js";
import jwt from "jsonwebtoken";
export const isAuthorizedUser = catchAsyncError(async (req, res, next) => {
  console.log("1");
  const token = req.get("Authorization").split(" ")[1];
  console.log("auth " + token);

  jwt.verify(token, process.env.JWT_SECRET_KEY, function (err, decoded) {
    if (err) {
      /*
        err = {
          name: 'JsonWebTokenError',
          message: 'jwt malformed'
        }
      */
      console.log("jwt  " + err);
    }
  });

  if (!token) {
    return next(new ErrorHandler("User not authorized", 400));
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

    req.user = await User.findById(decoded.id);
    next();
  } catch (error) {
    // Handle JWT verification errors
    return next(new ErrorHandler("Invalid token", 400));
  }
});

export const isAuthorizedEmployer = catchAsyncError(async (req, res, next) => {
  const token = req.get("Authorization");
  console.log(token);

  console.log(token);
  if (!token) {
    return next(new ErrorHandler("Employer not authorized", 400));
  }

  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
  console.log(decoded);
  req.user = await Employer.findById(decoded.id);
  console.log(req.user);
  console.log("auth");
  next();
});
