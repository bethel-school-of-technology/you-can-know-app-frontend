import React, { useState, useEffect } from "react";
// import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";

const Posts = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

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

        history.push("/posts");
      })
      .catch((e) => console.error(e));
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-fixed bg-posts-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
      <div className="bg-blue-600 bg-opacity-70 mt-16 rounded-lg border-4 border-white">
        <div className="container mx-auto px-4 h-auto object-center ">
          <div className="max-w-md w-full space-y-8 bg-white mt-16 px-10 pt-4 rounded-lg">
            <div>
              <h2 className="py-4 mb-2 text-center text-3xl font-extrabold text-red-700">
                All Posts About <br></br>
                Featured Countries
              </h2>
            </div>

            {/* <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            > */}
          </div>
        </div>
        {/* <p>Greece Picture: {pic}</p>
      <img src={image} alt="" /> */}
        <br />
        {/* <p className="text-xl text-gray-100">Picture Message: {picMessage}</p> */}
        <br />
        <div className="mx-auto max-w-2xl mb-4 px-4 rounded-2xl">
          {userPosts
            ? userPosts.map(({ user, ...post }) => (
                <div className="bg-white rounded my-4 py-4 px-4">
                  <div className="text-center mb-2">
                    <span className="px-2 py-3 font-semibold text-xl text-red-700">
                      {user.FirstName} {user.LastName} posted on 
                      {format(new Date(post.createdAt), `MMMM dd, yyyy`)}{" "}
                    </span>
                    {/* <span className="sr-only">Post ID: {post.PostId}</span> */}
                    <span className="px-2 py-2 text-2xl text-blue-600 font-semibold">
                      {" "}
                      {post.Country}
                    </span>
                    <span className="sr-only"> {post.PostTitle}</span>
                  </div>

                  <div className="text-center">
                    <span className="px-3 py-2 space-y-1">{post.PostBody}</span>
                  </div>
                </div>
              ))
            : `No posts to show yet`}
        </div>
      </div>
    </div>
  );
};

export default Posts;
