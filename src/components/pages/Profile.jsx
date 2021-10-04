import React, { useState, useEffect } from "react";
// import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../../images/LOGO.png";
import image9 from "../../images/JOE.png";
// import { handleSubmit } from "@tailwindcss/forms";
import { LockClosedIcon } from "@heroicons/react/solid";
import Footer from '../Footer';
import PostCard from "../posts/PostCard"

import { AiFillEdit } from "react-icons/ai";

// import { isLoggedIn } from "../../actions/UserActions";

const Profile = ({ history }) => {

  // console.log(isLoggedIn)
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [pic, setPic] = useState("");
  const [userBio, setUserBio] = useState("");
  const [userName, setUsername] = useState("");
  const [createdAt, setCreatedAt] = useState("");
  const [picMessage, setpicMessage] = useState("");

  // const [userInfo, setUserInfo] = useState();
  const [userPosts, setUserPosts] = useState([]); // change null to array, becasue you're adding multiple posts
  const [errors, setErrors] = useState({});

  // new posts infos
  const [Country, setCountry] = useState("");
  const [postTitle, setPostTitle] = useState("");
  const [postBody, setPostBody] = useState("");

  const [isBioEditBoxVisible, setIsBioEditBoxVisible] = useState(false);
  const [isPostEditBoxVisible, setIsPostEditBoxVisible] = useState(false);

  const baseUrl = "http://localhost:3002/users";

  useEffect(() => {
    let ykHeader = {
      authorization: "Bearer " + localStorage.getItem("ykToken"),
    };
    axios
      .get(baseUrl + "/profile", { headers: ykHeader })
      .then((currentUser) => {

        setUsername(currentUser.data.user.Username);
        setUserBio(currentUser.data.user.UserBio);
        setFirstName(currentUser.data.user.FirstName);
        setLastName(currentUser.data.user.LastName);

        setIsPostEditBoxVisible(
          !currentUser.data.user.UserBio || currentUser.data.user.UserBio === "" ? true : false
        )

        setIsBioEditBoxVisible(
          !currentUser.data.user.UserBio || currentUser.data.user.UserBio === "" ? true : false
        )

        history.push("/Profile")
      }).catch((e) => console.error(e));

    axios.get(`${baseUrl}/posts`, { headers: ykHeader }).then(({ data }) => {
      // console.log(data);
      setUserPosts(data.myPosts);
    }).catch((e) => console.error(e));

  }, []);

  function handleSubmit(event) {
    event.preventDefault();

    axios
      .post(
        `http://localhost:3002/posts/create`,
        {
          Country: Country,
          PostTitle: postTitle,
          PostBody: postBody,
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("ykToken"),
          },
        }
      )
      .then((response) => {

        setUserPosts(userPosts => [...userPosts, response.data.post]);
        setIsPostEditBoxVisible(false);

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

  function postBio(event) {
    event.preventDefault();
    axios
      .post(
        `http://localhost:3002/users/postBio`,
        {
          userBio: userBio,
        },
        {
          headers: {
            authorization: "Bearer " + localStorage.getItem("ykToken"),
          },
        }
      )
      .then((response) => {
        console.log(response);

        setUserBio(response.data.user.UserBio);
        setIsBioEditBoxVisible(false);

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
        </div>

        <div className="bg-white bg-opacity-90 mx-auto max-w-5xl mt-20 px-4">
          <div className="pt-20">
            <h1 className="text-4xl">{firstName}   {lastName}</h1>
            <p>{userBio}</p>
            <AiFillEdit onClick={() => setIsBioEditBoxVisible(state => !state)} />
            {/* <h1 className="text-xl text-red-700">Web Developer</h1>
          <h1 className="text-xl text-red-700">São Paulo, Brazil</h1> */}
          </div>

          <div className={`mx-auto max-w-xl h-auto bg-blue-600 bg-opacity-70 mt-2 py-3 px-4 text-white rounded-2xl mb-4 ${isBioEditBoxVisible ? `` : `sr-only`}`}>
            <form
              className="mt-8 space-y-6"
              action=""
              method="POST"
              onSubmit={postBio}
            >
              <input type="hidden" name="remember" defaultValue="true" />
              <div className="rounded-md shadow-sm -space-y-px" />
              <div>

                <label htmlFor="UserBio" >
                  Create Your Bio Here!
                </label>
                <textarea
                  name="UserBio"
                  type="UserBio"
                  className=" rounded rounded-t-none h-52  block w-full px-3 py-2 pb-44 border border-gray-300 placeholder-gray-500 text-gray-900  focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm text-left align-text-top"
                  placeholder="Users Bio"
                  value={userBio}
                  onChange={(e) => setUserBio(e.target.value)}
                />
                {errors.UserBio && (
                  <p style={{ color: "red" }}>{errors.UserBio}</p>
                )}
              </div>
              <button
                type="submit"
                // onClick={(e) => postBio(e.target.value)}
                className="group  w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-white hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Create A User Bio!
              </button>

              <br></br>
              <p className="mt-2 text-center text-sm text-gray-600">
                <a
                  href="/UserBio"
                  className="font-medium text-blue-600 hover:text-indigo-500"
                >
                </a>
              </p>
            </form>
          </div>


          <div className="mx-auto max-w-2xl  bg-blue-600 bg-opacity-70 mt-4 pt-6 px-4 text-white rounded-2xl ">
            {" "}
            <h2 className=" text-center text-3xl font-extrabold  py-2 px-2 text-white">
              Post About Your Favorite Travel Spots!
            </h2>
                  <div>
                  <AiFillEdit onClick={() => setIsPostEditBoxVisible(state => !state)} />

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

                  <label htmlFor="Country" className="sr-only">
                    Post Country
                  </label>


                  <select name="Country" id="Country"
                    onChange={(e) => setCountry(e.target.value)} placeholder="Country"
                    className=" rounded rounded-b-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm">
                    <option value="">Choose Country</option>
                    <option value="Brazil">Brazil</option>
                    <option value="Greece">Greece</option>
                    <option value="Mexico">Mexico</option>
                  </select>
                  {/* <input
                    name="Country"
                    type="Country"
                    className=" rounded rounded-b-none  block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                    placeholder="Country"
                    value={Country}
                    onChange={(e) => setCountry(e.target.value)}

                  /> */}
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
                <textarea
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
                  <PostCard postInfo={post} key={post.PostId} />
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
