import React from "react";
import "./employer_register.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
var employerDetails = {};
export default function Employer_register() {
  const [details, setdetails] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    employerDetails = details;
    addDetails(details);
  };
  const addDetails = async (details) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/employers/register",
        details
      );
      console.log(res.data);
      navigate("/login");
    } catch (error) {
      console.error("Axios Error:", error);
      // Handle error appropriately, depending on the type of error
    }
  };
  return (
    <>
      <div class="container">
        <h2>Company Information Form</h2>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              required
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="institution">Institution Name:</label>
            <input
              type="text"
              id="institution"
              name="institution"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="company-mail">Company Mail:</label>
            <input
              type="email"
              id="company-mail"
              name="email"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              required
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="role">Role:</label>
            <input
              type="text"
              id="role"
              name="role"
              required
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="company-domain">Company Domain:</label>
            <input
              type="text"
              id="company-domain"
              name="domain"
              required
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="company-location">Company's Location:</label>

            <input
              type="text"
              name="location"
              id="location"
              onChange={handleChange}
              required
            />
          </div>
          <div class="form-group">
            <label for="num-employees">Number of Employees:</label>
            <input
              type="number"
              id="num-employees"
              name="number_of_employees"
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="company-description">
              Description about the Company:
            </label>
            <textarea
              id="company-description"
              name="description"
              rows="4"
              onChange={handleChange}
            ></textarea>
          </div>
          <div class="form-group">
            <label for="phone">Phone Number:</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              required
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label for="hr-manager">Are you a HR Manager?</label>
            <select id="hr-manager" name="HR" onChange={handleChange}>
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
