import React, { useEffect, useState } from "react";
import { getUserToken } from "./login";
import axios from "axios";

import { Link } from "react-router-dom";
export default function Profile() {
  const token = JSON.parse(localStorage.getItem("user")).token;
  let [user, setuser] = useState();
  const [pastevents, setpastevents] = useState();
  const [upcoming, setupcomingevents] = useState();
  useEffect(() => {
    const getUser = async () => {
      try {
        const res1 = await axios.get(
          `http://localhost:5000/api/v1/users/login/${token}`
        ); // Corrected URL format
        console.log("result", res1.data);
        setuser(res1.data.user);
        console.log("profile", user);
        const res2 = await axios.get(
          `http://localhost:5000/api/v1/event/get/pastevents/${token}`
        );
        console.log("profile2", res2.data);
        setpastevents(res2.data.events);
        console.log("pastevents", pastevents);
        const res3 = await axios.get(
          `http://localhost:5000/api/v1/event/get/upcoming/${token}`
        );
        console.log(res3.data);
        setupcomingevents(res3.data.events);
        console.log(upcoming);
      } catch (err) {
        console.log(err);
      }
    };
    getUser();
  }, []);
  // useEffect hook with a dependency on user state

  return (
    <>
      <>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Profile Page</title>
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
        {/* navbar starts*/}
        <div className="header w-full">
          <div className="navbar h-16 flex max-w-[100%] items-center bg-cyan-950 text-neutral-50 text-lg">
            <div className="menu ml-[20px]">
              <i className="fa-solid fa-bars  " />
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
                className=" border-[1px] border-transparent hover:border-white p-[5px] duration-300  "
              >
                Login in
              </button>
              <button
                type="button"
                className=" border-[1px] border-transparent hover:border-white p-[5px] duration-300 "
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
        {/* navbar ends */}
        {/*profile */}
        {user && (
          <div className="profile-icon h-[300px] w-[100%] flex flex-col items-center mt-[20px] bg-gray-100 rounded-lg shadow">
            <div className="flex w-full items-center px-[80px]">
              <div>
                <i className="fa-solid fa-user text-[8rem]" />
              </div>
              <div className="ml-[80px] mt-[40px]">
                <h2 className="m-[10px] text-[2rem]">{user.name}</h2>
                <h4 className="text-[1rem]">{user.email}</h4>
                <br />
                <br />
                <p className="mb-4">{user.college}</p>
              </div>
              <Link to="/update">
                <button className="flex items-end ml-[600px] mt-[60px]">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        )}
        {/*profile end */}
        {/* Profile items*/}
        <div className="profile-items flex justify-between p-[20px]">
          <div className="POD gap-[20px] h-[300px] w-[300px] flex items-center mt-[40px] justify-center flex-col bg-gray-100 rounded-2xl shadow text-4xl ">
            <h2 className="text-2xl mt-[90px]">Current POTD streak</h2>
          </div>
          <div className="Rank gap-[20px] h-[300px] w-[300px] flex items-center mt-[40px] justify-center flex-col bg-gray-100 rounded-2xl shadow text-4xl ">
            <h2 className="text-2xl mt-[90px]">GLobal Rank</h2>
          </div>
          <div className="Points gap-[20px] h-[300px] w-[300px] flex items-center mt-[40px] justify-center flex-col bg-gray-100 rounded-2xl shadow text-4xl ">
            <h2 className="text-2xl mt-[90px]">Points Earned</h2>
          </div>
          <div className="Badges gap-[20px] h-[300px] w-[300px] flex items-center mt-[40px] justify-center flex-col bg-gray-100 rounded-2xl shadow text-4xl ">
            <h2 className="text-2xl mt-[90px]">Badges Earned</h2>
          </div>
        </div>
        {/* Profile items end*/}
        <div className="contest_previous">
          <h1 className="text-center p-[20px]  text-xl">Previous Contests</h1>
          <table className="table border-[8px] border-collapse border-gray-200">
            <thead>
              <tr>
                <th className="border"> Date Attempted</th>
                <th className="border"> Contest Skill </th>
                <th className="border"> Points</th>
              </tr>
            </thead>
            <tbody>
              {pastevents &&
                pastevents.map((event) => (
                  <tr>
                    <th className="border">
                      {event.slotOn.toString().substring(0, 10)}
                    </th>
                    <td className="border">{event.name}</td>
                    <td className="border">{event.Test.score}</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* Previous contest ends */}
        {/* upcoming Contest */}
        <div className="contest_upcoming">
          <h1 className="text-center p-[20px]  text-xl">Upcoming Contests</h1>
          <table className="table border-[8px] border-collapse border-gray-200">
            <thead>
              <tr>
                <th className="border"> Date to Attempt</th>
                <th className="border">Contest Skill</th>
                <th className="border">Rewards</th>
              </tr>
            </thead>
            <tbody>
              {upcoming &&
                upcoming.map((event) => (
                  <tr>
                    <th className="border">
                      {" "}
                      {event.slotOn.toString().substring(0, 10)}
                    </th>
                    <td className="border">{event.name}</td>
                    <td className="border">100 points</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {/* upcoming  Contests end  */}
        {/*Apply Job */}
        <div className="Job flex justify-between p-[60px] ">
          <div className="POD   h-[200px] w-[300px] flex items-center mt-[40px] justify-center flex-col bg-gray-100 rounded-2xl shadow text-4xl ">
            <button className="text-xl mt-[90px]">Upload Resume</button>
          </div>
          <div className="POD   h-[200px] w-[300px] flex items-center mt-[40px] justify-center flex-col bg-gray-100 rounded-2xl shadow text-4xl ">
            <Link to="/userJobs">
              {" "}
              <button className="text-xl mt-[90px]">
                Apply For Job/Internships
              </button>
            </Link>
          </div>
        </div>
        {/* Apply Job ends */}
        {/* Social Media  Links*/}
        <div className="links  ">
          <h2 className="text-center text-[2.5rem] p-[10px]">Social Links</h2>
          <div className="  icons flex justify-center gap-4 text-[2rem]">
            <i className="fa-brands fa-linkedin" />
            <i className="fa-brands fa-github" />
            <i className="fa-brands fa-discord" />
            <i className="fa-solid fa-envelope" />
            <i className="fa-brands fa-twitter" />
            <i className="fa-brands fa-instagram" />
            <i className="fa-brands fa-facebook" />
          </div>
        </div>
        {/* Social Media Links Ends */}
      </>
    </>
  );
}
