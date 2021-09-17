import React, { useState } from 'react';
import './signup.css';
import validation from "../validation";
import {Link} from "react-router-dom";
import axios from 'axios';


const Login = ({history}) => {

     const [values, setValues] = useState({

          username:"",
          password:"",
     });     

     const url="http://localhost:3002/users";

     const [errors, setErrors] = useState({});

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
    <form className="container-login" >
    <div className="container-sign">
      <h2 className="sign2">Please Login to Get Started!</h2> 
      <br></br>
      <div>
      <label className="sign">Username:</label>
      <input 
          type="username" 
          name="username" 
          className="fillMe" 
          placeholder="minimum 3 characters" 
          value={values.username}
          onChange={handleChange} />
      {errors.username && <p style={{ color: "red" }} className="error">{errors.username}</p>}
      </div>
      
      <div>
      <label className="sign">Password:</label>
      <input 
          type="password" 
          name="password" 
          className="fillMe" 
          placeholder="minimum 6 characters"
          value={values.password} 
          onChange={handleChange} />
      {errors.password && <p style={{ color: "red" }} className="error">{errors.password}</p>}
      </div>

      <div>
      <button className="sign3" type="submit" onClick={Login}>Login</button>
      </div>

      <Link to="/login">Go to Login</Link>

     </div>
    </form>      
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

