import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Emp_navbar from "./emp_navbar";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
export default function Emp_home() {
  const location = useLocation();
  const userData = location.state?.userData; // Access the user data
  return (
    <>
      <Emp_navbar></Emp_navbar>
      <div className="hero-section row" style={{ marginTop: "10rem" }}>
        <div
          className="hero-content col-md-6 text-center "
          style={{ paddingTop: "10%" }}
        >
          <h2>Welcome, {userData?.name}!</h2>
          <p>
            Post a job and create an opportunity for the growth of your comapany
            and our nation
          </p>
          <Link to="/job_app">
            {" "}
            <div className="btn btn-primary">Post Job</div>
          </Link>
        </div>
        <div className="hero-img col-md-6 text-center">
          <img
            src="https://th.bing.com/th/id/OIG2.NQLJycr2H16TxSgvdC2A?w=270&h=270&c=6&r=0&o=5&pid=ImgGn"
            alt=""
            className="rounded-5"
          />
        </div>
      </div>
    </>
  );
}
