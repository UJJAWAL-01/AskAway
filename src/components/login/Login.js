import React  from 'react'
import "./login.css";


const Login = () => {
    return (
        <>
            <h1>Login</h1>
            <div className='loginForm'>
            <form>
              <div class="form-group">
                <label for="exampleInputEmail1">Email Id</label>
                <input type="email" class="form-control" id="exampleInputEmail" aria-describedby="emailHelp" placeholder="Enter email"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
              </div>
              <div class="form-group">
                <label for="exampleInputPassword1">Password</label>
                <input type="password" class="form-control" id="exampleInputPassword" placeholder="Password"/>
              </div>
            </form>
            
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </>
    )
}

export default Login 



