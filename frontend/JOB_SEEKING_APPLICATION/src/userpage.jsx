import { useState, useEffect } from "react"; // Userpage.js
import axios from "axios";
import React from "react";
import { useLocation } from "react-router-dom"; // Import useLocation hook
import { Link } from "react-router-dom";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import soft_skill from "./images/soft_skill.jpeg";
import people from "./images/2 people.jpg";
import dropdown from "./images/dropdown.png";
import GD from "./images/GD.jpeg";
import group_discussion from "./images/group_discussion.jpeg";
import hero from "./images/hero.jpeg";
import interview_1 from "./images/interview_1.jpeg";
import interview from "./images/interview.jpeg";
import news from "./images/news.jpg";
import play from "./images/play.png";
import presentation from "./images/presentation.jpeg";
import puzzle_solver from "./images/puzzle_solver.jpeg";
import puzzle from "./images/puzzle.jpg";
import ss_hero from "./images/SS_hero.jpg";
import student_1 from "./images/student_1.jpeg";
import student_2 from "./images/student_2.jpeg";
import student_3 from "./images/student_3.jpeg";
import Calendar from "react-calendar";
import { getUserToken } from "./login";
export default function Userpage() {
  const token = JSON.parse(localStorage.getItem("user")).token;
  console.log("swatoken", token);
  const [value, onChange] = useState(new Date());
  const [MarkedDates, setMarkedDates] = useState([]);
  // Get the state data passed from the login page
  const location = useLocation();
  const userData = location.state?.userData; // Access the user data
  var monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(new Date().getHours());
  console.log(new Date().getMinutes());
  console.log(new Date().getSeconds());
  // const x = setInterval(() => {
  //   const hours = new Date().getHours();
  //   const minutes = new Date().getMinutes();
  //   const seconds = new Date().getSeconds();
  //   document.getElementById("hours").innerHTML = 23 - new Date().getHours();
  //   document.getElementById("minutes").innerHTML = 59 - minutes;
  //   document.getElementById("seconds").innerHTML = 59 - seconds;
  // }, 1000);

  useEffect(() => {
    const getData = async () => {
      try {
        console.log(token);
        const resc = await axios.post(
          `http://localhost:5000/api/v1/potd/user/post/check`,
          {
            userId: token,
          }
        );
        console.log(resc.data);
        const markedDates = resc.data.check.map(
          (problem) => problem.submittedOn
        );
        console.log(markedDates);
        setMarkedDates(markedDates);
      } catch (err) {
        console.log("err", err);
      }
    };
    getData();
  }, [token]);
  if (MarkedDates) {
    useEffect(() => {
      console.log(MarkedDates);
      // Access the button element by its class name
      // Assuming specificDates is an array of dates obtained from the backend
      // Example dates

      // Loop through the array of specific dates
      MarkedDates.forEach(function (dateString) {
        // Convert the date string to a Date object
        var date = new Date(dateString);

        // Generate a CSS selector for the button corresponding to the specific date
        var formattedDate = new Intl.DateTimeFormat("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric",
        }).format(date);
        console.log(formattedDate);
        // Generate a CSS selector for the button corresponding to the specific date
        var abbrElement = document.querySelector(
          'abbr[aria-label="' + formattedDate + '"]'
        );

        // Check if the abbr element exists
        if (abbrElement) {
          // Select the parent element (button) of the abbr element
          var buttonElement = abbrElement.closest(".react-calendar__tile");

          // Check if the button element exists
          if (buttonElement) {
            // Change the background color of the entire button
            buttonElement.style.backgroundColor = "blue"; // Replace 'blue' with the desired color
          } else {
            // Handle the case where the button element does not exist (optional)
            console.log("Button element not found for date:", formattedDate);
          }
        } else {
          // Handle the case where the abbr element does not exist (optional)
          console.log("Abbr element not found for date:", formattedDate);
        }
      });

      // Now you can manipulate the button element as needed
      // Output the button element to the console
    }, [MarkedDates]);
  }
  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>Login Page</title>
      <link rel="stylesheet" href="styles.css" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
        crossOrigin="anonymous"
      />
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA=="
        crossOrigin="anonymous"
        referrerPolicy="no-referrer"
      />

      <div className="header w-full">
        <style>
          {`
      /* Media Query for responsiveness */
      @media (max-width: 768px) {
        .navbar {
          flex-direction: column;
          align-items: center;
        }
        .menu-links {
          display: none;
        }
        .menu-links.active {
          display: flex;
          flex-direction: column;
        }
        .nav-link {
          margin: 10px 0;
        }
      }

      /* Styles for desktop */
      .nav-link,
      .nav-btn {
        border: 1px solid transparent;
        padding: 5px;
        transition: border-color 0.3s;
      }

      .nav-link:hover,
      .nav-btn:hover {
        border-color: white;
      }

      .menu-links.active {
        display: flex;
      }

      /* Additional styles for aesthetic */
      .navbar {
        padding: 0 20px;
      }

      .nav-link {
        margin: 0 15px;
      }

      .nav-btn {
        margin-right: 20px;
      }
    `}
        </style>

        <div className="navbar h-16 flex max-w-[100%] items-center bg-cyan-950 text-neutral-50 text-lg">
          <div className="menu ml-[20px]">
            <i className="fa-solid fa-bars"></i>
          </div>
          <div className="logo ml-3.5">Logo</div>
          <div className="menu-links flex-grow hidden md:flex items-center justify-center">
            <a href="#" className="nav-link">
              Home
            </a>
            <a href="#" className="nav-link">
              About Us
            </a>
            <a href="#" className="nav-link">
              Problem of Day
            </a>
            <Link to="/userJobs">Jobs</Link>

            <a href="#" className="nav-link">
              Contact Us
            </a>
          </div>
          <div className="flex items-center gap-[3rem]">
            <Link to="/profile">
              <button type="button" className="nav-btn">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  fill="currentColor"
                  className="bi bi-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z" />
                </svg>
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* carasoul  */}
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={0}
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={1}
            aria-label="Slide 2"
          />
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to={2}
            aria-label="Slide 3"
          />
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={soft_skill}
              className="d-block  h-[500px] w-[100%]"
              alt="soft skill"
            />
            <div className="carousel-caption d-none d-md-block">
              <h5> Unlock Your Future</h5>
              <p>
                Dive into our Mock Interview Contest this Saturday, 5-6 PM, and
                master the art to impress at your real interviews! Plus, seize
                the chance to earn valuable points, rewards and opportunities.
                Let's ace those interviews together!
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img src={hero} className="d-block h-[500px] w-[100%]" alt="..." />
            <div className="carousel-caption d-none d-md-block">
              <h5>Step into the Spotlight</h5>
              <p>
                Join our Group Discussion Contest this Saturday, 5-6 PM, and
                sharpen your communication skills in a vibrant, collaborative
                environment! Earn points on our platform for every insightful
                contribution, unlocking exclusive rewards and enhancing your
                journey to success.
              </p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src={presentation}
              className="d-block h-[500px] w-[100%]"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Brain Teasure</h5>
              <p>
                Join us for an exhilarating puzzle and riddle contest from
                5-6pm, where every challenge you conquer not only sharpens your
                wit but also earns you coveted coins in your profile. These
                coins aren't just symbols; they're your gateway to unlocking
                exclusive rewards and opportunities
              </p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      {/* carasoel ends */}
      {/* POD */}
      {/* <div class="flex flex-col items-center justify-center space-y-4 p-4">
    <h2 class="text-xl text-center">Problem of the day</h2>
    <p>21 March</p>
    <p>Puzzle</p>
    <p>Timer</p>
    <div class="self-end">
      <button class="decoration-zinc-700 hover:bg-blue-700  font-bold py-2 px-4 rounded">
       Solve Problem
      </button>
    </div>
  </div> */}
      <div className="row">
        <div className="POTD bg-slate-300 col-md-8">
          <div className="head-POD flex flex-col md:flex-row gap-2 md:gap-12 items-center justify-between p-4">
            <h1 className="text-3xl font-bold md:w-1/2">PROBLEM OF THE DAY</h1>
            <div className="timer flex gap-2 text-white text-lg">
              <div className="t1 h-10 w-10 flex justify-center items-center bg-violet-800">
                09
              </div>
              <p className="text-3xl">:</p>
              <div className="t2 h-10 w-10 flex justify-center items-center bg-violet-800">
                19
              </div>
              <p className="text-3xl">:</p>
              <div className="t3 h-10 w-10 flex justify-center items-center bg-violet-800">
                32
              </div>
            </div>
          </div>
          <div className="question h-56 bg-green-200 flex flex-col md:flex-row items-center p-4">
            <div className="q-1 md:w-1/2">
              <p className="text-xl">
                {new Date().getDate()} {monthNames[new Date().getMonth()]}
              </p>
              <p className="text-2xl mt-4 md:mt-0">Hey Solve POTD </p>
            </div>
            <Link to="/potd">
              <button className="bg-teal-400 hover:bg-blue-700 font-bold flex items-end mt-4 md:mt-0 text-xl w-full md:w-auto p-4 md:ml-auto rounded">
                Solve Problem
              </button>
            </Link>
          </div>
        </div>

        <div className="col-md-4">
          <style>
            {`
        .react-calendar {
          color: black !important; /* Change color of calendar values to black */
        }
        .react-calendar__month-view__days__day {
          color: #ccc; /* Change color of individual dates to black */
        }
        
        .react-calendar__tile--active {
          background: #e6e6e6; /* Example: Change background color of active tile */
        }
        .react-calendar {
          width: 100%;
        }
        .react-calendar__month-view__days {
          
        }
        .react-calendar__month-view__days__day {
       
        }
        .react-calendar__tile {
          height: 50px; /* Adjust height as needed */
    border-radius:50%;
          margin:5px;
         
       
          /* Add border for better visibility */
        }
        .react-calendar__navigation {
          background-color: #f5f5f5; /* Background color of navigation buttons */
          border: none; /* Remove border */
          border-radius: 5px; /* Add border radius */
        }
        .react-calendar__navigation button {
          color: #333; /* Color of navigation buttons */
        }
        .react-calendar__month-view__weekdays {
          background-color: #f5f5f5; /* Background color of weekdays */
          font-weight: bold; /* Bold font weight */
        }
        .react-calendar__month-view__weekdays__weekday {
          color: #333; /* Color of weekdays */
        }
        `}
          </style>
          <Calendar onChange={onChange} />
        </div>
      </div>
      {/* POD ends */}
      {/* cards */}
      <div className="container mt-[20px]">
        <style>
          {`
      .card {
        width: 100%;
        background-color: #f5f5f5;
        border-radius: 10px;
        overflow: hidden;
        position: relative;
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease-in-out;
        height:10rem
      }

      .card:hover {
        transform: translateY(-5px) scale(1.02);
      
      }

      .card-overlay {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        background-color: rgba(0, 0, 0, 0.7);
        padding: 20px;
        border-radius: 0 0 10px 10px;
      }

      .card-title {
        color: #fff;
        font-size: 1.5rem;
        margin-bottom: 10px;
      }

      .card-text {
        color: #fff;
      }

      /* Background styles */
      .interview {
        background: linear-gradient(135deg, #FF416C 0%, #FF4B2B 100%);
      }

      .discussion {
        background: linear-gradient(135deg, #4CAF50 0%, #6DD887 100%);
      }

      .presentation {
        background: linear-gradient(135deg, #FFD662 0%, #FFD801 100%);
      }

      .role {
        background: linear-gradient(135deg, #007991 0%, #78ffd6 100%);
      }

      .puzzle {
        background: linear-gradient(135deg, #2C3E50 0%, #4CA1AF 100%);
      }

      .affairs {
        background: linear-gradient(135deg, #FC354C 0%, #0ABFBC 100%);
      }
    `}
        </style>

        <div className="row mb-4">
          <div className="col-md-6">
            <Link to="/contest" state="Mock interview">
              {" "}
              <div className="card interview">
                <div className="card-overlay">
                  <h5 className="card-title">Mock Interview</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/contest" state="Group Discussion">
              <div className="card discussion">
                <div className="card-overlay">
                  <h5 className="card-title">Group Discussion</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row mb-4">
          <div className="col-md-6">
            <Link to="/contest" state="Online Presentation">
              {" "}
              <div className="card presentation">
                <div className="card-overlay">
                  <h5 className="card-title">Online Presentation</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/contest" state="Situational Role">
              {" "}
              <div className="card role">
                <div className="card-overlay">
                  <h5 className="card-title">Situational Role</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>

        <div className="row">
          <div className="col-md-6">
            <Link to="/contest" state="Puzzle">
              {" "}
              <div className="card puzzle">
                <div className="card-overlay">
                  <h5 className="card-title">Puzzle</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
          <div className="col-md-6">
            <Link to="/contest" state="Current Affairs">
              {" "}
              <div className="card affairs">
                <div className="card-overlay">
                  <h5 className="card-title">Current Affairs</h5>
                  <p className="card-text">
                    This is a wider card with supporting text below as a natural
                    lead-in to additional content. This content is a little bit
                    longer.
                  </p>
                  <p className="card-text">
                    <small>Last updated 3 mins ago</small>
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>

      {/* cards end */}
      {/* footer */}
      <footer className="bg-cyan-950 text-white mt-[20px]">
        <div className=" mx-auto py-6 px-4">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">About Us</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Internship
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">For Students</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Internships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Online Trainings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Certifications
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">For Employers</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Hire Interns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Hire Freshers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Online Assessments
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-8 md:mb-0">
              <h2 className="text-2xl font-semibold mb-4">Connect With Us</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300 block">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-lg text-center text-slate-50">
            <p> © Made with Love by SMAC</p>
          </div>
        </div>
      </footer>

      {/* footer ends */}
    </>
  );
}
