import React, { useState, useEffect } from "react";
import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../../images/LOGO.png";
import { LockClosedIcon } from "@heroicons/react/solid";
// import { handleSubmit } from '@tailwindcss/forms';

// import { Form, Button, Row, Col } from "react-bootstrap";
// import { useDispatch, useSelector } from "react-redux";
// import { updatePosts } from "../../actions/UserActions";
// import Loading from "../../components/Loading";
// import ErrorMessage from "../../components/ErrorMessage";
import { useHistory } from "react-router-dom";

const Posts = ({ history }) => {
  // const [picMessage, setpicMessage] = useState("");
  const [UserId, setUserId] = useState();
  const [postId, setPostId] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [currentPost, setUserPost] = useState({});
  const [userInfo, setUserInfo] = useState();
  const [postInfo, setPostInfo] = useState();

  // const { loading, error, success } = username;
  const baseUrl = "http://localhost:3002/posts";
  const [errors, setErrors] = useState({});

  useEffect(() => {
    let ykHeader = {
      authorization: "Bearer " + localStorage.getItem("ykToken"),
    };
    axios.get(baseUrl + "/posts", { headers: ykHeader }).then((UserPost) => {
      console.log(UserPost);
      <usersInfo />;
      setPostId(UserPost.data.user.PostId);
      setPostTitle(UserPost.data.user.PostTitle);
      setPostBody(UserPost.data.user.PostBody);
    });

    if (!userInfo) {
    }
  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        `http://localhost:3002/posts/create`,
        {
          postTitle: postTitle,
          postBody: postBody,
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("ykToken"),
          },
        }
      )
      .then((response) => {
        console.log("Success creating new post");
      })
      .catch(() => {
        console.log("Something went wrong");
      });
  }

  return (
    <>
      <h1> Posts </h1>
      <br />
      <div>
        {/* <h3>Posts Picture: {pic}</h3> */}
        {/* <h3>Picture Message: {picMessage}</h3> */}

        <h1>
          <usersInfo />
          <postsInfo />
          Post Title: {postTitle}
          <br />
          Post Body: {postBody}
          <br />
          Post Id: {postId}
          <br />
        </h1>
      </div>

      <div className="min-h-screen flex items-center justify-center bg-login-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 mb-15 h-auto object-center ">
          <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white">
            <div>
              <Link to="/profile">
                <img
                  className="mx-auto h-12 w-auto transform scale-250"
                  src={image}
                  alt="logo"
                />
              </Link>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">
                Post About Your Favorite Travel Spots!
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
                  <label htmlFor="postTitle" className="sr-only">
                    Post Title
                  </label>
                  <input
                    name="postTitle"
                    type="postTitle"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Post Title"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                  {errors.PostTitle && (
                    <p style={{ color: "red" }}>{errors.PostTitle}</p>
                  )}
                </div>
              </div>
              <div>
                <label htmlFor="postBody" className="sr-only">
                  Post Body
                </label>
                <input
                  name="postBody"
                  type="postBody"
                  className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Post Body"
                  value={postBody}
                  onChange={(e) => setPostBody(e.target.value)}
                />
                {errors.PostBody && (
                  <p style={{ color: "red" }}>{errors.PostBody}</p>
                )}
              </div>
              <button
                type="submit"
                onClick={Posts}
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Create A Post
              </button>

              <br></br>

              <p className="mt-2 text-center text-sm text-gray-600">
                <a
                  href="/Posts"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ––––Create A Post––––
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Posts;
