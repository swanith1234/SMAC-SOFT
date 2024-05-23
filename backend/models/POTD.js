import mongoose, { Mongoose } from "mongoose";

const potdSchema = new mongoose.Schema({
  question: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [10, "question must contain atleast 10 characters!"],
  },
  answer: {
    type: String,
    required: [true, "Please enter answer"],
  },
  options: {
    type: [String], // Array of strings for options
    required: [true, "Please enter options"],
    validate: [arrayLimit, "Options must contain at least 4 elements"],
  },
  category: {
    type: "String",
    required: [true, "Please enter category"],
  },

  postedOn: {
    type: Date,
    default: new Date().toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
    }),
  },
});
function arrayLimit(val) {
  return val.length >= 4;
}
export const POTD = mongoose.model("POTD", potdSchema);
