import React from "react";
import { Link } from "react-router-dom";
import { userDetails } from "./register";
import axios from "axios";
export default function Button() {
  const getDetails = async () => {
    console.log("user details");
    console.log(userDetails);
    let id = userDetails.email;
    const res = await axios.post(
      `http://localhost:5000/api/v1/users/register/${id}`,
      userDetails
    );
  };
  return (
    <div>
      <button onClick={getDetails}>Click here</button>
    </div>
  );
}
