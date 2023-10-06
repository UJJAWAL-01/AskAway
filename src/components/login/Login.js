<<<<<<< HEAD
import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link} from "react-router-dom"
import "./login.css";
=======
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import "./login.css"

>>>>>>> 6bcc77b5afa8d10eafde7092d07d18f13039ca57

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

<<<<<<< HEAD
    const handleSubmit = (e) => {
        e.preventDefault()
        axios.post('http://localhost:3001/login', {email,password})
        .then(result => {
          console.log(result)
          if(result.data === "Success"){
            navigate('/homepage')
          }
        })
        .catch(err => console.log(err))
    }
    return (
        <>
            <h1>Login</h1>
            <div className='loginForm'>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="exampleInputEmail1">Email Id</label>
                <input type="email" className="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
                <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input type="password" className="form-control" id="exampleInputPassword" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
              </div>
              <button type="submit" onClick={handleSubmit} class="btn btn-primary">Submit</button>
            </form>
            </div>
            
            <div className='buttons-group'>
            <Link  to="/register">
              <button type="submit" className="btn btn-primary">Register</button>
            </Link>
            </div>
        </>
    )
}

export default Login 
=======
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/homepage");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <h1>Login</h1>
      <div className="loginForm">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email Id</label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail"
              aria-describedby="emailHelp"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </form>
      </div>
      <div className="buttons-group">
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
        <Link to="/register">
          <button type="submit" class="btn btn-primary">
            Register
          </button>
        </Link>
      </div>
    </>
  );
}

export default Login;

// function Login() {

//   const history=useNavigate();

//   const [email,setEmail]=useState('')
//   const [password,setPassword]=useState('')

//   async function submit(e){
//       e.preventDefault();

//       try{

//           await axios.post("http://localhost:3000/login",{
//               email,password
//           })
//           .then(res=>{
//               if(res.data=="exist"){
//                   history("/home",{state:{id:email}})
//               }
//               else if(res.data=="notexist"){
//                   alert("User have not sign up")
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

//           <h1>Login</h1>

//           <form action="POST">
//               <input type="email" onChange={(e) => { setEmail(e.target.value) }} placeholder="Email"  />
//               <input type="password" onChange={(e) => { setPassword(e.target.value) }} placeholder="Password"  />
//               <input type="submit" onClick={submit} />

//           </form>

//           <br />
//           <p>OR</p>
//           <br />

//           <Link to="/register">Signup Page</Link>

//       </div>
//   )
// }

// export default Login
>>>>>>> 6bcc77b5afa8d10eafde7092d07d18f13039ca57
