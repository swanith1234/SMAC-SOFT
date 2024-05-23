import React, { useState } from "react";
import "./leaderboard.css";
import "./index.js";
import axios from "axios";
import { getUserToken } from "./login";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useRef } from "react";
import { LineChart } from "@mui/x-charts/LineChart";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export default function ContestPage() {
  const token = JSON.parse(localStorage.getItem("user")).token;
  const [testResults, setTestResults] = useState();
  const [userresults, setuserresults] = useState([]);
  const [userdetails, setusers] = useState();
  const [data, setData] = useState([]);
  let [latestdate, setDate] = useState();
  let date = new Date();
  let day = date.getDay();
  console.log("date", date.getMonth());
  const slotOn = `${date.getFullYear()}-${date.getMonth() + 1}-${
    date.getDate() + 7 - day
  }`;
  console.log("slot", slotOn);
  const location = useLocation();
  const name = location.state;
  console.log("event", name);
  console.log(name);
  useEffect(() => {
    const fetchResults = async () => {
      try {
        const res1 = await axios.get(
          `http://localhost:5000/api/v1/event/get/userresults/${name}/${token}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
        setTestResults(res1.data.results);
        console.log(testResults);
        if (res1.data.results) {
          const newData = res1.data.results.map((result) => result.Test.score);
          setData(newData);
        }
        const res2 = await axios.get(
          `http://localhost:5000/api/v1/event/get/topthree/${name}/${res1.data.results[0].slotOn}`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
            withCredentials: true,
          }
        );
        setuserresults(res2.data.results);
        console.log("userresults", userresults);
        setusers(res2.data.users);
        console.log(userdetails);
      } catch (error) {
        console.log(error);
      }
    };

    fetchResults();
  }, []);

  // useEffect(() => {
  //   const fetchTopThree = async () => {
  //     try {
  //       if (latestdate) {
  //         const res1 = await axios.get(
  //           `http://localhost:5000/api/v1/event/get/topthree/${name}/${latestdate}`,
  //           {
  //             headers: {
  //               "Content-Type": "application/json",
  //               Authorization: `Bearer ${token}`,
  //             },
  //             withCredentials: true,
  //           }
  //         );
  //         setuserresults(res1.data.results);
  //         setusers(res1.data.users);
  //       }
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };

  //   fetchTopThree();
  // }, [name, latestdate, token]);
  const register = async () => {
    try {
      // Get the token
      const res = await axios.post(
        `http://localhost:5000/api/v1/event/post/${token}`,
        {
          name: name,
          slotOn: slotOn,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`, // Pass the token in the Authorization header
          },
          withCredentials: true,
        }
      );
      console.log(res.data);
      if (res.data) {
        toast.success("Registered Successfully");
      } // Log the response data
      const res2 = await axios.post(
        `http://localhost:5000/api/v1/event/register/${token}`
      );
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>CONTEST PAGE</title>
      <link rel="stylesheet" href="styles.css" />
      <link rel="stylesheet" href="leaderboard.css" />
      <link rel="stylesheet" href="leaderboardProfileStyles.css" />
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
      {/* nav bar */}
      <div className="header w-full">
        <div className="navbar h-16 flex max-w-[100%] items-center bg-cyan-950 text-neutral-50 text-lg">
          <div className="menu ml-[20px]">
            <i className="fa-solid fa-bars " />
          </div>
          <div className="logo  ml-3.5">Logo</div>
          <div className="flex  items-center ml-[20%] gap-[2rem] w-[55%]">
            <a
              href=""
              className="border-[1px] border-transparent hover:border-white p-[5px]  duration-300"
            >
              Home
            </a>
            <a
              href=""
              className="border-[1px] border-transparent hover:border-white p-[5px]  duration-300"
            >
              About Us
            </a>
            <a
              href=""
              className="border-[1px] border-transparent hover:border-white p-[5px]  duration-300"
            >
              Problem of Day
            </a>
            <a
              href=""
              className="border-[1px] border-transparent hover:border-white p-[5px]  duration-300"
            >
              Jobs
            </a>
            <a
              href=""
              className="border-[1px] border-transparent hover:border-white p-[5px]  duration-300"
            >
              Contact Us
            </a>
          </div>
          <div className=" flex justify-between items-center gap-[3rem]  ">
            <button
              type="button"
              className=" border-[1px] border-transparent hover:border-white p-[5px] duration-300 "
            >
              Log out
            </button>
          </div>
        </div>
      </div>
      {/* navbar end */}
      <div className="hero">
        <div className="bg-[url('images/hero.jpeg')] h-[20rem] w-full bg-[center]  flex flex-column items-center justify-center mx-auto">
          <div className="content text-center text-white">
            <h2 className="text-2xl text-bold">{name}</h2>
            <p>
              Dive into our {name} Contest this Saturday, 5-6 PM, and master the
              art to impress at your real interviews! Plus, seize the chance to
              earn valuable points, rewards and opportunities
            </p>
            <button
              className="decoration-zinc-700  bg-slate-500 hover:bg-blue-700  font-bold py-2 px-4 mt-[30px] rounded"
              onClick={register}
            >
              Register Now
            </button>
          </div>
        </div>
      </div>
      {/* hero-image end */}
      {/* cards starts */}
      {/* Example card 1 */}
      <div className="mentor-cards  flex flex-row gap-5 justify-center mt-4 w-full">
        <div
          style={{ width: "35rem" }}
          className="card-1 h-[15rem]  border-2 border-slate-500 flex md:flex-row flex-col items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden row"
        >
          <div className="mentor-1_wrap flex flex-column col-md-6">
            <div className="h1-div mt-[10px] ">
              <h3 className="text-center text-xl">Mr.Rahul</h3>
            </div>
            <div className="content-box flex-1">
              <p>
                Seasoned professional with extensive experience in conducting
                in-depth mock interviews, offering personalized feedback aimed
                at refining interviewing skills and enhancing candidate
                performance your interviewing prowess and gain invaluable
                insights
              </p>
            </div>
          </div>
          <div className="image w-full md:w-1/3 col-md-6">
            <img
              src="images/student_2.jpeg"
              alt=""
              className="w-[900px] h-[13rem] object-cover"
            />
          </div>
        </div>
        {/* Example for card-2 */}
        <div
          style={{ width: "35rem" }}
          className="card-1 h-[15rem]  border-2 border-slate-500 flex md:flex-row flex-col items-center bg-gray-100 shadow-lg rounded-lg overflow-hidden row"
        >
          <div className="mentor-1_wrap flex flex-column col-md-6">
            <div className="h1-div mt-[10px] ">
              <h3 className="text-center text-2xl">Mr.Ramesh </h3>
            </div>
            <div className="content-box flex-1 ">
              <p>
                Seasoned professional with extensive experience in conducting
                in-depth mock interviews, offering personalized feedback aimed
                at refining interviewing skills and enhancing candidate
                performance your interviewing prowess and gain invaluable
                insights
              </p>
            </div>
          </div>
          <div className="image w-full md:w-1/3 col-md-6">
            <img
              src="images/student_3.jpeg"
              alt=""
              className="w-[900px] h-[13rem] object-cover"
            />
          </div>
        </div>
      </div>
      {/* cards end */}
      {/* test card */}
      <div className="contest_ results">
        <h1 className="text-center p-[20px]  text-xl">Test Results</h1>
        <table className="table border-[8px] border-collapse border-gray-200">
          <thead>
            <tr>
              <th className="border"> Test</th>
              <th className="border"> Date </th>
              <th className="border"> Results</th>
            </tr>
          </thead>
          <tbody>
            {testResults &&
              testResults.map((result, index) => (
                <tr key={index}>
                  <th className="border">Test {index + 1}</th>
                  <td className="border">
                    {result.registeredOn.toString().substring(0, 10)}
                  </td>
                  <td>
                    <button className="decoration-zinc-700 bg-slate-500 hover:bg-blue-700 font-bold py-2 px-4 rounded">
                      Check Result
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
      {/* test result ends here */}
      {/* LeaderBoard */}
      <div className="wrapper">
        <div className="leaderboard">
          <div className="description">
            <h1>Past {name} Tests Analysis</h1>
            <p>Date: {latestdate}</p>
            <input
              id="search"
              className="search"
              placeholder="Search"
              oninput="search()"
            />
          </div>
          <div>
            <table>
              <thead>
                <tr>
                  <td>Rank</td>
                  <td>Player</td>
                  <td>Score</td>
                  <td>Institute</td>
                </tr>
              </thead>
              <tbody>
                {console.log(userresults)}
                {userresults.map((results, index) => (
                  <tr>
                    <td id="winner">{index + 1}</td>
                    <td>
                      <img src="leaderBoard/images/User1.jpg" />
                      <p>{userdetails[index][0].name}</p>
                    </td>
                    <td>{results.Test.score}</td>
                    <td>{userdetails[index][0].college}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lookGoodSpace" />
        </div>
        <div className="profile-card " />
      </div>
      {/* LeaderBoard ends */}

      <LineChart
        xAxis={[{ data: [1] }]}
        series={[
          {
            data: data,
          },
        ]}
        width={500}
        height={300}
      />
      {/* footer */}
      <footer className="bg-cyan-950 text-white mt-[20px]">
        <div className=" mx-auto py-6 px-4">
          <div className="flex flex-wrap mx-4">
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">About Us</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Team
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Internship
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">For Students</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Internships
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Online Trainings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Certifications
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">For Employers</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Hire Interns
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Hire Freshers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Online Assessments
                  </a>
                </li>
              </ul>
            </div>
            <div className="w-full md:w-1/4 px-4 mb-4 md:mb-0">
              <h2 className="text-xl font-semibold mb-2">Connect With Us</h2>
              <ul>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-gray-300">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xl  text-slate-50 text-center">
            <p> © Made with Love by SMAC</p>
          </div>
        </div>
      </footer>
      {/* footer ends */}

      <ToastContainer />
    </>
  );
}
