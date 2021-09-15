import React, { useState } from 'react';
import axios from "axios";
import './login.css';



const Login = ({history}) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const url="http://localhost:3002/users";
    const loginUser = async (e) => {
        e.preventDefault();
        let newLogin = {
          username: username,
          password: password,
        }
        let response = await axios.post(`${url}/login`,newLogin)
        console.log(response)
        if (response.data.status === 200) {
          // Need to store jwt in localstorage
          localStorage.setItem("youknow", response.data.jwt);
          history.push("/");
        } else {
          history.push("/profile");
        }
      }
    return (
        <form className="container-login">
          <br></br>

            <div className="container-log" onSubmit={ loginUser }>
                <h1 className="log">Please Login</h1>
                <label className="log">Username</label>
                <input className="logFill" type="text" name="username" onChange={ e => setUsername(e.target.value)}></input> <br></br>
                <label className="log">Password</label> 
                <input className="logFill" type="text" name="password" onChange={ e => setPassword(e.target.value)}></input> <br></br>
                <button className="log3">Login</button>
            </div>
        </form>
    );
}
export default Login

