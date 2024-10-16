import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import "./styles.css";
import { Link } from "react-router-dom";
export default function Home() {
  return (
    <>
      <div className="nav flex align-center justify-between mt-3 mx-5">
        <div className="logo text-3xl">SMAC</div>
        <div className="menu text-2xl flex justify-between space-x-16">
          <ul className="flex just-between space-x-5 mt-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Testimonals</li>
            <li>Why SoftSkills</li>
            <li>FAQ</li>
          </ul>
          <div className="user-icon border rounded-3xl px-4  py-2">
            <i class="fa-solid fa-user text-3xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}
