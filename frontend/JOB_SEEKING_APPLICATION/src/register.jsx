import React from "react";
import "./register.css";
import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

var userDetails = {};
export default function Register() {
  const [details, setdetails] = useState({});
  const navigate = useNavigate();
  const handleChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);
    userDetails = details;
    addDetails(details);
  };
  const addDetails = async (details) => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/register",
        details
      );
      console.log(res.data);
      navigate("/login");
      // navigate("/userpage", {
      //   state: { userData: res.data.user },
      // });
    } catch (error) {
      console.error("Axios Error:", error);
      // Handle error appropriately, depending on the type of error
    }
  };

  return (
    <>
      <div>
        <div className="container">
          <h2>Registration Form</h2>
          <form onSubmit={handleSubmit} action="/">
            <div className="form-group">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                name="name"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone:</label>
              <input
                type="tel"
                id="phone"
                name="phone"
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
              <label htmlFor="college">College:</label>
              <input
                type="text"
                id="college"
                name="college"
                required
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <input type="submit" value="Register" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
export { userDetails };
