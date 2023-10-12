import React, { useState } from "react";
import axios, { AxiosHeaders } from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./register.css";

function Register() {
  const [name, setName] = useState();
  const [Roll_no, setRoll_no] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "http://localhost:3001/register",
        { name, Roll_no, email, password },
        {
          headers: {
            "Access-Control-Allow-Origin": "*",
          },
        }
      )
      .then((result) => {
        console.log(result);
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Register</h1>
      <div className="registerForm">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Name</label>
            <input
              type="text"
              className="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Roll No.</label>
            <input
              type="number"
              className="form-control"
              id="exampleInputRollno"
              aria-describedby="RollnoHelp"
              placeholder="Enter Roll No."
              onChange={(e) => setRoll_no(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email Id</label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="buttons-group">
            <button type="submit" className="btn btn-primary">
              Submit
            </button>
            <Link to="/login">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </Link>
          </div>
        </form>
      </div>
    </>
  );
}

export default Register;