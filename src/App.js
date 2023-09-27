import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import HomePage from "./components/homepage/Homepage";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = " white";
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }
  };

  return (
    <>
      <BrowserRouter>
        <Navbar
          title="AskAway"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}
        />

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/homepage" element={<HomePage />} />
        </Routes>
      </BrowserRouter>

      {/* <Login />
      <Register/>
      <HomePage/> */}
    </>
  );
}

export default App;
