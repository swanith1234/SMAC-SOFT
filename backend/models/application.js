import mongoose, { Mongoose } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const applicationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [3, "Name must contain atleast 3 characters!"],
    maxLength: [30, "Name cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: [true, "Please enter your email"],
    validate: [validator.isEmail, "please enter a valid email"],
  },
  coverletter: {
    type: String,
    required: [true, "Please enter your Cover letter"],
  },
  phone: {
    type: Number,
    required: [true, "Please enter you phone number"],
  },
  address: {
    type: String,
    required: [true, "Please enter your address"],
  },
  resume: {
    public_id: {
      type: String,
      required: true,
    },
    url: {
      type: String,
      required: true,
    },
  },
  applicantId: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    role: {
      type: String,
      enum: ["Job seeker"],
      required: true,
    },
  },
  employerId: {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employer",
      required: true,
    },
    role: {
      type: String,
      enum: ["employer"],
      required: true,
    },
  },
  jobid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: true,
  },
});
export const Application = mongoose.model("Application", applicationSchema);
