import React, { useState, useEffect } from "react";
// import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
// import image from "../../images/LOGO.png";
// import { handleSubmit } from "@tailwindcss/forms";


const Brazil = ({ history }) => {
  const [pic, setPic] = useState("");
  const [username, setUsername] = useState("");
  const [picMessage, setpicMessage] = useState("");

  
  const [userPosts, setUserPosts] = useState([]); // change null to array, becasue you're adding multiple posts
  const [errors, setErrors] = useState({});


  const baseUrl = "http://localhost:3002/users";
  console.log(userPosts);

  useEffect(() => {
    let ykHeader = {
      authorization: "Bearer " + localStorage.getItem("ykToken"),
    };
    axios
      .get(baseUrl + "/brazil", { headers: ykHeader })
      .then((currentUser) => {
        // console.log(currentUser);
        setUserPosts(currentUser.data.myPosts);
        setPic(currentUser.data.user.img);
        setpicMessage(currentUser.data.user.picMessage);
        
        history.push("/brazil")
      }).catch((e) => console.error(e));
  }, []);

  return (

    
    
     <div className="min-h-screen flex items-center justify-center bg-brazil-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
      <div>
      {/* <p>Brazil Picture: {pic}</p>
      <img src={image} alt="" /> */}
      <br />
      <p className="text-xl text-gray-100">Picture Message: {picMessage}</p>
      <br />
      <div className="space-y-4">
        {userPosts
          ? userPosts.map((post) => (
            <>
              {/* <p className="text-xl">{post.Username}</p> */}
              <p className="text-xl text-gray-100">{post.Country}</p>
              <p className="text-xl text-gray-100">{post.PostTitle}</p>
              <p className="text-normal text-gray-100">{post.PostBody}</p>


            </>
          ))
          : `No posts to show yet`}
      </div>
      <img src="images/brazil.jpg" />
        <div className="container mx-auto px-4 mb-15 h-auto object-center ">
          <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white">
            <div>
              <Link to="/Brazil">
                <img
                  className="mx-auto h-12 w-auto transform scale-250"
                  // src={image}
                  alt="logo"
                />
              </Link>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">
                All Travel Posts About Brazil!
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
                  ––––All Posts About Brazil!––––
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Brazil;
