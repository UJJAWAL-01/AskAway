import React  from 'react'
import "./register.css";


const Register = () => {
    return (
        <>
            <h1>Register</h1>
            <div className='registerForm'>
            <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Name</label>
                <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Enter Name"/>
              </div>

              <div class="form-group">
                <label for="exampleInputEmail1">Roll No.</label>
                <input type="number" class="form-control" id="exampleInputRollno" aria-describedby="RollnoHelp" placeholder="Enter Roll No."/>
              </div>

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

export default Register 



