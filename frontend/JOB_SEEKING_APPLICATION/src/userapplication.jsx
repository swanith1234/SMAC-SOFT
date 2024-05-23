import React, { useState } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { getUserToken } from "./login";
import { useParams } from "react-router-dom";
function UserApplicationForm() {
  const { jobId } = useParams();
  const [details, setDetails] = useState({});
  const [errorMessage, setErrorMessage] = useState("");
  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0]; // Get the first file from the input

    // Check if a file is selected
    if (file) {
      const allowedFormats = ["image/png", "image/jpeg", "image/webp"];

      // Check if the selected file type is allowed
      if (allowedFormats.includes(file.type)) {
        setDetails((prevState) => ({
          ...prevState,
          resume: file,
        }));
        setErrorMessage("");
      } else {
        setDetails((prevState) => ({
          ...prevState,
          resume: null,
        }));
        setErrorMessage(
          "Invalid file type. Please upload a png, jpg, or webp format."
        );
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    addDetails(details);
  };

  const addDetails = async (details) => {
    try {
      const formData = new FormData();
      formData.append("name", details.name);
      formData.append("email", details.email);
      formData.append("coverletter", details.coverletter);
      formData.append("phone", details.phone);
      formData.append("address", details.address);
      formData.append("resume", details.resume);
      formData.append("jobid", jobId);
      console.log(formData);
      const res = await axios.post(
        "http://localhost:5000/api/v1/application/post",
        formData,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `${getUserToken()}`,
          },
        }
      );

      alert("Job posted successfully");
      console.log(res.data);
      navigate("/userpage");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <h2>Job Application Form</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="coverLetter">Cover Letter:</label>
          <textarea
            id="coverLetter"
            name="coverletter"
            onChange={handleChange}
            rows="4"
            required
          ></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <input
            type="text"
            id="address"
            name="address"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="resume">Resume (png, jpg, or webp):</label>
          <input
            type="file"
            id="resume"
            name="resume"
            onChange={handleFileChange}
            accept="image/png, image/jpeg, image/webp"
            required
          />
        </div>

        <div className="form-group">
          <button type="submit">Submit Application</button>
        </div>
      </form>
    </div>
  );
}

export default UserApplicationForm;
