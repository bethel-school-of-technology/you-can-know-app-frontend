import React from 'react';
import {Link} from "react-router-dom";

const SignUp = () => {
  return (
    <form className="container">
      <h1>Welcome! Signup to Get Started!</h1>
      <br></br>
      <label>First Name:</label>
      <input></input>
      <br></br>
      <label>Last Name:</label>
      <input></input>
      <br></br>
      <label>Email:</label>
      <input></input>
      <br></br>
      <label>Username:</label>
      <input></input>
      <br></br>
      <label>Password:</label>
      <input></input>
      <br></br>
      <Link to="/login"><button>Sign Up</button></Link>
    </form>
  )
   
  
};

export default SignUp;
