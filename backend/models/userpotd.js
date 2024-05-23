import mongoose, { Mongoose } from "mongoose";

const userpotdSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: true,
  },
  problemId: {
    type: mongoose.Schema.ObjectId,
    ref: "Problem",
    required: true,
  },
  isCorrect: {
    type: Boolean,
    required: true,
  },
  submittedOn: {
    type: Date,
    default: Date.now(),
  },
});
export const UserPotd = mongoose.model("UserPotd", userpotdSchema);
