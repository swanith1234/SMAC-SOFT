import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { getUserToken } from "./login";

function JobList() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const fetchJobs = async () => {
      const res = await axios.get(
        `http://localhost:5000/api/v1/job/employers/${getUserToken()}`
      );
      console.log(res.data);
      setJobs(res.data.Jobs);
    };
    fetchJobs();
  }, []); // Empty dependency array to ensure the effect runs only once on mount

  return (
    <div style={styles.container}>
      <h1>Job Applications</h1>
      {console.log(jobs.length)}
      {jobs.length != 0 &&
        jobs.map((job, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.content} className="row">
              <h2 style={styles.title}>Job Title: {job.title}</h2>
              <p>
                <strong>Posted On Date:</strong> {job.jobPostedOn}
              </p>
              <p>
                <strong>Application Deadline :</strong>{" "}
                {job.Application_Deadline}
              </p>
            </div>
            <div style={styles.buttonContainer}>
              <Link to="/applications" state={{ id: job._id }}>
                {" "}
                <button style={styles.button}>View Applications</button>
              </Link>
            </div>
          </div>
        ))}
    </div>
  );
}

const styles = {
  container: {
    marginTop: 20,
    marginLeft: 20,
  },
  card: {
    width: "80%",
    margin: "0 0 2rem 10rem",

    border: "1px solid #ccc",
    borderRadius: 10,
    padding: 20,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    backgroundColor: "#f9f9f9",
  },

  content: {
    flex: 1,
  },
  title: {
    color: "#333",
    marginBottom: 10,
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: 5,
    padding: "10px 20px",
    cursor: "pointer",
  },
};

export default JobList;
