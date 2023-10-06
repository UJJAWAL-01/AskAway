import React, { useState } from "react";
<<<<<<< HEAD
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
            "Access-Control-Allow-Origin": "*"
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
=======
import axios from "axios";
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
      .post("http://localhost:3000/register", {
        name,
        Roll_no,
        email,
        password,
      })
      .then((result) => console.log(result));
    navigate("/login").catch((err) => console.log(err));
  };

  

  return (
    <>
      <h1>Register</h1>
      <div className="registerForm">
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="exampleInputEmail1">Name</label>
            <input
              type="text"
              class="form-control"
              id="exampleInputName"
              aria-describedby="nameHelp"
              placeholder="Enter Name"
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Roll No.</label>
            <input
              type="number"
              class="form-control"
              id="exampleInputRollno"
              aria-describedby="RollnoHelp"
              placeholder="Enter Roll No."
              onChange={(e) => setRoll_no(e.target.value)}
            />
          </div>

          <div class="form-group">
            <label for="exampleInputEmail1">Email Id</label>
            <input
              type="email"
              class="form-control"
>>>>>>> 6bcc77b5afa8d10eafde7092d07d18f13039ca57
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
<<<<<<< HEAD
            <small id="emailHelp" className="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
=======
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
>>>>>>> 6bcc77b5afa8d10eafde7092d07d18f13039ca57
              id="exampleInputPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
<<<<<<< HEAD
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
        <Link to="/login">
          <button type="submit" className="btn btn-primary">
            Login
          </button>
        </Link>
=======
          <button type="submit" class="btn btn-primary">
            Submit
          </button>
        </form>
        <Link to="/login">Login</Link>
>>>>>>> 6bcc77b5afa8d10eafde7092d07d18f13039ca57
      </div>
    </>
  );
}

export default Register;
<<<<<<< HEAD
=======

// function Login() {
//   const history=useNavigate();

//   const [email,setEmail]=useState('')
//   const [password,setPassword]=useState('')

//   async function submit(e){
//       e.preventDefault();

//       try{

//           await axios.post("http://localhost:3000/register",{
//               email,password
//           })
//           .then(res=>{
//               if(res.data=="exist"){
//                   alert("User already exists")
//               }
//               else if(res.data=="notexist"){
//                   history("/home",{state:{id:email}})
//               }
//           })
//           .catch(e=>{
//               alert("wrong details")
//               console.log(e);
//           })

//       }
//       catch(e){
//           console.log(e);

//       }

//   }

//   return (
//       <div className="login">

//           <h1>Signup</h1>

//           <form action="POST">
//               <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//               <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password" />
//               <input type="submit" onClick={submit} />

//           </form>

//           <br />
//           <p>OR</p>
//           <br />

//           <Link to="/login">Login Page</Link>

//       </div>
//   )
// }

// export default Login
>>>>>>> 6bcc77b5afa8d10eafde7092d07d18f13039ca57
