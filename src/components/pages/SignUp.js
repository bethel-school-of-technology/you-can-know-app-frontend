import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";

const SignUp = ({history}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  console.log(firstName)

  const url="http://localhost:3002/users";

  const createUser = async (e) => {
    e.preventDefault();
    let newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
    }
    let response = await axios.post(`${url}/signup`,newUser)
    console.log(response)
    if (response.data.status === 200) {
      // Need to store jwt in localstorage
      localStorage.setItem("youknow", response.data.jwt);
      history.push("/profile");
    } else {
      history.push("/");
    }
  }

  return (
    <form className="container" onSubmit={createUser}>
      <h1>Welcome! Signup to Get Started!</h1>
      <br></br>
      <label>First Name:</label>
      <input onChange={(e) => setFirstName(e.target.value)} value={firstName} /><br></br>
      <label>Last Name:</label>
      <input onChange={(e) => setLastName(e.target.value)} value={lastName} /><br></br>
      <br></br>
      <label>Email:</label>
      <input onChange={(e) => setEmail(e.target.value)} value={email} /><br></br>
      <br></br>
      <label>Username:</label>
      <input onChange={(e) => setUsername(e.target.value)} value={username} /><br></br>
      <br></br>
      <label>Password:</label>
      <input onChange={(e) => setPassword(e.target.value)} value={password} /><br></br>
      <br></br>
      <button type="submit">Sign Up</button>
      <Link to="/login">Go to Login</Link>
    </form>
  )  
};

export default SignUp;

