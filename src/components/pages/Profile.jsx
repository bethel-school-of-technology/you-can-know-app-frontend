import React, { useState, useEffect } from "react";
import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../../images/LOGO.png";

import { handleSubmit } from "@tailwindcss/forms";
import { LockClosedIcon } from "@heroicons/react/solid";
// import { Posts } from "../pages/Posts";
import { UserPost } from "./Posts";
import { PostTitle } from "./Posts";
import { PostBody } from "./Posts";
import { PostId } from "./Posts";
import { useHistory } from "react-router-dom";
const Profile = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pic, setPic] = useState("");
  const [username, setUsername] = useState("");
  const [picMessage, setpicMessage] = useState("");

  const [userInfo, setUserInfo] = useState();
  const [userPosts, setUserPosts] = useState(null);
  const [errors, setErrors] = useState({});

  // new posts infos
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const baseUrl = "http://localhost:3002/users";
  useEffect(() => {
    let ykHeader = {
      authorization: "Bearer " + localStorage.getItem("ykToken"),
    };
    axios
      .get(baseUrl + "/profile", { headers: ykHeader })
      .then((currentUser) => {
        console.log(currentUser);
        setUsername(currentUser.data.user.Username);
        // setUserId(currentUser.data.user.UserId)
        setFirstName(currentUser.data.user.FirstName);
        setLastName(currentUser.data.user.LastName);
        // setEmail(currentUser.data.user.Email)
        setPic(currentUser.data.user.Pic);
        setpicMessage(currentUser.data.user.picMessage);
        // setPostTitle(Post.data.Posts.PostTitle)
        // setPostBody(Post.data.Posts.PostBody)
        // setPostId(Post.data.user.Posts.PostId)
      });
    axios.get(`${baseUrl}/posts`, { headers: ykHeader }).then(({ data }) => {
      console.log(data);
      setUserPosts(data.myPosts);
    });
    if (!userInfo) {
      history.push("/Profile");
      // } else {
      // setName(userInfo.firstname);
      // setName(userInfo.lastname);
      // setEmail(userInfo.email);
      // setUsername(userInfo.username);
      // setpic(userInfo.pic);
      // setpicMessage(userInfo.picMessage);
    }
  }, []);
  //      history.push("/profile");
  //  }
  // }, []);
  {
    /* <div className="min-h-screen flex items-center bg-signup-img bg-cover sm:px-6 lg:px-8">
      <div className="container mx-auto px-4 mb-15 h-auto object-center ">
      <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white mb-15">
        <div>
        <Link to="/profile">
        <img
            className="mx-auto h-12 w-auto transform scale-250"
            src={image}
            alt="logo"
          />
          </Link>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">Welcome!</h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <input
                id="PostTitle"
                name="PostTitle"
                type="text"
                required
                className="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Post Title"
                value={values.PostTitle}
                onChange={handleChange}
              />
              {errors.PostTitle && (
            <p style={{ color: "red" }} className="error">
              {errors.PostTitle}
            </p>
          )}
               {" "}
            </div>
            </div>
            </form>
            </div>
            </div> */
  }

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
    <div>
      First Name: {firstName}
      <br />
      Last Name: {lastName}
      <br />
      Username: {username}
      <br />
      <br />
      {/* UserId: {UserId} */}
      <br />
      <br />
      <h3>Profile Picture: {pic}</h3>
      <br />
      <h3>Picture Message: {picMessage}</h3>
      <br />
      {userPosts
        ? userPosts.map((post) => (
            <div>
              <span>Post ID: {post.PostId}</span>
              <span>Post title: {post.PostTitle}</span>
              <span>Post body: {post.PostBody}</span>
            </div>
          ))
        : `No posts to show yet`}
      {/* <img className="img src="> url="images/PROFILE.jpeg"</img> */}
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
                // onClick={Posts}
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
    </div>
  );
};
export default Profile;
