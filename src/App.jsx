import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "@mui/material";
import "@mui/lab";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Response from "./components/Response2";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/response" element={<Response />} />
      </Routes>
    </Router>
  );
}

export default App;
