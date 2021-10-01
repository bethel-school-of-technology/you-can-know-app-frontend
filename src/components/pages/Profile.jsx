import React, { useState, useEffect } from "react";
// import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../../images/LOGO.png";
import image9 from "../../images/JOE.png";
// import { handleSubmit } from "@tailwindcss/forms";
import { LockClosedIcon } from "@heroicons/react/solid";
import Footer from '../Footer';
// import { isLoggedIn } from "../../actions/UserActions";

const Profile = ({ history }) => {

  // console.log(isLoggedIn)
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
    <>
    <div className="text-blue-800 min-h-full text-center bg-contain bg-fixed md:bg-fixed md:bg-cover bg-profile-img">
      <div className="container  mx-auto h-52 text-black">
        
        <img
          className=" mt-52 bottom-0 w-40 top-20 border-8 border-white rounded-full"
          src={image9}
          alt=""
        />
     {/* <p>{picMessage}</p> */}
     {/* <p>{username}</p>  */}
     
      </div>
      
      <div className="bg-white bg-opacity-90 mx-auto max-w-5xl mt-20 px-4">
        <div className="pt-20">
          <h1 className="text-4xl">{{firstName}+ " " +{lastName}}</h1>
          {/* <h1 className="text-xl text-red-700">Web Developer</h1>
          <h1 className="text-xl text-red-700">São Paulo, Brazil</h1> */}
        </div>
    

        <div className="mx-auto max-w-xl h-auto bg-blue-600 bg-opacity-70 mt-2 py-3 px-4 text-white rounded-2xl mb-4 ">
          <p>
            I am engaged to the most wonderful woman on the planet!!! We both
            serve Jesus! Coding is my passion. Love listening to music. Love to
            travel. Favorite food is definitely asian food.
          </p>
        </div>

        

        <div className="mx-auto max-w-2xl  bg-blue-600 bg-opacity-70 mt-4 pt-6 px-4 text-white rounded-2xl ">
          {" "}
          <h2 className=" text-center text-3xl font-extrabold  py-2 px-2 text-white">
                Post About Your Favorite Travel Spots!
              </h2>
          <form
              className="mt-8 space-y-6"
              action="#"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px">
              <div>
                  <label htmlFor="Country" className="sr-only">
                    Post Country
                  </label>
                  <input
                    name="Country"
                    type="Country"
                    className=" rounded rounded-b-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Country"
                    value={Country}
                    onChange={(e) => setCountry(e.target.value)}
                  />
                  {errors.Country && (
                    <p style={{ color: "red" }}>{errors.Country}</p>
                  )}
                </div>
                <div>
                  <label htmlFor="postTitle" className="sr-only">
                    Post Title
                  </label>
                  <input
                    name="postTitle"
                    type="postTitle"
                    className=" rounded rounded-b-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Post Title"
                    value={postTitle}
                    onChange={(e) => setPostTitle(e.target.value)}
                  />
                  {errors.PostTitle && (
                    <p style={{ color: "red" }}>{errors.PostTitle}</p>
                  )}
                </div>
                <label htmlFor="postBody" className="sr-only">
                  Post Body
                </label>
                <input
                  name="postBody"
                  type="postBody"
                  className=" rounded rounded-t-none h-52  block w-full px-3 py-2 pb-44 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-left align-text-top"
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
                className="group  w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                
                Create A Post
              </button>

              <br></br>

              <p className="mt-2 text-center text-sm text-gray-600">
                <a
                  href="/Posts"
                  className="font-medium text-blue-600 hover:text-indigo-500"
                >
                  
                </a>
              </p>
            </form>
        </div>

        <div className="mx-auto max-w-2xl   bg-blue-600 bg-opacity-70 mt-4 pt-6 py-4 px-4 text-blue-600 rounded-2xl text-left">
          {" "}
          <div>
          {userPosts
        ? userPosts.map((post) => (
            <div className="bg-white rounded my-4 py-4">
              <span className="px-3 py-3">{{firstName} + " " + {lastName} + " posted:" }</span>
              <span className="sr-only">Post ID: {post.PostId}</span>
              <span className="sr-only px-3 py-2">{post.PostTitle}</span>
              <span className="sr-only px-3 py-2">{post.Country}</span>
              <br></br>
              <span className="px-3 py-2 space-y-1">{post.PostBody}</span>
            </div>
          ))
        : `No posts to show yet`}
          </div>
        </div>
      </div>
    </div>
    <Footer />
    <div className="text-center mt-1 mb-1 text-gray-300">
            Y.C.K,Tsalach(c) 2021
        </div>

    </>
  );
};
export default Profile;
