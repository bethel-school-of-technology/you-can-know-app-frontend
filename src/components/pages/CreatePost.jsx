import React, { useState, useEffect } from 'react';
import validation from "../validation";
import {Link} from "react-router-dom";
import axios from 'axios';
import image from "../../images/LOGO.png";
import image2 from "../../images/mexico-B.jpg";
import { LockClosedIcon } from '@heroicons/react/solid'


// import images from '../../images/LOGIN.jpeg';
// import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { updatePosts } from "../../actions/UserActions";
import Loading from "../../components/Loading";
// import ErrorMessage from "../../components/ErrorMessage";
import { useHistory } from "react-router-dom";


const CreatePost = ({ history }) => {
    const [values, setValues] = useState({
      // firstName: "",
      // userName: "",
      // postId: "",
      postTitle: "",
      postBody: "",
    //   username: "",
    });
  
    const url = "http://localhost:3002/posts";
  
    const [errors, setErrors] = useState({});
  
    const handleChange = (e) => {
      setValues({
        ...values,
        [e.target.name]: e.target.value,
      });
      // console.log(values)
      return values;
    };
  
    const newPost = async (e) => {
      e.preventDefault();
      console.log(values);
  
      // sent data to backend
  
      if (
        // values.firstName === "" ||
        // values.userName === "" ||
        // values.postId === "" ||
        values.postTitle === "" ||
        values.postBody === "" 
    
      ) {
        setErrors(validation(values));
      } else {
        let createPost = {
          firstName: values.firstName,
          userName: values.userName,
          postId: values.postId,
          postTitle: values.postTitle,
          postBody: values.postBody,
        };
        console.log(createPost);
        let response = await axios.post(`${url}/posts`, createPost);
        console.log(response);
        if (response.data.status === 200) {
          localStorage.setItem("ykToken", response.data.jwt);
          history.push("/posts");
        } else {
          history.push("/posts");
        }
      }
    };
    
    return (
  
  <div className="min-h-screen flex items-center bg-CreatePost-img bg-cover sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 mb-15 h-auto object-center ">
        <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white mb-15">
          <div>
          <Link to="/Posts">
          <img
              className="mx-auto h-12 w-auto transform scale-250"
              src={image}
              alt="logo"
            />
            </Link>
            <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">Create A Post About Your Favorite Places To Travel Too!</h2>
          </div>
  
          <form className="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" defaultValue="true" />
            <div className="rounded-md shadow-sm -space-y-px">
              
              <div>
                <input
                  id="postTitle"
                  name="postTitle"
                  type="text"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="PostTitle"
                  value={values.postTitle}
                  onChange={handleChange}
                  />
  
                  {errors.postTitle && (
                  <p style={{ color: "red" }} className="error">
                   {errors.postTitle}
                  </p>
            )}
                 {" "}
  
              </div>
              <div>
                <input
                  id="postBody"
                  name="postBody"
                  type="text"
                  required
                  className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Post Body"
                  value={values.postBody}
                  onChange={handleChange}
                  />
  
                  {errors.postBody && (
                  <p style={{ color: "red" }} className="error">
                   {errors.postBody}
                  </p>
            )}
                 {" "}
  
              </div>
          </div>
        <div>
  
              <button
                type="submit"
                onClick={newPost}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3"></span>
                Create A Post About Your Favorite Spots!
              </button>
  
              <br></br>
  
              <div className="text-sm text-center">
                <a href="/posts" className="font-medium text-indigo-600 hover:text-indigo-500">
                ––––––Create A Post!––––––
                </a>
              </div>
  
              </div>
              
          </form>
        </div>
      </div>
      </div>
    )  
  };

  export default CreatePost;