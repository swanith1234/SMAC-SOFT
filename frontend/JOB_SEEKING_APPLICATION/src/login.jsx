import React, { createContext } from "react";
import "./login.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Userpage from "./userpage";
import Emp_home from "./emp_home";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
let token = "";
export default function Login() {
  const [details, setDetails] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setDetails({ ...details, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(details);

    // Simulated API call (replace with actual API endpoint)

    if (details.role === "Job seeker") {
      const res = await axios.post(
        "http://localhost:5000/api/v1/users/login",
        details
      );
      console.log(res.data);
      if (res.data) {
        toast.success("Logged in  Successfully");
      }
      token = res.data.token;
      console.log("token= " + token);
      const localstorage = { token: res.data.token, user: res.data.user };
      localStorage.setItem("user", JSON.stringify(localstorage));
      navigate("/userpage", {
        state: { userData: res.data.user },
      });
    } else {
      const res = await axios.post(
        "http://localhost:5000/api/v1/employers/login",
        details
      );
      navigate("/emp_home", {
        state: { userData: res.data.employer, token: res.data.token },
      });
      console.log(res.data);
      if (res.data) {
        toast.success("Logged in  Successfully");
      }
      token = res.data.token;
      console.log(token);
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="login-form">
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
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <input
            type="text"
            name="role"
            id="role"
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <ToastContainer />
    </div>
  );
}
export const getUserToken = () => token;
