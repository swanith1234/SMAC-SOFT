import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Register from "./register";
import Login from "./login";
import Userpage from "./userpage";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Button from "./button";
import Home from "./home";
import Option from "./option";
import Employer_register from "./employer_register";
import Emp_home from "./emp_home";
import Job_posting_app from "./Job_posting_app";
import Emp_jobs from "./Emp_jobs";
import Applications from "./applications";
import UserJobs from "./userJobs";
import UserApplicationForm from "./userapplication";
import ContestPage from "./ContestPage";
import Profile from "./Profile";
import Potd from "./Potd";
import SolvedPotd from "./SolvedPotd";
import UserUpdateForm from "./updateuser";
function App() {
  return (
    <>
    //hello this is a comment
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register></Register>}></Route>
          <Route path="/login" element={<Login></Login>}></Route>
          <Route path="/button" element={<Button></Button>}></Route>
          <Route path="/userpage" element={<Userpage></Userpage>}></Route>
          <Route path="/option" element={<Option></Option>}></Route>
          <Route
            path="/emp_register"
            element={<Employer_register></Employer_register>}
          ></Route>
          <Route path="/emp_home" element={<Emp_home></Emp_home>}></Route>
          <Route
            path="/job_app"
            element={<Job_posting_app></Job_posting_app>}
          ></Route>
          <Route path="/emp_jobs" element={<Emp_jobs></Emp_jobs>}></Route>
          <Route
            path="/applications"
            element={<Applications></Applications>}
          ></Route>
          <Route path="/userJobs" element={<UserJobs></UserJobs>}></Route>
          <Route
            path="/userapp/:jobId"
            element={<UserApplicationForm></UserApplicationForm>}
          ></Route>
          <Route path="/contest" element={<ContestPage></ContestPage>}></Route>
          <Route path="/profile" element={<Profile></Profile>}></Route>
          <Route path="/potd" element={<Potd></Potd>}></Route>
          <Route
            path="/potd/solved"
            element={<SolvedPotd></SolvedPotd>}
          ></Route>
          <Route
            path="/update"
            element={<UserUpdateForm></UserUpdateForm>}
          ></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
