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
// import Mexico from "./Destinations/Mexico";


const Destinations = ({ history }) => {
  const [Brazil, setBrazil] = useState("");
  const [Greece, setGreece] = useState("");
  const [Mexico, setMexico] = useState("");
  const [pic, setPic] = useState("");
  // const [username, setUsername] = useState("");
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
      .get(baseUrl + "/Destinations", { headers: ykHeader })
      .then((currentUser) => {
        console.log(currentUser);
        // setUserId(currentUser.data.user.UserId)
        setBrazil(currentUser.data.user.Brazil);
        setGreece(currentUser.data.user.Greece);
        setMexico(currentUser.data.user.Mexico);
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
      history.push("/Destinations");
    }
  }, []);
  //      history.push("/Destinations");
  //  }
  // }, []);
  {
    
  }

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        `http://localhost:3002/destinations`,
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

    <div className="min-h-screen flex items-center justify-center bg-Brazil4.jpeg-img bg-cover py-12 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto px-4 mb-15 h-auto object-center ">
          <div className="max-w-md w-full space-y-8 bg-white bg-opacity-90 px-10 pb-6 pt-4 rounded-lg border-4 border-white">
            <div>
              <Link to="/Destinations">
                <img
                  className="mx-auto h-12 w-auto transform scale-250"
                  src={image}
                  alt="logo"
                />
              </Link>
              <h2 className="mt-6 text-center text-3xl font-extrabold text-red-700">
                All Destination Posts!
              </h2>
            </div>
            
    <div>
      Brazil: {Brazil}
      <br />
      Greece: {Greece}
      <br />
      Mexico: {Mexico}
      <br />
      {/* Username: {username} */}
      <br />
      <br />
      {/* UserId: {UserId} */}
      <br />
      <br />
      <h2>Destinations Picture: {pic}</h2>
      <br />
      <h2>Picture Message: {picMessage}</h2>
      <br />
      {userPosts
        ? userPosts.map((post) => (
            <div>
              <br/>
              <br/>
              <span>Post ID: <br/>
              {post.PostId}</span>
              <br/>
              <br/>
              <span>Post title: <br/>
              {post.PostTitle}</span>
              <br/>
              <br/>
              <span>Post body: <br/>
              {post.PostBody}</span>
            </div>
          ))
        : `No posts to show yet`}
      {/* <img className="img src="> url="images/Brazil4.jpeg"</img> */}
      
        
              <br></br>

              <p className="mt-2 text-center text-sm text-gray-600">
                <a
                  href="/Posts"
                  className="font-medium text-indigo-600 hover:text-indigo-500"
                >
                  ––––All Posts––––
                </a>
              </p>
            
          </div>
        </div>
      </div>
    </div>
  );
};
export default Destinations;

