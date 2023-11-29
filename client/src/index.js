import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import "./dist/output.css";
import App from "./App";
import Navbar from "./components/navbar";
import Home from "./components/home";
// import Login from './components/login';
import Register from "./components/register.js";
import Loginpage from "./components/nn.js";
import BizzGPT from "./components/bizzgpt.js";
import Evaluate from "./components/evaluate.js";
import Sharktank from "./components/videoconf/Sharktank.js";
import Roompage from "./components/videoconf/Roompage.js";
import Features from "./components/features.js";
// import Paytm from "./components/paytm.js";

import Marketplace from "./components/marketplace.js"; 
export const serverurl = "http://localhost:8000";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <Navbar />
    <div className="mb-14"></div>
    <Routes>
      <Route path="/" element={<Loginpage />} />
      <Route path="/login" element={<Loginpage />} />
      <Route path="/home" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/bizzgpt" element={<BizzGPT />} />
      <Route path="/evaluate" element={<Evaluate />} />
      <Route path="/sharktank" element={<Sharktank />} />
      <Route path="/features" element={<Features   />} />
      {/* <Route path="/paytm" element={<Paytm/>} /> */}
      <Route path="/room/:roomid" element={<Roompage />} />

      <Route path="/marketplace" element={<Marketplace />} />
    </Routes>
  </Router>
  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);
