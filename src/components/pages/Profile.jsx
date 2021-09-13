import React, { useState } from 'react';
import {Link} from "react-router-dom";
import axios from "axios";
import '../../App.css';


const Profile = ({history}) => {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [post, setPost] = useState("");

  console.log(firstName)

  const url="http://localhost:3002/users";

  const createPost = async (e) => {
    e.preventDefault();
    let newPost = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      username: username,
      password: password,
      post: post,
    }
    let response = await axios.post(`${url}/Profile`,newPost)
    console.log(response)
    if (response.data.status === 200) {
      // Need to store jwt in localstorage
      localStorage.setItem("youknow", response.data.jwt);
      history.push("/profile");
    } else {
      history.push("/profile");
    }
  }



  return (
    <form className="container" onSubmit={createPost}>
      <h1>Welcome! Create A Post!</h1>
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
      <label>Post:</label>
      <input onChange={(e) => setPost(e.target.value)} value={post} /><br></br>
      <br></br>
      <button type="submit">Submit Post</button>
      <Link to="/profile">Create A Post</Link>
    </form>
  )  
};

export default Profile;
