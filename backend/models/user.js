import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const userSchema = new mongoose.Schema({
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
  phone: {
    type: Number,
    required: [true, "Please enter your number"],
  },
  password: {
    type: String,
    required: [true, "Please enter your password"],
    minLength: [3, "password must contain atleast 3 characters!"],
    maxLength: [30, "password cannot exceed 30 characters!"],
    select: false,
  },
  role: {
    type: String,
    required: [true, "Please enter your role"],
    enum: ["Job seeker", "employer"],
  },
  college: {
    type: String,
    required: [true, "Please enter your college"],
  },
  LinkedIn: {
    type: String,
    required: [true, "Please enter your LinkedIn url"],
  },
  GitHub: {
    type: String,
    required: [true, "Please enter your GitHub url"],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
//hashing of password
userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
//COMPARING PASSWORD
userSchema.methods.comparepassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
//GENERATING A JWT TOKEN FOR AUTHORIZATION
userSchema.methods.geJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY);
  expiresIn: process.env.JWT_EXPIRE;
};
export const User = mongoose.model("User", userSchema);
