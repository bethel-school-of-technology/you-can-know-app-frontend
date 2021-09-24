import React, { useState } from 'react';
import validation from "../validation";
import {Link} from "react-router-dom";
import axios from 'axios';
import image from "../../images/LOGO.png";
import { LockClosedIcon } from '@heroicons/react/solid'


const Login = ({history}) => {

     const [values, setValues] = useState({

          username:"",
          password:"",
     });     

     const url="http://localhost:3002/users";

     const [setErrors] = useState({});

     const handleChange = (e) => {
          setValues({
               ...values,
               [e.target.name]: e.target.value,
          });
         // console.log(values)
         return values
     };

     const Login = async (e) => {
          e.preventDefault();
          setErrors(validation(values));
          console.log(values)

      if (values.username === "" || values.password === "") {
            setErrors(validation(values));
      } else {
          let Login = {
              username: values.username,
              password: values.password,
          }
          console.log(Login)
          let response = await axios.post(`${url}/login`, Login)
                console.log(response)
          if(response.data.status ===200) {
                localStorage.setItem("youknow", response.data.jwt);
                history.push("/profile");
          } else {
                history.push("/login");
          }
      }
     }
  return ( 
      
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
          <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">Please Login</h2>
          
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="userName"
                name="username"
                type="username"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={values.username}
                onChange={handleChange}

              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={values.password}
                onChange={handleChange}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot your password?
              </a>
            </div>
          </div>

          <div>
            <button
              type="submit"
              onClick={Login}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LockClosedIcon className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" aria-hidden="true" />
              </span>
              Login
            </button>

            <br></br>

            <p className="mt-2 text-center text-sm text-gray-600">
            <a href="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
             ––––Not a member? Sign Up––––
            </a>
          </p>

          </div>
        </form>
      </div>
    </div>
    </div>
  )  
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

