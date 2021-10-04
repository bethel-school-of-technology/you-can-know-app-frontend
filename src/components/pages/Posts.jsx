import React, { useState, useEffect } from "react";
// import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
// import image from "../../images/LOGO.png";
// import { handleSubmit } from "@tailwindcss/forms";


const Posts = ({ history }) => {
  const [pic, setPic] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  // const [picMessage, setpicMessage] = useState("");


  const [userPosts, setUserPosts] = useState([]); // change null to array, becasue you're adding multiple posts
  const [errors, setErrors] = useState({});


  const baseUrl = "http://localhost:3002/posts";
 

  useEffect(() => {
    let ykHeader = {
      authorization: "Bearer " + localStorage.getItem("ykToken"),
    };
    axios
      .get(baseUrl, { headers: ykHeader })
      .then((response) => {
        setUserPosts(response.data.myPosts);

        // // Not doing anything for now
        // setPic(response.data.user.img);
        // setpicMessage(response.data.user.picMessage);
              
        history.push("/posts")
      }).catch((e) => console.error(e));
  }, []);

  return (

    <div className="min-h-screen flex items-center justify-center bg-posts-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
      <div>
        {/* <p>Greece Picture: {pic}</p>
      <img src={image} alt="" /> */}
        <br />
        {/* <p className="text-xl text-gray-100">Picture Message: {picMessage}</p> */}
        <br />
        <div>
          {userPosts
            ? userPosts.map(({ user, ...post}) => (
              <div className="bg-white rounded my-4 py-4">
                <span className="px-3 py-3">{user.FirstName}  {user.LastName}  posted:" </span>
                {/* <span className="sr-only">Post ID: {post.PostId}</span> */}
                
                <span className=" px-3 py-2"> Post Title:{post.PostTitle}</span>
                <span className=" px-3 py-2"> Country: {post.Country}</span>
                <br></br>
                <span className="px-3 py-2 space-y-1">{post.PostBody}</span>
                <br></br>
                <span className="px-3 py-2 space-y-1">{post.createdAt}</span>
              </div>
            ))
            : `No posts to show yet`}
        </div>
        <img src="images/posts.jpg" />
        <div className="container mx-auto px-4 mb-15 h-auto object-center ">
          <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white">
            <div>
              <Link to="/Posts">
                <img
                  className="mx-auto h-12 w-auto transform scale-250"
                  // src={image}
                  alt="logo"
                />
              </Link>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">
                All Posts About Countries Featured On This App!
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
                  ––––All Posts About All Travel Destinations!––––
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Posts;



