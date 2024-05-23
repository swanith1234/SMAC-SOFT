// src/components/UserUpdateForm.jsx
import React, { useState } from "react";
import { useEffect } from "react";
import { getUserToken } from "./login";
import axios from "axios";
const UserUpdateForm = () => {
  const token = getUserToken();
  console.log("token", token);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "", // Leave empty initially, let user input new password
    college: "",
    LinkedIn: "",
    GitHub: "",
  });
  useEffect(() => {
    const fetchDetails = async () => {
      const user = await axios.get(
        `http://localhost:5000/api/v1/users/login/${token}`
      );
      console.log(user.data.user);
      setFormData({
        name: user.data.user.name || "",
        email: user.data.user.email || "",
        phone: user.data.user.phone || "",
        college: user.data.user.college || "",
        password: user.data.user.password || "",
        role: user.data.user.role || "",
        LinkedIn: user.data.user.LinkedIn || "",
        GitHub: user.data.user.GitHub || "",
      });
    };
    fetchDetails();
  }, []);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.patch(
      `http://localhost:5000/api/v1/users/login/update/${token}`,
      {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        college: formData.college,
        LinkedIn: formData.LinkedIn,
        GitHub: formData.GitHub,
      }
    ); // Submit updated data
    console.log(res);
  };

  return (
    formData && (
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div>
          <label>College:</label>
          <input
            type="text"
            name="college"
            value={formData.college}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>LinkedIn:</label>
          <input
            type="text"
            name="LinkedIn"
            value={formData.LinkedIn}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>GitHub:</label>
          <input
            type="text"
            name="GitHub"
            value={formData.GitHub}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Update</button>
      </form>
    )
  );
};

export default UserUpdateForm;
