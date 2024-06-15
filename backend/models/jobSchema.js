import mongoose from "mongoose";
const jobSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Please enter your name"],
    minLength: [3, "Name must contain atleast 3 characters!"],
    maxLength: [30, "Name cannot exceed 30 characters!"],
  },
  description: {
    type: String,
    required: [true, "Please enter your description"],
    minLength: [30, "Name must contain atleast 30 characters!"],
    maxLength: [1000, "Name cannot exceed 1000 characters!"],
  },

  country: {
    type: String,
    required: [true, "Country is required"],
  },

  fixedSalary: {
    type: Number,
    minLength: [4, "Name must contain atleast 4 characters!"],
    maxLength: [9, "Name cannot exceed 9 characters!"],
  },
  salaryFrom: {
    type: Number,
    minLength: [4, "salary from must contain atleast 4 characters!"],
    maxLength: [9, "salary from    cannot exceed 9 characters!"],
  },
  salaryTo: {
    type: Number,
    minLength: [4, "salary to must contain atleast 4 characters!"],
    maxLength: [9, "salary to    cannot exceed 9 characters!"],
  },
  number_of_openings: {
    type: Number,
  },
  Working_location: {
    type: String,
    required: [true, "please enter the details of Working Location"],
  },
  Job_type: {
    type: String,
    required: [true, "please enter the details of Job Type"],
  },
  Application_Deadline: {
    type: Date,
    required: [true, "please enter application deadline date"],
  },
  expired: {
    type: Boolean,
  },
  jobPostedOn: {
    type: Date,
    default: Date.now,
  },
  postedBy: {
    type: mongoose.Schema.ObjectId,
    ref: "Employer",
    required: true,
  },
});
export const Job = mongoose.model("Job", jobSchema);
