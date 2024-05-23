import mongoose, { Mongoose } from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const eventsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [3, "Name must contain atleast 3 characters!"],
    maxLength: [30, "Name cannot exceed 30 characters!"],
  },

  userId: {
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
  registeredOn: {
    type: Date,
    default: new Date(),
  },
  slotOn: {
    type: Date,
    required: [true, "Please provide the date of your slot"],
  },
  Test: {
    score: {
      type: Number,
      default: 0,
    },
    suggesstions: {
      type: String,
      default: "",
    },
  },
});
export const Event = mongoose.model("Event", eventsSchema);
