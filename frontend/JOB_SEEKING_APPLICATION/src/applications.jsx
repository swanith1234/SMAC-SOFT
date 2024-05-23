import React from "react";

// Import the provided data

import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { getUserToken } from "./login";
import { useLocation } from "react-router-dom";
import { Job } from "../../../backend/models/jobSchema.js";
// Define the Applications component
const Applications = () => {
  const location = useLocation();
  const jobId = location.state.id;
  console.log(jobId);
  const [applications, setapplications] = useState([]);
  const handleSelect = async (id) => {
    try {
      const response = await axios.post(
        `http://localhost:5000/api/v1/application/employer/mail/${id}`
      );
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    const fetchApplications = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/application/employer/getall",
          {
            withCredentials: true,
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `${getUserToken()}`,
            },
          }
        );
        console.log(typeof response.data.applications);
        const filteredData = response.data.applications.filter(
          (item) => item.jobid === jobId
        );
        console.log(filteredData);
        setapplications(filteredData);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, []);

  return (
    <>
      {applications.length == 0 ? (
        <div>No applications</div>
      ) : (
        applications.map((applicant) => (
          <div className="card" key={applicant.email}>
            <div className="card-header">
              <h2>{applicant.name}</h2>
              <button
                onClick={() => {
                  handleSelect(applicant._id);
                }}
              >
                Select
              </button>
            </div>
            <div className="card-body">
              <p>Email: {applicant.email}</p>
              <p>Coverletter:{applicant.coverletter}</p>
              <a href={applicant.resume.url} target="_blank">
                <button>View CV</button>
              </a>
            </div>
          </div>
        ))
      )}
    </>
  );
};
export default Applications;
