// import React, { useState } from "react";
// import axios from "axios";
// // import "./signup.css";

// const Login = ({ history }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");
//   const [wrongPassword, setWrongPassword] = useState;

//   const url = "http://localhost:3002/users";

//   const loginUser = async (e) => {
//     e.preventDefault();

//     if (username !== "" || password !== "") {
//       let newLogin = {
//         username: username,
//         password: password,
//       };
//       let response = await axios.post(`${url}/login`, newLogin);
//       console.log(response);
//       if (response.data.status === 200) {
//         // Need to store jwt in localstorage
//         localStorage.setItem("youknow", response.data.jwt);
//         history.push("/");
//       } else {
//         setWrongPassword("Wrong Username or Password, try again!");
//       }
//     }
//   };
//   return (
//     <form className="container-login">
//       <br></br>

//       <div className="container-log" onClick={loginUser}>
//         <h1 className="log">Please Login</h1>
//         <label className="log">Username</label>
//         <input
//           className="logFill"
//           type="text"
//           name="username"
//           value={username}
//           onChange={(e) => {
//             setUsername(e.target.value);
//           }}
//         ></input>
//         <br></br>
//         <label className="log">Password</label>
//         <input
//           className="logFill"
//           type="text"
//           name="password"
//           value={password}
//           onChange={(e) => {
//             setPassword(e.target.value);
//           }}
//         ></input>
//         {wrongPassword !== "" && (
//           <div style={{ color: "red" }}>{wrongPassword}</div>
//         )}
//         <br></br>
//         <button className="log3">Login</button>
//       </div>
//     </form>
//   );
// };
// export default Login;