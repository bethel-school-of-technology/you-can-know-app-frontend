import React from 'react';
import {Link} from 'react-router-dom';

const Login = () => {
    return (
        <div className="container">
            <h1>Please Login</h1>
            <label>Username:</label>
            <input></input>
            <br></br>
            <label>Password:</label>
            <input></input>
            <br></br>
            <Link to="/profile"><button>Login</button></Link>
        </div>
    )
}

export default Login
