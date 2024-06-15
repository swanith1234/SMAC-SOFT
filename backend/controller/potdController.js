import { catchAsyncError } from "../middllewares/catchAsyncError.js";
import ErrorHandler from "../middllewares/error.js";
import { User } from "../models/user.js";
import { Event } from "../models/events.js";
import jwt from "jsonwebtoken";
import { POTD } from "../models/POTD.js";
export const getPOTD = catchAsyncError(async (req, res, next) => {
  const problem = await POTD.find({
    postedOn: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
  });
  console.log(problem);
  res.status(200).json({
    success: true,
    problem,
  });
});
export const postPOTD = catchAsyncError(async (req, res, next) => {
  try {
    const { question, answer, options, category } = req.body;

    if (!question || !answer || !options || !category) {
      return next(new ErrorHandler("please fill full question format"));
    }
    const potd = await POTD.create({
      question,
      answer,
      options,
      category,
    });

    res.status(200).json({
      success: true,
      potd,
    });
  } catch (e) {
    console.log(e);
  }
});
