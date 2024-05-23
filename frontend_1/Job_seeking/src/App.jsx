import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
// import Register from "./register";
// import Login from "./login";
// import Userpage from "./userpage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Button from "./button";
import Home from "./home";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
