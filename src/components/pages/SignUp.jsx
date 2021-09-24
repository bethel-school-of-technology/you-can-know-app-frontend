import React, { useState } from "react";
import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../../images/LOGO.png";

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
        history.push("/login");
      }
    }
  };
  return (

<div className="min-h-screen flex items-center bg-signup-img bg-cover sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 mb-15 h-auto object-center ">
      <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white mb-15">
        
        <div>
        <Link to="/home">
        <img
            className="mx-auto h-12 w-auto transform scale-250"
            src={image}
            alt="logo"
          />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">Welcome!</h2>
        </div>

        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              
              <input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="First Name"
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
              <input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Last Name"
                value={values.lastName}
                onChange={handleChange}
                />

                {errors.lastName && (
                <p style={{ color: "red" }} className="error">
                 {errors.lastName}
                </p>
          )}
               {" "}

            </div>

            <div>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
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
              <input
                id="username"
                name="username"
                type="username"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username (minimum 3 characters)"
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
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password (minimum 6 characters)"
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
          
        </div>
      <div>

            <button
              type="submit"
              onClick={createUser}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
              Sign Up for Free
            </button>

            <br></br>

            <div className="text-sm text-center">
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
              ––––––Already a Member? Login––––––
              </a>
            </div>

            </div>
            
        </form>
      </div>
    </div>
    </div>
  )  
};

export default SignUp;






                
  