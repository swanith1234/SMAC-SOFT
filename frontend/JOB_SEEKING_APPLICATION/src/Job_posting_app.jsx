import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios"; // Don't forget to import axios
import "./Job_posting_app.css";
import { getUserToken } from "./login";
export default function Job_posting_app() {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    console.log(getUserToken());
    addDetails(details);
  };

  const addDetails = async (details) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/job/employers/post",
        details,
        {
          withCredentials: true,
          headers: {
            "Content-Type": "application/json",
            Authorization: `${getUserToken()}`,
          },
        }
      );
      alert("Job posted successfully");
      console.log(res.data);
      navigate("/emp_home");
    } catch (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        console.error("Axios Error:", error.response.data);
        console.error("Status Code:", error.response.status);
        console.error("Response Headers:", error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        console.error("Axios Error:", error.request);
      } else {
        // Something happened in setting up the request that triggered an error
        console.error("Axios Error:", error.message);
      }
      // Handle error appropriately, depending on the type of error
    }
  };

  return (
    <div>
      <div>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Job Application Form</title>
        <link rel="stylesheet" href="styles.css" />
        <form id="jobApplicationForm" onSubmit={handleSubmit}>
          <label htmlFor="jobTitle">Job Title:</label>
          <input
            type="text"
            id="jobTitle"
            name="title"
            required
            onChange={handleChange}
          />
          <br />
          <br />
          <label htmlFor="openings">Number of Openings:</label>
          <input
            type="number"
            id="openings"
            name="number_of_openings"
            required
            onChange={handleChange}
          />
          <br />
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            required
            onChange={handleChange}
          />
          <br />
          <label htmlFor="workingLocation">Working Location:</label>
          <select
            id="workingLocation"
            name="Working_location"
            onChange={handleChange}
          >
            <option value="remote">Remote</option>
            <option value="onsite">Onsite</option>
            <option value="both">Both</option>
          </select>
          <br />
          <label htmlFor="jobType">Job Type:</label>
          <select id="jobType" name="Job_type" onChange={handleChange}>
            <option value="internship">Internship</option>
            <option value="job">Job</option>
          </select>
          <br />
          <label htmlFor="jobDescription">Job Description:</label>
          <br />
          <textarea
            id="jobDescription"
            name="description"
            rows={4}
            cols={50}
            required
            onChange={handleChange}
            defaultValue={""}
          />
          <br />
          <label htmlFor="applicationDeadline">Application Deadline:</label>
          <input
            type="date"
            id="applicationDeadline"
            name="Application_Deadline"
            required
            onChange={handleChange}
          />
          <br />
          <label htmlFor="salaryFrom">Salary From:</label>
          <input
            type="number"
            id="salaryFrom"
            name="salaryFrom"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="salaryTo">Salary To:</label>
          <input
            type="number"
            id="salaryTo"
            name="salaryTo"
            onChange={handleChange}
          />
          <br />
          <label htmlFor="fixedSalary">Fixed Salary:</label>
          <input
            type="number"
            id="fixedSalary"
            name="fixedSalary"
            onChange={handleChange}
          />
          <br />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}
