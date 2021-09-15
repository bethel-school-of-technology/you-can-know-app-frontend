import React, { useState } from 'react';
import './signup.css';
import validation from "../validation";
import {Link} from "react-router-dom";


const SignUp = () => {

     const [values, setValues] = useState({
          firstName: "",
          lastName:"",
          email:"",
          username:"",
          password:"",
     });     

     const [errors, setErrors] = useState({});

     const handleChange = (e) => {
          setValues({
               ...values,
               [e.target.name]: e.target.value,
          });
     };

     const handleFormSubmit = (e) => {
          e.preventDefault();
          setErrors(validation(values));
     }

  return (
 
    <form className="container-signup" >

    <div className="container-sign">

      <h2 className="sign2">Signup to Get Started!</h2> 
      <br></br>
      <div>
      <label className="sign">First Name:</label>
      <input 
          type="text" 
          name="firstName" 
          className="fillMe" 
          value={values.firstName}
          onChange={handleChange} />
      {errors.firstName && <p className="error">{errors.firstName}</p>}
      </div>
      <div>
      <label className="sign">Last Name:</label>
      <input 
          type="text" 
          name="lastName" 
          className="fillMe" 
          value={values.lastName}
          onChange={handleChange} />
      {errors.lastName && <p className="error">{errors.lastName}</p>}
      </div>
     
      <div>
      <label className="sign">Email:</label>
      <input 
          type="email" 
          name="email" 
          className="fillMe" 
          placeholder="email@email.com" 
          value={values.email}
          onChange={handleChange} />
      {errors.email && <p className="error">{errors.email}</p>}
      </div>

      <div>
      <label className="sign">Username:</label>
      <input 
          type="username" 
          name="username" 
          className="fillMe" 
          placeholder="minimum 3 characters" 
          value={values.username}
          onChange={handleChange} />
      {errors.username && <p className="error">{errors.username}</p>}
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
      {errors.password && <p className="error">{errors.password}</p>}
      </div>

      <div>
      <button className="sign3" type="submit" onClick={handleFormSubmit}>Sign Up</button>
      </div>

      <Link to="/login">Go to Login</Link>

     </div>
    </form>      
  )  
}


export default SignUp;
