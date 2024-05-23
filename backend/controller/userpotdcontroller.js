import { catchAsyncError } from "../middllewares/catchAsyncError.js";
import ErrorHandler from "../middllewares/error.js";
import { User } from "../models/user.js";
import { Event } from "../models/events.js";
import jwt from "jsonwebtoken";
import { POTD } from "../models/POTD.js";
import { UserPotd } from "../models/userpotd.js";
export const postuserPOTD = catchAsyncError(async (req, res, next) => {
  try {
    let { userId, problemId, isCorrect } = req.body;
    const decoded = jwt.verify(userId, process.env.JWT_SECRET_KEY);
    userId = decoded.id;
    console.log(userId, problemId, isCorrect);
    if (!userId || !problemId) {
      return next(new ErrorHandler("please fill full details"));
    }
    const userPotd = await UserPotd.create({
      userId,
      problemId,
      isCorrect,
    });

    res.status(200).json({
      success: true,
      userPotd,
    });
  } catch (e) {
    console.log(e);
  }
});
export const checkAttempts = catchAsyncError(async (req, res, next) => {
  let { userId } = req.body;
  const decoded = jwt.verify(userId, process.env.JWT_SECRET_KEY);
  userId = decoded.id;
  const check = await UserPotd.find({ userId: userId });
  res.status(200).json({ success: true, check });
});
export const checkUserAttempts = catchAsyncError(async (req, res, next) => {
  let { userId, problemId } = req.body;

  const decoded = jwt.verify(userId, process.env.JWT_SECRET_KEY);
  userId = decoded.id;
  console.log(problemId);
  const check = await UserPotd.find({ userId: userId, problemId: problemId });
  console.log("check", check);
  res.status(200).json({ success: true, check });
});
export const potdcount = catchAsyncError(async (req, res, next) => {
  let { problemId } = req.body;
  const count = await UserPotd.countDocuments({ problemId: problemId });
  console.log(typeof count);
  res.status(200).json({ success: true, count });
});
export const getallwithId = catchAsyncError(async (req, res, next) => {
  let { problemId } = req.body;
  const Problems = await POTD.findById(problemId);
  res.status(200).json({ sucess: true, Problems });
});
