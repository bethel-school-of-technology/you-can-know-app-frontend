import React, { useState, useEffect } from "react";
// import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
// import image from "../../images/LOGO.png";
// import { handleSubmit } from "@tailwindcss/forms";


const Greece = ({ history }) => {
  const [pic, setPic] = useState("");
  const [username, setUsername] = useState("");
  const [picMessage, setpicMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  
  const [userPosts, setUserPosts] = useState([]); // change null to array, becasue you're adding multiple posts
  const [errors, setErrors] = useState({});


  const baseUrl = "http://localhost:3002/users";
  console.log(userPosts);

  useEffect(() => {
    let ykHeader = {
      authorization: "Bearer " + localStorage.getItem("ykToken"),
    };
    axios
      .get(baseUrl + "/greece", { headers: ykHeader })
      .then((currentUser) => {
        // console.log(currentUser);
        setUserPosts(currentUser.data.myPosts);
        setPic(currentUser.data.user.img);
        setpicMessage(currentUser.data.user.picMessage);
        
        history.push("/greece")
      }).catch((e) => console.error(e));
  }, []);

  return (

    <div className="min-h-screen flex items-center justify-center bg-greece-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
    <div>
      {/* <p>Greece Picture: {pic}</p>
      <img src={image} alt="" /> */}
      <br />
      <p className="text-xl text-gray-100">Picture Message: {picMessage}</p>
      <br />
      <div className="mx-auto max-w-2xl   bg-blue-600 bg-opacity-70 mt-4 pt-6 py-4 px-4 text-blue-600 rounded-2xl text-left">
          {" "}
      <div>
          {userPosts
        ? userPosts.map((post) => (
            <div className="bg-white rounded my-4 py-4">
              <span className="px-3 py-3">{firstName}  {lastName}   posted: {post.PostTitle} </span>

              {/* <span className="px-3 py-3">{{firstName} + " " + {lastName} + " posted:" }</span> */}
              <span className="sr-only">Post ID: {post.PostId}</span>
              <span className="sr-only px-3 py-2">{post.PostTitle}</span>
              <span className="sr-only px-3 py-2">{post.Country}</span>
              <br></br>
              <span className="px-3 py-2 space-y-1">{post.PostBody}</span>
            </div>
          ))
          : `No posts to show yet`}
      </div>
      <img src="images/greece.jpg" />
        <div className="container mx-auto px-4 mb-15 h-auto object-center ">
          <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white">
            <div>
              <Link to="/Greece">
                <img
                  className="mx-auto h-12 w-auto transform scale-250"
                  // src={image}
                  alt="logo"
                />
              </Link>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">
                All Travel Posts About Greece!
              </h2>
            </div>
            {/* <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            > */}
            <div className="mt-8 space-y-6">
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
                <div>
                  
                </div>
              </div>
              
              <p className="mt-2 text-center text-sm text-gray-600">
                <Link
                  to="/Posts"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ––––All Posts About Greece!––––
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default Greece;
