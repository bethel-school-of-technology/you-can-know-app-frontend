import React, { useState, useEffect } from "react";
import validation from "../validation";
import { Link } from "react-router-dom";
import axios from "axios";
import image from "../../images/LOGO.png";
import { handleSubmit } from "@tailwindcss/forms";
import { LockClosedIcon } from "@heroicons/react/solid";
import { Posts } from "../pages/Posts";
import { UserPost } from "./Posts";
import { PostTitle } from "./Posts";
import { PostBody } from "./Posts";
import { PostId } from "./Posts";
import { useHistory } from "react-router-dom";
const Profile = ({ history }) => {
  const [UserId, setUserId] = useState();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [pic, setPic] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [picMessage, setpicMessage] = useState("");
  const [PostTitle, setPostTitle] = useState("");
  const [PostBody, setPostBody] = useState("");
  const [PostId, setPostId] = useState("");
  // const dispatch = useDispatch();
  // const userLogin = useSelector((state) => state.UserLogin);
  // const { userInfo } = userLogin;
  const [currentUser, setCurrentUser] = useState({});
  const [Post, setPost] = useState({});
  const [userInfo, setUserInfo] = useState();
  const [PostInfo, setPostInfo] = useState();
  const [userPosts, setUserPosts] = useState(null);
  // const userUpdate = useSelector((state) => state.UserUpdate);
  // const { loading, error, success } = userUpdate;
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
    </div>
  );
};
export default Profile;
