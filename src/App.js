import "./App.css";
import Navbar from "./components/Navbar";
import React, { useState } from "react";
import Login from "./components/login/Login";
// import { BrowserRouter, Routes } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light"); // Whether dark mode is enabled or not
  

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      
    }
  };

  return (
    <>
        <Navbar
          title="AskAway"
          aboutText="About us"
          mode={mode}
          toggleMode={toggleMode}/>

          <Login/>

    </>
  );
}
export default App;
