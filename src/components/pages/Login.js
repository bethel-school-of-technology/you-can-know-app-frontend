import React, { useState } from 'react';
import axios from "axios";
import '../../App.css';



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
        <div>
            <form className="container" onSubmit={ loginUser }>
                <h1>Please Login</h1>
                <label>Username</label>
                <input type="text" name="username" onChange={ e => setUsername(e.target.value)}></input> <br></br>
                <label>Password</label> 
                <input type="text" name="password" onChange={ e => setPassword(e.target.value)}></input> <br></br>
                <button >Login</button>
            </form>
        </div>
    );
}
export default Login

