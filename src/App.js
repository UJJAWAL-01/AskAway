import "./App.css";
import Navbar from "./components/navbar/Navbar";
import React, { useState } from "react";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import HomePage from "./components/homepage/Homepage";

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

  // Define a function to set text color based on the mode
  const getTextColor = () => {
    return mode === "dark" ? "white" : "black";
  };

  return (
    <>
      <Navbar
        title="AskAway"
        aboutText="About us"
        mode={mode}
        toggleMode={toggleMode}
      />

      {/* Set inline style for Login component */}
      <Login style={{ color: getTextColor() }} />

      {/* Set inline style for Register component */}
      <Register style={{ color: getTextColor() }} />

      <HomePage/>
    </>

  
  );
}

export default App;
