import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
export default function Emp_navbar() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg bg-body-tertiary d-flex ">
        <div class="container-fluid  ">
          <a class="navbar-brand" href="#">
            <strong> Smac Soft</strong>
          </a>
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>

          <a class="nav-link active" aria-current="page" href="#">
            PostJob
          </a>

          <a class="nav-link" href="#">
            Features
          </a>

          <a class="nav-link" href="#">
            View CV's
          </a>

          <Link to="/emp_jobs">View Jobs</Link>

          <div className="user-section d-flex">
            <div className="institution mx-2">SMAC</div>|
            <div className="bell-icon mx-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-bell-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2m.995-14.901a1 1 0 1 0-1.99 0A5 5 0 0 0 3 6c0 1.098-.5 6-2 7h14c-1.5-1-2-5.902-2-7 0-2.42-1.72-4.44-4.005-4.901" />
              </svg>
              {/* this is from bootstrap */}
            </div>
            |
            <div className="user-icon mx-2 mr-5">
              <i class="fa-solid fa-user"></i>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
