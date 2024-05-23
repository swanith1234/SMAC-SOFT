import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function UserJobs() {
  const [jobs, setJobs] = useState([]);
  const handleApply = async (jobId) => {};
  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/api/v1/job/users/jobs"
        );
        setJobs(response.data.jobs);
      } catch (error) {
        console.error("Error fetching jobs:", error);
      }
    };

    fetchJobs();
  }, []);

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Job Hunt</title>
      <link
        href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css"
        rel="stylesheet"
      />

      <main className="bg-blue-100 row">
        {jobs.map((job, index) => (
          <div
            key={index}
            className="max-w-md m-10 shadow-2xl bg-white rounded-2xl flex-grow overflow-hidden col-md-3"
          >
            <div className="p-4 flex justify-between items-center">
              <div>
                <h2 className="text-lg font-semibold">{job.title}</h2>
                <p className="text-gray-600">{job.description}</p>
              </div>
              <img
                className="w-20 h-20"
                src="https://internshala-uploads.internshala.com/logo%2F6399b7476753d1671018311.png.webp"
                alt="Company Logo"
              />
            </div>
            <div className="px-4 py-2">
              <p>
                <strong>Locations:</strong> {job.Working_location}
              </p>
              <p>
                <strong>Start Date:</strong> {job.jobPostedOn}
              </p>
              <p>
                <strong>CTC (Annual):</strong> {job.fixedSalary}
              </p>
              <p>
                <strong>Apply By:</strong> {job.Application_Deadline}
              </p>
            </div>
            <div className="px-4 py-2 flex justify-between items-center gap-1">
              <p className="text-sm text-gray-600 bg-slate-100 rounded-md text-center">
                Actively hiring
              </p>
              <p className="text-sm text-gray-600 bg-slate-100 rounded-md text-center">
                Posted 3 weeks ago
              </p>
              <p className="text-sm text-gray-600 bg-slate-100 rounded-md text-center">
                Fresher Job
              </p>
              <p className="text-sm text-gray-600 bg-slate-100 rounded-md text-center">
                146 applicants
              </p>
            </div>
            <br />
            <div className="register flex justify-center">
              <Link to={`/userapp/${job._id}`}>
                {" "}
                <button
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  id="registration"
                >
                  Apply
                </button>
              </Link>
            </div>
            <br />
          </div>
        ))}
      </main>

      <footer className="bg-gray-800 text-white">
        <div className="container mx-auto py-6 px-4">
          <div className="flex flex-wrap mx-4">{/* Footer content */}</div>
          <div className="mt-8 text-sm text-gray-600 text-center">
            <p>© 2024 company name. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
