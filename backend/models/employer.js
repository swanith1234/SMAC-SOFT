import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
const employerSchema = new mongoose.Schema({
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
  institution: {
    type: String,
    required: [true, "Please enter your institution name"],
    minLength: [3, "Name must contain atleast 3 characters!"],
    maxLength: [30, "Name cannot exceed 30 characters!"],
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
  domain: {
    type: String,
    required: [true, "Please enter your domain"],
    minLength: [3, "Domain must contain at least 3 characters!"],
    maxLength: [30, "Domain cannot exceed 30 characters!"],
  },
  location: {
    type: String,
    required: [true, "Please enter your location"],
    minLength: [3, "Location must contain at least 3 characters!"],
    maxLength: [30, "Location cannot exceed 30 characters!"],
  },
  description: {
    type: String,
    required: [true, "Please enter your description"],
    minLength: [3, "Description must contain at least 3 characters!"],
  },

  createdAt: {
    type: Date,
    default: Date.now(),
  },
  HR: {
    type: String,
    required: [true, "Please select yes or no"],
    enum: ["Yes", "No"],
  },
  number_of_employees: {
    type: Number,
  },
});
//hashing of password
employerSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  this.password = await bcrypt.hash(this.password, 10);
});
//COMPARING PASSWORD
employerSchema.methods.comparepassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password);
};
//GENERATING A JWT TOKEN FOR AUTHORIZATION
employerSchema.methods.geJWTToken = function () {
  return jwt.sign({ id: this._id }, process.env.JWT_SECRET_KEY);
  expiresIn: process.env.JWT_EXPIRE;
};
export const Employer = mongoose.model("Employer", employerSchema);
