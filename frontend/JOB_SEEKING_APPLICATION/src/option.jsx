import React from "react";
import "./option.css";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
export default function Option() {
  return (
    <>
      <div className="container">
        <h2>Select your role</h2>
        <div className="row mx-5">
          <div className="col-md-6">
            <Link to="/register">
              <div className="btn btn-primary">Employer</div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/emp_register">
              {" "}
              <div className="btn btn-primary"> Jobseeker</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
