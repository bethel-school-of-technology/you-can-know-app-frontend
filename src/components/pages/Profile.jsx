import React, { useState, useEffect } from "react";
// import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../../images/LOGO.png";

// import { handleSubmit } from "@tailwindcss/forms";
import { LockClosedIcon } from "@heroicons/react/solid";

const Profile = ({ history }) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pic, setPic] = useState("");
  const [username, setUsername] = useState("");
  const [picMessage, setpicMessage] = useState("");

  const [userInfo, setUserInfo] = useState();
  const [userPosts, setUserPosts] = useState([]); // change null to array, becasue you're adding multiple posts
  const [errors, setErrors] = useState({});

  // new posts infos
  const [Country, setCountry] = useState("");
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
        setFirstName(currentUser.data.user.FirstName);
        setLastName(currentUser.data.user.LastName);
        // setCountry(currentUser.data.user.Country);
        // setPostTitle(currentUser.data.user.PostTitle);
        // setPostBody(currentUser.data.user.PostBody);
        setPic(currentUser.data.user.Pic);
        setpicMessage(currentUser.data.user.picMessage);
        
        history.push("/Profile")
      }).catch((e) => console.error(e));

    axios.get(`${baseUrl}/posts`, { headers: ykHeader }).then(({ data }) => {
      console.log(data);
      setUserPosts(data.myPosts);
    }).catch((e) => console.error(e));

  }, []);
  

  function handleSubmit() {
    // event.preventDefault();

    axios
      .post(
        `http://localhost:3002/posts/create`,
        {
          country: Country,
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

        setUserPosts(userPosts => [...userPosts, response.data.post]);
        setCountry("");
        setPostTitle("");
        setPostBody("");
        console.log("Success creating new post");
      })
      .catch((e) => {
        console.error(e)
        console.log("Something went wrong");
      });
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-profile-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
    <div>
      <p className="text-xl text-gray-100">First Name: {firstName}</p>
      
      <p className="text-xl text-gray-100">Last Name: {lastName}</p>
      
      <p className="text-xl text-gray-100">Username: {username}</p>
      
      <p className="text-xl text-gray-100">Profile Picture: {pic}</p>
      <img src={image} alt="" />
      
      <p className="space-y-6" className="text-xl text-gray-100">Country: {Country}</p>
      <p className="space-y-6" className="text-xl text-gray-100">Post Title: {postTitle}</p>
      <p className="space-y-6" className="text-xl text-gray-100">Post Body: {postBody}</p>
      
      <div className="space-y-4">
        {userPosts
          ? userPosts.map((post) => (
            <>
              <p className="text-xl text-gray-100">{post.Country}</p>
              <p className="text-xl text-gray-100">{post.PostTitle}</p>
              <p className="text-normal text-gray-100">{post.PostBody}</p>


            </>
          ))
          : `No posts to show yet`}
      </div>
      {/* <img src="images/PROFILE.jpeg" /> */}
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
                
                  <label htmlFor="Country" className="sr-only" className="space-y-6">
                    Post Country
                  </label>
                  <input
                    name="Country"
                    type="Country"
                    className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Country"
                    value={postTitle}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  
                  {errors.Country && (
                    <p style={{ color: "red" }}>{errors.Country}</p>
                  )}
                </div>
              </div>
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

                <textarea
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
                onClick={handleSubmit}
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
                <Link
                  to="/Posts"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ––––Create A Post––––
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    
  );
};
export default Profile;
