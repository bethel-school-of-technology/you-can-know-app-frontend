import React, { useState, useEffect } from "react";
import "./signup.css";
import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";

//const URL = process.env.PUBLIC_URL;
const url = "http://localhost:3002/users";

const isValidateInput = (user) => {
  const emailVal = /\S+@\S+\.\S+/;

  return (
    user.firstName.trim() === "" ||
    user.lastName.trim() === "" ||
    user.email.trim() === "" ||
    user.email.trim() === emailVal ||
    user.username.trim() === "" ||
    user.username.length < 3 ||
    user.password.trim() === "" ||
    user.password.length < 6
  );
};

const SignUpp = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (firstName.trim() === "") {
      setErrors({ firstName: "erorr bro" });
    } else {
      setErrors({ firstName: null });
    }
  }, [firstName]);

  const handleSubmit = async (e) => {
    const user = {
      firstName,
      lastName,
      email,
      username,
      password,
    };

    if (isValidateInput(user)) {
      // empty input fields. leave some mesage.

      return null;
    }

    await axios
      .post(`${url}/signup`, user)
      .then((response) => {
        console.log(response.data);
        setFirstName("");
        setLastName("");
        setUsername("");
        setPassword("");
        setEmail("");

        history.push("/");
      })
      .catch((e) => {
        console.log(e.message);
        setError(e.message);
        console.error(e);
      });
  };

  return (
    <div className="container-signup">
      <div className="container-sign">
        <h2 className="sign2">Signup to Get Started!</h2>
        <br></br>
        <div>
           <label className="sign">First Name:</label>
                
          <input
            type="text"
            name="firstName"
            className="fillMe"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          {errors.firstName && <p className="error">{errors.firstName}</p>}
               {" "}
        </div>
        <div>
           <label className="sign">Last Name:</label>
                
          <input
            type="text"
            name="lastName"
            className="fillMe"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          {/* {errors.lastName && <p className="error">{errors.lastName}</p>} */}
        </div>
        <div>
                <label className="sign">Email:</label>
                
          <input
            type="email"
            name="email"
            className="fillMe"
            placeholder="email@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          {/* // {errors.email && <p className="error">errors.email}</p>} */}
               {" "}
        </div>
        <div>
                <label className="sign">Username:</label>
                
          <input
            type="username"
            name="username"
            className="fillMe"
            placeholder="minimum 3 characters"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          {/* {errors.username && <p className="error">{errors.username}</p>} */}
               {" "}
        </div>
        <div>
          <label className="sign">Password:</label>
                
          <input
            type="password"
            name="password"
            className="fillMe"
            placeholder="minimum 6 characters"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {/* {errors.password && <p className="error">{errors.password}</p>} */}
               {" "}
        </div>
        <p className="error" style={{ color: "red" }}>
          {error}
        </p>
        <div>
                
          <button
            className="sign3"
            type="submit"
            onClick={() => handleSubmit()}
          >
            Sign Up
          </button>
        </div>
         <Link to="/login">Go to Login</Link>
      </div>
          
    </div>
  );
};

export default SignUpp;
