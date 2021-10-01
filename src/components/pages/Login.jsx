import React, { useState } from "react";
import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../../images/LOGO.png";
import { LockClosedIcon } from "@heroicons/react/solid";
import Footer from "../Footer";

const Login = ({ history }) => {
  
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});

  const url = "http://localhost:3002/users";

  const values = {
    username: username,
    password: password,
  };
  //console.log(values);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(validation(values));
    //     console.log("hi")
    //      console.log(values)
    //      console.log("hello")

    if (username === "" || password === "") {
      setErrors(validation(values));
    } else {
      //     let login = {
      //         username: username,
      //         password: password,
      //     }
      // console.log("?????????"+ values);
      console.log(values);
      let response = await axios.post(`${url}/login`, values);

      console.log(response);
      if (response.data.status === 200) {
        localStorage.setItem("ykToken", response.data.jwt);
        history.push("/profile");
      } else {
        history.push("/login");
      }
    }
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-login-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 mb-15 h-auto object-center ">
          <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white">
            <div>
              <Link to="/home">
                <img
                  className="mx-auto h-12 w-auto transform scale-250"
                  src={image}
                  alt="logo"
                />
              </Link>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">
                Please Login to Get Started!
              </h2>
            </div>
            <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  <label htmlFor="username" className="sr-only">
                    Username
                  </label>
                  <input
                    name="username"
                    type="username"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Username minimum 3 characters"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                  />
                  {errors.Username && (
                    <p style={{ color: "red" }}>{errors.Username}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="password" className="sr-only">
                    Password
                  </label>
                  <input
                    name="password"
                    type="password"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  {errors.password && (
                    <p style={{ color: "red" }}>{errors.password}</p>
                  )}
                </div>
              </div>

              <button
                type="submit"
                onClick={Login}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Login
              </button>

              <br></br>

              <p className="mt-2 text-center text-sm text-gray-600">
                <Link
                  to="/signup"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ––––Not a member? Sign Up––––
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
      <Footer />
      <div className="text-center mt-1 mb-1 text-gray-300">
            Y.C.K,Tsalach(c) 2021
        </div>

    </>
  );
};

export default Login;

// import React, { useState } from 'react';
// import axios from "axios";
// import './login.css';

// const Login = ({history}) => {
//     const [username, setUsername] = useState("");
//     const [password, setPassword] = useState("");
//     const url="http://localhost:3002/users";
//     const loginUser = async (e) => {
//         e.preventDefault();
//         let newLogin = {
//           username: username,
//           password: password,
//         }
//         let response = await axios.post(`${url}/login`,newLogin)
//         console.log(response)
//         if (response.data.status === 200) {
//           // Need to store jwt in localstorage
//           localStorage.setItem("youknow", response.data.jwt);
//           history.push("/");
//         } else {
//           history.push("/profile");
//         }
//       }
//     return (
//         <form className="container-login">
//           <br></br>

//             <div className="container-log" onSubmit={ loginUser }>
//                 <h1 className="log">Please Login</h1>
//                 <label className="log">Username</label>
//                 <input className="logFill" type="text" name="username" onChange={ e => setUsername(e.target.value)}></input> <br></br>
//                 <label className="log">Password</label>
//                 <input className="logFill" type="text" name="password" onChange={ e => setPassword(e.target.value)}></input> <br></br>
//                 <button className="log3">Login</button>
//             </div>
//         </form>
//     );
// }
// export default Login
