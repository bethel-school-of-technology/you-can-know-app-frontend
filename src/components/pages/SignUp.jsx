import React, { useState } from "react";
import "./signup.css";
import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";

const SignUp = ({ history }) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
  });

  const url = "http://localhost:3002/users";

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
    // console.log(values)
    return values;
  };

  const createUser = async (e) => {
    e.preventDefault();
    console.log(values);
    const emailVal = /\S+@\S+\.\S+/;

    // sent data to backend

    if (
      values.firstName === "" ||
      values.lastName === "" ||
      values.email === "" ||
      values.email === emailVal ||
      values.username === "" ||
      values.username.length < 3 ||
      values.password === "" ||
      values.password.length < 6
    ) {
      setErrors(validation(values));
    } else {
      let newUser = {
        firstName: values.firstName,
        lastName: values.lastName,
        email: values.email,
        username: values.username,
        password: values.password,
      };
      console.log(newUser);
      let response = await axios.post(`${url}/signup`, newUser);
      console.log(response);
      if (response.data.status === 200) {
        localStorage.setItem("youknow", response.data.jwt);
        history.push("/login");
      } else {
        history.push("/signup");
      }
    }
  };
  return (
    <form className="container-signup">
      <div className="container-sign">
        <h2 className="sign2">Signup to Get Started!</h2>        <br></br>
        <div>
                <label className="sign">First Name:</label>
                
          <input
            type="text"
            name="firstName"
            className="fillMe"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && (
            <p style={{ color: "red" }} className="error">
              {errors.firstName}
            </p>
          )}
               {" "}
        </div>
        <div>
           <label className="sign">Last Name:</label>
                
          <input
            type="text"
            name="lastName"
            className="fillMe"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && (
            <p style={{ color: "red" }} className="error">
              {errors.lastName}
            </p>
          )}
        </div>
        <div>
                <label className="sign">Email:</label>
                
          <input
            type="email"
            name="email"
            className="fillMe"
            placeholder="email@email.com"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p style={{ color: "red" }} className="error">
              {errors.email}
            </p>
          )}
               {" "}
        </div>
        <div>
                <label className="sign">Username:</label>
                
          <input
            type="username"
            name="username"
            className="fillMe"
            placeholder="minimum 3 characters"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p style={{ color: "red" }} className="error">
              {errors.username}
            </p>
          )}
               {" "}
        </div>
        <div>
          <label className="sign">Password:</label>
                
          <input
            type="password"
            name="password"
            className="fillMe"
            placeholder="minimum 6 characters"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p style={{ color: "red" }} className="error">
              {errors.password}
            </p>
          )}
               {" "}
        </div>
        <div>
                
          <button className="sign3" type="submit" onClick={createUser}>
            Sign Up
          </button>
        </div>
              <Link to="/login">Go to Login</Link>
      </div>
          
    </form>
  );
};

export default SignUp;
