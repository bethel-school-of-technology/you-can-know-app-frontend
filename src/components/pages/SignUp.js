import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import './signup.css';

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
      history.push("/login");
    }
  }

  return (
    <form className="container-signup" onSubmit={createUser}>
      <br></br>
      <br></br>

    <div className="container-sign">

    <h2 className="sign2">Signup to Get Started!</h2> 
      <br></br>
      
      <label className="sign">First Name:</label>
      <input className="fillMe" onChange={(e) => setFirstName(e.target.value)} value={firstName} />
      <label className="sign">Last Name:</label>
      <input className="fillMe" onChange={(e) => setLastName(e.target.value)} value={lastName} />
      
      <label className="sign">Email:</label>
      <input className="fillMe" onChange={(e) => setEmail(e.target.value)} value={email} />
      
      <label className="sign">Username:</label>
      <input className="fillMe" onChange={(e) => setUsername(e.target.value)} value={username} />
      
      <label className="sign">Password:</label>
      <input className="fillMe" onChange={(e) => setPassword(e.target.value)} value={password} />
      
      <button className="sign3" type="submit">Sign Up</button>
      <Link to="/login">Go to Login</Link>

</div>
    </form>

    
      
  )  
};

export default SignUp;
