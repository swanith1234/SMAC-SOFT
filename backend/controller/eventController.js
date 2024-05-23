import { catchAsyncError } from "../middllewares/catchAsyncError.js";
import ErrorHandler from "../middllewares/error.js";
import { User } from "../models/user.js";
import { Event } from "../models/events.js";
import jwt from "jsonwebtoken";

export const registerEvent = catchAsyncError(async (req, res, next) => {
  const token = req.params.id;
  console.log(token);
  const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

  const Id = decoded.id;

  const userId = {
    user: Id,
    role: "Job seeker",
  };
  let { name, slotOn } = req.body;
  slotOn = new Date(slotOn);
  slotOn.setHours(3, 30, 0, 0);
  if (!name || !userId || !slotOn) {
    return next(new ErrorHandler("Please provide full details", 400));
  }
  const event = await Event.create({
    name,
    userId,
    slotOn,
  });
  res.status(200).json({
    success: true,
    nessage: "Registered Successfully",
    event,
  });
}); //register event endpoint

//getting top 3 of event
export const getUserResults = catchAsyncError(async (req, res, next) => {
  try {
    const token = req.params.id;
    console.log("user results", req.params);
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decoded.id;
    const name = req.params.name;

    // Execute the query and await the result
    const results = await Event.find({
      name: name,
      "userId.user": userId,
      "Test.score": { $ne: 0 },
    }).sort({ registeredOn: -1 });

    // Send the results as JSON response
    res.status(200).json({
      success: true,
      results, // Assuming results is an array of documents
    });
  } catch (error) {
    // Handle errors
    console.log(error);
    res.status(500).json({ success: false, error: error.message });
  }
});
export const getTopThree = catchAsyncError(async (req, res, next) => {
  try {
    let date = req.params.date;
    console.log("date", date);
    date = Date.parse(date);
    const name = req.params.name;
    const results = await Event.find({ slotOn: date, name: name })
      .limit(3)
      .sort({ "Test.score": -1 });
    let i = 0;
    let users = {};
    console.log(results.length);
    while (i < results.length) {
      users[i] = await User.find({ _id: results[i].userId.user });
      console.log(users);
      i++;
    }
    console.log(results);
    res.status(200).json({
      success: true,
      results,
      users, // Assuming results is an array of documents
    });
  } catch (error) {
    // Handle errors

    res.status(500).json({ success: false, error: error.message });
  }
});
export const getUserPrevContests = async (req, res, next) => {
  try {
    const token = req.params.id;
    console.log("user results", req.params);
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decoded.id;
    const events = await Event.find({
      "userId.user": userId,
      "Test.score": { $ne: 0 },
    });
    res.status(200).json({
      sucess: true,
      events,
    });
  } catch (e) {
    console.log(e);
  }
};

export const getUserUpComingContests = async (req, res, next) => {
  try {
    const token = req.params.id;
    console.log("user results", req.params);
    const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
    const userId = decoded.id;
    const events = await Event.find({
      "userId.user": userId,
      "Test.score": 0,
      slotOn: { $gt: new Date() },
    });

    console.log("eeeew", events);
    console.log(events.slotOn > Date.now());
    res.status(200).json({
      sucess: true,
      events,
    });
  } catch (e) {
    console.log(e);
  }
};
