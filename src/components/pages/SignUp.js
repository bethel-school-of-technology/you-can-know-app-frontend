import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const SignUp = ({history}) => {

  const [firstName, setFirstName] = useState("");
  console.log(firstName)

  const url="http://localhost:3002/users";

  const createUser = async (e) => {
    e.preventDefault();
    let newUser = {
      firstName: firstName
    }
    let response = await axios.post(`${url}/signup`,newUser)
    console.log(response.data)
    if (response.data.status === 200) {
      // Need to store jwt in localstorage
      localStorage.setItem("youknow", response.data.jwt);
      window.alert(response.data.message);
      history.push("/profile");
    } else {
      window.alert(response.data.message);
      history.push("/");
    }
  }

  return (
    <form className="container" onSubmit={createUser}>
      <h1>Welcome! Signup to Get Started!</h1>
      <br></br>
      <label>First Name:</label>
      <input onChange={(e)=>setFirstName(e.target.value)} />
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
      <button type="submit">Sign Up</button>
      <Link to="/login">Go to Login</Link>
    </form>
  )  
};

export default SignUp;
