import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { getUserToken } from "./login";
import SolvedPotd from "./SolvedPotd";
import { ToastContainer, toast } from "react-toastify";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
export default function Potd() {
  const [question, setQuestion] = useState("");
  const [options, setOptions] = useState(["", "", "", ""]);
  const [answer, setAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [option, setOption] = useState();
  const [problemId, setproblemId] = useState();
  const [isCorrect, setisCorrect] = useState();
  const token = getUserToken();
  useEffect(() => {
    const getData = async () => {
      const resg = await axios.get(`http://localhost:5000/api/v1/potd/get`);
      console.log("get", resg.data);
      setQuestion(resg.data.problem[0].question);
      setOptions(resg.data.problem[0].options);
      setAnswer(resg.data.problem[0].answer);
      setproblemId(resg.data.problem[0]._id);
      const resc = await axios.post(
        `http://localhost:5000/api/v1/potd/user/post/checkuser`,
        { userId: token, problemId: resg.data.problem[0]._id }
      );
      console.log("check", resc.data);
      if (resc.data.check[0].userId) {
        setSubmitted(true);
      }
    };
    console.log(token);
    getData();
  }, []);
  const handleSubmit = async () => {
    setSubmitted(true);
    const correct = answer == option;
    const res = await axios.post(
      `http://localhost:5000/api/v1/potd/user/post`,
      { userId: token, problemId, isCorrect: correct }
    );
    console.log(res.data);
    if (res.data) {
      toast.success("Submitted   Successfully");
    }
    const res1 = await axios.post(
      `http://localhost:5000/api/v1/potd/user/post/${token}`
    );
  };

  return (
    <>
      <div
        className="potd_navigation mt-0"
        style={{
          boxShadow: "9px 11px 18px 0px rgba(163,145,145,0.77)",
          "-webkit-box-shadow": "9px 11px 18px 0px rgba(163,145,145,0.77)",
          "-moz-box-shadow": "9px 11px 18px 0px rgba(163,145,145,0.77)",
          backgroundColor: "white",
        }}
      >
        <div
          className="options  d-flex justify-content-evenly pt-5 pb-0 "
          style={{ backgroundColor: "white" }}
        >
          <Link to="/potd">
            <div className="potd">
              <strong>POTD</strong>
            </div>
          </Link>
          <Link to="/potd/solved">
            <div className="solvedPOTD">
              <strong>SolvedPOTD</strong>
            </div>
          </Link>
          <div className="unsolvedPOTD">
            <strong>UnsolvedPOTD</strong>
          </div>
        </div>
      </div>
      <Routes>
        <Route
          path="/"
          element={
            question != "" ? (
              <div className="container mt-5">
                <h2 className="text-center mb-4">Problem of the Day</h2>
                <div className="card">
                  <div className="card-body">
                    <p className="card-text">{question}</p>
                    <form>
                      {options.map((option, index) => (
                        <div key={index} className="form-check">
                          <input
                            type="radio"
                            id={`option-${index}`}
                            className="form-check-input"
                            name="answer"
                            value={option}
                            onChange={(e) => setOption(e.target.value)}
                            disabled={submitted}
                          />
                          <label
                            htmlFor={`option-${index}`}
                            className="form-check-label"
                          >
                            {option}
                          </label>
                        </div>
                      ))}
                      <button
                        type="button"
                        className="btn btn-primary mt-3"
                        onClick={handleSubmit}
                        disabled={submitted}
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            ) : (
              <div className="fs-4 text-center mt-5">
                <strong>"Its not you It's us"</strong>
              </div>
            )
          }
        ></Route>
        <Route path="/solved" element={<SolvedPotd></SolvedPotd>}></Route>
      </Routes>
      <ToastContainer />
    </>
  );
}
